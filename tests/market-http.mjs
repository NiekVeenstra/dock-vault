import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, writeFile, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { once } from "node:events";

// Runs one real production build in multiple runtime states. Network I/O to
// Shopify alone is replaced by an explicit Node preload, outside app code.
const root = process.cwd();
const temp = await mkdtemp(path.join(tmpdir(), "dock-vault-http-"));
const stateFile = path.join(temp, "state.json");
const callLog = path.join(temp, "calls.txt");
const base = "http://127.0.0.1:3199";
const productPath = "/market-hall/product/test-dock-vault-voorbeeldkaart";
let child;
let output = "";
async function state(value) { await writeFile(stateFile, JSON.stringify(value)); }
async function stop() {
  if (child && child.exitCode === null) {
    const exited = once(child, "exit");
    child.kill("SIGTERM");
    await exited;
  }
  child = undefined;
}
async function start(gate, token = "qa-private-token") {
  await stop();
  await writeFile(callLog, "");
  output = "";
  child = spawn(process.execPath, ["--require", path.join(root, "tests/shopify-fetch.cjs"), path.join(root, "node_modules/next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", "3199"], {
    cwd: root,
    env: { ...process.env, NODE_ENV: "production", NODE_OPTIONS: "", MARKET_HALL_ENABLED: gate, SHOPIFY_STORE_DOMAIN: "dock-vault-fixture.myshopify.com", SHOPIFY_STOREFRONT_PRIVATE_TOKEN: token, SHOPIFY_TRUST_PROXY_IP: "false", SHOPIFY_FIXTURE_FILE: stateFile, SHOPIFY_FIXTURE_LOG: callLog },
    stdio: ["ignore", "pipe", "pipe"],
  });
  child.stdout.on("data", (data) => { output += data; });
  child.stderr.on("data", (data) => { output += data; });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (child.exitCode !== null) throw new Error(`Test server exited: ${output}`);
    if (output.includes("Ready in")) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Test server did not become ready");
}
async function get(route, options) {
  const response = await fetch(base + route, { ...options, signal: AbortSignal.timeout(15_000) });
  return { status: response.status, headers: response.headers, text: await response.text() };
}
function noSecrets(text) {
  for (const marker of ["qa-private-token", "SHOPIFY_STOREFRONT_PRIVATE_TOKEN", "Synthetic upstream error"]) assert.ok(!text.includes(marker), `Leaked ${marker}`);
}
async function checkClosed() {
  for (const route of ["/market-hall", "/market-hall/category/singles", productPath, "/market-hall/product/missing"]) {
    const response = await get(route);
    assert.equal(response.status, 200, route);
    assert.match(response.text, /De Markthal wordt voorbereid/);
    assert.ok(!response.text.includes("[TEST] Dock Vault"));
    assert.ok(!response.text.includes("gid://shopify/"));
    assert.ok(!response.text.includes("cdn.shopify.com/s/files"));
    assert.match(response.headers.get("cache-control"), /no-store/);
    noSecrets(response.text);
    const rsc = await get(route, { headers: { RSC: "1" } });
    assert.ok(!rsc.text.includes("gid://shopify/"));
    assert.ok(!rsc.text.includes("[TEST] Dock Vault"));
    noSecrets(rsc.text);
  }
  for (const route of ["/api/products", "/api/market-hall/products"]) {
    const response = await get(route);
    assert.equal(response.status, 404);
    assert.ok(!response.text.includes("gid://shopify/"));
  }
  assert.equal(await readFile(callLog, "utf8"), "", "closed state contacted Shopify");
}
async function checkPublicFiles() {
  const sitemap = await get("/sitemap.xml");
  assert.ok(!/market-hall\/(product|category)\//.test(sitemap.text));
  const walk = async (directory) => {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(file);
      else if (/\.(js|json|html)$/.test(entry.name)) {
        const text = await readFile(file, "utf8");
        noSecrets(text);
        assert.ok(!text.includes("navigator-sample-single"));
        assert.ok(!text.includes("[TEST] Dock Vault"));
      }
    }
  };
  await walk(path.join(root, ".next/static"));
}

try {
  await state({});
  await start("");
  await checkClosed();
  console.log("PASS default-closed: HTML, RSC, direct URLs, absent APIs, zero Shopify requests");
  await start("true");
  for (const route of ["/market-hall", "/market-hall/category/singles", productPath]) {
    const response = await get(route);
    assert.equal(response.status, 200);
    assert.match(response.text, /\[TEST\] Dock Vault/);
    assert.match(response.text, /sample card/);
    assert.match(response.text, /noindex/);
    assert.match(response.text, /1,00/);
    noSecrets(response.text);
  }
  const detail = await get(productPath);
  assert.match(detail.text, /gid:\/\/shopify\/ProductVariant\/2001/);
  assert.match(detail.text, /3 stuks beschikbaar/);
  assert.equal((await get("/market-hall/product/missing")).status, 404);
  assert.match((await get("/market-hall/category/sealed")).text, /Hier staat nog geen testproduct klaar/);
  await checkPublicFiles();
  console.log("PASS open: overview, category, detail, both language payloads, images, price, stock, 404, empty category, sitemap and browser bundles");
  await state({ title: "[TEST] Changed title", image: 2, price: "2.50", available: false });
  for (const route of ["/market-hall", productPath]) {
    const response = await get(route);
    assert.match(response.text, /\[TEST\] Changed title/);
    assert.match(response.text, /fixture-2.png/);
    assert.match(response.text, /2,50/);
    assert.match(response.text, /Niet beschikbaar/);
  }
  console.log("PASS refresh: changed title, image URL, price and availability on next request");
  await state({ failure: true });
  for (const route of ["/market-hall", productPath]) {
    const response = await get(route);
    assert.match(response.text, /De producten zijn even niet beschikbaar/);
    assert.ok(!response.text.includes("Changed title"));
    noSecrets(response.text);
  }
  console.log("PASS connection failure: calm message without stale products or upstream details");
  await start("true", "");
  assert.match((await get(productPath)).text, /De producten zijn even niet beschikbaar/);
  assert.equal(await readFile(callLog, "utf8"), "");
  console.log("PASS missing token: unavailable state, zero Shopify requests");
  await start("false");
  await checkClosed();
  console.log("PASS closed after open: same build, no catalog or cached data remains reachable");
} finally {
  await stop();
  await rm(temp, { recursive: true, force: true });
}
