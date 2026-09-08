const { test, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const { product, page, photo, amount, responseFor } = require("./shopify-fixtures.cjs");
const { getShopifyProducts, getShopifyProduct } = require("../lib/commerce/shopify/catalog.ts");
const { mapProduct } = require("../lib/commerce/shopify/map.ts");
const { storefrontRequest } = require("../lib/commerce/shopify/client.ts");
const { getMarketProducts, getMarketProduct } = require("../lib/market-hall/data.ts");
const { formatMoney, formatAvailability } = require("../components/market-hall/format.ts");
const originalFetch = global.fetch;
const originalEnv = { ...process.env };
afterEach(() => {
  global.fetch = originalFetch;
  for (const key of ["MARKET_HALL_ENABLED", "SHOPIFY_STORE_DOMAIN", "SHOPIFY_STOREFRONT_PRIVATE_TOKEN", "SHOPIFY_TRUST_PROXY_IP"]) {
    if (originalEnv[key] === undefined) delete process.env[key]; else process.env[key] = originalEnv[key];
  }
});
function configure() {
  process.env.SHOPIFY_STORE_DOMAIN = "dock-vault-fixture.myshopify.com";
  process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN = "qa-private-token";
  process.env.SHOPIFY_TRUST_PROXY_IP = "false";
}
function mock(read = (query, variables) => responseFor(query, variables)) {
  configure();
  global.fetch = async (url, init) => {
    assert.equal(url, "https://dock-vault-fixture.myshopify.com/api/2026-07/graphql.json");
    assert.equal(init.headers["Shopify-Storefront-Private-Token"], "qa-private-token");
    assert.equal(init.cache, "no-store");
    assert.equal(init.redirect, "error");
    assert.ok(init.signal);
    const { query, variables } = JSON.parse(init.body);
    return new Response(JSON.stringify(await read(query, variables)));
  };
}

test("closed gate never calls Shopify, independently of NODE_ENV", async () => {
  let calls = 0;
  global.fetch = async () => { calls++; throw new Error("must not run"); };
  for (const value of [undefined, "false", "1", "yes", ""]) {
    if (value === undefined) delete process.env.MARKET_HALL_ENABLED; else process.env.MARKET_HALL_ENABLED = value;
    assert.deepEqual(await getMarketProducts(), { status: "closed" });
    assert.deepEqual(await getMarketProduct("test-dock-vault-voorbeeldkaart"), { status: "closed" });
  }
  assert.equal(calls, 0);
});

test("product/variant IDs, money, photos, nullable stock and translated card data survive mapping", () => {
  const nl = product();
  nl.variants.nodes[0].quantityAvailable = null;
  nl.variants.nodes[0].metafields = [{ key: "condition", value: "Licht gespeeld" }, { key: "set", value: "Variant set" }];
  const en = product("EN");
  en.variants.nodes[0].metafields = [{ key: "condition", value: "Lightly played" }];
  const result = mapProduct(nl, en);
  assert.equal(result.id, nl.id);
  assert.equal(result.variants[0].id, nl.variants.nodes[0].id);
  assert.deepEqual(result.variants[0].price, amount());
  assert.equal(result.images[0].url, photo().url);
  assert.equal(result.name.en, en.title);
  assert.equal(result.variants[0].quantityAvailable, null);
  assert.equal(result.variants[0].details.condition.en, "Lightly played");
  assert.equal(result.variants[0].details.set.nl, "Variant set");
  assert.equal(result.variants[0].details.cardNumber.nl, "TEST-001");
  assert.equal(result.variants[0].details.cardLanguage, undefined);
});

test("list and direct lookup both exclude untagged and ambiguous-category products", async () => {
  for (const tags of [["singles"], ["dock-vault-test"], ["dock-vault-test", "singles", "sealed"]]) {
    mock((query) => query.includes("query MarketProducts(") ? { data: { products: page([product("NL", { tags })]) } } : { data: { product: product("NL", { tags }) } });
    assert.deepEqual(await getShopifyProducts(), []);
    assert.equal(await getShopifyProduct("test-dock-vault-voorbeeldkaart"), null);
  }
});

test("missing products and absent translations do not create invented data", async () => {
  mock();
  assert.equal(await getShopifyProduct("missing"), null);
  const result = mapProduct(product());
  assert.equal(result.name.en, result.name.nl);
  assert.equal(result.details.condition, undefined);
});

test("product lists paginate past the first page for both languages", async () => {
  const calls = [];
  mock((query, variables) => {
    calls.push(variables);
    return { data: { products: variables.after ? page([product(variables.language, { id: "gid://shopify/Product/1002", handle: "second-product" })]) : page([product(variables.language)], true, "next") } };
  });
  const products = await getShopifyProducts();
  assert.equal(products.length, 2);
  assert.equal(new Set(products.map((item) => item.id)).size, 2);
  assert.equal(calls.length, 4);
});

test("variant and image connections both paginate without discarding later results", async () => {
  mock((query, variables) => {
    const item = product(variables.language);
    if (query.includes("query MarketVariants(")) return { data: { node: { variants: page([{ ...item.variants.nodes[0], id: "gid://shopify/ProductVariant/2002" }]) } } };
    if (query.includes("query MarketImages(")) return { data: { node: { images: page([photo(3)]) } } };
    item.variants.pageInfo = item.images.pageInfo = { hasNextPage: true, endCursor: "next" };
    return { data: { product: item } };
  });
  const item = await getShopifyProduct("test-dock-vault-voorbeeldkaart");
  assert.equal(item.variants.length, 2);
  assert.equal(item.images.length, 3);
});

test("a repeated cursor fails instead of hanging or serving a partial catalog", async () => {
  mock(() => ({ data: { products: page([product()], true, "repeated") } }));
  await assert.rejects(getShopifyProducts(), { code: "pagination" });
});

test("next request reflects title, image, price and availability changes", async () => {
  let state = {};
  mock((query, variables) => responseFor(query, variables, state));
  const before = await getShopifyProduct("test-dock-vault-voorbeeldkaart");
  state = { title: "[TEST] Changed", image: 2, price: "2.50", available: false };
  const after = await getShopifyProduct("test-dock-vault-voorbeeldkaart");
  const list = await getShopifyProducts();
  assert.notEqual(after.name.nl, before.name.nl);
  assert.notEqual(after.image.url, before.image.url);
  assert.deepEqual(after.variants[0].price, amount("2.50"));
  assert.equal(after.variants[0].available, false);
  assert.equal(after.variants[0].quantityAvailable, 0);
  assert.equal(list[0].available, false);
  assert.equal(list[0].priceRange.min.amount, "2.50");
});

test("configuration rejects arbitrary hosts before sending the private token", async () => {
  configure();
  let calls = 0;
  global.fetch = async () => { calls++; };
  for (const host of ["example.com", "dock-vault-fixture.myshopify.com.evil.test", "https://dock-vault-fixture.myshopify.com", "user@dock-vault-fixture.myshopify.com"]) {
    process.env.SHOPIFY_STORE_DOMAIN = host;
    await assert.rejects(storefrontRequest("query {}", {}), { code: "configuration" });
  }
  assert.equal(calls, 0);
});

test("HTTP, GraphQL, malformed JSON and connection failures never expose response details", async () => {
  configure();
  for (const response of [() => new Response("secret-upstream", { status: 401 }), () => new Response(JSON.stringify({ data: { products: page([]) }, errors: [{ message: "secret-upstream" }] })), () => new Response("secret-upstream"), () => { throw new Error("secret-upstream"); }]) {
    global.fetch = async () => response();
    await assert.rejects(storefrontRequest("query {}", {}), (error) => !error.message.includes("secret-upstream") && !error.message.includes("qa-private-token"));
  }
});

test("server passes an explicit buyer IP header when provided", async () => {
  configure();
  global.fetch = async (url, init) => {
    assert.equal(init.headers["Shopify-Storefront-Buyer-IP"], "192.0.2.1");
    return new Response(JSON.stringify({ data: {} }));
  };
  await storefrontRequest("query {}", {}, "192.0.2.1");
});

test("currency formatting, sold-out and backorder labels use real variant state", () => {
  assert.match(formatMoney(amount("1.00"), "nl"), /1,00/);
  assert.match(formatMoney(amount("1000", "JPY"), "en"), /1,000/);
  assert.equal(formatAvailability({ available: false, backorder: false }, "en"), "Unavailable");
  assert.equal(formatAvailability({ available: true, backorder: true }, "nl"), "Nabestelbaar · niet op voorraad");
});
