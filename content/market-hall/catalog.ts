import type { MarketCategory } from "@/lib/commerce/types";

export const marketCategories: readonly MarketCategory[] = [
  {
    slug: "singles",
    marker: "S",
    name: { nl: "Singles", en: "Singles" },
    description: {
      nl: "Losse kaarten met een heldere omschrijving van uitvoering en conditie.",
      en: "Individual cards with a clear description of edition and condition.",
    },
  },
  {
    slug: "playsets",
    marker: "P",
    name: { nl: "Playsets", en: "Playsets" },
    description: {
      nl: "Samenhangende sets voor deckbouw, rustig en volledig gepresenteerd.",
      en: "Coherent sets for deck building, presented calmly and completely.",
    },
  },
  {
    slug: "sealed",
    marker: "SE",
    name: { nl: "Sealed producten", en: "Sealed products" },
    description: {
      nl: "Geselecteerde ongeopende producten waarvan herkomst en staat ertoe doen.",
      en: "Selected unopened products where provenance and condition matter.",
    },
  },
  {
    slug: "protection",
    marker: "PR",
    name: { nl: "Bescherming", en: "Protection" },
    description: {
      nl: "Materialen gekozen om kaarten en herinneringen zorgvuldig te bewaren.",
      en: "Materials chosen to preserve cards and memories with care.",
    },
  },
] as const;

export function getMarketCategory(slug: string) {
  return marketCategories.find((category) => category.slug === slug);
}
