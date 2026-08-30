import type { Metadata } from "next";
import { GradingGuide } from "@/components/lighthouse/GradingGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Grading — Dock Vault Lighthouse",
  description:
    "A calm introduction to grading One Piece TCG cards: condition, expectations, preparation and choosing when grading makes sense.",
};

export default function GradingPage() {
  return (
    <main className="grading-page">
      <GradingGuide />
      <SiteFooter />
    </main>
  );
}
