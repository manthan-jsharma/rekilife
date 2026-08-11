"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type StickerId = "puzzles" | "chess" | "memory" | "blocks" | "intuitive" | "strategy";

type Sticker = {
  id: StickerId;
  label: string;
  href: string;
  bg: string;
};

const stickers: Sticker[] = [
  { id: "puzzles", label: "PUZZLES", href: "#collections", bg: "#f3e2c6" },
  { id: "chess", label: "SMART CHESS", href: "#collections", bg: "#dce8e8" },
  { id: "memory", label: "MEMORY", href: "#collections", bg: "#f6e4d8" },
  { id: "blocks", label: "LOGIC BLOCKS", href: "#collections", bg: "#e8f0e4" },
  { id: "intuitive", label: "INTUITIVE", href: "#collections", bg: "#efe6f4" },
  { id: "strategy", label: "STRATEGY", href: "#collections", bg: "#f5ecd8" },
];

function CategoryIcon({ id }: { id: StickerId }) {
  switch (id) {
    case "puzzles":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="cat-icon-svg">
          <rect className="cat-puzzle-piece" data-ox="6" data-oy="6" x="6" y="6" width="20" height="20" rx="4" fill="#6b7a4a" />
          <rect className="cat-puzzle-piece" data-ox="30" data-oy="6" x="30" y="6" width="20" height="20" rx="4" fill="#c45c4a" />
          <rect className="cat-puzzle-piece" data-ox="6" data-oy="30" x="6" y="30" width="20" height="20" rx="4" fill="#b9772c" />
          <rect className="cat-puzzle-piece" data-ox="30" data-oy="30" x="30" y="30" width="20" height="20" rx="4" fill="#c4a35a" />
        </svg>
      );
    case "chess":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="cat-icon-svg">
          <g className="cat-chess-base">
            <rect x="16" y="36" width="24" height="5" rx="2" fill="#b9772c" />
            <rect x="13" y="41" width="30" height="6" rx="2" fill="#8a5a20" />
          </g>
          <path
            className="cat-chess-pawn"
            d="M28 8c-5 0-9 4-9 9 0 4 2.5 7 6 8.5V32h-5v4h16v-4h-5v-6.5c3.5-1.5 6-4.5 6-8.5 0-5-4-9-9-9z"
            fill="#9a6524"
          />
        </svg>
      );
    case "memory":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="cat-icon-svg">
          <circle cx="28" cy="28" r="18" fill="#e9c496" stroke="#1a1a1a" strokeWidth="1.5" />
          <circle className="cat-memory-dot" cx="20" cy="24" r="3" fill="#c45c4a" />
          <circle className="cat-memory-dot" cx="28" cy="20" r="3" fill="#b9772c" />
          <circle className="cat-memory-dot" cx="36" cy="24" r="3" fill="#6b7a4a" />
          <circle className="cat-memory-dot" cx="22" cy="32" r="3" fill="#c4a35a" />
          <circle className="cat-memory-dot" cx="34" cy="32" r="3" fill="#9a6524" />
        </svg>
      );
    case "blocks":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="cat-icon-svg">
          <rect className="cat-block" data-oy="28" x="10" y="28" width="16" height="16" rx="2" fill="#6b7a4a" stroke="#1a1a1a" strokeWidth="1" />
          <rect className="cat-block" data-oy="16" x="22" y="16" width="16" height="16" rx="2" fill="#c4a35a" stroke="#1a1a1a" strokeWidth="1" />
          <rect className="cat-block" data-oy="30" x="30" y="30" width="16" height="16" rx="2" fill="#b9772c" stroke="#1a1a1a" strokeWidth="1" />
        </svg>
      );
    case "intuitive":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="cat-icon-svg">
          <circle cx="28" cy="28" r="18" fill="#d4c4e8" stroke="#1a1a1a" strokeWidth="1.5" />
          <g className="cat-clock-hand" style={{ transformOrigin: "28px 28px" }}>
            <path d="M28 16v12l8 4" stroke="#9a6524" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <circle cx="28" cy="28" r="3" fill="#c45c4a" />
        </svg>
      );
    case "strategy":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="cat-icon-svg">
          <path
            className="cat-star"
            d="M28 10l4 10h10l-8 6 3 10-9-6-9 6 3-10-8-6h10z"
            fill="#c4a35a"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            style={{ transformOrigin: "28px 28px" }}
          />
          <circle className="cat-sparkle" cx="14" cy="18" r="2" fill="#fcd39f" opacity="0" />
          <circle className="cat-sparkle" cx="42" cy="16" r="1.8" fill="#fff6e8" opacity="0" />
          <circle className="cat-sparkle" cx="44" cy="34" r="2.2" fill="#fcd39f" opacity="0" />
          <circle className="cat-sparkle" cx="12" cy="36" r="1.6" fill="#fff6e8" opacity="0" />
          <path className="cat-sparkle" d="M8 12l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="#fcd39f" opacity="0" />
          <path className="cat-sparkle" d="M46 42l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#fff6e8" opacity="0" />
        </svg>
      );
  }
}

