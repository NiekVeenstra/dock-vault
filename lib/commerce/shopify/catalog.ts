import "server-only";
import type { MarketLanguage, MarketProductSummary } from "../types";
import { ShopifyError, storefrontRequest } from "./client";
import { mapProduct, mapSummary, productCategory } from "./map";
import { imagesQuery, productQuery, productsQuery, variantsQuery } from "./queries";
import type { Connection, ShopifyImage, ShopifyProduct, ShopifyProductSummary, ShopifyVariant } from "./types";

async function allPages<T>(initial: Connection<T>, nextPage: (after: string) => Promise<Connection<T>>) {
  let page = initial;
  const items = [...page.nodes];
  const cursors = new Set<string>();
  while (page.pageInfo.hasNextPage) {
    const cursor = page.pageInfo.endCursor;
    if (!cursor || cursors.has(cursor)) throw new ShopifyError("pagination");
    cursors.add(cursor);
    page = await nextPage(cursor);
    items.push(...page.nodes);
  }
  return items;
}

async function productsForLanguage(language: MarketLanguage, buyerIp?: string) {
  const read = async (after: string | null) => {
    const data = await storefrontRequest<{ products: Connection<ShopifyProductSummary> }>(productsQuery, { language: language.toUpperCase(), after }, buyerIp);
    return data.products;
  };
  return allPages(await read(null), read);
}

export async function getShopifyProducts(buyerIp?: string): Promise<MarketProductSummary[]> {
  const [nl, en] = await Promise.all([productsForLanguage("nl", buyerIp), productsForLanguage("en", buyerIp)]);
  const english = new Map(en.map((product) => [product.id, product]));
  return nl.flatMap((product) => {
    const mapped = mapSummary(product, english.get(product.id));
    return mapped ? [mapped] : [];
  });
}

async function productForLanguage(handle: string, language: MarketLanguage, buyerIp?: string) {
  const variables = { handle, language: language.toUpperCase() };
  const { product } = await storefrontRequest<{ product: ShopifyProduct | null }>(productQuery, variables, buyerIp);
  if (!product || !productCategory(product)) return null;
  const [variants, images] = await Promise.all([
    allPages(product.variants, async (after) => {
      const { node } = await storefrontRequest<{ node: { variants: Connection<ShopifyVariant> } | null }>(variantsQuery, { ...variables, id: product.id, after }, buyerIp);
      if (!node) throw new ShopifyError("response");
      return node.variants;
    }),
    allPages(product.images, async (after) => {
      const { node } = await storefrontRequest<{ node: { images: Connection<ShopifyImage> } | null }>(imagesQuery, { ...variables, id: product.id, after }, buyerIp);
      if (!node) throw new ShopifyError("response");
      return node.images;
    }),
  ]);
  return { ...product, variants: { ...product.variants, nodes: variants }, images: { ...product.images, nodes: images } };
}

export async function getShopifyProduct(handle: string, buyerIp?: string) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(handle) || handle.length > 255) return null;
  const [nl, en] = await Promise.all([productForLanguage(handle, "nl", buyerIp), productForLanguage(handle, "en", buyerIp)]);
  if (!nl) return null;
  return mapProduct(nl, en?.id === nl.id ? en : undefined);
}
