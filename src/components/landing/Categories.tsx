"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "puzzles",
    number: "01",
    title: "Puzzles",
    subtitle: "Pieces that teach patience",
    description:
      "From first jigsaws to brain-bending 3D challenges. Every piece crafted for little hands and big imaginations.",
    accent: "var(--sage)",
  },
  {
    id: "chess",
    number: "02",
    title: "Smart Chess",
    subtitle: "Strategy meets intuition",
    description:
      "Magnetic boards, guided learning pieces, and games that adapt to your child's level. Chess reimagined for young strategists.",
    accent: "var(--accent-light)",
  },
  {
    id: "intuitive",
    number: "03",
    title: "Intuitive Games",
    subtitle: "Learn by playing",
    description:
      "Logic games, pattern builders, and tactile challenges designed to develop critical thinking without a screen in sight.",
    accent: "var(--honey)",
  },
];

function CategorySlide({
  cat,
}: {
  cat: (typeof categories)[0];
}) {
  return (
    <div className="category-slide absolute inset-0 flex items-center justify-center px-6">
      <div className="cat-content mx-auto max-w-3xl text-center">
        <span
          className="font-mono text-xs tracking-[0.35em]"
          style={{ color: cat.accent }}
        >
          {cat.number}
        </span>

        <p
          className="font-body mt-6 text-[11px] uppercase tracking-[0.3em]"
          style={{ color: "var(--muted)" }}
        >
          {cat.subtitle}
        </p>

        <h3
          className="font-display mt-3 font-semibold leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
        >
          {cat.title}
        </h3>

        <p
          className="font-body mx-auto mt-8 max-w-lg text-base leading-relaxed md:text-lg"
          style={{ color: "var(--muted)" }}
        >
          {cat.description}
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className="font-body text-[10px] uppercase tracking-[0.25em]"
            style={{ color: cat.accent }}
          >
            Coming Soon
          </span>
          <span
            className="h-px w-8"
            style={{ background: cat.accent, opacity: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const slides = slidesRef.current?.querySelectorAll(".category-slide");
    if (!section || !pin || !slides?.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=400%",
          pin: pin,
          scrub: 1.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const fadeDuration = 1.4;
      const drift = 16;

      // Initial — Puzzles visible, others hidden
      gsap.set(slides[0], { opacity: 1, y: 0 });
      gsap.set(slides[1], { opacity: 0, y: drift });
      gsap.set(slides[2], { opacity: 0, y: drift });

      // Puzzles hold, then fades out
      tl.to(slides[0], { opacity: 0, y: -drift, duration: fadeDuration, ease: "power1.inOut" }, 1.4);

      // Smart Chess emerges
      tl.to(slides[1], { opacity: 1, y: 0, duration: fadeDuration, ease: "power1.inOut" }, 1.4);

      // Smart Chess hold, then fades out
      tl.to(slides[1], { opacity: 0, y: -drift, duration: fadeDuration, ease: "power1.inOut" }, 3.6);

      // Intuitive Games emerges
      tl.to(slides[2], { opacity: 1, y: 0, duration: fadeDuration, ease: "power1.inOut" }, 3.6);

      // Intuitive hold, then fades out → product gallery
      tl.to(slides[2], { opacity: 0, y: -drift, duration: fadeDuration, ease: "power1.inOut" }, 5.8);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div ref={pinRef} className="relative flex min-h-screen flex-col">
        {/* Section header — stays at top */}
        <div className="relative z-20 px-6 pt-24 pb-8">
          <div className="mx-auto max-w-7xl">
            <span
              className="font-body text-[11px] uppercase tracking-[0.3em]"
              style={{ color: "var(--accent-light)" }}
            >
              Our Collection
            </span>
            <h2
              className="font-display mt-3 font-semibold leading-tight tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Games that grow
              <br />
              <span
                className="italic"
                style={{ color: "var(--muted)" }}
              >
                with curious minds
              </span>
            </h2>
          </div>
        </div>

        {/* Scroll-driven text slides */}
        <div
          ref={slidesRef}
          className="relative flex-1 overflow-hidden"
          style={{ minHeight: "50vh" }}
        >
          {categories.map((cat) => (
            <CategorySlide key={cat.id} cat={cat} />
          ))}
        </div>

        {/* Progress indicator */}
        <div className="relative z-20 flex justify-center gap-3 pb-12">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="h-1 w-8 rounded-full"
              style={{ background: "var(--border)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
