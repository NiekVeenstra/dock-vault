import type { Metadata } from "next";
import { isMarketHallEnabled } from "@/lib/market-hall/config";
import { MarketHallPreparation } from "@/components/market-hall";
import { TestCartPage } from "@/components/market-hall/TestCart";
export const dynamic = "force-dynamic";
export async function generateMetadata(): Promise<Metadata> {
  return { title: isMarketHallEnabled() ? "Testwinkelmand" : "De Markthal wordt voorbereid", robots: { index: false, follow: false } };
}
export default function Page() {
  return isMarketHallEnabled() ? <TestCartPage /> : <MarketHallPreparation />;
}
