"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

const locations = [
  {
    number: "01",
    image: "/images/world-icons/lighthouse.webp",
    href: "#lighthouse",
    en: { title: "Lighthouse", description: "Guidance before commerce.", linkLabel: "Follow the light" },
    nl: { title: "Vuurtoren", description: "Begeleiding vóór handel.", linkLabel: "Volg het licht" },
  },
  {
    number: "02",
    image: "/images/world-icons/harbor.webp",
    href: "#harbor",
    en: { title: "Harbor", description: "The place where every journey begins.", linkLabel: "Enter the Harbor" },
    nl: { title: "Haven", description: "De plek waar iedere reis begint.", linkLabel: "Betreed de Haven" },
  },
  {
    number: "03",
    image: "/images/world-icons/market-hall.webp",
    href: "#market",
    en: { title: "Market Hall", description: "For collectors, by collectors.", linkLabel: "Visit the Hall" },
    nl: { title: "Markthal", description: "Voor verzamelaars, door verzamelaars.", linkLabel: "Bezoek de Markthal" },
  },
  {
    number: "04",
    image: "/images/world-icons/logbook.webp",
    href: "#logbook",
    en: { title: "Logbook", description: "Stories, updates and the journey together.", linkLabel: "Read the Logbook" },
    nl: { title: "Logboek", description: "Verhalen, updates en de reis samen.", linkLabel: "Lees het Logboek" },
  },
  {
    number: "05",
    image: "/images/world-icons/vault.webp",
    href: "#vault",
    en: { title: "Vault", description: "Protection for what deserves to remain.", linkLabel: "Enter the Vault" },
    nl: { title: "Kluis", description: "Bescherming voor wat bewaard moet blijven.", linkLabel: "Betreed de Kluis" },
  },
];

export function WorldNavigationSection() {
  const { language } = useLanguage();

  return (
    <section className="world-nav-section" id="world">
      <div className="world-nav-section__inner">
        <SectionHeading
          title={language === "en" ? "Explore Dock Vault" : "Ontdek Dock Vault"}
          className="world-nav-section__heading"
        />

        <div className="world-nav-grid">
          {locations.map((location) => {
            const copy = location[language];
            return (
              <a
                className="world-nav-card"
                href={location.href}
                key={location.number}
                aria-label={`${copy.title}: ${copy.description}`}
              >
                <span className="world-nav-card__number">{location.number}</span>
                <img className="world-nav-card__image" src={location.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <h3 className="world-nav-card__title">{copy.title}</h3>
                <p>{copy.description}</p>
                <span className="world-nav-card__link">{copy.linkLabel}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
