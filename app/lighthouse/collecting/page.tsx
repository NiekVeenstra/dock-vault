import type { Metadata } from "next";
import { CollectingGuide } from "@/components/lighthouse/CollectingGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Collecting — Dock Vault Lighthouse",
  description:
    "A calm introduction to collecting One Piece TCG with intention: goals, budgets, master sets, playsets, sealed products and tracking progress.",
};

export default function CollectingPage() {
  return (
    <main className="collecting-page">
      <CollectingGuide />
      <SiteFooter />
    </main>
  );
}
