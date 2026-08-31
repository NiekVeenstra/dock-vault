"use client";

import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/sections/SiteFooter/SiteFooter";

const translations = {
  en: {
    eyebrow: "404 · Beyond the chart",
    title1: "This route is not",
    title2: "on the chart.",
    lead: "The page you were looking for may have moved, changed course or never reached the Harbor.",
    hint: "The Lighthouse still knows the way back.",
    home: "Return to the Harbor",
    lighthouse: "Go to the Lighthouse",
    marker: "Position unknown · Signal found",
  },
  nl: {
    eyebrow: "404 · Buiten de kaart",
    title1: "Deze route staat niet",
    title2: "op de kaart.",
    lead: "De pagina die je zocht is mogelijk verplaatst, van koers veranderd of heeft de Haven nooit bereikt.",
    hint: "De Vuurtoren wijst nog steeds de weg terug.",
    home: "Terug naar de Haven",
    lighthouse: "Naar de Vuurtoren",
    marker: "Positie onbekend · Signaal gevonden",
  },
} as const;

export function NotFoundView() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <main className="not-found-page">
      <HarborHeader />

      <section className="not-found-hero">
        <div className="not-found-hero__image" aria-hidden="true">
          <img src="/images/lighthouse-hero-desktop.webp" alt="" />
        </div>
        <div className="not-found-hero__veil" aria-hidden="true" />
        <div className="not-found-hero__line" aria-hidden="true" />

        <div className="not-found-shell">
          <div className="not-found-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <div className="small-rule">
              <span />
            </div>

            <h1>
              {copy.title1}
              <em>{copy.title2}</em>
            </h1>

            <p className="not-found-copy__lead">{copy.lead}</p>
            <p className="not-found-copy__hint">{copy.hint}</p>

            <div className="not-found-actions">
              <a className="primary-cta" href="/">
                <span>{copy.home}</span>
                <b aria-hidden="true">→</b>
              </a>
              <a className="not-found-secondary" href="/#lighthouse">
                {copy.lighthouse}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="not-found-marker" aria-hidden="true">
              <span>404</span>
              <i />
              <p>{copy.marker}</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
