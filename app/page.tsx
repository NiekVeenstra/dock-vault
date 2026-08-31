import type { Metadata } from "next";
import { HarborNav } from "@/components/HarborNav";
import {
  HarborSection,
  HeroSection,
  LighthouseSection,
  LogbookSection,
  MarketHallSection,
  PhilosophySection,
  SiteFooter,
  VaultSection,
  WorldNavigationSection,
} from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LighthouseSection />
      <WorldNavigationSection />
      <HarborSection />
      <MarketHallSection />
      <LogbookSection />
      <VaultSection />
      <PhilosophySection />
      <SiteFooter />
      <HarborNav />
    </main>
  );
}
