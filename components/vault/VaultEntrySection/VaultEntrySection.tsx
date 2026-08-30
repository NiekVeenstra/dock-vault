"use client";

import { HarborDivider } from "@/components/HarborDivider";
import { HarborHeader } from "@/components/HarborHeader";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    back: "← Return to the Harbor",
    eyebrow: "The door has opened",
    enter: "Enter",
    vault: "The Vault.",
    copy: "Not everything inside Dock Vault is meant to be sold. Some things exist because they deserve to be preserved.",
  },
  nl: {
    back: "← Terug naar de Haven",
    eyebrow: "De deur is geopend",
    enter: "Betreed",
    vault: "De Kluis.",
    copy: "Niet alles binnen Dock Vault is bedoeld om verkocht te worden. Sommige dingen bestaan omdat ze het verdienen om bewaard te blijven.",
  },
};

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
          {copy.enter}
          <br />
          <em>{copy.vault}</em>
        </h1>
        <p>{copy.copy}</p>
      </div>
    </section>
  );
}
