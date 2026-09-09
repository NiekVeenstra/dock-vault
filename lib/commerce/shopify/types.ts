import type { Money } from "../types";

export type Connection<T> = {
  nodes: T[];
  pageInfo: { hasNextPage: boolean; endCursor: string | null };
};
export type ShopifyImage = {
  id: string | null;
  url: string;
  altText: string | null;
  width: number;
  height: number;
};
export type ShopifyMetafield = { key: string; value: string } | null;
export type ShopifyProductSummary = {
  id: string;
  handle: string;
  title: string;
  description: string;
  tags: string[];
  availableForSale: boolean;
  featuredImage: ShopifyImage | null;
  priceRange: { minVariantPrice: Money; maxVariantPrice: Money };
  metafields: ShopifyMetafield[];
  variants?: Connection<Pick<ShopifyVariant, "id" | "availableForSale" | "currentlyNotInStock" | "quantityAvailable">>;
};
export type ShopifyVariant = {
  id: string;
  title: string;
  sku: string | null;
  price: Money;
  availableForSale: boolean;
  currentlyNotInStock: boolean;
  quantityAvailable: number | null;
  image: ShopifyImage | null;
  selectedOptions: { name: string; value: string }[];
  metafields: ShopifyMetafield[];
};
export type ShopifyProduct = Omit<ShopifyProductSummary, "variants"> & {
  images: Connection<ShopifyImage>;
  variants: Connection<ShopifyVariant>;
};
