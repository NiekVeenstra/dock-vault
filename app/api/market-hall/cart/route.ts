import { NextRequest, NextResponse } from "next/server";
import { isMarketHallEnabled } from "@/lib/market-hall/config";
import { getMarketProduct } from "@/lib/market-hall/data";
import { parseCart, resolveCart } from "@/lib/market-hall/cart";

export const dynamic = "force-dynamic";
function reply(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } });
}
export async function POST(request: NextRequest) {
  if (!isMarketHallEnabled()) return reply({ error: "closed" }, 404);
  if (request.headers.get("sec-fetch-site") === "cross-site") return reply({ error: "invalid" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply({ error: "invalid" }, 415);
  let input;
  try {
    // Bound the body while streaming, including requests without Content-Length.
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
    input = parseCart(JSON.parse(Buffer.concat(chunks).toString("utf8")));
  } catch { return reply({ error: "invalid" }, 400); }
  try {
    return reply(await resolveCart(input, async (slug) => {
      const result = await getMarketProduct(slug);
      if (result.status === "not-found") return null;
      if (result.status !== "ready") throw new Error("unavailable");
      return result.product;
    }));
  } catch { return reply({ error: "unavailable" }, 503); }
}
