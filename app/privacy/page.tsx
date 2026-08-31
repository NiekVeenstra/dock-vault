import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Lees hoe Dock Vault in de huidige Alpha-versie omgaat met privacy en technische gegevens.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-root">
      <LegalPage kind="privacy" />
      <SiteFooter />
    </main>
  );
}
