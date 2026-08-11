"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import WoodenHandLines from "./WoodenHandLines";

/** Line draw plays every reload; PNG waits until intro finishes (even if cached). */
const LINE_INTRO_MS = 1700;

export default function WoodenHand() {
  const [introKey] = useState(() => Date.now());
  const [pngReady, setPngReady] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setIntroDone(true), LINE_INTRO_MS);
    return () => clearTimeout(t);
  }, []);

  // Cached PNG on normal reload can load before onLoad wires up
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setPngReady(true);
  }, []);

  const showPng = pngReady && introDone;

  return (
    <div
      className="wooden-hand-float pointer-events-none select-none will-change-transform"
      aria-hidden
    >
      <div className="relative h-[420px] w-[340px] xl:h-[500px] xl:w-[400px]">
        <div
          className="absolute bottom-[6%] left-[8%] right-[4%] h-[56px] rounded-[100%] blur-md"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(92,58,18,0.35) 0%, rgba(92,58,18,0.12) 45%, transparent 72%)",
          }}
        />

        <div
          className="absolute inset-0 transition-opacity duration-500 ease-out"
          style={{ opacity: showPng ? 0 : 1 }}
        >
          <WoodenHandLines
            key={introKey}
            className="h-full w-full object-contain object-right"
          />
        </div>

        <Image
          ref={imgRef}
          src="/illustrations/wooden-adult-hand.png"
          alt=""
          fill
          sizes="(max-width: 1280px) 340px, 400px"
          priority
          className={`relative object-contain object-right drop-shadow-[0_10px_24px_rgba(92,58,18,0.18)] transition-opacity duration-500 ease-out ${
            showPng ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setPngReady(true)}
        />
      </div>
    </div>
  );
}
