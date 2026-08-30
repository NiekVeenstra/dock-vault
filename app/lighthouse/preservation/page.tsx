import type { Metadata } from "next";
import { PreservationGuide } from "@/components/lighthouse/PreservationGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Preservation — Dock Vault Lighthouse",
  description:
    "A calm introduction to protecting and preserving One Piece TCG cards, sealed products and collections.",
};

export default function PreservationPage() {
  return (
    <main className="preservation-page">
      <PreservationGuide />
      <SiteFooter />
    </main>
  );
}