function runThematicLoop(root: HTMLElement, id: StickerId): gsap.core.Animation {
  switch (id) {
    case "puzzles": {
      const pieces = root.querySelectorAll(".cat-puzzle-piece");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });
      pieces.forEach((piece, i) => {
        const el = piece as SVGRectElement;
        const ox = Number(el.dataset.ox ?? el.getAttribute("x"));
        const oy = Number(el.dataset.oy ?? el.getAttribute("y"));
        const offsets = [
          { x: -10, y: -8 },
          { x: 10, y: -8 },
          { x: -10, y: 10 },
          { x: 10, y: 10 },
        ];
        const off = offsets[i] ?? { x: 0, y: 0 };
        tl.set(el, { attr: { x: ox + off.x, y: oy + off.y }, opacity: 0.35 }, 0);
        tl.to(
          el,
          {
            attr: { x: ox, y: oy },
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2.2)",
          },
          0.15 + i * 0.1,
        );
      });
      return tl;
    }

    case "chess": {
      const pawn = root.querySelector(".cat-chess-pawn");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      if (pawn) {
        tl.to(pawn, { y: -7, duration: 0.35, ease: "power2.out" })
          .to(pawn, { y: 0, duration: 0.45, ease: "bounce.out" })
          .to(pawn, { y: -3, duration: 0.2, ease: "power2.out" })
          .to(pawn, { y: 0, duration: 0.3, ease: "power2.in" });
      }
      return tl;
    }

    case "memory": {
      const dots = root.querySelectorAll(".cat-memory-dot");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
      dots.forEach((dot, i) => {
        tl.to(
          dot,
          {
            scaleY: 0.15,
            opacity: 0.35,
            duration: 0.18,
            ease: "power2.in",
            transformOrigin: "center center",
          },
          i * 0.12,
        ).to(
          dot,
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.32,
            ease: "back.out(3)",
            transformOrigin: "center center",
          },
          i * 0.12 + 0.18,
        );
      });
      return tl;
    }

    case "blocks": {
      const blocks = root.querySelectorAll(".cat-block");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.9 });
      blocks.forEach((block, i) => {
        const el = block as SVGRectElement;
        const oy = Number(el.dataset.oy ?? el.getAttribute("y"));
        tl.to(
          el,
          {
            attr: { y: oy + 24 },
            duration: 0.32,
            ease: "power3.in",
          },
          i * 0.14,
        ).to(
          el,
          {
            attr: { y: oy },
            duration: 0.55,
            ease: "bounce.out",
          },
          i * 0.14 + 0.32,
        );
      });
      return tl;
    }

    case "intuitive": {
      const hand = root.querySelector(".cat-clock-hand");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
      if (hand) {
        tl.to(hand, { rotation: 28, duration: 0.45, ease: "power2.out", transformOrigin: "28px 28px" })
          .to(hand, { rotation: 0, duration: 0.55, ease: "back.out(2)" });
      }
      return tl;
    }

    case "strategy": {
      const star = root.querySelector(".cat-star");
      const sparkles = root.querySelectorAll(".cat-sparkle");
      sparkles.forEach((s) => gsap.set(s, { opacity: 0, scale: 0, transformOrigin: "center center" }));
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      if (star) {
        tl.to(star, {
          scaleX: 1.18,
          scaleY: 0.78,
          duration: 0.22,
          ease: "power2.out",
          transformOrigin: "28px 28px",
        })
          .to(star, {
            scaleX: 0.9,
            scaleY: 1.14,
            duration: 0.24,
            ease: "power2.inOut",
            transformOrigin: "28px 28px",
          })
          .to(star, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.45,
            ease: "elastic.out(1.4)",
            transformOrigin: "28px 28px",
          });
      }
      sparkles.forEach((s, i) => {
        gsap.to(s, {
          opacity: 1,
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
          yoyo: true,
          repeat: -1,
          repeatDelay: 1.5,
          delay: i * 0.11,
          transformOrigin: "center center",
        });
      });
      return tl;
    }
  }
}

