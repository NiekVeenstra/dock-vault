import type { Metadata } from "next";
import { BeginJourneyGuide } from "@/components/lighthouse/BeginJourneyGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Begin the Journey — Dock Vault Lighthouse",
  description:
    "A calm first route into One Piece TCG: choosing whether to play, collect or do both, understanding products and making the first purchases with intention.",
};

export default function BeginJourneyPage() {
  return (
    <main className="journey-page">
      <BeginJourneyGuide />
      <SiteFooter />
    </main>
  );
}
