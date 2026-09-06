"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    title: "The Lighthouse",
    alt: "The interior of the Dock Vault Lighthouse, with a spiral staircase, nautical instruments and warm lantern light",
    kicker: "Before the next decision",
    headingFirst: "Guidance before",
    headingSecond: "commerce.",
    copy1: "The Lighthouse gathers practical guidance for the moments when you want to play, collect, protect or understand a card before making the next decision.",
    startEyebrow: "New here?",
    startTitle: "Start with one simple choice.",
    startCopy: "Choose whether you want to play, collect or do both. From there, the Lighthouse gives you a calm first step and a clear place to continue.",
    startCta: "Begin the journey",
    aria: "Lighthouse knowledge areas",
    guides: [
      ["Preservation", "Protect cards, decks and sealed products with simple habits."],
      ["Grading", "Understand condition, preparation and when grading adds value."],
      ["Collecting", "Collect with intention, curiosity and room for your interests to change."],
    ],
    cta: "Explore Dock Vault",
    quote: "“Knowledge is the light that lets a collection find its way home.”",
  },
  nl: {
    title: "De Vuurtoren",
    alt: "Het interieur van de Dock Vault-vuurtoren met een wenteltrap, nautische instrumenten en warm lantaarnlicht",
    kicker: "Voor de volgende beslissing",
    headingFirst: "Begeleiding vóór",
    headingSecond: "handel.",
    copy1: "De Vuurtoren verzamelt praktische begeleiding voor de momenten waarop je wilt spelen, verzamelen, beschermen of een kaart beter wilt begrijpen voordat je de volgende keuze maakt.",
    startEyebrow: "Nieuw hier?",
    startTitle: "Begin met één eenvoudige keuze.",
    startCopy: "Kies of je wilt spelen, verzamelen of allebei. Vanaf daar geeft de Vuurtoren je een rustige eerste stap en een duidelijke plek om verder te gaan.",
    startCta: "Begin de reis",
    aria: "Kennisgebieden van de Vuurtoren",
    guides: [
      ["Behoud", "Bescherm kaarten, decks en sealed producten met eenvoudige gewoontes."],
      ["Grading", "Begrijp conditie, voorbereiding en wanneer grading iets toevoegt."],
      ["Verzamelen", "Verzamel met aandacht, nieuwsgierigheid en ruimte voor veranderende interesses."],
    ],
    cta: "Ontdek Dock Vault",
    quote: "“Kennis is het licht dat een verzameling de weg naar huis laat vinden.”",
  },
};

const guideHrefs = ["/lighthouse/preservation", "/lighthouse/grading", "/lighthouse/collecting"];

export function LighthouseSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="lighthouse-section" id="lighthouse">
      <div className="lighthouse-section__glow" aria-hidden="true" />

      <figure className="lighthouse-section__visual">
        <img src="/images/lighthouse-interior.webp" alt={copy.alt} loading="lazy" decoding="async" />
      </figure>

      <div className="lighthouse-section__inner">
        <SectionHeading title={copy.title} className="lighthouse-section__heading" />

        <div className="lighthouse-section__layout">
          <div aria-hidden="true" />

          <div className="lighthouse-section__content">
            <p className="lighthouse-section__kicker">{copy.kicker}</p>
            <h2>
              {copy.headingFirst}
              <span>{copy.headingSecond}</span>
            </h2>

            <div className="lighthouse-section__copy">
              <p>{copy.copy1}</p>
            </div>

            <div className="lighthouse-start">
              <div>
                <p>{copy.startEyebrow}</p>
                <h3>{copy.startTitle}</h3>
                <span>{copy.startCopy}</span>
              </div>
              <a href="/lighthouse/begin-the-journey">
                {copy.startCta} <i aria-hidden="true">→</i>
              </a>
            </div>

            <div className="lighthouse-guides" aria-label={copy.aria}>
              {copy.guides.map(([title, description], index) => (
                <a href={guideHrefs[index]} className="lighthouse-guide" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                  <i aria-hidden="true">→</i>
                </a>
              ))}
            </div>

            <a className="primary-cta lighthouse-section__cta" href="#world">
              <span>{copy.cta}</span>
            </a>
          </div>
        </div>

        <blockquote className="lighthouse-section__quote">{copy.quote}</blockquote>
      </div>
    </section>
  );
}
