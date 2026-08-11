"use client";

import { useState } from "react";

export default function ReviewsTab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="reki-btn-primary reki-btn-tab !fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 md:block"
        style={{
          padding: "14px 8px",
          borderRadius: "0 8px 8px 0",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontSize: "12px",
          letterSpacing: "0.12em",
          fontFamily: "var(--font-body)",
        }}
        aria-label="Open reviews"
      >
        ★ Reviews
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-6"
            style={{ background: "#fff" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="reki-btn-subtle absolute right-4 top-4 text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="font-display text-2xl font-semibold">Parent love</h3>
            <p className="font-body mt-1 text-sm" style={{ color: "var(--muted)" }}>
              4.9 out of 5 from families discovering Reki
            </p>
            <ul className="mt-5 space-y-4">
              {[
                {
                  name: "Ananya",
                  text: "Memory Match is our evening ritual. Beautiful wood, zero screens.",
                },
                {
                  name: "Rohan",
                  text: "Finally toys that feel premium and last. Chess set is excellent.",
                },
                {
                  name: "Meera",
                  text: "Gift packaging was lovely. Kids played for hours.",
                },
              ].map((r) => (
                <li
                  key={r.name}
                  className="border-t pt-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="font-body text-sm" style={{ color: "var(--ink)" }}>
                    “{r.text}”
                  </p>
                  <p
                    className="font-body mt-1 text-xs"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    ★★★★★ — {r.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
