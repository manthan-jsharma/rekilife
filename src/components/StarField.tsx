"use client";

import { useEffect, useRef } from "react";

export default function StarField({ count = 100 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = Array.from({ length: count }, () => {
      const size = 0.5 + Math.random() * 2.5;
      const duration = 2 + Math.random() * 4;
      const delay = Math.random() * 5;
      const peak = 0.3 + Math.random() * 0.6;
      return `<span class="star" style="
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        width:${size}px; height:${size}px;
        --duration:${duration}s;
        --delay:${delay}s;
        --peak:${peak};
      "></span>`;
    }).join("");
    return () => {
      el.innerHTML = "";
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
