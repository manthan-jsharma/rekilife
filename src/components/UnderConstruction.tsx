"use client";

import { useEffect, useState } from "react";
import StarField from "./StarField";

interface Props {
  visible: boolean;
}

export default function UnderConstruction({ visible }: Props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const tick = () => {
      i++;
      setStep(i);
      if (i < 8) setTimeout(tick, 140);
    };
    setTimeout(tick, 100);
  }, [visible]);

  const reveal = (index: number): React.CSSProperties => ({
    opacity: step > index ? 1 : 0,
    transform: step > index ? "translateY(0)" : "translateY(22px)",
    transition:
      "opacity 0.65s ease, transform 0.65s cubic-bezier(0.34,1.2,0.64,1)",
  });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease",
        overflow: "hidden",
      }}
    >
      <StarField count={110} />

      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(90deg, #6c63ff 0px, #6c63ff 1px, transparent 1px, transparent 90px)",
            opacity: 0.04,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, #6c63ff 0px, #6c63ff 1px, transparent 1px, transparent 90px)",
            opacity: 0.04,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,99,255,0.13) 0%, transparent 70%)",
          animation: "float 14s ease-in-out infinite alternate",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite alternate-reverse",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 680,
          width: "100%",
        }}
      >
        {/* Badge */}
        <div style={reveal(0)}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 18px",
              borderRadius: 100,
              background: "#13131f",
              border: "1px solid #1e1e30",
              color: "#a78bfa",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              marginBottom: 40,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#a78bfa",
                display: "inline-block",
                animation: "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
            Coming Soon
          </span>
        </div>

        {/* Site name */}
        <div style={reveal(1)}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(3rem, 10vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 30%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reki
            </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6c63ff, #a78bfa, #c4b5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
              }}
            >
              .life
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div style={reveal(2)}>
          <p
            style={{
              marginTop: 20,
              color: "#6b7280",
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
              letterSpacing: "0.02em",
            }}
          >
            Something beautiful is being crafted.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            ...reveal(3),
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "32px 0",
          }}
        >
          <div
            style={{
              height: 1,
              width: 96,
              background:
                "linear-gradient(90deg, transparent, #6c63ff, transparent)",
            }}
          />
        </div>

        {/* Under construction */}
        <div style={reveal(4)}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontSize: 22,
                display: "inline-block",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              🔧
            </span>
            <span
              style={{
                color: "#9ca3af",
                fontSize: 13,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Site under construction
            </span>
            <span
              style={{
                fontSize: 22,
                display: "inline-block",
                animation: "float 3s ease-in-out 0.4s infinite",
              }}
            >
              ⚡
            </span>
          </div>
        </div>

        {/* Code comment */}
        <div style={reveal(5)}>
          <p
            style={{
              marginTop: 24,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: "#4b5563",
              letterSpacing: "0.02em",
            }}
          >
            <span style={{ color: "#6c63ff", opacity: 0.7 }}>// </span>
            building the future, stay tuned
          </p>
        </div>

        {/* Social links */}
        <div style={{ ...reveal(6), marginTop: 40, display: "flex", gap: 12 }}>
          {[
            { label: "Twitter", href: "#", icon: "𝕏" },
            { label: "Instagram", href: "#", icon: "◎" },
            { label: "Email", href: "mailto:hello@reki.life", icon: "✉" },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "#13131f",
                border: "1px solid #1e1e30",
                color: "#6b7280",
                fontSize: 15,
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#6c63ff";
                (e.currentTarget as HTMLElement).style.color = "#a78bfa";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e1e30";
                (e.currentTarget as HTMLElement).style.color = "#6b7280";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          ...reveal(7),
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#374151",
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        © {new Date().getFullYear()} reki.life — all rights reserved
      </footer>
    </div>
  );
}
