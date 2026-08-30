"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function VaultQuoteSection() {
  const { language } = useLanguage();

  return (
    <section className="vault-quote">
      <blockquote>
        {language === "en"
          ? "“A vault is not defined by what it hides,"
          : "“Een kluis wordt niet bepaald door wat ze verbergt,"}
        <br />
        {language === "en"
          ? "but by what it chooses to preserve.”"
          : "maar door wat ze kiest te bewaren.”"}
      </blockquote>
      <a className="quiet-link" href="/#market">
        {language === "en" ? "Continue to the Market Hall" : "Ga verder naar de Markthal"} <span>→</span>
      </a>
    </section>
  );
}
