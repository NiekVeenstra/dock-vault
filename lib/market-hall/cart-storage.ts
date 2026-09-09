import { parseCart, type CartInput } from "./cart";
export type PendingCheckout = { receipt: string; revisions: Record<string, string> };
export type StoredCart = { items: CartInput[]; revisions: Record<string, string>; pending: PendingCheckout[] };
export function readStoredCart(raw: string | null): StoredCart {
  const value = raw ? JSON.parse(raw) : [];
  if (Array.isArray(value)) return { items: parseCart(value), revisions: {}, pending: [] };
  if (!value || !Array.isArray(value.pending) || value.pending.length > 10 || !value.revisions || typeof value.revisions !== "object") throw new Error("storage");
  for (const pending of value.pending) {
    if (typeof pending.receipt !== "string" || pending.receipt.length > 12000 || !pending.revisions || typeof pending.revisions !== "object") throw new Error("storage");
  }
  return { items: parseCart(value.items), revisions: value.revisions, pending: value.pending };
}
// A line edited/removed/re-added since checkout is preserved for manual review.
// Consuming the receipt and updating items are saved in one localStorage write.
export function applyPaidReceipt(cart: StoredCart, receipt: string, paid: CartInput[]) {
  const pending = cart.pending.find((entry) => entry.receipt === receipt);
  if (!pending) return { cart, review: false };
  let review = false;
  const items = cart.items.flatMap((line) => {
    const bought = paid.find((item) => item.variantId === line.variantId);
    if (!bought) return [line];
    if (cart.revisions[line.variantId] !== pending.revisions[line.variantId]) { review = true; return [line]; }
    const quantity = Math.max(0, line.quantity - bought.quantity);
    return quantity ? [{ ...line, quantity }] : [];
  });
  return { cart: { ...cart, items, pending: cart.pending.filter((entry) => entry.receipt !== receipt) }, review };
}
