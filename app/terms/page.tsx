import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Voorwaarden",
  description: "Voorwaarden voor het gebruik van de huidige Dock Vault Alpha-website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="legal-root">
      <LegalPage kind="terms" />
      <SiteFooter />
    </main>
  );
}
