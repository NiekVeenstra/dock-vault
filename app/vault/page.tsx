import { HarborNav } from "@/components/HarborNav";
import { SiteFooter } from "@/components/sections";
import {
  ArchiveProgressSection,
  ArtifactWallSection,
  VaultCollectionRoomsSection,
  VaultEntrySection,
  VaultManifestoSection,
  VaultQuoteSection,
} from "@/components/vault";

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
      <HarborNav />
    </main>
  );
}
