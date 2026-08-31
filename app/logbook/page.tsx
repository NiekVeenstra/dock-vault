import type { Metadata } from "next";
import { LogbookIndex } from "@/components/logbook/LogbookIndex";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "The Logbook",
  description:
    "Volg de opbouw van Dock Vault via notities, mijlpalen en keuzes die in het Logbook worden vastgelegd.",
  alternates: { canonical: "/logbook" },
};

export default function LogbookPage() {
  return (
    <main className="logbook-index-page">
      <LogbookIndex />
      <SiteFooter />
    </main>
  );
}
