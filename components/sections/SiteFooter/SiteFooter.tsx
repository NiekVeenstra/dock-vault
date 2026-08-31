"use client";

import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  en: {
    country: "Netherlands",
    motto: "The Harbor is yours.",
    explore: "Explore",
    lighthouse: "The Lighthouse",
    logbook: "The Logbook",
    vault: "The Vault",
    contact: "Contact",
    email: "Email us",
    instagram: "Instagram",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    chamber: "KVK",
    rights: "Dock Vault. Built for collectors.",
  },
  nl: {
    country: "Nederland",
    motto: "De Haven is van jou.",
    explore: "Ontdek",
    lighthouse: "De Vuurtoren",
    logbook: "Het Logboek",
    vault: "De Kluis",
    contact: "Contact",
    email: "Mail ons",
    instagram: "Instagram",
    legal: "Juridisch",
    privacy: "Privacy",
    terms: "Voorwaarden",
    chamber: "KVK",
    rights: "Dock Vault. Gebouwd voor verzamelaars.",
  },
} as const;

export function SiteFooter() {
  const { language } = useLanguage();
  const t = copy[language];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <a className="site-footer__brand" href="/#home">
            Dock Vault
          </a>
          <p className="site-footer__motto">{t.motto}</p>
          <p className="site-footer__location">{t.country}</p>
        </div>

        <div className="site-footer__columns">
          <div className="site-footer__column">
            <p className="site-footer__heading">{t.explore}</p>
            <a href="/#lighthouse">{t.lighthouse}</a>
            <a href="/logbook">{t.logbook}</a>
            <a href="/vault">{t.vault}</a>
          </div>

          <div className="site-footer__column">
            <p className="site-footer__heading">{t.contact}</p>
            <a className="site-footer__contact-button" href="mailto:dockvaultnl@gmail.com">
              {t.email}
            </a>
            <a
              href="https://www.instagram.com/dockvault/"
              target="_blank"
              rel="noreferrer"
            >
              {t.instagram} ↗
            </a>
          </div>

          <div className="site-footer__column">
            <p className="site-footer__heading">{t.legal}</p>
            <a href="/privacy">{t.privacy}</a>
            <a href="/terms">{t.terms}</a>
            <span>{t.chamber}: 42094293</span>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {year} {t.rights}</span>
        <span>dockvault.nl</span>
      </div>
    </footer>
  );
}
