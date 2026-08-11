"use client";

import { useEffect, useMemo, useState } from "react";
import { filterProducts, PRODUCT_TAGS } from "@/lib/products";
import ProductTile from "@/components/landing/ProductTile";

const PER_PAGE = 6;

export default function NewArrivalsCatalog() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | "all">("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => filterProducts(query, tag), [query, tag]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const slice = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const goSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const goTag = (value: string | "all") => {
    setTag(value);
    setPage(1);
  };

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
      <div className="mb-10 text-center md:mb-12">
        <p
          className="font-body text-[11px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: "var(--accent-dark)" }}
        >
          Fresh from the atelier
        </p>
        <h1
          className="font-display mt-3 font-semibold"
          style={{ color: "var(--ink)", fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
        >
          New Arrivals
        </h1>
        <p className="font-body mx-auto mt-4 max-w-xl text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
          Every wooden game in the collection — search, filter, and checkout. More editions land here as we grow.
        </p>
      </div>

      {/* Search + filters */}
      <div
        className="mb-8 rounded-xl p-5 md:p-6"
        style={{
          background: "var(--bg)",
          border: "1px solid rgba(26,26,26,0.12)",
          boxShadow: "0 8px 32px rgba(92,58,18,0.05)",
        }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div
            className="flex flex-1 items-center gap-3 rounded-md px-4 py-3"
            style={{ border: "1.5px solid var(--border)", background: "#fff" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ color: "var(--muted)", flexShrink: 0 }}>
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => goSearch(e.target.value)}
              placeholder="Search by name, category, or age…"
              className="font-body flex-1 bg-transparent text-[15px] outline-none placeholder:text-[var(--subtle)]"
              style={{ color: "var(--ink)" }}
            />
          </div>
          <p className="font-body shrink-0 text-sm" style={{ color: "var(--muted)" }}>
            {filtered.length} product{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => goTag("all")}
            className={`reki-btn-pill font-body rounded-full px-4 py-1.5 text-[12px] font-medium ${
              tag === "all" ? "reki-btn-primary" : ""
            }`}
            style={
              tag !== "all"
                ? { background: "var(--cream)", border: "1px solid var(--border)", color: "var(--ink)" }
                : undefined
            }
          >
            All
          </button>
          {PRODUCT_TAGS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => goTag(t)}
              className={`reki-btn-pill font-body rounded-full px-4 py-1.5 text-[12px] font-medium ${
                tag === t ? "reki-btn-primary" : ""
              }`}
              style={
                tag !== t
                  ? { background: "var(--cream)", border: "1px solid var(--border)", color: "var(--ink)" }
                  : undefined
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {slice.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-display text-2xl font-semibold" style={{ color: "var(--ink)" }}>
            No games found
          </p>
          <p className="font-body mt-2 text-sm" style={{ color: "var(--muted)" }}>
            Try a different search or clear filters.
          </p>
          <button
            type="button"
            onClick={() => {
              goSearch("");
              goTag("all");
            }}
            className="reki-btn-primary reki-btn-tab font-body mt-6 rounded-md px-6 py-2.5 text-sm font-semibold"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {slice.map((product) => (
            <ProductTile key={product.id} product={product} variant="premium" />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="reki-btn-outline font-body rounded-md px-4 py-2 text-sm font-medium disabled:opacity-30"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={`reki-btn-pill font-body h-9 w-9 rounded-md text-sm font-medium ${
                n === safePage ? "reki-btn-primary" : ""
              }`}
              style={
                n !== safePage
                  ? { border: "1px solid var(--border)", color: "var(--ink)", background: "transparent" }
                  : undefined
              }
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="reki-btn-outline font-body rounded-md px-4 py-2 text-sm font-medium disabled:opacity-30"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
