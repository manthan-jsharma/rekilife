"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "Screen-free play",
    description:
      "In a world of endless screens, Reki brings back the joy of tactile, hands-on play that builds real skills.",
    accent: "var(--sage)",
  },
  {
    number: "02",
    title: "Built to last",
    description:
      "Premium materials, thoughtful design, and quality you can feel. These aren't disposable toys — they're heirlooms.",
    accent: "var(--honey)",
  },
  {
    number: "03",
    title: "Grows with your child",
    description:
      "Adaptive difficulty, age-appropriate challenges, and games that evolve as your child's abilities develop.",
    accent: "var(--accent-light)",
  },
];

export default function WhyReki() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (counterRef.current) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 500,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = Math.round(obj.val).toString();
            }
          },
        });
      }

      const items = itemsRef.current?.querySelectorAll(".reason-item");
      if (items?.length) {
        gsap.from(items, {
          x: -30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: itemsRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative px-6 py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-20 lg:grid-cols-2">
        {/* Left — sticky heading */}
        <div className="lg:sticky lg:top-32">
          <span
            className="font-body text-[11px] uppercase tracking-[0.25em]"
            style={{ color: "var(--accent-light)" }}
          >
            Why Reki
          </span>
          <h2 className="font-display mt-3 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight">
            More than
            <br />
            just games
          </h2>
          <p
            className="font-body mt-4 max-w-md text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            We believe the best learning happens when children don&apos;t realize
            they&apos;re learning. Every Reki game is designed with child
            development experts.
          </p>

          <div className="mt-10 flex items-baseline gap-3">
            <span
              ref={counterRef}
              className="font-display text-5xl font-bold"
              style={{ color: "var(--accent-light)" }}
            >
              0
            </span>
            <span className="font-body text-sm" style={{ color: "var(--muted)" }}>
              + families on the waitlist
            </span>
          </div>
        </div>

        {/* Right — numbered editorial list */}
        <div ref={itemsRef}>
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className="reason-item group relative py-10"
              style={{
                borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start gap-8">
                <span
                  className="font-display text-4xl font-bold leading-none transition-colors duration-300 group-hover:opacity-100"
                  style={{ color: reason.accent, opacity: 0.5 }}
                >
                  {reason.number}
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold md:text-2xl">
                      {reason.title}
                    </h3>
                    <span
                      className="font-body text-lg transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: reason.accent, opacity: 0.6 }}
                    >
                      →
                    </span>
                  </div>
                  <p
                    className="font-body mt-3 max-w-md text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Expanding accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: reason.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
