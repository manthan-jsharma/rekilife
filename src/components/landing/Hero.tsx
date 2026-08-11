"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import WoodenHand from "./WoodenHand";

/**
 * Hero story slides — swap `image` later for lifestyle/kids photos.
 * Image sits in a full-column wavy ribbon / capsule (waves top + bottom).
 */
const slides = [
  {
    eyebrow: "Welcome to reki",
    title: "In a world of screens,",
    accent: "we choose wood.",
    body: "Premium puzzles, smart chess, and intuitive games for little hands and big dreams.",
    image: "/products/memory-match.png",
    caption: "Memory Match · ₹499",
  },
  {
    eyebrow: "Screen-free play",
    title: "Minds open.",
    accent: "No batteries required.",
    body: "Tactile games that build focus, memory, and imagination — the quiet kind of joy.",
    image: "/products/memory-match.png",
    caption: "Screen-free evenings",
  },
  {
    eyebrow: "Built to last",
    title: "Not disposable toys.",
    accent: "Heirlooms of play.",
    body: "Solid materials, thoughtful finishes, and games designed to grow with your child.",
    image: "/products/memory-match.png",
    caption: "Crafted to last",
  },
  {
    eyebrow: "Curious minds",
    title: "Play smarter.",
    accent: "Play together.",
    body: "Montessori-inspired physical games that turn every evening into discovery.",
    image: "/products/memory-match.png",
    caption: "Play together",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (next: number) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, 350);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setVisible(true);
      }, 350);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative overflow-x-hidden" style={{ background: "var(--cream)" }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(185,119,44,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185,119,44,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "rgba(185,119,44,0.16)" }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full blur-3xl"
        style={{ background: "rgba(196,163,90,0.16)" }}
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-5 py-14 md:gap-12 md:px-8 md:py-20">
        {/* Quotes + desktop wooden hand */}
        <div className="relative w-full">
          <div className="max-w-2xl">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 350ms ease, transform 350ms ease",
            }}
          >
            <p
              className="font-body text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: "var(--accent-dark)" }}
            >
              {slide.eyebrow}
            </p>
            <h1
              className="font-display mt-4 font-semibold leading-[1.08]"
              style={{ color: "var(--ink)", fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)" }}
            >
              {slide.title}
              <br />
              <span className="italic whitespace-nowrap" style={{ color: "var(--accent-dark)" }}>
                {slide.accent}
              </span>
            </h1>
            <p
              className="font-body mt-5 max-w-md text-[15px] leading-relaxed md:text-base"
              style={{ color: "var(--muted)" }}
            >
              {slide.body}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/#collections"
              className="reki-btn-primary font-body rounded-md px-7 py-3 text-sm font-semibold uppercase tracking-wide"
            >
              Shop the collection
            </a>
            <a
              href="/#why"
              className="reki-btn-outline font-body rounded-md px-7 py-3 text-sm font-medium"
            >
              Why Reki
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="reki-btn-subtle h-1.5 rounded-full transition-all"
                style={{
                  width: i === index ? 28 : 10,
                  background: i === index ? "var(--accent-dark)" : "rgba(26,26,26,0.2)",
                }}
              />
            ))}
            <span className="font-mono ml-2 text-[11px] tracking-wider" style={{ color: "var(--subtle)" }}>
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
          </div>

          <div className="pointer-events-none absolute -top-32 right-0 z-10 hidden md:block xl:-top-36 xl:right-2">
            <WoodenHand />
          </div>
        </div>

        {/* Full-column ribbon: horizontal slant + 1–2 soft waves */}
        <div className="relative w-full">
          <svg width="0" height="0" className="absolute" aria-hidden>
            <defs>
              {/*
                Top: left low → right high, ~2 soft waves
                Bottom: same rise, mirrored rhythm
              */}
              <clipPath id="reki-wave-ribbon" clipPathUnits="objectBoundingBox">
                <path d="M0,0.22 C0.28,0.06 0.42,0.30 0.68,0.10 C0.84,0.00 0.92,0.10 1,0.05 L1,0.78 C0.92,0.86 0.84,0.74 0.68,0.84 C0.42,0.98 0.28,0.76 0,0.94 Z" />
              </clipPath>
            </defs>
          </svg>

          <div
            className="pointer-events-none absolute inset-[6%] blur-2xl"
            style={{ background: "rgba(185,119,44,0.18)" }}
          />

          <div className="relative aspect-[5/4] w-full md:aspect-[4/3]">
            {/* Honey stroke matching the slant+wave */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0,22 C28,6 42,30 68,10 C84,0 92,10 100,5 L100,78 C92,86 84,74 68,84 C42,98 28,76 0,94 Z"
                fill="none"
                stroke="#b9772c"
                strokeWidth="1.15"
                vectorEffect="non-scaling-stroke"
                opacity="0.9"
              />
            </svg>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: "url(#reki-wave-ribbon)",
                WebkitClipPath: "url(#reki-wave-ribbon)",
              }}
            >
              {slides.map((s, i) => (
                <div
                  key={s.caption + i}
                  className="absolute inset-0"
                  style={{
                    transform: `translateX(${(index - i) * 100}%)`,
                    transition: "transform 650ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Image
                    src={s.image}
                    alt={s.caption}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(21,36,28,0.06) 0%, transparent 35%, transparent 50%, rgba(21,36,28,0.5) 100%)",
                }}
              />

              <div
                className="absolute inset-x-0 bottom-[14%] px-8 md:px-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 350ms ease",
                }}
              >
                <p className="font-body text-[10px] uppercase tracking-[0.22em] text-white/75">
                  {String(index + 1).padStart(2, "0")} · reki ribbon
                </p>
                <p className="font-display mt-1 text-xl font-semibold text-white md:text-2xl">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute left-0 top-[20%] hidden rounded-full px-3.5 py-2 md:block"
            style={{
              background: "#fff",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 24px rgba(26,26,26,0.06)",
            }}
          >
            <p className="font-body text-[11px]" style={{ color: "var(--accent-dark)" }}>
              ★ 4.9 · parent loved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
