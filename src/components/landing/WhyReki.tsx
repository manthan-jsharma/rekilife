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
      "In a world of endless screens, Reki brings back tactile, hands-on play that builds real skills.",
  },
  {
    number: "02",
    title: "Built to last",
    description:
      "Premium wood, thoughtful design, and quality you can feel. Not disposable toys — heirlooms.",
  },
  {
    number: "03",
    title: "Grows with your child",
    description:
      "Age-appropriate challenges that evolve as your child’s abilities develop.",
  },
];

export default function WhyReki() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !counterRef.current) return;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: 500,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        once: true,
      },
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(obj.val).toString();
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="px-5 py-16 md:px-8 md:py-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p
            className="font-body text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--accent)" }}
          >
            Why Reki
          </p>
          <h2
            className="font-display mt-3 font-semibold leading-tight"
            style={{ color: "var(--text)", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            We choose wood —
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              for little hands and big dreams.
            </span>
          </h2>
          <p
            className="font-body mt-5 max-w-md text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            In a world of plastic and batteries, Reki offers an eco-conscious
            alternative: physical games that benefit both children and the
            planet. Safe, lasting, and designed for open-ended play.
          </p>

          <div className="mt-8 flex items-baseline gap-2">
            <span
              ref={counterRef}
              className="font-display text-5xl font-semibold"
              style={{ color: "var(--accent)" }}
            >
              0
            </span>
            <span className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
              + families exploring Reki
            </span>
          </div>
        </div>

        <div>
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className="py-7"
              style={{
                borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="flex gap-5">
                <span
                  className="font-display text-3xl font-semibold leading-none"
                  style={{ color: "var(--accent)", opacity: 0.4 }}
                >
                  {reason.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold" style={{ color: "var(--text)" }}>
                    {reason.title}
                  </h3>
                  <p
                    className="font-body mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
