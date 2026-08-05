"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StarField from "@/components/StarField";

gsap.registerPlugin(ScrollTrigger);

function FloatingPiece({
  children,
  className,
  speed,
}: {
  children: React.ReactNode;
  className?: string;
  speed: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      y: -60 * speed,
      rotation: 15 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    if (badgeRef.current) {
      tl.from(badgeRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
      });
    }

    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".word");
      tl.from(
        words,
        {
          y: 80,
          opacity: 0,
          rotateX: -40,
          stagger: 0.12,
          duration: 1,
          ease: "power4.out",
          immediateRender: false,
        },
        "-=0.3"
      );
    }

    if (subRef.current) {
      tl.from(
        subRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
        },
        "-=0.5"
      );
    }

    if (ctaRef.current) {
      tl.from(
        ctaRef.current.children,
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          immediateRender: false,
        },
        "-=0.4"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
      style={{ background: "var(--bg)" }}
    >
      <StarField count={80} />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -left-32 top-20 h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,174,127,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-20 bottom-32 h-64 w-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232,168,73,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #6c63ff 0px, #6c63ff 1px, transparent 1px, transparent 80px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #6c63ff 0px, #6c63ff 1px, transparent 1px, transparent 80px)",
          }}
        />
      </div>

      {/* Floating game pieces */}
      <FloatingPiece
        speed={1.2}
        className="pointer-events-none absolute left-[8%] top-[28%] opacity-60"
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path
            d="M36 8C28 8 22 14 22 22C22 28 26 33 31 35L31 42H22V48H50V42H41L41 35C46 33 50 28 50 22C50 14 44 8 36 8Z"
            fill="rgba(108,99,255,0.25)"
            stroke="rgba(167,139,250,0.5)"
            strokeWidth="1.5"
          />
          <rect x="20" y="48" width="32" height="6" rx="2" fill="rgba(108,99,255,0.2)" />
          <rect x="16" y="54" width="40" height="8" rx="3" fill="rgba(108,99,255,0.15)" />
        </svg>
      </FloatingPiece>

      <FloatingPiece
        speed={0.8}
        className="pointer-events-none absolute right-[10%] top-[22%] opacity-50"
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" fill="rgba(123,174,127,0.2)" stroke="rgba(123,174,127,0.5)" strokeWidth="1.5" transform="rotate(12 16 16)" />
          <rect x="28" y="12" width="24" height="24" rx="4" fill="rgba(232,168,73,0.2)" stroke="rgba(232,168,73,0.5)" strokeWidth="1.5" transform="rotate(-8 40 24)" />
          <rect x="16" y="32" width="24" height="24" rx="4" fill="rgba(232,115,74,0.2)" stroke="rgba(232,115,74,0.5)" strokeWidth="1.5" transform="rotate(6 28 44)" />
        </svg>
      </FloatingPiece>

      <FloatingPiece
        speed={1.5}
        className="pointer-events-none absolute bottom-[30%] left-[15%] opacity-40"
      >
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="22" fill="rgba(232,168,73,0.1)" stroke="rgba(232,168,73,0.4)" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="14" fill="none" stroke="rgba(232,168,73,0.3)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="28" cy="28" r="4" fill="rgba(232,168,73,0.5)" />
        </svg>
      </FloatingPiece>

      <FloatingPiece
        speed={1}
        className="pointer-events-none absolute bottom-[25%] right-[12%] opacity-45"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="6" y="6" width="48" height="48" rx="6" fill="rgba(108,99,255,0.08)" stroke="rgba(108,99,255,0.3)" strokeWidth="1.5" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={`h${i}`} x1="6" y1={6 + i * 8} x2="54" y2={6 + i * 8} stroke="rgba(108,99,255,0.15)" strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={`v${i}`} x1={6 + i * 8} y1="6" x2={6 + i * 8} y2="54" stroke="rgba(108,99,255,0.15)" strokeWidth="0.5" />
          ))}
        </svg>
      </FloatingPiece>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div ref={badgeRef} className="mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-body text-[11px] uppercase tracking-[0.2em]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--accent-light)",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{
                background: "var(--accent-light)",
                animation: "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
            Physical games · Coming soon
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="font-display font-semibold tracking-[-0.02em]"
          style={{
            perspective: "800px",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            lineHeight: 1.12,
            paddingBottom: "0.12em",
          }}
        >
          <span className="word inline-block" style={{ lineHeight: 1.12 }}>Play</span>{" "}
          <span className="word inline-block" style={{ lineHeight: 1.12 }}>smarter.</span>
          <br />
          <span className="word inline-block" style={{ lineHeight: 1.12 }}>Play</span>{" "}
          <span
            className="word inline-block"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 50%, var(--honey) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.12,
              paddingBottom: "0.08em",
            }}
          >
            together.
          </span>
        </h1>

        <p
          ref={subRef}
          className="mx-auto mt-6 max-w-xl font-body text-[clamp(1rem,2.5vw,1.2rem)] font-light leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Premium puzzles, smart chess, and intuitive games for curious minds.
          Screen-free play that grows with your child.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="font-body rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "0 4px 24px rgba(108,99,255,0.35)",
              padding: "14px 32px",
            }}
          >
            Join the Waitlist
          </a>
          <a
            href="#products"
            className="font-body rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              color: "#fff",
              padding: "14px 32px",
            }}
          >
            Explore Collection
          </a>
        </div>
      </div>

      {/* Scroll hint — below fold on mobile */}
      <div
        className="absolute bottom-6 left-1/2 z-[1] hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
      >
        <span
          className="font-body text-[10px] uppercase tracking-[0.25em]"
          style={{ color: "var(--subtle)" }}
        >
          Scroll
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="4" y="1" width="8" height="14" rx="4" stroke="var(--subtle)" strokeWidth="1.5" />
          <circle cx="8" cy="7" r="2" fill="var(--accent-light)" />
        </svg>
      </div>
    </section>
  );
}
