import type { MarketProduct, LocalizedText, Money, ProductImage } from "../commerce/types";

export const MAX_CART_LINES = 20;
export const MAX_CART_QUANTITY = 99;
export type CartInput = { slug: string; variantId: string; quantity: number };
export type CartLine = CartInput & { name: LocalizedText; variantName: LocalizedText; price: Money; image: ProductImage | null; stock: number };
export type CartResult = { lines: CartLine[]; adjusted: boolean };

export function parseCart(value: unknown): CartInput[] {
  if (!Array.isArray(value) || value.length > MAX_CART_LINES) throw new Error("invalid");
  const seen = new Set<string>();
  return value.map((line: unknown) => {
    if (!line || typeof line !== "object") throw new Error("invalid");
    const { slug, variantId, quantity } = line as CartInput;
    if (typeof slug !== "string" || !/^[a-z0-9][a-z0-9-]{0,199}$/.test(slug) ||
      typeof variantId !== "string" || !/^gid:\/\/shopify\/ProductVariant\/\d+$/.test(variantId) ||
      !Number.isSafeInteger(quantity) || quantity < 1 || quantity > MAX_CART_QUANTITY || seen.has(variantId)) throw new Error("invalid");
    seen.add(variantId);
    return { slug, variantId, quantity };
  });
}

// Accept only authoritative catalogue values; never prices or stock from the browser.
export async function resolveCart(input: CartInput[], getProduct: (slug: string) => Promise<MarketProduct | null>): Promise<CartResult> {
  const products = new Map<string, MarketProduct | null>();
  // Sequential requests keep a single validation from flooding the provider.
  for (const slug of new Set(input.map((line) => line.slug))) products.set(slug, await getProduct(slug));
  let adjusted = false;
  const lines: CartLine[] = [];
  for (const item of input) {
    const product = products.get(item.slug);
    const variant = product?.variants.find((entry) => entry.id === item.variantId);
    const stock = variant?.available && !variant.backorder ? Math.max(0, variant.quantityAvailable ?? 0) : 0;
    const quantity = Math.min(item.quantity, stock, MAX_CART_QUANTITY);
    if (!product || !variant || !quantity) { adjusted = true; continue; }
    if (quantity !== item.quantity) adjusted = true;
    lines.push({ ...item, quantity, name: product.name, variantName: variant.name, price: variant.price, image: variant.image ?? product.image, stock });
  }
  return { lines, adjusted };
}
