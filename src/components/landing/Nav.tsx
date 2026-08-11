"use client";

import { useState } from "react";
import SearchOverlay from "@/components/landing/SearchOverlay";

const links = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Collections", href: "/#collections" },
  { label: "Why Reki", href: "/#why" },
  { label: "Contact", href: "mailto:hello@reki.life" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50"
        style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a
            href="/"
            className="reki-nav-logo font-play shrink-0 text-[1.65rem] font-semibold tracking-tight"
          >
            <span style={{ color: "#d97757" }}>r</span>
            <span style={{ color: "#5b8f6e" }}>e</span>
            <span style={{ color: "var(--accent)" }}>k</span>
            <span style={{ color: "#c4a35a" }}>i</span>
            <span style={{ color: "var(--ink)" }}>.life</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="reki-nav-link font-body text-[14px]">
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search products"
              onClick={() => setSearchOpen(true)}
              className="reki-nav-icon flex h-9 w-9 items-center justify-center rounded-full"
              style={{ color: "var(--ink)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
            <a
              href="/#collections"
              aria-label="Cart"
              className="reki-nav-icon flex h-9 w-9 items-center justify-center rounded-full"
              style={{ color: "var(--ink)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 7h15l-1.5 9h-12z" strokeLinejoin="round" />
                <path d="M6 7L5 3H2" strokeLinecap="round" />
                <circle cx="9" cy="20" r="1.2" fill="currentColor" />
                <circle cx="17" cy="20" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <button
              type="button"
              aria-label="Menu"
              className="reki-nav-icon flex h-9 w-9 items-center justify-center rounded-full md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {open && (
          <div className="flex flex-col gap-1 px-5 pb-4 md:hidden" style={{ borderTop: "1px solid var(--border)" }}>
            <button
              type="button"
              className="reki-nav-mobile font-body py-3 text-left text-sm"
              onClick={() => {
                setOpen(false);
                setSearchOpen(true);
              }}
            >
              Search
            </button>
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="reki-nav-mobile font-body py-3 text-sm"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
