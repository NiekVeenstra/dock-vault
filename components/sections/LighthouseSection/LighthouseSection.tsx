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
    copy1: "A collection should never be built in the dark. The Lighthouse exists to make knowledge visible before a purchase is made.",
    copy2: "Preservation notes, grading guidance and collecting stories are gathered here so every decision can be made with patience and confidence.",
    aria: "Lighthouse knowledge areas",
    guides: [
      ["Preservation", "Protect cards, sealed products and the stories they carry."],
      ["Grading", "Understand condition, preparation and expectations."],
      ["Collecting", "Build with intention rather than noise or haste."],
      ["Begin the journey", "A calm first route through the world of One Piece TCG."],
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
    copy1: "Een verzameling hoort nooit in het donker te worden opgebouwd. De Vuurtoren maakt kennis zichtbaar voordat er een aankoop wordt gedaan.",
    copy2: "Advies over behoud, grading en verhalen over verzamelen komen hier samen, zodat iedere keuze met geduld en vertrouwen kan worden gemaakt.",
    aria: "Kennisgebieden van de Vuurtoren",
    guides: [
      ["Behoud", "Bescherm kaarten, sealed producten en de verhalen die ze dragen."],
      ["Grading", "Begrijp conditie, voorbereiding en verwachtingen."],
      ["Verzamelen", "Bouw doelbewust, zonder ruis of haast."],
      ["Begin de reis", "Een rustige eerste route door de wereld van One Piece TCG."],
    ],
    cta: "Ontdek Dock Vault",
    quote: "“Kennis is het licht dat een verzameling de weg naar huis laat vinden.”",
  },
};

const guideHrefs = ["/lighthouse/preservation", "/lighthouse/grading", "/lighthouse/collecting", "/lighthouse/begin-the-journey"];

export function LighthouseSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="lighthouse-section" id="lighthouse">
      <div className="lighthouse-section__glow" aria-hidden="true" />

      <figure className="lighthouse-section__visual">
        <img src="/images/lighthouse-interior.png" alt={copy.alt} />
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
              <p>{copy.copy2}</p>
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
