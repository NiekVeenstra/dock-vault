export type MarketLanguage = "nl" | "en";
export type LocalizedText = Record<MarketLanguage, string>;
export type MarketCategorySlug = "singles" | "playsets" | "sealed" | "protection";

export type MarketCategory = {
  slug: MarketCategorySlug;
  name: LocalizedText;
  description: LocalizedText;
  marker: string;
};

/** Keep the provider's decimal amount and currency; do not assume cents or EUR. */
export type Money = { amount: string; currencyCode: string };
export type ProductImage = {
  id: string;
  url: string;
  alt: LocalizedText;
  width: number;
  height: number;
};
export type CardDetails = Partial<Record<
  "set" | "cardNumber" | "cardLanguage" | "edition" | "condition" | "contents",
  LocalizedText
>>;

export type MarketProductSummary = {
  id: string;
  slug: string;
  category: MarketCategorySlug;
  name: LocalizedText;
  summary: LocalizedText;
  image: ProductImage | null;
  priceRange: { min: Money; max: Money };
  available: boolean;
  details: CardDetails;
  quickVariant?: Pick<ProductVariant, "id" | "available" | "backorder" | "quantityAvailable"> | null;
  testData: true;
};

export type ProductVariant = {
  id: string;
  name: LocalizedText;
  sku: string | null;
  price: Money;
  available: boolean;
  backorder: boolean;
  quantityAvailable: number | null;
  image: ProductImage | null;
  options: { name: LocalizedText; value: LocalizedText }[];
  details: CardDetails;
};

export type MarketProduct = MarketProductSummary & {
  images: ProductImage[];
  variants: ProductVariant[];
};
