"use client";

import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    eyebrow: "The purpose of the room",
    heading1: "Preserve the journey.",
    heading2: "Not just the result.",
    copy1: "A finished collection can be impressive, but the gaps, searches, choices and small milestones are what give it meaning. The Vault keeps that history visible.",
    copy2: "This is not a showcase built around status. It is a living archive: personal, selective and allowed to remain unfinished while the collection continues to grow.",
  },
  nl: {
    eyebrow: "Het doel van deze ruimte",
    heading1: "Bewaar de reis.",
    heading2: "Niet alleen het resultaat.",
    copy1: "Een voltooide collectie kan indrukwekkend zijn, maar de ontbrekende stukken, zoektochten, keuzes en kleine mijlpalen geven haar betekenis. The Vault houdt die geschiedenis zichtbaar.",
    copy2: "Dit is geen etalage die om status draait. Het is een levend archief: persoonlijk, selectief en bewust onaf zolang de collectie verder groeit.",
  },
} as const;

export function VaultManifestoSection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="vault-manifesto">
      <div className="vault-manifesto__inner">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>
          {copy.heading1}
          <span>{copy.heading2}</span>
        </h2>
        <div className="vault-manifesto__copy">
          <p>{copy.copy1}</p>
          <p>{copy.copy2}</p>
        </div>
      </div>
    </section>
  );
}
