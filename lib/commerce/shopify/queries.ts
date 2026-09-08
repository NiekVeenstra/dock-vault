import "server-only";

const imageFields = "id url altText width height";
const cardFields = `metafields(identifiers: [
  {namespace: "dock_vault", key: "set"},
  {namespace: "dock_vault", key: "card_number"},
  {namespace: "dock_vault", key: "language"},
  {namespace: "dock_vault", key: "edition"},
  {namespace: "dock_vault", key: "condition"},
  {namespace: "dock_vault", key: "contents"}
]) { key value }`;
const productFields = `
  id handle title description tags availableForSale
  featuredImage { ${imageFields} }
  priceRange { minVariantPrice { amount currencyCode } maxVariantPrice { amount currencyCode } }
  ${cardFields}
`;
const variantFields = `
  id title sku availableForSale currentlyNotInStock quantityAvailable
  price { amount currencyCode }
  image { ${imageFields} }
  selectedOptions { name value }
  ${cardFields}
`;
const pageInfo = "pageInfo { hasNextPage endCursor }";

export const productsQuery = `query MarketProducts($language: LanguageCode!, $after: String) @inContext(country: NL, language: $language) {
  products(first: 50, after: $after, query: "tag:dock-vault-test", sortKey: TITLE) {
    nodes { ${productFields} }
    ${pageInfo}
  }
}`;
export const productQuery = `query MarketProduct($language: LanguageCode!, $handle: String!) @inContext(country: NL, language: $language) {
  product(handle: $handle) {
    ${productFields}
    images(first: 100) { nodes { ${imageFields} } ${pageInfo} }
    variants(first: 100) { nodes { ${variantFields} } ${pageInfo} }
  }
}`;
export const variantsQuery = `query MarketVariants($language: LanguageCode!, $id: ID!, $after: String!) @inContext(country: NL, language: $language) {
  node(id: $id) { ... on Product {
    variants(first: 100, after: $after) { nodes { ${variantFields} } ${pageInfo} }
  } }
}`;
export const imagesQuery = `query MarketImages($language: LanguageCode!, $id: ID!, $after: String!) @inContext(country: NL, language: $language) {
  node(id: $id) { ... on Product {
    images(first: 100, after: $after) { nodes { ${imageFields} } ${pageInfo} }
  } }
}`;
