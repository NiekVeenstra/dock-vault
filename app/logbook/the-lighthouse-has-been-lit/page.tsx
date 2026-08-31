import type { Metadata } from "next";
import { LighthouseLitEntry } from "@/components/logbook/LighthouseLitEntry";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "The Lighthouse Has Been Lit",
  description:
    "De eerste Dock Vault Logbook-entry: waarom The Lighthouse bestaat en wat dit betekent voor verzamelaars die de Harbor binnenkomen.",
  alternates: { canonical: "/logbook/the-lighthouse-has-been-lit" },
};

export default function LighthouseLitPage() {
  return (
    <main className="logbook-entry-page">
      <LighthouseLitEntry />
      <SiteFooter />
    </main>
  );
}
