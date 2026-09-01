import type { Metadata } from "next";
import { GradingGuide } from "@/components/lighthouse/GradingGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Grading | The Lighthouse",
  description:
    "Een rustige introductie tot One Piece TCG-grading: conditie, verwachtingen, voorbereiding en wanneer graden zinvol is.",
  alternates: { canonical: "/lighthouse/grading" },
};

export default function GradingPage() {
  return (
    <main className="grading-page">
      <GradingGuide />
      <SiteFooter />
    </main>
  );
}
