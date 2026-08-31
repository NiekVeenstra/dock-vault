"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    title: "The Vault",
    alt: "A monumental Dock Vault door built into an ancient stone wall, with warm light shining through the opening",
    kicker: "A quieter room lies beyond",
    heading1: "Some collections deserve",
    heading2: "more than ownership.",
    copy: "The Vault is not built to hide treasures. It exists to protect the stories, milestones and patient work that deserve to remain.",
    aria: "A glimpse inside the Vault",
    tags: ["Founder's Collection", "Master Set Journeys", "Playset Archive"],
    cta: "Enter the Vault",
    whisper: "The door opens only for those who choose to look closer.",
  },
  nl: {
    title: "De Kluis",
    alt: "Een monumentale Dock Vault-kluisdeur in een oude stenen muur, met warm licht dat door de opening schijnt",
    kicker: "Daarachter wacht een stillere ruimte",
    heading1: "Sommige verzamelingen verdienen",
    heading2: "meer dan alleen bezit.",
    copy: "De Kluis is niet gebouwd om schatten te verbergen. Ze bestaat om de verhalen, mijlpalen en het geduldige werk te beschermen die bewaard mogen blijven.",
    aria: "Een blik in de Kluis",
    tags: ["Oprichterscollectie", "Master Set-reizen", "Playset-archief"],
    cta: "Betreed de Kluis",
    whisper: "De deur opent alleen voor wie ervoor kiest beter te kijken.",
  },
};

export function VaultSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="vault-portal" id="vault">
      <div className="vault-portal__atmosphere" aria-hidden="true" />

      <figure className="vault-portal__visual">
        <div className="vault-portal__image-glow" aria-hidden="true" />
        <img src="/images/vault-gate.webp" alt={copy.alt} loading="lazy" decoding="async" />
      </figure>

      <div className="vault-portal__inner">
        <SectionHeading title={copy.title} className="vault-portal__heading" />

        <div className="vault-portal__layout">
          <div className="vault-portal__content">
            <p className="vault-portal__kicker">{copy.kicker}</p>
            <h2>
              {copy.heading1}
              <span>{copy.heading2}</span>
            </h2>

            <p>{copy.copy}</p>

            <div className="vault-portal__glimpse" aria-label={copy.aria}>
              {copy.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>

            <a className="primary-cta vault-portal__cta" href="/vault">
              <span>{copy.cta}</span>
              <b aria-hidden="true">→</b>
            </a>
          </div>
        </div>

        <p className="vault-portal__whisper">{copy.whisper}</p>
      </div>
    </section>
  );
}
