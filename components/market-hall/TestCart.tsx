"use client";

import Link from "next/link";
import { applyPaidReceipt, readStoredCart, type StoredCart } from "@/lib/market-hall/cart-storage";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { HarborHeader } from "@/components/HarborHeader";
import { HarborDivider } from "@/components/HarborDivider";
import { SiteFooter } from "@/components/sections";
import type { ProductVariant } from "@/lib/commerce/types";
import { MAX_CART_LINES, MAX_CART_QUANTITY, parseCart, type CartInput, type CartLine, type CartResult } from "@/lib/market-hall/cart";
import { formatMoney } from "./format";
import "./TestCart.scss";

const storageKey = "dock-vault-test-cart-v1";
const copy = {
  nl: {
    paid: "Je testbetaling is bevestigd. De gekochte artikelen zijn uit je winkelmand verwijderd.",
    paidReview: "Je testbetaling is bevestigd. Artikelen die je daarna hebt gewijzigd, zijn behouden. Controleer die aantallen zelf.",
    paymentPending: "Er is nog geen geslaagde betaling bevestigd. Je winkelmand blijft bewaard.",
    paymentError: "De betaalstatus kon niet worden gecontroleerd. Je winkelmand blijft bewaard. Probeer het opnieuw.",
    paymentCheck: "Betaalstatus controleren", paymentChecking: "Betaalstatus controleren…",
    manualCheckout: "Automatisch bijwerken na betaling is nog niet ingesteld. Maak na een geslaagde betaling de winkelmand zelf leeg.",
    checkoutChanged: "Prijs, voorraad of beschikbaarheid is gewijzigd. Controleer de winkelmand opnieuw voordat je doorgaat.", checkoutError: "De testcheckout kon niet worden geopend. Probeer het opnieuw.", checkout: "Naar Shopify-testcheckout", checkoutNote: "Testcheckout. Gebruik uitsluitend testbetaalgegevens. Verzendkosten en het definitieve totaal zie je bij Shopify.",
    title: "Testwinkelmand", add: "Toevoegen aan testwinkelmand", busy: "Voorraad controleren…", empty: "Je testwinkelmand is nog leeg.",
    added: "Je testwinkelmand is bijgewerkt.", adjusted: "De voorraad is gewijzigd of een product is niet beschikbaar. Je winkelmand is aangepast aan de actuele voorraad.",
    error: "De winkelmand kon niet worden gecontroleerd. Probeer het opnieuw.", storage: "Je browser kon de winkelmand niet bewaren. Deze blijft alleen tijdens dit bezoek beschikbaar.",
    limit: "Er passen maximaal 20 verschillende varianten in de testwinkelmand.", invalid: "De bewaarde winkelmand kon niet worden hersteld. Voeg de producten opnieuw toe.",
    remove: "Verwijderen", clear: "Winkelmand leegmaken", quantity: "Aantal", subtotal: "Subtotaal producten", refresh: "Prijs en voorraad opnieuw controleren",
    back: "Verder kijken", unavailable: "Deze variant kan niet worden toegevoegd: geen bevestigde voorraad.",
    note: "Testomgeving. Deze winkelmand reserveert geen voorraad. Bestellen en betalen zijn nog niet actief.", stock: "beschikbaar", unit: "per stuk",
  },
  en: {
    paid: "Your test payment is confirmed. Purchased items have been removed from your cart.",
    paidReview: "Your test payment is confirmed. Items edited afterwards were kept. Please review their quantities.",
    paymentPending: "No successful payment has been confirmed yet. Your cart has been saved.",
    paymentError: "We could not check the payment status. Your cart has been saved. Please try again.",
    paymentCheck: "Check payment status", paymentChecking: "Checking payment status…",
    manualCheckout: "Automatic updates after payment are not configured yet. Clear the cart yourself after a successful payment.",
    checkoutChanged: "Price, stock or availability has changed. Check the cart again before continuing.", checkoutError: "We could not open the test checkout. Please try again.", checkout: "Continue to Shopify test checkout", checkoutNote: "Test checkout. Use test payment details only. Shipping and the final total are shown at Shopify.",
    title: "Test cart", add: "Add to test cart", busy: "Checking stock…", empty: "Your test cart is empty.",
    added: "Your test cart has been updated.", adjusted: "Stock has changed or a product is unavailable. Your cart has been adjusted to the current stock.",
    error: "We could not check your cart. Please try again.", storage: "Your browser could not save the cart. It will only be available during this visit.",
    limit: "The test cart can hold up to 20 different variants.", invalid: "Your saved cart could not be restored. Please add your products again.",
    remove: "Remove", clear: "Clear cart", quantity: "Quantity", subtotal: "Product subtotal", refresh: "Check prices and stock again",
    back: "Continue browsing", unavailable: "This variant cannot be added: no confirmed stock.",
    note: "Test environment. This cart does not reserve stock. Ordering and payment are not active yet.", stock: "available", unit: "each",
  },
} as const;
type Notice = "paid" | "paidReview" | "paymentPending" | "paymentError" | "checkoutChanged" | "checkoutError" | "added" | "adjusted" | "error" | "limit" | "invalid" | null;
type CartContextValue = {
  receiptTrackingEnabled: boolean; pendingPayment: boolean; checkingPayment: boolean; checkPayment: () => void;
  checkoutEnabled: boolean; checkout: (language: "nl" | "en") => void;
  lines: CartLine[]; busy: boolean; notice: Notice; storageFailed: boolean;
  add: (slug: string, id: string, quantity: number) => void; update: (id: string, quantity: number) => void; refresh: () => void; clear: () => void;
};
const CartContext = createContext<CartContextValue | null>(null);
function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("Test cart provider missing");
  return context;
}
export function TestCartProvider({ children, checkoutEnabled = false, receiptTrackingEnabled = false }: { children: React.ReactNode; checkoutEnabled?: boolean; receiptTrackingEnabled?: boolean }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [busy, setBusy] = useState(true);
  const [notice, setNotice] = useState<Notice>(null);
  const [storageFailed, setStorageFailed] = useState(false);
  const items = useRef<CartInput[]>([]);
  const stored = useRef<StoredCart>({ items: [], revisions: {}, pending: [] });
  const expectedStorage = useRef<string | null>(null);
  const [pendingPayment, setPendingPayment] = useState(false);
  const [checkingPayment, setCheckingPayment] = useState(false);
  function loadStored() {
    expectedStorage.current = localStorage.getItem(storageKey);
    stored.current = readStoredCart(expectedStorage.current);
    items.current = stored.current.items;
    setPendingPayment(stored.current.pending.length > 0);
  }
  const locked = useRef(false);
  const initialized = useRef(false);
  function saveStored(next: StoredCart) {
    // Do not overwrite changes made in another browser tab during a request.
    if (localStorage.getItem(storageKey) !== expectedStorage.current) throw new Error("cart-changed-in-another-tab");
    const raw = JSON.stringify(next);
    localStorage.setItem(storageKey, raw);
    expectedStorage.current = raw;
    stored.current = next; items.current = next.items;
    setPendingPayment(next.pending.length > 0);
    setStorageFailed(false);
  }
  function persist(input: CartInput[]) {
    try { saveStored({ ...stored.current, items: input }); }
    catch { setStorageFailed(true); }
  }
  async function checkPayment() {
    if (locked.current || !checkoutEnabled) return;
    locked.current = true; setBusy(true); setCheckingPayment(true);
    let completed = false; let review = false; let failed = false;
    try {
      loadStored();
      for (const pending of [...stored.current.pending]) {
        const response = await fetch("/api/market-hall/checkout/status", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ receipt: pending.receipt }), cache: "no-store", signal: AbortSignal.timeout(20000),
        });
        if (!response.ok) { failed = true; continue; }
        const result = await response.json();
        if (result.paid !== true) continue;
        // Reload before applying: the user may have edited the cart in another tab.
        loadStored();
        const next = applyPaidReceipt(stored.current, pending.receipt, parseCart(result.lines));
        saveStored(next.cart); completed = true; review ||= next.review;
      }
    } catch { failed = true; }
    finally { locked.current = false; setCheckingPayment(false); }
    // Check orders BEFORE refreshing stock: sold-out lines must not consume a receipt twice.
    await validate(items.current);
    setNotice(failed ? "paymentError" : completed ? (review ? "paidReview" : "paid") : "paymentPending");
    setBusy(false);
  }
  async function validate(input: CartInput[]) {
    if (locked.current) return;
    locked.current = true;
    setBusy(true);
    setNotice(null);
    try {
      const response = await fetch("/api/market-hall/cart", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(input),
        cache: "no-store", signal: AbortSignal.timeout(60000),
      });
      if (!response.ok) throw new Error("unavailable");
      const result: CartResult = await response.json();
      setLines(result.lines);
      items.current = result.lines.map(({ slug, variantId, quantity }) => ({ slug, variantId, quantity }));
      persist(items.current);
      setNotice(result.adjusted ? "adjusted" : "added");
    } catch { setNotice("error"); }
    finally { locked.current = false; setBusy(false); }
  }
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try { loadStored(); } catch { setNotice("invalid"); }
    if (stored.current.pending.length && checkoutEnabled) void checkPayment();
    else if (items.current.length) void validate(items.current);
    else setBusy(false);
    // Restore once, including signed pending checkout receipts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const resume = () => {
      if (document.visibilityState === "hidden" || locked.current) return;
      try { loadStored(); } catch { setNotice("invalid"); return; }
      if (stored.current.pending.length && checkoutEnabled) void checkPayment();
      else void validate(items.current);
    };
    const visible = () => { if (document.visibilityState === "visible") resume(); };
    window.addEventListener("pageshow", resume);
    window.addEventListener("focus", resume);
    window.addEventListener("storage", resume);
    document.addEventListener("visibilitychange", visible);
    // Bounded retries for a delayed Shopify order after returning to the site.
    const timers = [3000, 10000, 30000].map((delay) => window.setTimeout(() => {
      if (stored.current.pending.length) resume();
    }, delay));
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("pageshow", resume);
      window.removeEventListener("focus", resume);
      window.removeEventListener("storage", resume);
      document.removeEventListener("visibilitychange", visible);
    };
    // Event handlers use refs for the current cart and request lock.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkoutEnabled]);
  function markEdited(id: string) {
    stored.current = { ...stored.current, revisions: { ...stored.current.revisions, [id]: crypto.randomUUID() } };
  }
  function add(slug: string, id: string, quantity: number) {
    if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > MAX_CART_QUANTITY) return;
    if (locked.current || busy) return;
    const existing = items.current.find((item) => item.variantId === id);
    if (!existing && items.current.length >= MAX_CART_LINES) { setNotice("limit"); return; }
    const next = existing
      ? items.current.map((item) => item.variantId === id ? { ...item, quantity: Math.min(MAX_CART_QUANTITY, item.quantity + quantity) } : item)
      : [...items.current, { slug, variantId: id, quantity }];
    markEdited(id);
    void validate(next);
  }
  function update(id: string, quantity: number) {
    if (locked.current || busy || !Number.isSafeInteger(quantity) || quantity < 0 || quantity > MAX_CART_QUANTITY) return;
    markEdited(id);
    if (quantity === 0) {
      // Removing a line must also work when Shopify is temporarily unavailable.
      items.current = items.current.filter((item) => item.variantId !== id);
      setLines((current) => current.filter((item) => item.variantId !== id));
      persist(items.current);
      return;
    }
    void validate(items.current.map((item) => item.variantId === id ? { ...item, quantity } : item));
  }
  async function checkout(language: "nl" | "en") {
    if (!checkoutEnabled || locked.current || busy || !lines.length) return;
    locked.current = true; setBusy(true); setNotice(null);
    try {
      const response = await fetch("/api/market-hall/checkout", {
        method: "POST", headers: { "Content-Type": "application/json" }, cache: "no-store",
        signal: AbortSignal.timeout(60000),
        body: JSON.stringify({ lines: items.current, language, prices: lines.map((line) => ({ variantId: line.variantId, ...line.price })) }),
      });
      const result = await response.json();
      if (response.status === 409) {
        if (Array.isArray(result.lines)) {
          setLines(result.lines);
          items.current = result.lines.map(({ slug, variantId, quantity }: CartInput) => ({ slug, variantId, quantity }));
          persist(items.current);
        }
        setNotice("checkoutChanged"); return;
      }
      if (!response.ok || typeof result.checkoutUrl !== "string") throw new Error("checkout");
      if (typeof result.receipt === "string") {
        if (stored.current.pending.length >= 10) throw new Error("too-many-pending-checkouts");
        // Saving is required before leaving; otherwise a completed payment cannot be reconciled.
        saveStored({ ...stored.current, items: items.current, pending: [...stored.current.pending,
          { receipt: result.receipt, revisions: { ...stored.current.revisions } }] });
      }
      // Keep the local cart until the server confirms a paid Shopify order.
      window.location.assign(result.checkoutUrl);
    } catch { setNotice("checkoutError"); }
    finally { locked.current = false; setBusy(false); }
  }
  function clear() {
    if (locked.current || busy) return;
    for (const item of items.current) markEdited(item.variantId);
    stored.current = { ...stored.current, pending: [] };
    items.current = []; setLines([]); setNotice(null); persist([]);
  }
  return <CartContext.Provider value={{ receiptTrackingEnabled, pendingPayment, checkingPayment, checkPayment: () => { void checkPayment(); }, checkoutEnabled, checkout, lines, busy, notice, storageFailed, add, update, clear, refresh: () => { void validate(items.current); } }}>{children}</CartContext.Provider>;
}
export function TestCartLink() {
  const { lines } = useCart();
  const { language } = useLanguage();
  const count = lines.reduce((total, line) => total + line.quantity, 0);
  return <Link className="test-cart-link" href="/market-hall/cart" aria-label={`${copy[language].title} (${count})`}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 3h2l3 13h11l2-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
    <span className="test-cart-link__label">{copy[language].title}</span><span aria-hidden="true">({count})</span>
  </Link>;
}
export function CartNotice() {
  const { notice, storageFailed } = useCart();
  const { language } = useLanguage();
  const t = copy[language];
  return <div role="status" aria-live="polite" className="test-cart-status">{notice && <p>{t[notice]}</p>}{storageFailed && <p>{t.storage}</p>}</div>;
}
export function AddToTestCart({ slug, variant, compact = false }: { slug: string; variant: Pick<ProductVariant, "id" | "available" | "backorder" | "quantityAvailable">; compact?: boolean }) {
  const { add, busy, lines } = useCart();
  const { language } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const t = copy[language];
  const inCart = lines.find((line) => line.variantId === variant.id)?.quantity ?? 0;
  const remaining = variant.available && !variant.backorder
    ? Math.max(0, Math.min(MAX_CART_QUANTITY, variant.quantityAvailable ?? 0) - inCart) : 0;
  const selectedQuantity = Math.min(quantity, Math.max(1, remaining));
  return <div className={`test-cart-add${compact ? " test-cart-add--compact" : ""}`}>
    <div className="test-cart-add__controls">
      {remaining > 0 && <label>{t.quantity} <select aria-label={t.quantity} disabled={busy || !remaining} value={selectedQuantity} onChange={(event) => setQuantity(Number(event.target.value))}>
        {Array.from({ length: Math.max(1, remaining) }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
      </select></label>}
      <button type="button" disabled={busy || !remaining} onClick={() => add(slug, variant.id, selectedQuantity)}>{busy ? t.busy : t.add}</button>
    </div>
    {!remaining && <p>{inCart > 0 ? (language === "nl" ? "De beschikbare voorraad zit al in je winkelmand." : "All available stock is already in your cart.") : t.unavailable}</p>}
    {!compact && <CartNotice />}
  </div>;
}
export function TestCartPage() {
  const { lines, busy, update, refresh, clear, checkoutEnabled, checkout, pendingPayment, checkingPayment, checkPayment, receiptTrackingEnabled } = useCart();
  const { language } = useLanguage();
  const t = copy[language];
  const totals = new Map<string, number>();
  for (const line of lines) totals.set(line.price.currencyCode, (totals.get(line.price.currencyCode) ?? 0) + Number(line.price.amount) * line.quantity);
  return <main className="market-page test-cart-page">
    <HarborHeader actions={<TestCartLink />} /><HarborDivider />
    <section className="market-shell test-cart-content">
      <p className="eyebrow">{language === "nl" ? "De Markthal" : "The Market Hall"}</p>
      <h1>{t.title}</h1><p className="market-catalog__notice">{checkoutEnabled ? t.checkoutNote : t.note}</p>
      <CartNotice />
      {checkoutEnabled && !receiptTrackingEnabled && <p>{t.manualCheckout}</p>}
      {busy && <p role="status">{checkingPayment ? t.paymentChecking : t.busy}</p>}
      {!busy && !lines.length && <p>{t.empty}</p>}
      <div aria-busy={busy}>
        {lines.map((line) => <article className="test-cart-line" key={line.variantId}>
          {line.image && <img src={line.image.url} alt={line.image.alt[language]} width="100" height="140" />}
          <div className="test-cart-line__body">
            <h2><Link href={`/market-hall/product/${line.slug}`}>{line.name[language]}</Link></h2>
            <p>{line.variantName[language]} · {formatMoney(line.price, language)} {t.unit}</p>
            <p>{line.stock} {t.stock}</p>
            <label>{t.quantity} <select disabled={busy} value={line.quantity} onChange={(event) => update(line.variantId, Number(event.target.value))}>
              {Array.from({ length: Math.min(line.stock, MAX_CART_QUANTITY) }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </select></label>
            <button type="button" disabled={busy} onClick={() => update(line.variantId, 0)}>{t.remove}</button>
          </div>
          <strong>{formatMoney({ ...line.price, amount: String(Number(line.price.amount) * line.quantity) }, language)}</strong>
        </article>)}
      </div>
      {!!lines.length && <div className="test-cart-total"><span>{t.subtotal}</span>{[...totals].map(([currencyCode, amount]) => <strong key={currencyCode}>{formatMoney({ amount: String(amount), currencyCode }, language)}</strong>)}</div>}
      <div className="test-cart-actions">
        {pendingPayment && <button type="button" disabled={busy} onClick={checkPayment}>{t.paymentCheck}</button>}
        {checkoutEnabled && <button type="button" disabled={busy || !lines.length} onClick={() => checkout(language)}>{t.checkout}</button>}
        <button type="button" disabled={busy} onClick={refresh}>{t.refresh}</button>
        <button type="button" disabled={busy} onClick={clear}>{t.clear}</button>
        <Link className="quiet-link" href="/market-hall">← {t.back}</Link>
      </div>
    </section><SiteFooter />
  </main>;
}
