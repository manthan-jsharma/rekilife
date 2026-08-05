"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Shop", href: "#products" },
  { label: "Why Reki", href: "#why" },
  { label: "Ops", href: "#investigator" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ width: "100%" }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          border: scrolled ? "1px solid rgba(30, 30, 48, 0.8)" : "1px solid transparent",
        }}
      >
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          <span className="text-white">reki</span>
          <span style={{ color: "var(--accent-light)" }}>.life</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-sm text-[var(--muted)] transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#waitlist"
          className="font-body rounded-full text-sm font-medium transition-all hover:scale-105"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "8px 20px",
            flexShrink: 0,
          }}
        >
          Join Waitlist
        </a>
      </nav>
    </motion.header>
  );
}
