import type { Metadata } from "next";
import { AlphaBeginsEntry } from "@/components/logbook/AlphaBeginsEntry";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Dock Vault Alpha Begins",
  description:
    "Een Logbook-entry over de start van Dock Vault Alpha, de eerste werkende Harbor en de standaarden voor wat hierna komt.",
  alternates: { canonical: "/logbook/dock-vault-alpha-begins" },
};

export default function AlphaBeginsPage() {
  return (
    <main className="logbook-entry-page">
      <AlphaBeginsEntry />
      <SiteFooter />
    </main>
  );
}
