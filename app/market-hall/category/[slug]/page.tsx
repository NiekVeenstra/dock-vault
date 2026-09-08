import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketHallCatalog, MarketHallPreparation } from "@/components/market-hall";
import { getMarketCategory, marketCategories } from "@/content/market-hall/catalog";
import { isMarketHallEnabled } from "@/lib/market-hall/config";
import { getMarketProducts } from "@/lib/market-hall/data";

export const dynamic = "force-dynamic";

type CategoryPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  if (!isMarketHallEnabled()) {
    return {
      title: "De Markthal wordt voorbereid",
      description: "De Markthal van Dock Vault wordt zorgvuldig voorbereid.",
      alternates: { canonical: "/market-hall" },
      robots: { index: false, follow: false, nocache: true },
    };
  }

  const { slug } = await params;
  const category = getMarketCategory(slug);
  return {
    title: `${category?.name.nl ?? "Categorie"} · Markthal testomgeving`,
    description: category?.description.nl ?? "Testweergave van de Markthal van Dock Vault.",
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function MarketHallCategoryPage({ params }: CategoryPageProps) {
  if (!isMarketHallEnabled()) return <MarketHallPreparation />;

  const { slug } = await params;
  const category = getMarketCategory(slug);
  if (!category) notFound();
  const result = await getMarketProducts();
  if (result.status === "closed") return <MarketHallPreparation />;

  return (
    <MarketHallCatalog
      categories={marketCategories}
      products={result.status === "ready" ? result.products.filter((product) => product.category === category.slug) : []}
      activeCategory={category}
      unavailable={result.status === "unavailable"}
    />
  );
}
