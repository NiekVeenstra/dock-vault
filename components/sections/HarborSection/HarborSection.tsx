"use client";

import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    eyebrow: "The Harbor",
    title1: "Not every collection needs a marketplace.",
    title2: "Some collections need a harbor.",
    copy1: "Dock Vault was not created to sell products.",
    copy2:
      "It was created because collecting deserves a place where care comes before commerce. A place to slow down, preserve what matters and continue the journey with confidence.",
    copy3:
      "A harbor where knowledge is shared before decisions are made, and where every collection is treated with dignity.",
    copy4:
      "And when the time comes to add something new, the Market Hall offers a quieter way to buy, with items carefully selected, clearly described and chosen with collectors in mind.",
    cta: "Explore the Market Hall",
    alt: "An old maritime logbook, compass and lantern on a nautical chart",
    caption: "Care before commerce. Guidance before haste.",
  },
  nl: {
    eyebrow: "De Haven",
    title1: "Niet elke verzameling heeft een marktplaats nodig.",
    title2: "Sommige verzamelingen hebben een haven nodig.",
    copy1: "Dock Vault is niet ontstaan om producten te verkopen.",
    copy2:
      "Het is ontstaan omdat verzamelen een plek verdient waar zorg vóór handel komt. Een plek om te vertragen, te bewaren wat ertoe doet en de reis met vertrouwen voort te zetten.",
    copy3:
      "Een haven waar kennis wordt gedeeld vóór beslissingen worden genomen en waar iedere verzameling met waardigheid wordt behandeld.",
    copy4:
      "En wanneer het tijd is om iets nieuws aan je collectie toe te voegen, biedt de Market Hall een rustigere manier om te kopen, met producten die zorgvuldig zijn geselecteerd, helder beschreven en gekozen met verzamelaars in gedachten.",
    cta: "Ontdek de Market Hall",
    alt: "Een oud maritiem logboek, kompas en lantaarn op een zeekaart",
    caption: "Zorg vóór handel. Begeleiding vóór haast.",
  },
};

export function HarborSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="harbor-intro" id="harbor">
      <div className="harbor-intro__inner">
        <div className="harbor-intro__content">
          <p className="eyebrow">{copy.eyebrow}</p>

          <div className="small-rule" aria-hidden="true">
            <span />
          </div>

          <h2 className="harbor-intro__title">
            {copy.title1}
            <span>{copy.title2}</span>
          </h2>

          <div className="harbor-intro__copy">
            <p>{copy.copy1}</p>
            <p>{copy.copy2}</p>
            <p>{copy.copy3}</p>
            <p>{copy.copy4}</p>
          </div>

          <a className="primary-cta harbor-intro__cta" href="#market">
            {copy.cta}
          </a>
        </div>

        <figure className="harbor-intro__visual">
          <div className="harbor-intro__image-frame">
            <img src="/images/harbor-introduction.webp" alt={copy.alt} loading="lazy" decoding="async" />
          </div>
          <figcaption>{copy.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