function StickerCard({
  s,
  iconRef,
}: {
  s: Sticker;
  iconRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <a
      href={s.href}
      className="group flex w-[92px] shrink-0 flex-col items-center gap-2.5 md:w-[100px]"
    >
      <div
        className="flex h-[80px] w-[80px] items-center justify-center rounded-2xl md:h-[88px] md:w-[88px]"
        style={{
          background: s.bg,
          border: "4px solid #fff",
          outline: "1.5px solid #1a1a1a",
          boxShadow: "3px 3px 0 rgba(0,0,0,0.08)",
        }}
      >
        <div ref={iconRef} className="flex items-center justify-center">
          <CategoryIcon id={s.id} />
        </div>
      </div>
      <span
        className="font-play text-center text-[12px] font-medium leading-tight tracking-wide"
        style={{ color: "var(--ink)" }}
      >
        {s.label}
      </span>
    </a>
  );
}

export default function Categories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const loop = [...stickers, ...stickers];

  const setIconRef = (id: string, index: number) => (el: HTMLDivElement | null) => {
    const key = `${id}-${index}`;
    if (el) iconRefs.current.set(key, el);
    else iconRefs.current.delete(key);
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const track = trackRef.current;
    if (!track) return;

    const animations: gsap.core.Animation[] = [];
    let marqueeTween: gsap.core.Tween | null = null;

    const startMarquee = () => {
      if (marqueeTween) marqueeTween.kill();
      const half = track.scrollWidth / 2;
      if (half <= 0) return;
      gsap.set(track, { x: 0 });
      marqueeTween = gsap.to(track, {
        x: -half,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
    };

    loop.forEach((s, i) => {
      const el = iconRefs.current.get(`${s.id}-${i}`);
      if (!el) return;
      animations.push(runThematicLoop(el, s.id));
    });

    const init = () => {
      requestAnimationFrame(() => requestAnimationFrame(startMarquee));
    };
    init();
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
      if (marqueeTween) marqueeTween.kill();
      animations.forEach((a) => a.kill());
      gsap.set(track, { clearProps: "x" });
    };
  }, []);

  return (
    <section
      id="categories"
      className="px-5 py-10 md:px-8 md:py-12"
      style={{
        background:
          "linear-gradient(180deg, var(--cream) 0%, #c5d0c0 35%, #8a9e8a 70%, #2f4a3a 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="reki-panel-gradient mx-auto max-w-[860px] rounded-xl py-7 md:py-9">
          <div className="reki-panel-rule-top" aria-hidden />
          <div className="reki-panel-rule-bottom" aria-hidden />

          <p
            className="font-body mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] md:mb-8"
            style={{ color: "var(--accent-dark)" }}
          >
            Browse by play style
          </p>

          <div className="overflow-hidden px-1 md:px-2">
            <div
              ref={trackRef}
              className="flex w-max items-start gap-7 px-3 md:gap-8 md:px-4"
              style={{ willChange: "transform" }}
            >
              {loop.map((s, i) => (
                <StickerCard key={`${s.id}-${i}`} s={s} iconRef={setIconRef(s.id, i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
