"use client";

/** Honey-wood sparkles over the hand during the intro reveal. */
const SPARKS = [
  { top: "12%", left: "72%", delay: 0, size: 7 },
  { top: "22%", left: "58%", delay: 0.06, size: 5 },
  { top: "34%", left: "68%", delay: 0.12, size: 6 },
  { top: "44%", left: "50%", delay: 0.04, size: 8 },
  { top: "52%", left: "62%", delay: 0.1, size: 5 },
  { top: "62%", left: "42%", delay: 0.08, size: 7 },
  { top: "70%", left: "55%", delay: 0.14, size: 6 },
  { top: "28%", left: "78%", delay: 0.16, size: 4 },
  { top: "48%", left: "74%", delay: 0.05, size: 5 },
  { top: "58%", left: "32%", delay: 0.11, size: 6 },
  { top: "38%", left: "38%", delay: 0.18, size: 4 },
  { top: "18%", left: "48%", delay: 0.09, size: 5 },
];

export default function WoodenHandSparkle({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="wooden-hand-sparkle absolute inset-0 z-20" aria-hidden>
      {SPARKS.map((s, i) => (
        <span
          key={i}
          className="wooden-hand-spark"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
      <span className="wooden-hand-spark-star" style={{ top: "26%", left: "65%", animationDelay: "0.05s" }} />
      <span className="wooden-hand-spark-star" style={{ top: "46%", left: "56%", animationDelay: "0.14s" }} />
      <span className="wooden-hand-spark-star" style={{ top: "64%", left: "48%", animationDelay: "0.22s" }} />
    </div>
  );
}
