import type { Metadata } from "next";
import { BeginJourneyGuide } from "@/components/lighthouse/BeginJourneyGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Begin the Journey | The Lighthouse",
  description:
    "Begin rustig met One Piece TCG. Kies spelen, verzamelen of beide en krijg een concrete eerste stap voor je deck, verzameldoel en kaartbescherming.",
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
