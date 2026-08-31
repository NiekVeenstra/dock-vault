import type { Metadata } from "next";
import { CollectingGuide } from "@/components/lighthouse/CollectingGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Collecting — The Lighthouse",
  description:
    "Een rustige introductie tot bewust One Piece TCG verzamelen: doelen, budget, master sets, playsets, sealed en voortgang.",
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
