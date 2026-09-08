import "server-only";
import { isIP } from "node:net";
import { cache } from "react";
import { headers } from "next/headers";
import type { MarketProduct, MarketProductSummary } from "../commerce/types";
import { getShopifyProduct, getShopifyProducts } from "../commerce/shopify/catalog";
import { ShopifyError } from "../commerce/shopify/client";
import { isMarketHallEnabled } from "./config";

type Unavailable = { status: "closed" | "unavailable" };
type CatalogResult = Unavailable | { status: "ready"; products: MarketProductSummary[] };
type ProductResult = Unavailable | { status: "not-found" } | { status: "ready"; product: MarketProduct };

async function buyerIp() {
  // Opt in only behind a proxy that overwrites X-Real-IP; never trust arbitrary XFF.
  if (process.env.SHOPIFY_TRUST_PROXY_IP !== "true") return undefined;
  const value = (await headers()).get("x-real-ip");
  return value && isIP(value) ? value : undefined;
}

function report(error: unknown) {
  console.error(`[Markthal] Shopify ${error instanceof ShopifyError ? error.code : "response"}; catalogus niet beschikbaar.`);
}

// React cache deduplicates only within a render request. Shopify fetches are no-store.
// Future product APIs must also use these gated entry points.
export const getMarketProducts = cache(async (): Promise<CatalogResult> => {
  if (!isMarketHallEnabled()) return { status: "closed" };
  try {
    return { status: "ready", products: await getShopifyProducts(await buyerIp()) };
  } catch (error) {
    report(error);
    return { status: "unavailable" };
  }
});

export const getMarketProduct = cache(async (handle: string): Promise<ProductResult> => {
  if (!isMarketHallEnabled()) return { status: "closed" };
  try {
    const product = await getShopifyProduct(handle, await buyerIp());
    return product ? { status: "ready", product } : { status: "not-found" };
  } catch (error) {
    report(error);
    return { status: "unavailable" };
  }
});
