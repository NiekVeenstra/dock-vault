"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/sections";
import type { MarketCategory, MarketProduct } from "@/content/market-hall/catalog";

type MarketHallProductProps = {
  product: MarketProduct;
  category: MarketCategory;
};

const copy = {
  nl: {
    environment: "Testomgeving · dit is geen echt aanbod",
    market: "Markthal",
    overview: "Alle testproducten",
    photo: "Ruimte voor productfoto",
    photoNote: "Echte productfoto volgt pas bij een werkelijk aanbod.",
    specifications: "Productgegevens",
    language: "Taal",
    edition: "Uitvoering",
    condition: "Conditie",
    contents: "Inhoud",
    price: "Testprijs",
    availability: "Beschikbaarheid",
    shipping: "Verzending",
    unavailable: "Betalen, bestellen en voorraad reserveren zijn in deze fase bewust niet mogelijk.",
  },
  en: {
    environment: "Test environment · this is not a real offer",
    market: "Market Hall",
    overview: "All test products",
    photo: "Space for product photo",
    photoNote: "A real product photo will only appear with an actual offer.",
    specifications: "Product information",
    language: "Language",
    edition: "Edition",
    condition: "Condition",
    contents: "Contents",
    price: "Test price",
    availability: "Availability",
    shipping: "Shipping",
    unavailable: "Payment, ordering and stock reservation are deliberately unavailable at this stage.",
  },
} as const;

export function MarketHallProduct({ product, category }: MarketHallProductProps) {
  const { language } = useLanguage();
  const t = copy[language];
  const price = new Intl.NumberFormat(language === "nl" ? "nl-NL" : "en-NL", {
    style: "currency",
    currency: product.currency,
  }).format(product.priceCents / 100);

  const details = [
    [t.language, product.cardLanguage[language]],
    [t.edition, product.edition[language]],
    [t.condition, product.condition[language]],
    [t.contents, product.contents[language]],
    [t.price, price],
    [t.availability, product.availability[language]],
    [t.shipping, product.shipping[language]],
  ];

  return (
    <main className="market-page market-product-page">
      <section className="market-product-hero" id="home">
        <HarborHeader />
        <HarborDivider />
        <div className="market-shell">
          <p className="market-test-banner" role="status">{t.environment}</p>
          <nav className="market-breadcrumbs" aria-label={language === "nl" ? "Kruimelpad" : "Breadcrumb"}>
            <a href="/market-hall">{t.market}</a><span aria-hidden="true">/</span>
            <a href={`/market-hall/category/${category.slug}`}>{category.name[language]}</a><span aria-hidden="true">/</span>
            <span aria-current="page">{product.name[language]}</span>
          </nav>
        </div>
      </section>

      <section className="market-product-detail">
        <div className="market-shell market-product-detail__grid">
          <div className="market-product-gallery" aria-label={t.photo}>
            <div className="market-product-gallery__primary">
              <span className="market-test-label">TEST DATA</span>
              <b aria-hidden="true">{category.marker}</b>
              <p>{t.photo}</p>
              <small>{t.photoNote}</small>
            </div>
            <div className="market-product-gallery__thumbs" aria-hidden="true"><span /><span /><span /></div>
          </div>

          <article className="market-product-information">
            <p className="eyebrow">{category.name[language]}</p>
            <h1>{product.name[language]}</h1>
            <p className="market-product-information__summary">{product.summary[language]}</p>
            <h2>{t.specifications}</h2>
            <dl>
              {details.map(([label, value]) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>
            <p className="market-product-information__notice">{t.unavailable}</p>
            <a className="quiet-link" href="/market-hall">← {t.overview}</a>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

