import type { Metadata } from "next";
import { LogbookIndex } from "@/components/logbook/LogbookIndex";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "The Logbook — Dock Vault",
  description:
    "Follow the Dock Vault build through notes, milestones and decisions recorded as the Harbor takes shape.",
};

export default function LogbookPage() {
  return (
    <main className="logbook-index-page">
      <LogbookIndex />
      <SiteFooter />
    </main>
  );
}
