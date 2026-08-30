"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function SiteFooter() {
  const { language } = useLanguage();

  return (
    <footer>
      <p>Dock Vault</p>
      <span>{language === "en" ? "The Harbor is yours." : "De Haven is van jou."}</span>
    </footer>
  );
}
