import type { Metadata } from "next";
import { FoundersCollection } from "@/components/vault/FoundersCollection";

export const metadata: Metadata = {
  title: "Founder’s Collection",
  description:
    "De persoonlijke archiefruimte van Dock Vault, opgebouwd rond betekenis, herinnering en zorg voor de collectie.",
  alternates: { canonical: "/vault/founders-collection" },
};

export default function FoundersCollectionPage() {
  return <FoundersCollection />;
}
