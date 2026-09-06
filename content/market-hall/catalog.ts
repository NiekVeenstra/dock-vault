export type MarketLanguage = "nl" | "en";
export type LocalizedText = Record<MarketLanguage, string>;

export type MarketCategorySlug =
  | "singles"
  | "playsets"
  | "sealed"
  | "protection";

export type MarketCategory = {
  slug: MarketCategorySlug;
  name: LocalizedText;
  description: LocalizedText;
  marker: string;
};

export type MarketProduct = {
  slug: string;
  category: MarketCategorySlug;
  name: LocalizedText;
  summary: LocalizedText;
  cardLanguage: LocalizedText;
  edition: LocalizedText;
  condition: LocalizedText;
  contents: LocalizedText;
  availability: LocalizedText;
  shipping: LocalizedText;
  priceCents: number;
  currency: "EUR";
  testData: true;
};

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

/**
 * TEST DATA ONLY — these records are not real offers, stock or reservations.
 * Keep catalogue data here so a later commerce provider can replace this
 * source without rewriting the presentation components.
 */
export const marketProducts: readonly MarketProduct[] = [
  {
    slug: "navigator-sample-single",
    category: "singles",
    name: { nl: "Navigator — testkaart 01", en: "Navigator — test card 01" },
    summary: {
      nl: "Voorbeeldrecord voor de rustige presentatie van één losse kaart.",
      en: "Sample record for the calm presentation of one individual card.",
    },
    cardLanguage: { nl: "Engels (testgegeven)", en: "English (test data)" },
    edition: { nl: "Standaard uitvoering (test)", en: "Standard edition (test)" },
    condition: { nl: "Near Mint — niet beoordeeld", en: "Near Mint — ungraded" },
    contents: { nl: "1 testkaart", en: "1 test card" },
    availability: { nl: "Teststatus: beschikbaar", en: "Test status: available" },
    shipping: {
      nl: "Voorbeeld: beschermd verpakt, verzending nog niet actief.",
      en: "Sample: protected packaging; shipping is not active yet.",
    },
    priceCents: 1250,
    currency: "EUR",
    testData: true,
  },
  {
    slug: "harbor-deck-core-playset",
    category: "playsets",
    name: { nl: "Harbor Deck Core — testplayset", en: "Harbor Deck Core — test playset" },
    summary: {
      nl: "Voorbeeld van vier bij elkaar horende kaarten voor deckbouw.",
      en: "Sample of four matching cards intended for deck building.",
    },
    cardLanguage: { nl: "Engels (testgegeven)", en: "English (test data)" },
    edition: { nl: "Reguliere uitvoering (test)", en: "Regular edition (test)" },
    condition: { nl: "Near Mint — niet beoordeeld", en: "Near Mint — ungraded" },
    contents: { nl: "4 testkaarten", en: "4 test cards" },
    availability: { nl: "Teststatus: beperkte set", en: "Test status: limited set" },
    shipping: {
      nl: "Voorbeeld: samen beschermd verpakt, verzending nog niet actief.",
      en: "Sample: packed together with protection; shipping is not active yet.",
    },
    priceCents: 2200,
    currency: "EUR",
    testData: true,
  },
  {
    slug: "first-tide-sealed-box",
    category: "sealed",
    name: { nl: "First Tide — testbox", en: "First Tide — test box" },
    summary: {
      nl: "Voorbeeldrecord voor een sealed product met ruimte voor staat en inhoud.",
      en: "Sample record for a sealed product with room for condition and contents.",
    },
    cardLanguage: { nl: "Engels (testgegeven)", en: "English (test data)" },
    edition: { nl: "Eerste druk (test)", en: "First printing (test)" },
    condition: { nl: "Sealed — voorbeeldconditie", en: "Sealed — sample condition" },
    contents: { nl: "1 testbox", en: "1 test box" },
    availability: { nl: "Teststatus: één exemplaar", en: "Test status: one example" },
    shipping: {
      nl: "Voorbeeld: doos-in-doos bescherming, verzending nog niet actief.",
      en: "Sample: double-box protection; shipping is not active yet.",
    },
    priceCents: 11995,
    currency: "EUR",
    testData: true,
  },
  {
    slug: "guardian-sleeves-sample",
    category: "protection",
    name: { nl: "Guardian Sleeves — testproduct", en: "Guardian Sleeves — test product" },
    summary: {
      nl: "Voorbeeld van een beschermingsproduct dat op geschiktheid wordt uitgelegd.",
      en: "Sample protection product whose intended use is explained clearly.",
    },
    cardLanguage: { nl: "Niet van toepassing", en: "Not applicable" },
    edition: { nl: "Standaard formaat (test)", en: "Standard size (test)" },
    condition: { nl: "Nieuw — testgegeven", en: "New — test data" },
    contents: { nl: "100 testsleeves", en: "100 test sleeves" },
    availability: { nl: "Teststatus: beschikbaar", en: "Test status: available" },
    shipping: {
      nl: "Voorbeeld: gecombineerd verzenden mogelijk; verzending nog niet actief.",
      en: "Sample: combined shipping possible; shipping is not active yet.",
    },
    priceCents: 795,
    currency: "EUR",
    testData: true,
  },
] as const;

export function getMarketCategory(slug: string) {
  return marketCategories.find((category) => category.slug === slug);
}

export function getMarketProduct(slug: string) {
  return marketProducts.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: MarketCategorySlug) {
  return marketProducts.filter((product) => product.category === category);
}

