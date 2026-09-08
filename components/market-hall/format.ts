import type { MarketLanguage, Money, ProductVariant } from "@/lib/commerce/types";

export function formatMoney(money: Money, language: MarketLanguage) {
  return new Intl.NumberFormat(language === "nl" ? "nl-NL" : "en-NL", {
    style: "currency", currency: money.currencyCode,
  }).format(Number(money.amount));
}

export function formatAvailability(variant: Pick<ProductVariant, "available" | "backorder">, language: MarketLanguage) {
  if (!variant.available) return language === "nl" ? "Niet beschikbaar" : "Unavailable";
  if (variant.backorder) return language === "nl" ? "Nabestelbaar · niet op voorraad" : "On backorder · out of stock";
  return language === "nl" ? "Beschikbaar" : "Available";
}
