import "server-only";
import type { CartLine } from "../../market-hall/cart";
import { storefrontRequest } from "./client";

const query = `mutation MarketTestCheckout($input: CartInput!, $language: LanguageCode!) @inContext(language: $language) {
  cartCreate(input: $input) {
    cart {
      checkoutUrl
      lines(first: 100) {
        nodes { quantity merchandise { ... on ProductVariant { id price { amount currencyCode } } } }
        pageInfo { hasNextPage }
      }
    }
    userErrors { code }
    warnings { code }
  }
}`;
type CheckoutPayload = {
  cartCreate: {
    cart: null | { checkoutUrl: string; lines: { nodes: { quantity: number; merchandise: { id: string; price: { amount: string; currencyCode: string } } }[]; pageInfo: { hasNextPage: boolean } } };
    userErrors: { code: string }[];
    warnings: { code: string }[];
  };
};
export class CheckoutChanged extends Error {}

export function validateCheckoutUrl(value: string, domain: string) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.hostname !== domain || url.port || url.username || url.password || !/^\/(checkouts\/|cart\/c\/)/.test(url.pathname)) throw new Error("checkout-url");
  return url.toString();
}
export async function createTestCheckout(lines: CartLine[], language: "nl" | "en", buyerIp?: string) {
  const result = await storefrontRequest<CheckoutPayload>(query, {
    language: language.toUpperCase(),
    input: {
      buyerIdentity: { countryCode: "NL" },
      lines: lines.map((line) => ({ merchandiseId: line.variantId, quantity: line.quantity })),
      note: "Dock Vault development checkout — test order",
    },
  }, buyerIp);
  const payload = result.cartCreate;
  if (payload.userErrors.length || payload.warnings.length || !payload.cart) throw new CheckoutChanged();
  const returned = payload.cart.lines;
  if (returned.pageInfo.hasNextPage || returned.nodes.length !== lines.length) throw new CheckoutChanged();
  const ids = new Set(returned.nodes.map((line) => line.merchandise.id));
  if (ids.size !== lines.length) throw new CheckoutChanged();
  for (const expected of lines) {
    const actual = returned.nodes.find((line) => line.merchandise.id === expected.variantId);
    if (!actual || actual.quantity !== expected.quantity || actual.merchandise.price.currencyCode !== expected.price.currencyCode ||
      Number(actual.merchandise.price.amount) !== Number(expected.price.amount)) throw new CheckoutChanged();
  }
  return validateCheckoutUrl(payload.cart.checkoutUrl, process.env.SHOPIFY_STORE_DOMAIN!.trim().toLowerCase());
}
