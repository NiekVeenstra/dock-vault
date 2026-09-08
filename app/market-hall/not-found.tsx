import { MarketHallPreparation, MarketHallStatus } from "@/components/market-hall";
import { isMarketHallEnabled } from "@/lib/market-hall/config";

export default function MarketHallNotFound() {
  return isMarketHallEnabled() ? <MarketHallStatus kind="missing" /> : <MarketHallPreparation />;
}
