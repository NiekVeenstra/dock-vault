/**
 * Server-side preview switch for Founder’s Collection draft content.
 *
 * Local development shows drafts by default.
 * A production-built development preview can opt in with:
 *   DOCK_VAULT_CONTENT_MODE=draft npm run build
 *
 * Public production should leave the variable unset (or set it to "public").
 * The switch is intentionally server-side so it is not exposed to the browser.
 */
export function shouldShowFounderCollectionDrafts() {
  const mode = process.env.DOCK_VAULT_CONTENT_MODE?.trim().toLowerCase();

  if (mode === "draft") return true;
  if (mode === "public") return false;

  return process.env.NODE_ENV === "development";
}
