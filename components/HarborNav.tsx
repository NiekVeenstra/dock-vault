"use client";

import { useEffect, useState } from "react";
import {
  AnchorIcon,
  DiamondIcon,
  LighthouseIcon,
  LogbookIcon,
  MarketIcon,
} from "./Icons";

const items = [
  { label: "Lighthouse", href: "#lighthouse", Icon: LighthouseIcon },
  { label: "Harbor", href: "#harbor", Icon: AnchorIcon },
  { label: "Market Hall", href: "#market", Icon: MarketIcon },
  { label: "Logbook", href: "#logbook", Icon: LogbookIcon },
  { label: "Vault", href: "#vault", Icon: DiamondIcon },
];

export function HarborNav() {
  const [activeSection, setActiveSection] = useState("lighthouse");

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
    <nav className="harbor-nav" aria-label="Dock Vault sections">
      {items.map(({ label, href, Icon }) => {
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
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
