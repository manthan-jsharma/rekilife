"use client";

export default function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #6c63ff 0px, #6c63ff 1px, transparent 1px, transparent 90px)",
          opacity: 0.04,
        }}
      />
      {/* Horizontal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #6c63ff 0px, #6c63ff 1px, transparent 1px, transparent 90px)",
          opacity: 0.04,
        }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
