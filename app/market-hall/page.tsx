import type { Metadata } from "next";
import { MarketHallCatalog, MarketHallPreparation } from "@/components/market-hall";
import { marketCategories, marketProducts } from "@/content/market-hall/catalog";
import { isMarketHallEnabled } from "@/lib/market-hall/config";

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
    description: "Afgeschermde testweergave van de Markthal van Dock Vault.",
    robots: { index: false, follow: false, nocache: true },
  };
}

export default function MarketHallPage() {
  if (!isMarketHallEnabled()) return <MarketHallPreparation />;

  return <MarketHallCatalog categories={marketCategories} products={marketProducts} />;
}

