"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const CHECKOUT_URL =
  "https://www.flipkart.com/product/p/itme?pid=BDGHPM38CKXMSRQH&lid=LSTBDGHPM38CKXMSRQHY9WOK3&_refId=&_appId=WA";

const products = [
  {
    name: "Memory Match",
    age: "Ages 3+",
    price: "₹499",
    tag: "Intuitive",
    color: "#7bae7f",
    image: "/products/memory-match.png",
  },
  {
    name: "Cosmic Puzzle Set",
    age: "Ages 4–8",
    price: "₹449",
    tag: "Puzzles",
    color: "#7bae7f",
    image: "/products/cosmic-puzzle-set.png",
  },
  {
    name: "Magnetic Chess Pro",
    age: "Ages 6+",
    price: "₹479",
    tag: "Smart Chess",
    color: "#a78bfa",
    image: "/products/magnetic-chess-pro.png",
  },
  {
    name: "Logic Blocks",
    age: "Ages 3–6",
    price: "₹399",
    tag: "Intuitive",
    color: "#e8a849",
    image: "/products/logic-blocks.png",
  },
  {
    name: "Pattern Master",
    age: "Ages 5–10",
    price: "₹429",
    tag: "Puzzles",
    color: "#e8734a",
    image: "/products/pattern-master.png",
  },
  {
    name: "Junior Strategist",
    age: "Ages 7+",
    price: "₹469",
    tag: "Smart Chess",
    color: "#a78bfa",
    image: "/products/junior-strategist.png",
  },
  {
    name: "Tactile Explorer",
    age: "Ages 3–5",
    price: "₹419",
    tag: "Intuitive",
    color: "#a8d4ab",
    image: "/products/tactile-explorer.png",
  },
];

function ProductTile({
  product,
}: {
  product: (typeof products)[0];
}) {
  return (
    <div className="product-tile group relative w-[260px] flex-shrink-0 sm:w-[280px] md:w-[300px]">
      {/* Portrait frame — image IS the tile */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 260px, 300px"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient scrim */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.2) 45%, transparent 70%)",
          }}
        />

        {/* Tag badge */}
        <span
          className="absolute left-4 top-4 z-10 font-body text-[10px] uppercase tracking-[0.2em]"
          style={{ color: product.color }}
        >
          {product.tag}
        </span>

        {/* Bottom overlay content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <h3 className="font-display text-xl font-semibold leading-tight text-white md:text-2xl">
            {product.name}
          </h3>
          <p className="font-body mt-1.5 text-xs font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.7)" }}>
            {product.age}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-body text-sm font-medium text-white/80">
              {product.price}
            </span>
            <motion.a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-body rounded-full text-[10px] uppercase tracking-wider opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "8px 16px",
                textDecoration: "none",
              }}
            >
              Checkout
            </motion.a>
          </div>
        </div>
      </div>

      {/* Caption below frame */}
      <div
        className="mt-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid #c8c0b4", paddingBottom: "14px" }}
      >
        <span
          className="font-body text-[11px] font-medium uppercase tracking-[0.22em]"
          style={{ color: "var(--text-dark-muted)" }}
        >
          {product.tag}
        </span>
        <span
          className="font-body text-xs font-medium"
          style={{ color: "var(--text-dark-muted)" }}
        >
          {product.price}
        </span>
      </div>
    </div>
  );
}

export default function ProductGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => {
        const overflow = track.scrollWidth - pin.offsetWidth;
        return Math.max(overflow, 0);
      };

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top 15%",
          end: () => `+=${getScrollDistance()}`,
          pin: pin,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    const imgs = section.querySelectorAll("img");
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener("load", refresh);
    });
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="grain relative py-20"
      style={{ background: "var(--cream)" }}
    >
      <div className="relative z-10 mx-auto mb-12 max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className="font-body text-[11px] uppercase tracking-[0.25em]"
              style={{ color: "var(--coral)" }}
            >
              Featured
            </span>
            <h2
              className="font-display mt-2 font-semibold leading-tight tracking-[-0.02em]"
              style={{ color: "var(--text-dark)", fontSize: "clamp(2rem,5vw,3.5rem)" }}
            >
              The collection
            </h2>
          </div>
          <p
            className="font-body max-w-sm text-sm leading-relaxed"
            style={{ color: "var(--text-dark-muted)" }}
          >
            Handpicked physical games launching soon. Join the waitlist to get
            first access and exclusive launch pricing.
          </p>
        </div>
      </div>

      <div ref={pinRef} className="relative z-10 overflow-hidden">
        <div ref={trackRef} className="flex w-max gap-8 px-6">
          {products.map((product) => (
            <ProductTile key={product.name} product={product} />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-7xl px-6">
        <p className="font-body text-xs font-medium tracking-wide" style={{ color: "var(--text-dark-muted)" }}>
          Scroll to explore →
        </p>
      </div>
    </section>
  );
}
