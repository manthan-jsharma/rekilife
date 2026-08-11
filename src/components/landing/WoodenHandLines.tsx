"use client";

import { useReducedMotion } from "framer-motion";

/** Inline wooden line-art hand — instant on hard reload until PNG loads. */
export default function WoodenHandLines({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      fill="none"
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="wood-stroke-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e7af6e" />
          <stop offset="45%" stopColor="#b9772c" />
          <stop offset="100%" stopColor="#9a6524" />
        </linearGradient>
        <linearGradient id="wood-stroke-b" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c4a35a" />
          <stop offset="50%" stopColor="#b9772c" />
          <stop offset="100%" stopColor="#7a4e18" />
        </linearGradient>
        <linearGradient id="wood-stroke-c" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dfb57f" />
          <stop offset="100%" stopColor="#8a5a20" />
        </linearGradient>
      </defs>

      {/* Palm + wrist */}
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line"}
        pathLength={1}
        d="M118 468 C92 430 78 390 88 348 C98 308 118 278 142 252 C168 224 198 210 228 198"
        stroke="url(#wood-stroke-a)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line wooden-hand-line-delay-1"}
        pathLength={1}
        d="M228 198 C268 188 302 176 328 158 C352 142 372 118 380 92"
        stroke="url(#wood-stroke-b)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Thumb */}
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line wooden-hand-line-delay-2"}
        pathLength={1}
        d="M142 252 C128 228 118 200 124 172 C130 152 148 138 168 132 C188 126 208 134 218 152"
        stroke="url(#wood-stroke-c)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Index */}
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line wooden-hand-line-delay-3"}
        pathLength={1}
        d="M228 198 C248 162 262 128 268 98 C272 78 268 58 254 48 C238 38 218 42 208 58 C198 74 200 98 208 124"
        stroke="url(#wood-stroke-a)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Middle */}
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line wooden-hand-line-delay-4"}
        pathLength={1}
        d="M268 188 C292 148 308 112 314 78 C318 52 308 32 292 24 C274 16 256 26 250 48 C244 72 252 104 262 132"
        stroke="url(#wood-stroke-b)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Ring */}
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line wooden-hand-line-delay-5"}
        pathLength={1}
        d="M302 176 C322 138 336 102 340 72 C344 50 334 34 318 28 C300 22 286 36 282 56 C278 78 286 108 296 138"
        stroke="url(#wood-stroke-c)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Pinky */}
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line wooden-hand-line-delay-6"}
        pathLength={1}
        d="M328 158 C346 128 358 100 360 74 C362 54 350 40 336 38 C318 36 308 52 308 70 C308 92 316 118 324 142"
        stroke="url(#wood-stroke-a)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Finger joints + palm detail */}
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line wooden-hand-line-delay-7"}
        pathLength={1}
        d="M208 124 C218 148 232 168 248 188 M262 132 C272 152 284 168 302 176"
        stroke="url(#wood-stroke-b)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        className={reduce ? "wooden-hand-line-static" : "wooden-hand-line wooden-hand-line-delay-8"}
        pathLength={1}
        d="M188 280 C210 268 234 252 258 238 C278 226 298 214 318 198"
        stroke="url(#wood-stroke-c)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Soft wood grain accents */}
      <path
        className={reduce ? "" : "wooden-hand-glow"}
        d="M248 188 C268 210 286 232 298 258 C306 276 310 302 308 328"
        stroke="#e7af6e"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
