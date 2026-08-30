"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function VaultQuoteSection() {
  const { language } = useLanguage();

  return (
    <section className="vault-quote">
      <p className="eyebrow">
        {language === "en" ? "The rule of the room" : "De regel van deze ruimte"}
      </p>
      <blockquote>
        {language === "en"
          ? "“A vault is not defined by what it hides,"
          : "“Een kluis wordt niet bepaald door wat ze verbergt,"}
        <br />
        {language === "en"
          ? "but by what it chooses to preserve.”"
          : "maar door wat ze kiest te bewaren.”"}
      </blockquote>
      <a className="primary-cta" href="/#home">
        <span>{language === "en" ? "Return to Dock Vault" : "Terug naar Dock Vault"}</span>
        <b aria-hidden="true">↑</b>
      </a>
    </section>
  );
}
