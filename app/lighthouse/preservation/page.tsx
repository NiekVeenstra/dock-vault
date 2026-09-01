import type { Metadata } from "next";
import { PreservationGuide } from "@/components/lighthouse/PreservationGuide";
import { SiteFooter } from "@/components/sections";

export const metadata: Metadata = {
  title: "Preservation | The Lighthouse",
  description:
    "Een rustige introductie tot het beschermen en bewaren van One Piece TCG-kaarten, sealed producten en collecties.",
  alternates: { canonical: "/lighthouse/preservation" },
};

export default function PreservationPage() {
  return (
    <main className="preservation-page">
      <PreservationGuide />
      <SiteFooter />
    </main>
  );
}
