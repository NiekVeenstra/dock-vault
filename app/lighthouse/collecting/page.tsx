import type { Metadata } from "next";
import { CollectingGuide } from "@/components/lighthouse/CollectingGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Collecting | The Lighthouse",
  description:
    "Een rustige introductie tot One Piece TCG verzamelen met ruimte voor betekenis, veranderende interesses, budget, sets, playsets en sealed.",
  alternates: { canonical: "/lighthouse/collecting" },
};

export default function CollectingPage() {
  return (
    <main className="collecting-page">
      <CollectingGuide />
      <SiteFooter />
    </main>
  );
}
