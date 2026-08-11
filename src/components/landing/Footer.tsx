"use client";

import { useEffect, useRef, useState } from "react";

const footerLinks = {
  shop: [
    { label: "All games", href: "/new-arrivals" },
    { label: "Collections", href: "/#collections" },
    { label: "Smart Chess", href: "#categories" },
    { label: "Intuitive", href: "#categories" },
  ],
  company: [
    { label: "Why Reki", href: "#why" },
    { label: "Ops Investigator", href: "#investigator" },
    { label: "Contact", href: "mailto:hello@reki.life" },
  ],
  help: [
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scaleX(1)";
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer className="relative overflow-hidden" style={{ background: "#15241c" }}>
      {/* Unique Reki divider: diagonal cut + honey accent line (not Playbox scallop) */}
      <div className="relative h-10 w-full" style={{ background: "var(--bg)" }}>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          height="40"
          aria-hidden
        >
          <path fill="#15241c" d="M0,40 L0,18 L1440,0 L1440,40 Z" />
        </svg>
      </div>

      <div
        ref={lineRef}
        className="mx-auto h-[2px] w-[min(92%,1100px)] origin-left scale-x-0 transition-transform duration-[1.2s] ease-out"
        style={{ background: "linear-gradient(90deg, transparent, #c4a35a, transparent)" }}
      />

      <div className="mx-auto max-w-[1100px] px-5 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <a href="#" className="font-display text-3xl font-semibold text-white">
              reki<span style={{ color: "#c4a35a" }}>.life</span>
            </a>
            <p className="font-body mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Wooden games for curious minds. Screen-free play, thoughtfully made —
              and a store that investigates when things go wrong.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
              className="mt-6"
            >
              <p className="font-body mb-2 text-[11px] uppercase tracking-[0.2em] text-white/40">
                Early access
              </p>
              {!done ? (
                <div className="flex overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="font-body flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
                  />
                  <button
                    type="submit"
                    className="reki-btn-honey font-body px-5 text-sm font-semibold"
                  >
                    Join
                  </button>
                </div>
              ) : (
                <p className="font-body text-sm" style={{ color: "#c4a35a" }}>
                  You&apos;re on the list.
                </p>
              )}
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-6 lg:col-span-5">
            {(
              [
                ["Shop", footerLinks.shop],
                ["Company", footerLinks.company],
                ["Help", footerLinks.help],
              ] as const
            ).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-body mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="font-body text-[13px] text-white/70 transition hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Reki mark panel */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(196,163,90,0.25)",
              }}
            >
              <p className="font-display text-lg font-semibold text-white">
                Play that thinks.
              </p>
              <p className="font-body mt-2 text-[12px] leading-relaxed text-white/50">
                Physical games up front. Intelligent ops underneath. Built for
                families — and for the store that serves them.
              </p>
              <a
                href="#investigator"
                className="font-body mt-4 inline-flex items-center gap-1 text-[12px] font-medium"
                style={{ color: "#c4a35a" }}
              >
                Meet Ops Investigator →
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 sm:flex-row sm:items-center"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="font-body text-[12px] text-white/35">
            © {new Date().getFullYear()} reki.life — play smarter. play together.
          </p>
          <p className="font-body text-[12px] text-white/35">
            Also on Flipkart · Full ecommerce coming soon
          </p>
        </div>
      </div>

      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full blur-3xl"
        style={{ background: "rgba(196,163,90,0.08)" }}
      />
    </footer>
  );
}
