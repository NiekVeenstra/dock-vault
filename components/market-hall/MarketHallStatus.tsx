"use client";

import { HarborHeader } from "@/components/HarborHeader";
import { HarborDivider } from "@/components/HarborDivider";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/sections";

const text = {
  nl: {
    label: "Markthal · testomgeving",
    missing: "Dit product is er even niet.",
    missingNote: "Het product is niet gevonden of is niet meer beschikbaar voor deze Markthal.",
    unavailable: "De producten zijn even niet beschikbaar.",
    unavailableNote: "De verbinding kon niet worden gemaakt. Probeer het over een moment opnieuw.",
    retry: "Opnieuw proberen",
    back: "Naar de Markthal",
  },
  en: {
    label: "Market Hall · test environment",
    missing: "This product is not here right now.",
    missingNote: "The product was not found or is no longer available in this Market Hall.",
    unavailable: "The products are temporarily unavailable.",
    unavailableNote: "We could not connect. Please try again in a moment.",
    retry: "Try again",
    back: "Visit the Market Hall",
  },
};

export function MarketHallStatus({ kind, retryHref }: { kind: "missing" | "unavailable"; retryHref?: string }) {
  const { language } = useLanguage();
  const t = text[language];
  return <main className="market-page">
    <section className="market-catalog-hero" id="home">
      <HarborHeader />
      <HarborDivider />
      <div className="market-shell market-catalog-hero__content">
        <p className="market-test-banner">{t.label}</p>
        <h1>{t[kind]}</h1>
        <p>{kind === "missing" ? t.missingNote : t.unavailableNote}</p>
        <div className="market-route-links">
          {retryHref && <a className="quiet-link" href={retryHref}>{t.retry} →</a>}
          <a className="quiet-link" href="/market-hall">← {t.back}</a>
        </div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
