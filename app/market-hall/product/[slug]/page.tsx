import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketHallPreparation, MarketHallProduct } from "@/components/market-hall";
import { getMarketCategory, getMarketProduct } from "@/content/market-hall/catalog";
import { isMarketHallEnabled } from "@/lib/market-hall/config";

export const dynamic = "force-dynamic";

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  if (!isMarketHallEnabled()) {
    return {
      title: "De Markthal wordt voorbereid",
      description: "De Markthal van Dock Vault wordt zorgvuldig voorbereid.",
      alternates: { canonical: "/market-hall" },
      robots: { index: false, follow: false, nocache: true },
    };
  }

  const { slug } = await params;
  const product = getMarketProduct(slug);
  if (!product) return {};

  return {
    title: `${product.name.nl} · testgegeven`,
    description: product.summary.nl,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function MarketHallProductPage({ params }: ProductPageProps) {
  if (!isMarketHallEnabled()) return <MarketHallPreparation />;

  const { slug } = await params;
  const product = getMarketProduct(slug);
  if (!product) notFound();

  const category = getMarketCategory(product.category);
  if (!category) notFound();

  return <MarketHallProduct product={product} category={category} />;
}

