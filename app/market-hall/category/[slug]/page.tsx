import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketHallCatalog, MarketHallPreparation } from "@/components/market-hall";
import { getMarketCategory, getProductsByCategory, marketCategories } from "@/content/market-hall/catalog";
import { isMarketHallEnabled } from "@/lib/market-hall/config";

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
  if (!category) return {};

  return {
    title: `${category.name.nl} · Markthal testomgeving`,
    description: category.description.nl,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function MarketHallCategoryPage({ params }: CategoryPageProps) {
  if (!isMarketHallEnabled()) return <MarketHallPreparation />;

  const { slug } = await params;
  const category = getMarketCategory(slug);
  if (!category) notFound();

  return (
    <MarketHallCatalog
      categories={marketCategories}
      products={getProductsByCategory(category.slug)}
      activeCategory={category}
    />
  );
}

