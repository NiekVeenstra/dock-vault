import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { parseCart, type CartInput } from "../../market-hall/cart";
import { isTestCheckoutEnabled } from "../../market-hall/config";

const lifetime = 7 * 24 * 60 * 60 * 1000;
type Receipt = { token: string; issued: number; lines: CartInput[] };
export function receiptEnabled() {
  return isTestCheckoutEnabled() && !!process.env.SHOPIFY_ADMIN_ACCESS_TOKEN?.trim() &&
    (process.env.SHOPIFY_CHECKOUT_RECEIPT_SECRET?.length ?? 0) >= 32;
}
function signature(value: string) {
  const secret = process.env.SHOPIFY_CHECKOUT_RECEIPT_SECRET;
  if (!secret || secret.length < 32) throw new Error("receipt-config");
  return createHmac("sha256", secret).update(`dock-vault-test-receipt:${value}`).digest();
}
export function signReceipt(token: string, lines: CartInput[]) {
  if (!/^[a-zA-Z0-9_-]{1,200}$/.test(token)) throw new Error("cart-token");
  const body = Buffer.from(JSON.stringify({ token, issued: Date.now(), lines: parseCart(lines) })).toString("base64url");
  return `${body}.${signature(body).toString("base64url")}`;
}
export function readReceipt(value: unknown): Receipt {
  if (typeof value !== "string" || value.length > 12000) throw new Error("receipt");
  const parts = value.split(".");
  if (parts.length !== 2) throw new Error("receipt");
  const actual = Buffer.from(parts[1], "base64url");
  const expected = signature(parts[0]);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) throw new Error("receipt");
  const result = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
  if (!Number.isSafeInteger(result.issued) || result.issued > Date.now() || Date.now() - result.issued > lifetime ||
    typeof result.token !== "string" || !/^[a-zA-Z0-9_-]{1,200}$/.test(result.token)) throw new Error("receipt-expired");
  return { token: result.token, issued: result.issued, lines: parseCart(result.lines) };
}
// No customer names, email addresses, addresses or order URLs are requested or returned.
export async function checkReceipt(receipt: Receipt): Promise<boolean> {
  if (!receiptEnabled()) throw new Error("receipt-config");
  const response = await fetch("https://dock-vault-test.myshopify.com/admin/api/2026-07/graphql.json", {
    method: "POST", cache: "no-store", redirect: "error", signal: AbortSignal.timeout(15000),
    headers: { "Content-Type": "application/json", "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!.trim() },
    body: JSON.stringify({ query: `query TestCheckoutReceipt($search: String!) {
      orders(first: 10, query: $search) { nodes {
        cartToken test cancelledAt displayFinancialStatus
        lineItems(first: 100) { nodes { quantity variant { id } } pageInfo { hasNextPage } }
      } }
    }`, variables: { search: `cart_token:${receipt.token}` } }),
  });
  if (!response.ok) throw new Error("receipt-unavailable");
  const result = await response.json();
  if (result.errors?.length || !Array.isArray(result.data?.orders?.nodes)) throw new Error("receipt-unavailable");
  return result.data.orders.nodes.some((order: {
    cartToken: string; test: boolean; cancelledAt: string | null; displayFinancialStatus: string;
    lineItems: { nodes: { quantity: number; variant: { id: string } | null }[]; pageInfo: { hasNextPage: boolean } };
  }) => order.cartToken === receipt.token && order.test === true && order.cancelledAt === null &&
    order.displayFinancialStatus === "PAID" && !order.lineItems.pageInfo.hasNextPage &&
    receipt.lines.every((line) => order.lineItems.nodes.filter((item) => item.variant?.id === line.variantId)
      .reduce((sum, item) => sum + item.quantity, 0) >= line.quantity));
}
