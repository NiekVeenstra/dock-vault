"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    title: "The Market Hall",
    kicker: "For collectors, by collectors",
    heading1: "Trade with care,",
    heading2: "not noise.",
    copy1: "The Market Hall is where Dock Vault will eventually offer selected singles, playsets, sealed products and protection pieces that feel worthy of the collections they support.",
    copy2: "It is not meant to feel rushed or crowded. It should feel like a room where every card is presented honestly, every condition is described clearly and every choice can be made with confidence.",
    aria: "What the Market Hall will offer",
    highlights: [
      ["Singles", "Useful pieces, thoughtfully listed."],
      ["Playsets", "Deck building support without the noise."],
      ["Sealed", "Selected product handled with care."],
      ["Protection", "Accessories chosen to preserve what matters."],
    ],
    status: "Opening in a later tide",
    cta: "Follow the build in the Logbook",
    whisper: "The hall is still taking shape. The standards are already in place.",
  },
  nl: {
    title: "De Markthal",
    kicker: "Voor verzamelaars, door verzamelaars",
    heading1: "Handel met zorg,",
    heading2: "niet met ruis.",
    copy1: "In de Markthal zal Dock Vault uiteindelijk geselecteerde singles, playsets, sealed producten en beschermingsartikelen aanbieden die passen bij de verzamelingen waarvoor ze bedoeld zijn.",
    copy2: "Het hoort niet gehaast of druk te voelen. Het moet een ruimte zijn waar iedere kaart eerlijk wordt gepresenteerd, iedere conditie duidelijk wordt omschreven en iedere keuze met vertrouwen kan worden gemaakt.",
    aria: "Wat de Markthal zal aanbieden",
    highlights: [
      ["Singles", "Nuttige kaarten, zorgvuldig aangeboden."],
      ["Playsets", "Ondersteuning voor deckbuilding zonder de ruis."],
      ["Sealed", "Geselecteerde producten, met zorg behandeld."],
      ["Bescherming", "Accessoires gekozen om te bewaren wat ertoe doet."],
    ],
    status: "Opent op een later moment",
    cta: "Volg de bouw in het Logboek",
    whisper: "De hal krijgt nog vorm. De standaarden staan al vast.",
  },
};

export function MarketHallSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="market-hall-section" id="market">
      <div className="market-hall-section__media" aria-hidden="true">
        <img src="/images/market-hall-scene.webp" alt="" loading="lazy" decoding="async" />
      </div>

      <div className="market-hall-section__fade" aria-hidden="true" />
      <div className="market-hall-section__ambient" aria-hidden="true" />

      <div className="market-hall-section__inner">
        <SectionHeading title={copy.title} className="market-hall-section__heading" />

        <div className="market-hall-section__layout">
          <div aria-hidden="true" />

          <div className="market-hall-section__content">
            <p className="market-hall-section__kicker">{copy.kicker}</p>

            <h2>
              {copy.heading1}
              <span>{copy.heading2}</span>
            </h2>

            <div className="market-hall-section__copy">
              <p>{copy.copy1}</p>
              <p>{copy.copy2}</p>
            </div>

            <div className="market-hall-highlights" aria-label={copy.aria}>
              {copy.highlights.map(([title, description]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </article>
              ))}
            </div>

            <div className="market-hall-section__actions">
              <span className="status-seal">{copy.status}</span>
              <a className="primary-cta" href="/logbook">
                <span>{copy.cta}</span>
              </a>
            </div>
          </div>
        </div>

        <p className="market-hall-section__whisper">{copy.whisper}</p>
      </div>
    </section>
  );
}
