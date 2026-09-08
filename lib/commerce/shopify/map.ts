import "server-only";
import type { CardDetails, LocalizedText, MarketCategorySlug, MarketProduct, MarketProductSummary, Money, ProductImage } from "../types";
import { ShopifyError } from "./client";
import type { ShopifyImage, ShopifyMetafield, ShopifyProduct, ShopifyProductSummary } from "./types";

const categoryTags: readonly MarketCategorySlug[] = ["singles", "playsets", "sealed", "protection"];

/** Apply the same admission rule to list and direct product URLs. */
export function productCategory(product: ShopifyProductSummary): MarketCategorySlug | null {
  if (!product.tags.includes("dock-vault-test")) return null;
  const matches = categoryTags.filter((category) => product.tags.includes(category));
  return matches.length === 1 ? matches[0] : null;
}

function localized(nl: string, en?: string | null): LocalizedText {
  return { nl, en: en || nl };
}

function money(value: Money): Money {
  if (!/^\d+(\.\d+)?$/.test(value.amount) || !Number.isFinite(Number(value.amount)) || !/^[A-Z]{3}$/.test(value.currencyCode)) {
    throw new ShopifyError("response");
  }
  return { amount: value.amount, currencyCode: value.currencyCode };
}

function image(nl: ShopifyImage | null, en: ShopifyImage | null | undefined, fallback: LocalizedText): ProductImage | null {
  if (!nl) return null;
  // Render Shopify's CDN directly: no public Next image proxy/cache for test assets.
  try {
    const url = new URL(nl.url);
    if (url.protocol !== "https:" || url.hostname !== "cdn.shopify.com" || url.username || url.password) return null;
  } catch { return null; }
  return {
    id: nl.id || nl.url,
    url: nl.url,
    alt: { nl: nl.altText || fallback.nl, en: en?.altText || nl.altText || fallback.en },
    width: nl.width || 600,
    height: nl.height || 800,
  };
}

function cardDetails(nl: ShopifyMetafield[], en: ShopifyMetafield[] = []): CardDetails {
  const keys = { set: "set", card_number: "cardNumber", language: "cardLanguage", edition: "edition", condition: "condition", contents: "contents" } as const;
  const result: CardDetails = {};
  for (const [key, field] of Object.entries(keys)) {
    const value = nl.find((entry) => entry?.key === key)?.value;
    if (value?.trim()) result[field] = localized(value, en.find((entry) => entry?.key === key)?.value);
  }
  return result;
}

export function mapSummary(nl: ShopifyProductSummary, en?: ShopifyProductSummary): MarketProductSummary | null {
  const category = productCategory(nl);
  if (!category) return null;
  if (!nl.id.startsWith("gid://shopify/Product/") || !nl.handle) throw new ShopifyError("response");
  const name = localized(nl.title, en?.title);
  return {
    id: nl.id,
    slug: nl.handle,
    category,
    name,
    summary: localized(nl.description, en?.description),
    image: image(nl.featuredImage, en?.featuredImage, name),
    priceRange: { min: money(nl.priceRange.minVariantPrice), max: money(nl.priceRange.maxVariantPrice) },
    available: nl.availableForSale,
    details: cardDetails(nl.metafields, en?.metafields),
    testData: true,
  };
}

export function mapProduct(nl: ShopifyProduct, en?: ShopifyProduct): MarketProduct | null {
  const summary = mapSummary(nl, en);
  if (!summary) return null;
  const variants = nl.variants.nodes.map((variant) => {
    if (!variant.id.startsWith("gid://shopify/ProductVariant/")) throw new ShopifyError("response");
    const translated = en?.variants.nodes.find((entry) => entry.id === variant.id);
    return {
      id: variant.id,
      name: localized(variant.title, translated?.title),
      sku: variant.sku,
      price: money(variant.price),
      available: variant.availableForSale,
      backorder: variant.currentlyNotInStock,
      quantityAvailable: variant.quantityAvailable,
      image: image(variant.image, translated?.image, summary.name),
      options: variant.selectedOptions.map((option, index) => ({
        name: localized(option.name, translated?.selectedOptions[index]?.name),
        value: localized(option.value, translated?.selectedOptions[index]?.value),
      })),
      details: { ...summary.details, ...cardDetails(variant.metafields, translated?.metafields) },
    };
  });
  if (!variants.length) return null;
  const images = nl.images.nodes.flatMap((entry) => {
    const mapped = image(entry, en?.images.nodes.find((candidate) => candidate.id === entry.id), summary.name);
    return mapped ? [mapped] : [];
  });
  return { ...summary, images, variants };
}
