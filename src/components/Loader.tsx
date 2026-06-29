"use client";

import { useEffect, useRef, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const FULL_TEXT = "reki.life";
const CHAR_DELAY = 120;
const HOLD_AFTER = 800;
const FADE_DURATION = 600;

export default function Loader({ onComplete }: LoaderProps) {
  const [displayed, setDisplayed] = useState("");
  const [exiting, setExiting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [showSub, setShowSub] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const typeNext = () => {
      if (indexRef.current < FULL_TEXT.length) {
        indexRef.current += 1;
        setDisplayed(FULL_TEXT.slice(0, indexRef.current));
        if (indexRef.current === 1) setShowSub(true);
        setTimeout(typeNext, CHAR_DELAY);
      } else {
        setTimeout(() => {
          setShowCursor(false);
          setExiting(true);
          setTimeout(onComplete, FADE_DURATION);
        }, HOLD_AFTER);
      }
    };
    const t = setTimeout(typeNext, 400);
    return () => clearTimeout(t);
  }, [onComplete]);

  const rekiPart = displayed.slice(0, Math.min(displayed.length, 4));
  const dotPart = displayed.length > 4 ? displayed.slice(4) : "";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.03)" : "scale(1)",
        transition: `opacity ${FADE_DURATION}ms ease, transform ${FADE_DURATION}ms ease`,
      }}
    >
      {/* Ripple rings */}
      <div
        style={{
          position: "relative",
          width: 120,
          height: 120,
          marginBottom: 40,
        }}
      >
        {[0, 0.6, 1.2, 1.8].map((delay, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `1.5px solid ${
                ["#6c63ff", "#7c73ff", "#a78bfa", "#c4b5fd"][i]
              }`,
              opacity: 0,
              animation: `ripple-expand 2.4s ease-out ${delay}s infinite`,
            }}
          />
        ))}
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#6c63ff",
            boxShadow: "0 0 20px #6c63ffaa",
            animation: "pulse-dot 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Typewriter */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: "clamp(2rem, 8vw, 3.5rem)",
          fontWeight: 500,
          letterSpacing: "0.15em",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#ffffff" }}>{rekiPart}</span>
        <span style={{ color: "#a78bfa" }}>{dotPart}</span>
        {showCursor && (
          <span
            style={{
              display: "inline-block",
              width: 3,
              height: "1em",
              background: "#6c63ff",
              marginLeft: 4,
              verticalAlign: "text-bottom",
              boxShadow: "0 0 8px #6c63ffaa",
              animation: "blink 1s step-end infinite",
            }}
          />
        )}
      </div>

      {/* Subtitle */}
      <p
        style={{
          marginTop: 24,
          color: "#6b7280",
          fontSize: 12,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
          opacity: showSub ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        initialising
      </p>
    </div>
  );
}
