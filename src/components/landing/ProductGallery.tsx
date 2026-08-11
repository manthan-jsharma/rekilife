"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductTile from "./ProductTile";

const VISIBLE = 4;
const pages = [
  products.slice(0, VISIBLE),
  products.slice(VISIBLE),
];

export default function ProductGallery() {
  const [page, setPage] = useState(0);
  const canPrev = page > 0;
  const canNext = page < pages.length - 1;
  const visible = pages[page];

  return (
    <section
      id="collections"
      className="px-5 py-10 md:px-8 md:py-12"
      style={{
        background: "linear-gradient(180deg, #2f4a3a 0%, #1e3328 55%, #15241c 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="reki-panel-gradient rounded-xl p-6 md:p-10">
          <div className="reki-panel-rule-top" aria-hidden />
          <div className="reki-panel-rule-bottom" aria-hidden />

          <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <p
                className="font-body text-[11px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: "var(--accent-dark)" }}
              >
                The atelier edit
              </p>
              <h2
                className="font-display mt-2 font-semibold"
                style={{ color: "var(--ink)", fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
              >
                Collections
              </h2>
              <p
                className="font-body mt-3 max-w-xl text-[14px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Curated wooden games — puzzles, chess, memory, and intuitive play for every age.
              </p>
            </div>
            <Link
              href="/new-arrivals"
              className="reki-btn-outline font-body shrink-0 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide"
            >
              View all arrivals
            </Link>
          </div>

          <div className="relative flex items-center gap-3 md:gap-5">
            <button
              type="button"
              aria-label="Previous products"
              disabled={!canPrev}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="reki-btn-ghost flex h-11 w-11 shrink-0 items-center justify-center rounded-full disabled:opacity-25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="min-w-0 flex-1 overflow-hidden">
              <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {visible.map((product) => (
                  <ProductTile key={product.id} product={product} variant="premium" />
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Next products"
              disabled={!canNext}
              onClick={() => setPage((p) => Math.min(pages.length - 1, p + 1))}
              className="reki-btn-ghost flex h-11 w-11 shrink-0 items-center justify-center rounded-full disabled:opacity-25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Page ${i + 1}`}
                onClick={() => setPage(i)}
                className="reki-btn-subtle h-1.5 rounded-full transition-all"
                style={{
                  width: i === page ? 28 : 10,
                  background: i === page ? "var(--accent-dark)" : "rgba(26,26,26,0.2)",
                }}
              />
            ))}
            <span className="font-mono ml-2 text-[11px]" style={{ color: "var(--subtle)" }}>
              {String(page + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
