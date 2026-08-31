import type { Metadata } from "next";
import { SiteFooter } from "@/components/sections";
import {
  ArchiveProgressSection,
  ArtifactWallSection,
  VaultCollectionRoomsSection,
  VaultEntrySection,
  VaultManifestoSection,
  VaultQuoteSection,
} from "@/components/vault";

export const metadata: Metadata = {
  title: "The Vault",
  description:
    "Ontdek The Vault van Dock Vault: het gecureerde archief voor collecties, master set journeys, playsets en stukken met een verhaal.",
  alternates: { canonical: "/vault" },
};

export default function VaultPage() {
  return (
    <main className="vault-page">
      <VaultEntrySection />
      <VaultManifestoSection />
      <VaultCollectionRoomsSection />
      <ArchiveProgressSection />
      <ArtifactWallSection />
      <VaultQuoteSection />
      <SiteFooter />
    </main>
  );
}
