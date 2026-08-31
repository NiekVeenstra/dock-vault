import type { Metadata } from "next";
import { BeginJourneyGuide } from "@/components/lighthouse/BeginJourneyGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Begin the Journey — The Lighthouse",
  description:
    "Een eerste route door One Piece TCG: spelen, verzamelen of beide, producten begrijpen en bewust je eerste aankopen doen.",
  alternates: { canonical: "/lighthouse/begin-the-journey" },
};

export default function BeginJourneyPage() {
  return (
    <main className="journey-page">
      <BeginJourneyGuide />
      <SiteFooter />
    </main>
  );
}
