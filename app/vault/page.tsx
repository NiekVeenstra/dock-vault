import type { Metadata } from "next";
import { SiteFooter } from "@/components/sections";
import {
  VaultCollectionRoomsSection,
  VaultEntrySection,
  VaultManifestoSection,
  VaultQuoteSection,
} from "@/components/vault";

export const metadata: Metadata = {
  title: "The Vault",
  description:
    "Ontdek De Kluis van Dock Vault: een persoonlijk archief voor verzamelstukken, verhalen en de zorg waarmee ze worden bewaard.",
  alternates: { canonical: "/vault" },
};

export default function VaultPage() {
  return (
    <main className="vault-page">
      <VaultEntrySection />
      <VaultManifestoSection />
      <VaultCollectionRoomsSection />
      <VaultQuoteSection />
      <SiteFooter />
    </main>
  );
}
