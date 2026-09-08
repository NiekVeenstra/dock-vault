import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketHallPreparation, MarketHallProduct, MarketHallStatus } from "@/components/market-hall";
import { getMarketCategory } from "@/content/market-hall/catalog";
import { isMarketHallEnabled } from "@/lib/market-hall/config";
import { getMarketProduct } from "@/lib/market-hall/data";

export const dynamic = "force-dynamic";

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata(): Promise<Metadata> {
  if (!isMarketHallEnabled()) {
    return {
      title: "De Markthal wordt voorbereid",
      description: "De Markthal van Dock Vault wordt zorgvuldig voorbereid.",
      alternates: { canonical: "/market-hall" },
      robots: { index: false, follow: false, nocache: true },
    };
  }

  // Test products deliberately have generic, non-indexable metadata.
  return {
    title: "Product · Markthal testomgeving",
    description: "Testweergave van een product in de Markthal van Dock Vault.",
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function MarketHallProductPage({ params }: ProductPageProps) {
  if (!isMarketHallEnabled()) return <MarketHallPreparation />;

  const { slug } = await params;
  const result = await getMarketProduct(slug);
  if (result.status === "closed") return <MarketHallPreparation />;
  if (result.status === "unavailable") return <MarketHallStatus kind="unavailable" retryHref={`/market-hall/product/${encodeURIComponent(slug)}`} />;
  if (result.status !== "ready") notFound();
  const { product } = result;

  const category = getMarketCategory(product.category);
  if (!category) notFound();

  return <MarketHallProduct product={product} category={category} />;
}
