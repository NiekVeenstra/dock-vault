"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to Dock Vault",
    eyebrow: "A quieter room lies beyond",
    line1: "Some collections deserve",
    line2: "more than ownership.",
    copy: "The Vault is where Dock Vault preserves the projects, milestones and pieces that are worth remembering — not because they are expensive, but because they carry a story.",
    cta: "Explore the archive",
  },
  nl: {
    back: "← Terug naar Dock Vault",
    eyebrow: "Daarachter ligt een stillere ruimte",
    line1: "Sommige collecties verdienen",
    line2: "meer dan bezit.",
    copy: "The Vault is de plek waar Dock Vault projecten, mijlpalen en stukken bewaart die het herinneren waard zijn — niet omdat ze duur zijn, maar omdat ze een verhaal dragen.",
    cta: "Ontdek het archief",
  },
} as const;

export function VaultEntrySection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="vault-entry">
      <HarborHeader />
      <HarborDivider />

      <div className="vault-entry__mist" aria-hidden="true" />
      <div className="vault-entry__door" aria-hidden="true">
        <div className="vault-entry__light" />
        <img src="/images/vault-door.png" alt="" />
      </div>

      <div className="vault-entry__content">
        <a className="vault-back-link" href="/#vault">{copy.back}</a>
        <p className="eyebrow">{copy.eyebrow}</p>
        <div className="small-rule" aria-hidden="true"><span /></div>
        <h1>
          {copy.line1}
          <br />
          <em>{copy.line2}</em>
        </h1>
        <p>{copy.copy}</p>
        <a className="primary-cta" href="#vault-archive">
          <span>{copy.cta}</span>
          <b aria-hidden="true">↓</b>
        </a>
      </div>
    </section>
  );
}
