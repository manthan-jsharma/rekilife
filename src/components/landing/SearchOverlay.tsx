"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { CHECKOUT_URL, products } from "@/lib/products";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q) ||
        p.age.toLowerCase().includes(q) ||
        (p.badge && p.badge.toLowerCase().includes(q))
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex flex-col" role="dialog" aria-modal="true" aria-label="Search products">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" onClick={onClose} />

      <div
        className="relative mx-auto mt-0 flex max-h-[100dvh] w-full max-w-3xl flex-col overflow-hidden sm:mt-10 sm:max-h-[85vh] sm:rounded-2xl"
        style={{ background: "#fff", boxShadow: "0 24px 80px rgba(0,0,0,0.2)" }}
      >
        {/* Search header */}
        <div
          className="flex items-center gap-3 px-4 py-4 sm:px-6"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ color: "var(--muted)", flexShrink: 0 }}>
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games, puzzles, chess…"
            className="font-body flex-1 bg-transparent text-base outline-none placeholder:text-[var(--subtle)]"
            style={{ color: "var(--ink)" }}
          />
          <button
            type="button"
            onClick={onClose}
            className="reki-btn-subtle font-body rounded-full px-3 py-1.5 text-sm"
            style={{ background: "var(--cream)", color: "var(--ink)" }}
          >
            Esc
          </button>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-6" style={{ background: "var(--cream)" }}>
          <p className="font-body text-[12px]" style={{ color: "var(--muted)" }}>
            {query.trim()
              ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query.trim()}”`
              : "Exclusive edition catalogue"}
          </p>
          <p className="font-body text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--subtle)" }}>
            {products.length} products
          </p>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto px-2 py-2 sm:px-3">
          {results.length === 0 ? (
            <div className="px-4 py-16 text-center">
              <p className="font-display text-xl font-semibold" style={{ color: "var(--ink)" }}>
                No games found
              </p>
              <p className="font-body mt-2 text-sm" style={{ color: "var(--muted)" }}>
                Try “chess”, “puzzle”, or “memory”
              </p>
            </div>
          ) : (
            <ul>
              {results.map((product) => (
                <li key={product.id}>
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-[var(--cream)]"
                  >
                    <div
                      className="relative h-16 w-16 shrink-0 overflow-hidden"
                      style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-body truncate text-[15px] font-medium" style={{ color: "var(--ink)" }}>
                          {product.name}
                        </p>
                        {product.badge && (
                          <span
                            className="font-body shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"
                            style={{ background: "var(--accent)" }}
                          >
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-body mt-0.5 text-[12px]" style={{ color: "var(--muted)" }}>
                        {product.tag} · {product.age}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-body text-sm font-semibold" style={{ color: "var(--ink)" }}>
                        {product.price}
                      </p>
                      <p className="font-body text-[11px] line-through" style={{ color: "var(--subtle)" }}>
                        {product.mrp}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className="px-4 py-3 text-center sm:px-6"
          style={{ borderTop: "1px solid var(--border)", background: "var(--cream)" }}
        >
          <p className="font-body text-[11px]" style={{ color: "var(--subtle)" }}>
            Tip: when ecommerce launches, new exclusive editions will appear here automatically
          </p>
        </div>
      </div>
    </div>
  );
}
