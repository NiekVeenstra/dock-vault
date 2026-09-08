import type { Metadata } from "next";
import { MarketHallCatalog, MarketHallPreparation } from "@/components/market-hall";
import { marketCategories } from "@/content/market-hall/catalog";
import { isMarketHallEnabled } from "@/lib/market-hall/config";
import { getMarketProducts } from "@/lib/market-hall/data";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  if (!isMarketHallEnabled()) {
    return {
      title: "De Markthal wordt voorbereid",
      description: "De Markthal van Dock Vault wordt zorgvuldig voorbereid voor singles, playsets, sealed producten en bescherming.",
      alternates: { canonical: "/market-hall" },
    };
  }

  return {
    title: "Markthal testomgeving",
    description: "Testweergave van de Markthal van Dock Vault.",
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function MarketHallPage() {
  if (!isMarketHallEnabled()) return <MarketHallPreparation />;

  const result = await getMarketProducts();
  if (result.status === "closed") return <MarketHallPreparation />;
  return <MarketHallCatalog categories={marketCategories} products={result.status === "ready" ? result.products : []} unavailable={result.status === "unavailable"} />;
}
