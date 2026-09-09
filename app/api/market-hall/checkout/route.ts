import { receiptEnabled, signReceipt } from "@/lib/commerce/shopify/receipt";
import { NextRequest, NextResponse } from "next/server";
import { isTestCheckoutEnabled } from "@/lib/market-hall/config";
import { getMarketProduct, buyerIp } from "@/lib/market-hall/data";
import { parseCart, resolveCart, type CartInput } from "@/lib/market-hall/cart";
import { CheckoutChanged, createTestCheckout } from "@/lib/commerce/shopify/checkout";

export const dynamic = "force-dynamic";
function reply(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } });
}
export async function POST(request: NextRequest) {
  if (!isTestCheckoutEnabled()) return reply({ error: "closed" }, 404);
  if (request.headers.get("sec-fetch-site") === "cross-site") return reply({ error: "invalid" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply({ error: "invalid" }, 415);
  let input: CartInput[];
  let language: "nl" | "en";
  let prices: { variantId: string; amount: string; currencyCode: string }[];
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: "invalid" }, 400);
    let size = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 16384) { await reader.cancel(); return reply({ error: "invalid" }, 413); }
      chunks.push(value);
    }
    const body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    input = parseCart(body.lines);
    if (!input.length || !["nl", "en"].includes(body.language) || !Array.isArray(body.prices) || body.prices.length !== input.length) throw new Error("invalid");
    language = body.language;
    prices = body.prices;
    if (new Set(prices.map((price) => price.variantId)).size !== input.length || prices.some((price) =>
      !input.some((line) => line.variantId === price.variantId) || typeof price.amount !== "string" ||
      !/^\d+(\.\d+)?$/.test(price.amount) || !Number.isFinite(Number(price.amount)) || !/^[A-Z]{3}$/.test(price.currencyCode))) throw new Error("invalid");
  } catch { return reply({ error: "invalid" }, 400); }
  try {
    const result = await resolveCart(input, async (slug) => {
      const product = await getMarketProduct(slug);
      if (product.status === "not-found") return null;
      if (product.status !== "ready") throw new Error("unavailable");
      return product.product;
    });
    const priceChanged = result.lines.some((line) => {
      const displayed = prices.find((price) => price.variantId === line.variantId);
      return !displayed || Number(displayed.amount) !== Number(line.price.amount) || displayed.currencyCode !== line.price.currencyCode;
    });
    if (result.adjusted || priceChanged || !result.lines.length) return reply({ error: "changed", ...result }, 409);
    const tracking: { cartToken?: string } | undefined = receiptEnabled() ? {} : undefined;
    const checkoutUrl = await createTestCheckout(result.lines, language, await buyerIp(), tracking);
    const receipt = tracking?.cartToken ? signReceipt(tracking.cartToken, result.lines) : null;
    return reply({ checkoutUrl, receipt });
  } catch (error) {
    return reply({ error: error instanceof CheckoutChanged ? "changed" : "unavailable" }, error instanceof CheckoutChanged ? 409 : 503);
  }
}
