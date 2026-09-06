"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/sections";

const translations = {
  nl: {
    eyebrow: "De Markthal",
    title1: "Een plek voor handel,",
    title2: "gebouwd met zorg.",
    lead: "De Markthal wordt zorgvuldig voorbereid. Eerst leggen we de standaarden vast voor een eerlijke presentatie, duidelijke conditie en veilige verzending. Daarna pas gaan de deuren open.",
    expect: "Wat je hier later vindt",
    items: [
      ["Singles", "Losse kaarten, helder en eerlijk omschreven."],
      ["Playsets", "Samenhangende sets voor spelers en deckbouwers."],
      ["Sealed", "Geselecteerde producten, zorgvuldig behandeld."],
      ["Bescherming", "Materialen die helpen bewaren wat ertoe doet."],
    ],
    note: "Geen haast, geen verzonnen voorraad en geen beloftes vóór de basis klopt.",
    lighthouse: "Ga naar de Vuurtoren",
    logbook: "Lees het Logboek",
  },
  en: {
    eyebrow: "The Market Hall",
    title1: "A place for trade,",
    title2: "built with care.",
    lead: "The Market Hall is being prepared with care. First we are setting the standards for honest presentation, clear condition notes and safe shipping. Only then will the doors open.",
    expect: "What you will find here later",
    items: [
      ["Singles", "Individual cards described clearly and honestly."],
      ["Playsets", "Coherent sets for players and deck builders."],
      ["Sealed", "Selected products, handled with care."],
      ["Protection", "Materials that help preserve what matters."],
    ],
    note: "No rush, no invented stock and no promises before the foundation is sound.",
    lighthouse: "Visit the Lighthouse",
    logbook: "Read the Logbook",
  },
} as const;

export function MarketHallPreparation() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <main className="market-page market-preparation-page">
      <section className="market-preparation-hero" id="home">
        <HarborHeader />
        <HarborDivider />
        <div className="market-preparation-hero__image" aria-hidden="true">
          <img src="/images/market-hall-scene.webp" alt="" decoding="async" />
        </div>
        <div className="market-preparation-hero__veil" aria-hidden="true" />

        <div className="market-shell market-preparation-hero__content">
          <p className="eyebrow">{copy.eyebrow}</p>
          <div className="small-rule" aria-hidden="true"><span /></div>
          <h1>{copy.title1}<em>{copy.title2}</em></h1>
          <p className="market-preparation-hero__lead">{copy.lead}</p>
        </div>
      </section>

      <section className="market-preparation-body" aria-labelledby="market-expect-title">
        <div className="market-shell">
          <h2 id="market-expect-title">{copy.expect}</h2>
          <div className="market-preparation-grid">
            {copy.items.map(([title, description], index) => (
              <article key={title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <blockquote>{copy.note}</blockquote>
          <nav className="market-route-links" aria-label={language === "nl" ? "Vervolg je reis" : "Continue your journey"}>
            <a className="primary-cta" href="/lighthouse/begin-the-journey">{copy.lighthouse}<b aria-hidden="true">→</b></a>
            <a className="quiet-link" href="/logbook">{copy.logbook}<b aria-hidden="true">→</b></a>
          </nav>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

