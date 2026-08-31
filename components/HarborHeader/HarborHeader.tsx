"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const navigation = {
  en: {
    eyebrow: "Navigate the Harbor",
    motto: "The Harbor is yours.",
    open: "Open navigation",
    close: "Close navigation",
    home: "Dock Vault home",
    links: [
      ["The Lighthouse", "/#lighthouse"],
      ["Harbor", "/#harbor"],
      ["The Market Hall", "/#market"],
      ["The Logbook", "/logbook"],
      ["Our Philosophy", "/#philosophy"],
      ["The Vault", "/vault"],
    ],
  },
  nl: {
    eyebrow: "Navigeer door de Haven",
    motto: "De Haven is van jou.",
    open: "Navigatie openen",
    close: "Navigatie sluiten",
    home: "Dock Vault home",
    links: [
      ["De Vuurtoren", "/#lighthouse"],
      ["De Haven", "/#harbor"],
      ["De Markthal", "/#market"],
      ["Het Logboek", "/logbook"],
      ["Onze Filosofie", "/#philosophy"],
      ["De Kluis", "/vault"],
    ],
  },
} as const;

export function HarborHeader() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const copy = navigation[language];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="harbor-header">
        <a
          href="/#home"
          className="harbor-header__brand"
          aria-label={copy.home}
        >
          <Image
            src="/images/dock-vault-logo.png"
            alt="Dock Vault — The Harbor Is Yours"
            width={1024}
            height={1024}
            priority
          />
        </a>

        <div className="harbor-header__controls">
          <div className="language-toggle" aria-label="Language / Taal">
            <button
              type="button"
              className={language === "en" ? "is-active" : ""}
              aria-label="Switch to English"
              aria-pressed={language === "en"}
              title="English"
              onClick={() => setLanguage("en")}
            >
              <span aria-hidden="true">🇬🇧</span>
            </button>
            <button
              type="button"
              className={language === "nl" ? "is-active" : ""}
              aria-label="Schakel naar Nederlands"
              aria-pressed={language === "nl"}
              title="Nederlands"
              onClick={() => setLanguage("nl")}
            >
              <span aria-hidden="true">🇳🇱</span>
            </button>
          </div>

          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="main-menu"
            aria-label={copy.open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`menu-backdrop${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside
        id="main-menu"
        className={`menu-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <button
          className="menu-drawer__close"
          type="button"
          onClick={() => setOpen(false)}
          aria-label={copy.close}
        >
          ×
        </button>
        <p className="menu-drawer__eyebrow">{copy.eyebrow}</p>
        <nav>
          {copy.links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <span>→</span>
            </a>
          ))}
        </nav>
        <p className="menu-drawer__motto">{copy.motto}</p>
      </aside>
    </>
  );
}
