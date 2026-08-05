"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="grain relative px-6 py-32"
      style={{ background: "var(--cream)" }}
    >
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <span
          className="font-body text-[11px] uppercase tracking-[0.25em]"
          style={{ color: "var(--coral)" }}
        >
          Early Access
        </span>

        <h2
          className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight"
          style={{ color: "#1a1a2e" }}
        >
          Be the first to play
        </h2>

        <p
          className="font-body mx-auto mt-4 max-w-md text-base leading-relaxed"
          style={{ color: "#888" }}
        >
          Join the waitlist for exclusive launch pricing, early product access,
          and updates on new games.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-body flex-1 rounded-full text-sm outline-none transition-all focus:ring-2"
              style={{
                background: "#fff",
                border: "1px solid #e0dcd4",
                color: "#1a1a2e",
                padding: "14px 24px",
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-body rounded-full text-sm font-semibold whitespace-nowrap"
              style={{
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(108,99,255,0.3)",
                padding: "14px 32px",
              }}
            >
              Get Early Access
            </motion.button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl px-8 py-5"
            style={{
              background: "rgba(123,174,127,0.12)",
              border: "1px solid rgba(123,174,127,0.3)",
            }}
          >
            <span className="text-2xl">✓</span>
            <div className="text-left">
              <p
                className="font-display font-bold"
                style={{ color: "#1a1a2e" }}
              >
                You&apos;re on the list!
              </p>
              <p className="font-body text-sm" style={{ color: "#888" }}>
                We&apos;ll notify you when we launch.
              </p>
            </div>
          </motion.div>
        )}

        <p className="font-body mt-6 text-xs" style={{ color: "#bbb" }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
