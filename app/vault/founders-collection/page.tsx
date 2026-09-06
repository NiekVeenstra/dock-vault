import type { Metadata } from "next";
import { FoundersCollection } from "@/components/vault/FoundersCollection";
import { getFounderCollectionRecords } from "@/content/vault/foundersCollection";
import { shouldShowFounderCollectionDrafts } from "@/content/vault/foundersCollectionPreview";

export const metadata: Metadata = {
  title: "Founder’s Collection",
  description:
    "De persoonlijke archiefruimte van Dock Vault, opgebouwd rond betekenis, herinnering en zorg voor de collectie.",
  alternates: { canonical: "/vault/founders-collection" },
};

export default function FoundersCollectionPage() {
  const showDrafts = shouldShowFounderCollectionDrafts();
  const records = getFounderCollectionRecords({ includeDrafts: showDrafts });

  return <FoundersCollection records={records} draftPreview={showDrafts} />;
}
