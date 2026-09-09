"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/sections";
import type { MarketCategory, MarketProductSummary } from "@/lib/commerce/types";
import { formatMoney } from "./format";
import { TestCartLink, AddToTestCart, CartNotice } from "./TestCart";

type MarketHallCatalogProps = {
  categories: readonly MarketCategory[];
  products: readonly MarketProductSummary[];
  activeCategory?: MarketCategory;
  unavailable?: boolean;
};

const translations = {
  nl: {
    environment: "Testomgeving · uitsluitend testgegevens",
    eyebrow: "De Markthal",
    title: "Zorgvuldig aangeboden.",
    lead: "Een eerste blik op hoe de Markthal producten straks helder, rustig en met aandacht voor conditie en bescherming presenteert.",
    all: "Alle categorieën",
    categories: "Categorieën",
    products: "Testproducten",
    oneProduct: "testproduct",
    multipleProducts: "testproducten",
    test: "Testgegeven",
    from: "Testprijs",
    details: "Bekijk testdetail",
    unavailable: "Bestellen en voorraadreservering zijn niet actief.",
    back: "Terug naar het overzicht",
    empty: "Hier staat nog geen testproduct klaar.",
    emptyNote: "Zodra een product voor deze categorie is klaargezet, vind je het hier.",
    error: "De producten zijn even niet beschikbaar.",
    errorNote: "De verbinding kon niet worden gemaakt. Probeer het over een moment opnieuw.",
    retry: "Opnieuw proberen",
    available: "Beschikbaar",
    soldOut: "Niet beschikbaar",
    availability: "Beschikbaarheid",
    priceFrom: "Testprijs vanaf",
  },
  en: {
    environment: "Test environment · test data only",
    eyebrow: "The Market Hall",
    title: "Offered with care.",
    lead: "A first look at how the Market Hall will present products clearly, calmly and with attention to condition and protection.",
    all: "All categories",
    categories: "Categories",
    products: "Test products",
    oneProduct: "test product",
    multipleProducts: "test products",
    test: "Test data",
    from: "Test price",
    details: "View test detail",
    unavailable: "Ordering and stock reservation are not active.",
    back: "Return to the overview",
    empty: "No test product is ready here yet.",
    emptyNote: "Products prepared for this category will appear here.",
    error: "The products are temporarily unavailable.",
    errorNote: "We could not connect. Please try again in a moment.",
    retry: "Try again",
    available: "Available",
    soldOut: "Unavailable",
    availability: "Availability",
    priceFrom: "Test price from",
  },
} as const;

export function MarketHallCatalog({ categories, products, activeCategory, unavailable = false }: MarketHallCatalogProps) {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <main className="market-page market-catalog-page">
      <section className="market-catalog-hero" id="home">
        <HarborHeader actions={<TestCartLink />} />
        <HarborDivider />
        <div className="market-shell market-catalog-hero__content">
          <p className="market-test-banner" role="status">{copy.environment}</p>
          <p className="eyebrow">{activeCategory ? activeCategory.name[language] : copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true"><span /></div>
          <h1>{activeCategory ? activeCategory.name[language] : copy.title}</h1>
          <p>{activeCategory ? activeCategory.description[language] : copy.lead}</p>
          {activeCategory ? <a className="quiet-link" href="/market-hall">← {copy.back}</a> : null}
        </div>
      </section>

      <section className="market-catalog" aria-labelledby="market-products-title">
        <div className="market-shell market-catalog__layout">
          <aside className="market-category-nav">
            <p className="eyebrow">{copy.categories}</p>
            <nav aria-label={copy.categories}>
              <a className={!activeCategory ? "is-active" : ""} href="/market-hall" aria-current={!activeCategory ? "page" : undefined}>{copy.all}</a>
              {categories.map((category) => (
                <a
                  className={activeCategory?.slug === category.slug ? "is-active" : ""}
                  href={`/market-hall/category/${category.slug}`}
                  key={category.slug}
                  aria-current={activeCategory?.slug === category.slug ? "page" : undefined}
                >
                  <span>{category.marker}</span>{category.name[language]}
                </a>
              ))}
            </nav>
          </aside>

          <div className="market-catalog__products">
            <header>
              <div>
                <p className="eyebrow">{copy.products}</p>
                <h2 id="market-products-title">{activeCategory?.name[language] ?? copy.all}</h2>
              </div>
              {!unavailable && <span>{products.length} {products.length === 1 ? copy.oneProduct : copy.multipleProducts}</span>}
            </header>

            <CartNotice />
            {unavailable || !products.length ? (
              <div className="market-empty" role="status">
                <h3>{unavailable ? copy.error : copy.empty}</h3>
                <p>{unavailable ? copy.errorNote : copy.emptyNote}</p>
                {unavailable && <a className="quiet-link" href={activeCategory ? `/market-hall/category/${activeCategory.slug}` : "/market-hall"}>{copy.retry} →</a>}
              </div>
            ) : <div className="market-product-grid">
              {products.map((product) => (
                <article className="market-product-card" key={product.id}>
                  <a href={`/market-hall/product/${encodeURIComponent(product.slug)}`} aria-label={`${copy.details}: ${product.name[language]}`}>
                    <div className="market-product-card__image">
                      {product.image ? <img src={product.image.url} alt={product.image.alt[language]} width={product.image.width} height={product.image.height} loading="lazy" /> : <>
                        <b aria-hidden="true">{categories.find((category) => category.slug === product.category)?.marker}</b>
                        <small>{language === "nl" ? "Nog geen productfoto" : "No product photo yet"}</small>
                      </>}
                    </div>
                    <div className="market-product-card__body">
                      <span className="market-test-label">{copy.test}</span>
                      <h3>{product.name[language]}</h3>
                      <p>{product.summary[language]}</p>
                      <dl>
                        {product.details.condition && <div><dt>{language === "nl" ? "Conditie" : "Condition"}</dt><dd>{product.details.condition[language]}</dd></div>}
                        <div><dt>{Number(product.priceRange.min.amount) !== Number(product.priceRange.max.amount) ? copy.priceFrom : copy.from}</dt><dd>{formatMoney(product.priceRange.min, language)}</dd></div>
                        <div><dt>{copy.availability}</dt><dd>{product.available ? copy.available : copy.soldOut}</dd></div>
                      </dl>
                      <span className="market-product-card__action">{copy.details}<b aria-hidden="true">→</b></span>
                    </div>
                  </a>
                  <div className="market-product-card__purchase">
                    {product.quickVariant ? <AddToTestCart compact slug={product.slug} variant={product.quickVariant} /> :
                      <a className="quiet-link" href={`/market-hall/product/${encodeURIComponent(product.slug)}`}>{language === "nl" ? "Kies uitvoering" : "Choose variant"} →</a>}
                  </div>
                </article>
              ))}
            </div>}
            <p className="market-catalog__notice">{copy.unavailable}</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
