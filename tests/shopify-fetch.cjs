// Explicit Node preload used ONLY by the HTTP test runner / isolated QA preview.
// There is no fixture switch, mock URL or mock fallback in the application.
const { readFileSync, appendFileSync } = require("node:fs");
const { responseFor } = require("./shopify-fixtures.cjs");
const originalFetch = global.fetch;
global.fetch = async (input, init) => {
  const url = typeof input === "string" ? input : input.url || String(input);
  if (!url.startsWith("https://dock-vault-fixture.myshopify.com/api/")) return originalFetch(input, init);
  if (process.env.SHOPIFY_FIXTURE_LOG) appendFileSync(process.env.SHOPIFY_FIXTURE_LOG, "request\n");
  const state = process.env.SHOPIFY_FIXTURE_FILE ? JSON.parse(readFileSync(process.env.SHOPIFY_FIXTURE_FILE, "utf8")) : {};
  const { query, variables } = JSON.parse(init.body);
  return new Response(JSON.stringify(responseFor(query, variables, state)), { headers: { "Content-Type": "application/json" } });
};
