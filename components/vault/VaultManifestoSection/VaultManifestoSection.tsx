"use client";

import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    eyebrow: "How the archive works",
    heading1: "Keep the context.",
    heading2: "Not a scorecard.",
    copy1:
      "A place in The Vault is not earned by price, rarity or completion. What matters is the context around a piece: why it matters, how it arrived, what was learned and how it is cared for.",
    copy2:
      "Records can remain unfinished. New details may be added as the collection and the person behind it continue to grow.",
  },
  nl: {
    eyebrow: "Hoe het archief werkt",
    heading1: "Bewaar de context.",
    heading2: "Geen scorekaart.",
    copy1:
      "Een plek in De Kluis wordt niet verdiend door prijs, zeldzaamheid of compleetheid. De context rond een stuk telt: waarom het betekenis heeft, hoe het erbij kwam, wat ervan is geleerd en hoe ervoor wordt gezorgd.",
    copy2:
      "Een record mag onaf blijven. Nieuwe details kunnen worden toegevoegd terwijl de collectie en de persoon erachter verder groeien.",
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
