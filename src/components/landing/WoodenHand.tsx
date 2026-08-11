"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import WoodenHandLines from "./WoodenHandLines";
import WoodenHandSparkle from "./WoodenHandSparkle";

const LINE_INTRO_MS = 1700;
const SPARKLE_MS = 950;
const HAND_SRC = "/illustrations/wooden-adult-hand.png";

type Phase = "lines" | "sparkle" | "done";

function isHandCached(): boolean {
  const probe = document.createElement("img");
  probe.src = HAND_SRC;
  return probe.complete && probe.naturalWidth > 0;
}

export default function WoodenHand() {
  const [mounted, setMounted] = useState(false);
  const [introKey, setIntroKey] = useState(0);
  const [playIntro, setPlayIntro] = useState(false);
  const [phase, setPhase] = useState<Phase>("done");
  const [pngReady, setPngReady] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Client-only: decide intro vs instant hand (avoids hydration mismatch)
  useEffect(() => {
    const cached = isHandCached();
    if (cached) {
      setPlayIntro(false);
      setPhase("done");
      setPngReady(true);
    } else {
      setIntroKey(Date.now());
      setPlayIntro(true);
      setPhase("lines");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !playIntro) return;

    const toSparkle = window.setTimeout(() => setPhase("sparkle"), LINE_INTRO_MS);
    const toDone = window.setTimeout(() => setPhase("done"), LINE_INTRO_MS + SPARKLE_MS);

    return () => {
      clearTimeout(toSparkle);
      clearTimeout(toDone);
    };
  }, [mounted, playIntro]);

  useEffect(() => {
    if (!mounted) return;
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setPngReady(true);
  }, [mounted]);

  const showLines = mounted && playIntro && phase === "lines";
  const showSparkle = mounted && playIntro && phase === "sparkle";
  const showHand =
    mounted && (!playIntro || phase === "sparkle" || phase === "done");

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

        {showLines && (
          <div className="absolute inset-0">
            <WoodenHandLines
              key={introKey}
              className="h-full w-full object-contain object-right"
            />
          </div>
        )}

        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            showHand && pngReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            ref={imgRef}
            src={HAND_SRC}
            alt=""
            fill
            sizes="(max-width: 1280px) 340px, 400px"
            priority
            className="relative object-contain object-right drop-shadow-[0_10px_24px_rgba(92,58,18,0.18)]"
            onLoad={() => setPngReady(true)}
          />
        </div>

        <WoodenHandSparkle active={showSparkle} />
      </div>
    </div>
  );
}
