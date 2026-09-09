import "server-only";

const ENABLED_VALUE = "true";

/**
 * Runtime gate for every Market Hall catalogue surface.
 *
 * The default is deliberately closed. This is not tied to NODE_ENV: a preview
 * may run a production build, and production must only open after an explicit
 * environment-level decision.
 */
export function isMarketHallEnabled() {
  return process.env.MARKET_HALL_ENABLED?.trim().toLowerCase() === ENABLED_VALUE;
}


/** This integration is deliberately restricted to the known development store. */
export function isTestCheckoutEnabled() {
  return isMarketHallEnabled() && process.env.SHOPIFY_TEST_CHECKOUT_ENABLED === "true" &&
    process.env.SHOPIFY_STORE_DOMAIN?.trim().toLowerCase() === "dock-vault-test.myshopify.com";
}
