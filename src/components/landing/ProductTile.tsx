"use client";

import { useState } from "react";
import OptimizedImage from "@/components/landing/OptimizedImage";
import { CHECKOUT_URL, type Product } from "@/lib/products";

type Props = {
  product: Product;
  variant?: "default" | "premium";
};

export default function ProductTile({ product, variant = "default" }: Props) {
  const [qty, setQty] = useState(1);
  const premium = variant === "premium";

  return (
    <article className="flex flex-col">
      <div
        className={`relative aspect-square overflow-hidden ${premium ? "rounded-sm" : ""}`}
        style={{
          background: "var(--surface)",
          border: premium ? "1px solid rgba(26,26,26,0.12)" : undefined,
          boxShadow: premium ? "inset 0 0 0 1px rgba(255,255,255,0.6)" : undefined,
        }}
      >
        {product.badge && (
          <span
            className="font-body absolute left-3 top-3 z-10 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"
            style={{ background: "var(--accent-dark)" }}
          >
            {product.badge}
          </span>
        )}
        <OptimizedImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          loading="lazy"
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col items-center text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--accent-dark)" }}>
          {product.tag}
        </p>
        <h3 className="font-body mt-1 text-[15px] font-medium" style={{ color: "var(--ink)" }}>
          {product.name}
        </h3>
        <p className="font-body mt-1.5 text-[14px]" style={{ color: "var(--ink)" }}>
          {product.price}{" "}
          <span className="line-through" style={{ color: "var(--subtle)" }}>
            {product.mrp}
          </span>
        </p>
        <p className="font-body mt-1 text-[12px]" style={{ color: "var(--muted)" }}>
          {product.age}
        </p>

        <div className="mt-4 flex w-full max-w-[220px] items-stretch gap-2">
          <div
            className="flex items-center rounded-sm"
            style={{ border: "1px solid #d0d0d0", background: "#fff" }}
          >
            <button
              type="button"
              aria-label="Decrease quantity"
              className="reki-btn-subtle px-2.5 py-2 text-sm"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              −
            </button>
            <span className="font-body min-w-[28px] text-center text-sm">{qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              className="reki-btn-subtle px-2.5 py-2 text-sm"
              onClick={() => setQty((q) => q + 1)}
            >
              +
            </button>
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reki-btn-primary reki-btn-tab font-body flex flex-1 items-center justify-center rounded-sm text-[12px] font-semibold uppercase tracking-wide"
            style={{ padding: "10px 12px" }}
          >
            Checkout
          </a>
        </div>
      </div>
    </article>
  );
}
