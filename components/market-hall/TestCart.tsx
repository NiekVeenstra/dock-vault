"use client";

import Link from "next/link";
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
    title: "Testwinkelmand", add: "Toevoegen aan testwinkelmand", busy: "Voorraad controleren…", empty: "Je testwinkelmand is nog leeg.",
    added: "Je testwinkelmand is bijgewerkt.", adjusted: "De voorraad is gewijzigd of een product is niet beschikbaar. Je winkelmand is aangepast aan de actuele voorraad.",
    error: "De winkelmand kon niet worden gecontroleerd. Probeer het opnieuw.", storage: "Je browser kon de winkelmand niet bewaren. Deze blijft alleen tijdens dit bezoek beschikbaar.",
    limit: "Er passen maximaal 20 verschillende varianten in de testwinkelmand.", invalid: "De bewaarde winkelmand kon niet worden hersteld. Voeg de producten opnieuw toe.",
    remove: "Verwijderen", clear: "Winkelmand leegmaken", quantity: "Aantal", subtotal: "Subtotaal producten", refresh: "Prijs en voorraad opnieuw controleren",
    back: "Verder kijken", unavailable: "Deze variant kan niet worden toegevoegd: geen bevestigde voorraad.",
    note: "Testomgeving. Deze winkelmand reserveert geen voorraad. Bestellen en betalen zijn nog niet actief.", stock: "beschikbaar", unit: "per stuk",
  },
  en: {
    title: "Test cart", add: "Add to test cart", busy: "Checking stock…", empty: "Your test cart is empty.",
    added: "Your test cart has been updated.", adjusted: "Stock has changed or a product is unavailable. Your cart has been adjusted to the current stock.",
    error: "We could not check your cart. Please try again.", storage: "Your browser could not save the cart. It will only be available during this visit.",
    limit: "The test cart can hold up to 20 different variants.", invalid: "Your saved cart could not be restored. Please add your products again.",
    remove: "Remove", clear: "Clear cart", quantity: "Quantity", subtotal: "Product subtotal", refresh: "Check prices and stock again",
    back: "Continue browsing", unavailable: "This variant cannot be added: no confirmed stock.",
    note: "Test environment. This cart does not reserve stock. Ordering and payment are not active yet.", stock: "available", unit: "each",
  },
} as const;
type Notice = "added" | "adjusted" | "error" | "limit" | "invalid" | null;
type CartContextValue = {
  lines: CartLine[]; busy: boolean; notice: Notice; storageFailed: boolean;
  add: (slug: string, id: string, quantity: number) => void; update: (id: string, quantity: number) => void; refresh: () => void; clear: () => void;
};
const CartContext = createContext<CartContextValue | null>(null);
function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("Test cart provider missing");
  return context;
}
export function TestCartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [busy, setBusy] = useState(true);
  const [notice, setNotice] = useState<Notice>(null);
  const [storageFailed, setStorageFailed] = useState(false);
  const items = useRef<CartInput[]>([]);
  const locked = useRef(false);
  const initialized = useRef(false);
  function persist(input: CartInput[]) {
    try { localStorage.setItem(storageKey, JSON.stringify(input)); setStorageFailed(false); }
    catch { setStorageFailed(true); }
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
    try {
      const saved = localStorage.getItem(storageKey);
      items.current = saved ? parseCart(JSON.parse(saved)) : [];
    } catch { setNotice("invalid"); }
    if (items.current.length) void validate(items.current);
    else setBusy(false);
    // Restore once; every subsequent mutation is checked with fresh server data.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function add(slug: string, id: string, quantity: number) {
    if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > MAX_CART_QUANTITY) return;
    if (locked.current || busy) return;
    const existing = items.current.find((item) => item.variantId === id);
    if (!existing && items.current.length >= MAX_CART_LINES) { setNotice("limit"); return; }
    const next = existing
      ? items.current.map((item) => item.variantId === id ? { ...item, quantity: Math.min(MAX_CART_QUANTITY, item.quantity + quantity) } : item)
      : [...items.current, { slug, variantId: id, quantity }];
    void validate(next);
  }
  function update(id: string, quantity: number) {
    if (locked.current || busy || !Number.isSafeInteger(quantity) || quantity < 0 || quantity > MAX_CART_QUANTITY) return;
    if (quantity === 0) {
      // Removing a line must also work when Shopify is temporarily unavailable.
      items.current = items.current.filter((item) => item.variantId !== id);
      setLines((current) => current.filter((item) => item.variantId !== id));
      persist(items.current);
      return;
    }
    void validate(items.current.map((item) => item.variantId === id ? { ...item, quantity } : item));
  }
  function clear() {
    if (locked.current || busy) return;
    items.current = []; setLines([]); setNotice(null); persist([]);
  }
  return <CartContext.Provider value={{ lines, busy, notice, storageFailed, add, update, clear, refresh: () => { void validate(items.current); } }}>{children}</CartContext.Provider>;
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
      <label>{t.quantity} <select aria-label={t.quantity} disabled={busy || !remaining} value={selectedQuantity} onChange={(event) => setQuantity(Number(event.target.value))}>
        {Array.from({ length: Math.max(1, remaining) }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
      </select></label>
      <button type="button" disabled={busy || !remaining} onClick={() => add(slug, variant.id, selectedQuantity)}>{busy ? t.busy : t.add}</button>
    </div>
    {!remaining && <p>{inCart > 0 ? (language === "nl" ? "De beschikbare voorraad zit al in je winkelmand." : "All available stock is already in your cart.") : t.unavailable}</p>}
    {!compact && <CartNotice />}
  </div>;
}
export function TestCartPage() {
  const { lines, busy, update, refresh, clear } = useCart();
  const { language } = useLanguage();
  const t = copy[language];
  const totals = new Map<string, number>();
  for (const line of lines) totals.set(line.price.currencyCode, (totals.get(line.price.currencyCode) ?? 0) + Number(line.price.amount) * line.quantity);
  return <main className="market-page test-cart-page">
    <HarborHeader actions={<TestCartLink />} /><HarborDivider />
    <section className="market-shell test-cart-content">
      <p className="eyebrow">{language === "nl" ? "De Markthal" : "The Market Hall"}</p>
      <h1>{t.title}</h1><p className="market-catalog__notice">{t.note}</p>
      <CartNotice />
      {busy && <p role="status">{t.busy}</p>}
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
        <button type="button" disabled={busy} onClick={refresh}>{t.refresh}</button>
        <button type="button" disabled={busy} onClick={clear}>{t.clear}</button>
        <Link className="quiet-link" href="/market-hall">← {t.back}</Link>
      </div>
    </section><SiteFooter />
  </main>;
}
