"use client";

import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    eyebrow: "The purpose of the room",
    heading1: "The Vault protects",
    heading2: "stories, not status.",
    copy1: "This is the personal archive behind Dock Vault: an honest record of collections being built, gaps still open and milestones worth remembering.",
    copy2: "Nothing here needs to appear complete. The journey itself is part of what is being preserved.",
  },
  nl: {
    eyebrow: "Het doel van deze ruimte",
    heading1: "De Kluis beschermt",
    heading2: "verhalen, geen status.",
    copy1: "Dit is het persoonlijke archief achter Dock Vault: een eerlijk verslag van verzamelingen die worden opgebouwd, gaten die nog openstaan en mijlpalen die het herinneren waard zijn.",
    copy2: "Niets hier hoeft compleet te lijken. De reis zelf is onderdeel van wat wordt bewaard.",
  },
};

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
