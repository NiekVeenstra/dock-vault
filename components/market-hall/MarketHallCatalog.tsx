"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/sections";
import type { MarketCategory, MarketProduct } from "@/content/market-hall/catalog";

type MarketHallCatalogProps = {
  categories: readonly MarketCategory[];
  products: readonly MarketProduct[];
  activeCategory?: MarketCategory;
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
  },
} as const;

function formatPrice(product: MarketProduct, language: "nl" | "en") {
  return new Intl.NumberFormat(language === "nl" ? "nl-NL" : "en-NL", {
    style: "currency",
    currency: product.currency,
  }).format(product.priceCents / 100);
}

export function MarketHallCatalog({ categories, products, activeCategory }: MarketHallCatalogProps) {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <main className="market-page market-catalog-page">
      <section className="market-catalog-hero" id="home">
        <HarborHeader />
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
              <a className={!activeCategory ? "is-active" : ""} href="/market-hall">{copy.all}</a>
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
              <span>{products.length} {products.length === 1 ? copy.oneProduct : copy.multipleProducts}</span>
            </header>

            <div className="market-product-grid">
              {products.map((product) => (
                <article className="market-product-card" key={product.slug}>
                  <a href={`/market-hall/product/${product.slug}`} aria-label={`${copy.details}: ${product.name[language]}`}>
                    <div className="market-product-card__image" aria-hidden="true">
                      <span>{copy.test}</span>
                      <b>{categories.find((category) => category.slug === product.category)?.marker}</b>
                      <small>{language === "nl" ? "Productfoto volgt" : "Product photo to follow"}</small>
                    </div>
                    <div className="market-product-card__body">
                      <span className="market-test-label">{copy.test}</span>
                      <h3>{product.name[language]}</h3>
                      <p>{product.summary[language]}</p>
                      <dl>
                        <div><dt>{language === "nl" ? "Conditie" : "Condition"}</dt><dd>{product.condition[language]}</dd></div>
                        <div><dt>{copy.from}</dt><dd>{formatPrice(product, language)}</dd></div>
                      </dl>
                      <span className="market-product-card__action">{copy.details}<b aria-hidden="true">→</b></span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
            <p className="market-catalog__notice">{copy.unavailable}</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

