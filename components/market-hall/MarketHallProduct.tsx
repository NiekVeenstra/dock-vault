"use client";

import { useState } from "react";
import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/sections";
import type { MarketCategory, MarketProduct } from "@/lib/commerce/types";
import { formatAvailability, formatMoney } from "./format";

type MarketHallProductProps = {
  product: MarketProduct;
  category: MarketCategory;
};

const copy = {
  nl: {
    environment: "Testomgeving · dit is geen echt aanbod",
    market: "Markthal",
    overview: "Alle testproducten",
    photo: "Productfoto’s",
    photoNote: "Er is nog geen productfoto toegevoegd.",
    showPhoto: "Toon foto",
    variant: "Variant",
    set: "Set",
    cardNumber: "Kaartnummer",
    unknown: "Nog niet opgegeven",
    quantity: "Testvoorraad",
    stockUnknown: "Niet opgegeven",
    units: "stuks beschikbaar",
    shippingNote: "Verzending is nog niet actief.",
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
    photo: "Product photos",
    photoNote: "No product photo has been added yet.",
    showPhoto: "Show photo",
    variant: "Variant",
    set: "Set",
    cardNumber: "Card number",
    unknown: "Not specified yet",
    quantity: "Test stock",
    stockUnknown: "Not specified",
    units: "units available",
    shippingNote: "Shipping is not active yet.",
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
  const [variantId, setVariantId] = useState(product.variants.find((variant) => variant.available)?.id ?? product.variants[0].id);
  const [photoId, setPhotoId] = useState<string | null>(null);
  const variant = product.variants.find((entry) => entry.id === variantId) ?? product.variants[0];
  const photos = [...new Map([...product.images, ...(variant.image ? [variant.image] : []), ...(product.image ? [product.image] : [])].map((entry) => [entry.id, entry])).values()];
  const photo = photos.find((entry) => entry.id === photoId) ?? variant.image ?? photos[0];

  const details = [
    [t.set, variant.details.set?.[language] ?? t.unknown],
    [t.cardNumber, variant.details.cardNumber?.[language] ?? t.unknown],
    [t.language, variant.details.cardLanguage?.[language] ?? t.unknown],
    [t.edition, variant.details.edition?.[language] ?? t.unknown],
    [t.condition, variant.details.condition?.[language] ?? t.unknown],
    [t.contents, variant.details.contents?.[language] ?? t.unknown],
    [t.price, formatMoney(variant.price, language)],
    [t.availability, formatAvailability(variant, language)],
    [t.quantity, variant.quantityAvailable === null ? t.stockUnknown : `${variant.quantityAvailable} ${t.units}`],
    [t.shipping, t.shippingNote],
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
          <section className="market-product-gallery" aria-label={t.photo}>
            <div className="market-product-gallery__primary">
              {photo ? <img src={photo.url} alt={photo.alt[language]} width={photo.width} height={photo.height} fetchPriority="high" /> : <>
                <b aria-hidden="true">{category.marker}</b>
                <p>{t.photoNote}</p>
              </>}
            </div>
            {photos.length > 1 && <div className="market-product-gallery__thumbs">
              {photos.map((entry, index) => <button type="button" key={entry.id} onClick={() => setPhotoId(entry.id)} aria-label={`${t.showPhoto} ${index + 1}`} aria-pressed={entry.id === photo?.id}>
                <img src={entry.url} alt="" width={entry.width} height={entry.height} loading="lazy" />
              </button>)}
            </div>}
          </section>

          <article className="market-product-information">
            <p className="eyebrow">{category.name[language]}</p>
            <h1>{product.name[language]}</h1>
            <p className="market-product-information__summary">{product.summary[language]}</p>
            {product.variants.length > 1 && <div className="market-variant">
              <label htmlFor="market-variant">{t.variant}</label>
              <select id="market-variant" value={variant.id} onChange={(event) => { setVariantId(event.target.value); setPhotoId(null); }}>
                {product.variants.map((entry) => <option key={entry.id} value={entry.id}>{entry.name[language]} · {formatMoney(entry.price, language)} · {formatAvailability(entry, language)}</option>)}
              </select>
            </div>}
            <h2>{t.specifications}</h2>
            <dl aria-live="polite" aria-atomic="true">
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
