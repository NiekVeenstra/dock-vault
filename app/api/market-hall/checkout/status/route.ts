import { NextRequest, NextResponse } from "next/server";
import { isTestCheckoutEnabled } from "@/lib/market-hall/config";
import { checkReceipt, readReceipt, receiptEnabled } from "@/lib/commerce/shopify/receipt";
export const dynamic = "force-dynamic";
function reply(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } });
}
export async function POST(request: NextRequest) {
  if (!isTestCheckoutEnabled()) return reply({ error: "closed" }, 404);
  if (request.headers.get("sec-fetch-site") === "cross-site") return reply({ error: "invalid" }, 403);
  if (!receiptEnabled()) return reply({ error: "not-configured" }, 503);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply({ error: "invalid" }, 415);
  let receipt;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("body");
    const chunks: Uint8Array[] = []; let size = 0;
    while (true) {
      const { value, done } = await reader.read(); if (done) break;
      size += value.length;
      if (size > 16384) { await reader.cancel(); return reply({ error: "invalid" }, 413); }
      chunks.push(value);
    }
    receipt = readReceipt(JSON.parse(Buffer.concat(chunks).toString("utf8")).receipt);
  } catch { return reply({ error: "invalid-receipt" }, 400); }
  try {
    const paid = await checkReceipt(receipt);
    return reply({ paid, lines: paid ? receipt.lines : [] });
  } catch { return reply({ error: "unavailable" }, 503); }
}
