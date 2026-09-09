import { isMarketHallEnabled } from "@/lib/market-hall/config";
import { TestCartProvider } from "@/components/market-hall/TestCart";

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  return isMarketHallEnabled() ? <TestCartProvider>{children}</TestCartProvider> : children;
}
