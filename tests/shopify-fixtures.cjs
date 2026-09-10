// Synthetic API responses, never imported by application code.
const page = (nodes, hasNextPage = false, endCursor = null) => ({ nodes, pageInfo: { hasNextPage, endCursor } });
const amount = (value = "1.00", currencyCode = "EUR") => ({ amount: value, currencyCode });
const photo = (number = 1) => ({
  id: `gid://shopify/ProductImage/${number}`,
  url: `https://cdn.shopify.com/s/files/1/0000/0000/products/dock-vault-fixture-${number}.png`,
  altText: `Test fixture photo ${number}`, width: 600, height: 840,
});

function product(language = "NL", overrides = {}) {
  return {
    id: "gid://shopify/Product/1001",
    handle: "test-dock-vault-voorbeeldkaart",
    title: language === "EN" ? "[TEST] Dock Vault – sample card" : "[TEST] Dock Vault – voorbeeldkaart",
    description: language === "EN" ? "Test product. Not for sale. Price and stock are test values." : "Testproduct. Niet te koop. Prijs en voorraad zijn testwaarden.",
    tags: ["dock-vault-test", "singles"],
    availableForSale: true,
    featuredImage: photo(),
    priceRange: { minVariantPrice: amount(), maxVariantPrice: amount() },
    metafields: [null, { key: "set", value: "Test set" }, { key: "card_number", value: "TEST-001" }],
    images: page([photo(), photo(2)]),
    variants: page([{
      id: "gid://shopify/ProductVariant/2001", title: "Default Title", sku: "TEST-001",
      price: amount(), availableForSale: true, currentlyNotInStock: false,
      quantityAvailable: 3, image: photo(), selectedOptions: [{ name: "Title", value: "Default Title" }],
      metafields: [null],
    }]),
    ...overrides,
  };
}

function responseFor(query, variables, state = {}) {
  if (state.failure) return { errors: [{ message: "Synthetic upstream error: never show this text." }] };
  if (query.includes("mutation MarketTestCheckout")) return {data: {cartCreate: {
    cart: {id: "gid://shopify/Cart/fixture", checkoutUrl: "https://dock-vault-test.myshopify.com/cart/c/fixture?key=fixture", lines: {
      nodes: variables.input.lines.map(line => ({quantity: line.quantity, merchandise: {id: line.merchandiseId, price: amount(state.price || "1.00")}})),
      pageInfo: {hasNextPage: false}
    }}, userErrors: [], warnings: state.checkoutWarning ? [{code: "stock"}] : []
  }}};
  const item = product(variables.language);
  if (state.title) item.title = state.title;
  if (state.price) item.priceRange.minVariantPrice = item.priceRange.maxVariantPrice = item.variants.nodes[0].price = amount(state.price);
  if (state.available === false) {
    item.availableForSale = item.variants.nodes[0].availableForSale = false;
    item.variants.nodes[0].quantityAvailable = 0;
  }
  if (state.image) item.featuredImage = item.variants.nodes[0].image = item.images.nodes[0] = photo(state.image);
  if (state.noImages) {
    item.featuredImage = item.variants.nodes[0].image = null;
    item.images = page([]);
  }
  if (state.variants) {
    item.variants.nodes[0].title = "English · Near Mint";
    item.variants.nodes.push({ ...item.variants.nodes[0], id: "gid://shopify/ProductVariant/2002", title: "Japanese · Played", price: amount("2.50"), availableForSale: false, quantityAvailable: 0, metafields: [{ key: "language", value: "Japanese" }, { key: "condition", value: "Played" }] });
    item.priceRange.maxVariantPrice = amount("2.50");
  }
  if (query.includes("query MarketProducts(")) return { data: { products: page(state.empty ? [] : [item]) } };
  if (query.includes("query MarketProduct(")) return { data: { product: state.empty || variables.handle !== item.handle ? null : item } };
  throw new Error("Unexpected fixture query");
}

module.exports = { product, page, photo, amount, responseFor };
