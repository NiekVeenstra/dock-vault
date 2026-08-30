"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  AnchorIcon,
  DiamondIcon,
  LighthouseIcon,
  LogbookIcon,
  MarketIcon,
} from "@/components/Icons";

const items = [
  {
    labels: { en: "Lighthouse", nl: "Vuurtoren" },
    href: "#lighthouse",
    Icon: LighthouseIcon,
  },
  {
    labels: { en: "Harbor", nl: "Haven" },
    href: "#harbor",
    Icon: AnchorIcon,
  },
  {
    labels: { en: "Market Hall", nl: "Markthal" },
    href: "#market",
    Icon: MarketIcon,
  },
  {
    labels: { en: "Logbook", nl: "Logboek" },
    href: "#logbook",
    Icon: LogbookIcon,
  },
  {
    labels: { en: "Vault", nl: "Kluis" },
    href: "#vault",
    Icon: DiamondIcon,
  },
];

export function HarborNav() {
  const [activeSection, setActiveSection] = useState("lighthouse");
  const { language } = useLanguage();

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.45;
      let currentSection = items[0].href.slice(1);

      for (const item of items) {
        const id = item.href.slice(1);
        const section = document.getElementById(id);

        if (!section) continue;

        if (section.getBoundingClientRect().top <= marker) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <nav
      className="harbor-nav"
      aria-label={language === "en" ? "Dock Vault sections" : "Dock Vault secties"}
    >
      {items.map(({ labels, href, Icon }) => {
        const id = href.slice(1);
        const isActive = activeSection === id;

        return (
          <a
            href={href}
            key={href}
            className={isActive ? "is-active" : ""}
            aria-current={isActive ? "location" : undefined}
            onClick={() => setActiveSection(id)}
          >
            <Icon className="harbor-nav__icon" />
            <span>{labels[language]}</span>
          </a>
        );
      })}
    </nav>
  );
}
