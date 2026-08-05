"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const terminalLines = [
  { type: "command", text: "> reki.investigate --order #4821" },
  { type: "blank", text: "" },
  { type: "info", text: "🔍  Tracing order lifecycle..." },
  { type: "success", text: "   ✓  Payment captured (Stripe) — 2.3s delay detected" },
  { type: "success", text: "   ✓  Inventory reserved — SKU-4421 locked" },
  { type: "error", text: "   ✗  Shipment label — carrier API timeout" },
  { type: "blank", text: "" },
  { type: "result", text: "📋  Root cause: Shipment provider rate-limited at 14:32 UTC" },
  { type: "suggest", text: "💡  Suggested fix: Retry label generation or switch to backup carrier" },
  { type: "blank", text: "" },
  { type: "meta", text: "Confidence: 94% · Resolved in 1.2s" },
];

const mcpTools = [
  { name: "Order Trace", desc: "Full lifecycle analysis" },
  { name: "Payment Diagnose", desc: "Plain-language failure reports" },
  { name: "Inventory Check", desc: "Stock & reservation audit" },
  { name: "Shipment Status", desc: "Carrier & label tracking" },
];

const capabilities = [
  {
    title: "Trace stuck orders",
    description:
      "Follow every step from checkout to delivery. Know exactly where and why an order stalled.",
    icon: "→",
  },
  {
    title: "Diagnose payments",
    description:
      "Payment failures explained in plain language — no Stripe dashboard archaeology required.",
    icon: "₹",
  },
  {
    title: "Prevent escalations",
    description:
      "Surface root causes before they become support nightmares. Fix issues proactively.",
    icon: "⚡",
  },
];

function lineColor(type: string): string {
  switch (type) {
    case "command":
      return "var(--accent-light)";
    case "success":
      return "var(--terminal-green)";
    case "error":
      return "#f87171";
    case "result":
      return "var(--terminal-amber)";
    case "suggest":
      return "var(--honey)";
    case "meta":
      return "var(--muted)";
    default:
      return "#9ca3af";
  }
}

export default function OpsInvestigator() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const capsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          pin: pin,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      if (problemRef.current) {
        tl.to(problemRef.current, { opacity: 0, y: -40, duration: 0.3 }, 0.15);
      }

      const lines = linesRef.current?.querySelectorAll(".term-line");
      if (lines && lines.length > 0) {
        tl.fromTo(
          lines,
          { opacity: 0.3, x: -8 },
          { opacity: 1, x: 0, stagger: 0.04, duration: 0.3 },
          0.25
        );
      }

      const toolEls = toolsRef.current?.querySelectorAll(".mcp-tool");
      if (toolEls && toolEls.length > 0) {
        tl.fromTo(
          toolEls,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, stagger: 0.06, duration: 0.2 },
          0.55
        );
      }

      if (capsRef.current) {
        tl.fromTo(
          capsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.3 },
          0.75
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="investigator"
      ref={sectionRef}
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div ref={pinRef} className="flex min-h-screen flex-col justify-center px-6 py-20">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #6c63ff 0px, #6c63ff 1px, transparent 1px, transparent 60px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #6c63ff 0px, #6c63ff 1px, transparent 1px, transparent 60px)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          {/* Problem statement — fades out on scroll */}
          <div ref={problemRef} className="mb-12 text-center">
            <span
              className="font-body text-[11px] uppercase tracking-[0.25em]"
              style={{ color: "var(--terminal-amber)" }}
            >
              Introducing
            </span>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight">
              Order stuck? Payment failed?
              <br />
              <span style={{ color: "var(--muted)" }}>
                Shipment not moving?
              </span>
            </h2>
            <p
              className="font-body mx-auto mt-4 max-w-lg text-base"
              style={{ color: "var(--muted)" }}
            >
              Instead of digging through dashboards, logs, and support
              tickets — Reki investigates for you.
            </p>
          </div>

          {/* Terminal */}
          <div
            ref={terminalRef}
            className="overflow-hidden rounded-2xl"
            style={{
              background: "#0d0d14",
              border: "1px solid var(--border)",
              boxShadow: "0 0 60px rgba(108,99,255,0.08)",
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-2 px-5 py-3"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="h-3 w-3 rounded-full" style={{ background: "#f87171" }} />
              <div className="h-3 w-3 rounded-full" style={{ background: "var(--terminal-amber)" }} />
              <div className="h-3 w-3 rounded-full" style={{ background: "var(--terminal-green)" }} />
              <span
                className="font-mono ml-3 text-xs"
                style={{ color: "var(--muted)" }}
              >
                reki-ops-investigator — MCP diagnostics
              </span>
            </div>

            {/* Terminal body */}
            <div ref={linesRef} className="space-y-1 p-6 font-mono text-sm leading-relaxed">
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  className="term-line"
                  style={{
                    color: lineColor(line.type),
                    minHeight: line.type === "blank" ? "0.5rem" : undefined,
                  }}
                >
                  {line.text}
                  {line.type === "command" && (
                    <span
                      className="ml-1 inline-block h-4 w-2 align-middle"
                      style={{
                        background: "var(--accent-light)",
                        animation: "blink 1s step-end infinite",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* MCP Tools bar */}
            <div
              ref={toolsRef}
              className="flex flex-wrap gap-2 px-6 pb-5"
            >
              {mcpTools.map((tool) => (
                <div
                  key={tool.name}
                  className="mcp-tool rounded-lg px-3 py-2"
                  style={{
                    background: "rgba(108,99,255,0.08)",
                    border: "1px solid rgba(108,99,255,0.2)",
                  }}
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-wider"
                    style={{ color: "var(--accent-light)" }}
                  >
                    MCP
                  </span>
                  <p className="font-body text-xs font-medium text-white">
                    {tool.name}
                  </p>
                  <p className="font-body text-[10px]" style={{ color: "var(--muted)" }}>
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div
            ref={capsRef}
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="font-display mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                  style={{
                    background: "rgba(108,99,255,0.12)",
                    color: "var(--accent-light)",
                  }}
                >
                  {cap.icon}
                </span>
                <h3 className="font-display mb-2 text-base font-bold">
                  {cap.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="font-body mt-8 text-center text-xs"
            style={{ color: "var(--subtle)" }}
          >
            Powered by intelligent diagnostics with MCP-based order analysis
          </p>
        </div>
      </div>
    </section>
  );
}
