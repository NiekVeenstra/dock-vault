import { HarborNav } from "@/components/HarborNav";
import { SiteFooter } from "@/components/sections";
import {
  ArchiveProgressSection,
  ArtifactWallSection,
  VaultEntrySection,
  VaultManifestoSection,
  VaultQuoteSection,
} from "@/components/vault";

export default function VaultPage() {
  return (
    <main className="vault-page">
      <VaultEntrySection />
      <VaultManifestoSection />
      <ArtifactWallSection />
      <ArchiveProgressSection />
      <VaultQuoteSection />
      <SiteFooter />
      <HarborNav />
    </main>
  );
}
