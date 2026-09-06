"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to Dock Vault",
    eyebrow: "A quieter room lies beyond",
    line1: "Some collections deserve",
    line2: "a place to be remembered.",
    copy: "The Vault is Dock Vault’s personal archive for pieces and collecting stories worth preserving with context and care. It grows slowly, one honest record at a time.",
    cta: "Explore the rooms",
  },
  nl: {
    back: "← Terug naar Dock Vault",
    eyebrow: "Daarachter ligt een stillere ruimte",
    line1: "Sommige collecties verdienen",
    line2: "een plek om herinnerd te worden.",
    copy: "De Kluis is het persoonlijke archief van Dock Vault voor stukken en verzamelverhalen die met context en zorg bewaard mogen blijven. Het groeit langzaam, één eerlijk record tegelijk.",
    cta: "Ontdek de ruimtes",
  },
} as const;

export function VaultEntrySection() {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section className="vault-entry">
      <HarborHeader />
      <HarborDivider />

      <div className="vault-entry__scene" aria-hidden="true">
        <img src="/images/vault-interior.webp" alt="" />
      </div>
      <div className="vault-entry__mist" aria-hidden="true" />

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
