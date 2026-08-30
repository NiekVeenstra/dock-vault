import type { Metadata } from "next";
import { LighthouseLitEntry } from "@/components/logbook/LighthouseLitEntry";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "The Lighthouse Has Been Lit — Dock Vault Logbook",
  description:
    "The first Dock Vault logbook entry: why the Lighthouse exists and what it means for collectors entering the Harbor.",
};

export default function LighthouseLitPage() {
  return (
    <main className="logbook-entry-page">
      <LighthouseLitEntry />
      <SiteFooter />
    </main>
  );
}
