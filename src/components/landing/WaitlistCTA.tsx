"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24"
      style={{ background: "var(--cream)" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(185,119,44,0.12)" }}
      />

      <motion.div
        className="relative mx-auto max-w-xl text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="font-body text-[11px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: "var(--accent-dark)" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          The atelier letter
        </motion.p>

        <motion.h2
          className="font-display mt-4 font-semibold leading-tight"
          style={{ color: "var(--ink)", fontSize: "clamp(2rem, 4vw, 2.85rem)" }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.55 }}
        >
          Stay in the{" "}
          <span className="italic" style={{ color: "var(--accent-dark)" }}>
            atelier
          </span>
        </motion.h2>

        <motion.p
          className="font-body mx-auto mt-4 max-w-md text-[15px] leading-relaxed md:text-base"
          style={{ color: "#4a453c" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26, duration: 0.55 }}
        >
          Early drops, quiet tips for screen-free evenings — no spam, just wood
          and play.
        </motion.p>

        <motion.div
          className="mx-auto mt-8 h-px origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent), transparent)",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubmitted(true);
              }}
              className="mx-auto mt-8 flex max-w-md overflow-hidden"
              style={{
                background: "#fff",
                border: `1.5px solid ${focused ? "var(--accent)" : "rgba(26,26,26,0.22)"}`,
                boxShadow: focused
                  ? "0 12px 36px rgba(185,119,44,0.14)"
                  : "0 8px 28px rgba(26,26,26,0.05)",
                transition: "border-color 250ms ease, box-shadow 250ms ease",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ delay: 0.42, duration: 0.55 }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="font-body flex-1 px-5 py-3.5 text-[15px] outline-none placeholder:text-[#9a8f7c] focus:placeholder:text-[#c4b59a]"
                style={{
                  background: "transparent",
                  color: "var(--ink)",
                }}
              />
              <motion.button
                type="submit"
                aria-label="Subscribe"
                className="reki-btn-primary reki-btn-tab font-body flex items-center gap-2 px-5 py-3.5 text-sm font-semibold uppercase tracking-wide"
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                Join
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="mt-8"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="font-display text-2xl font-semibold italic"
                style={{ color: "var(--accent-dark)" }}
              >
                You&apos;re in.
              </p>
              <p className="font-body mt-2 text-sm" style={{ color: "#4a453c" }}>
                We&apos;ll write when something worth opening arrives.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
