import type { Metadata } from "next";
import { AlphaBeginsEntry } from "@/components/logbook/AlphaBeginsEntry";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Dock Vault Alpha Begins — Dock Vault Logbook",
  description:
    "A Dock Vault founding note about the start of alpha, the first working Harbor and the standards guiding what comes next.",
};

export default function AlphaBeginsPage() {
  return (
    <main className="logbook-entry-page">
      <AlphaBeginsEntry />
      <SiteFooter />
    </main>
  );
}
