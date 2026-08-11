const tools = [
  { name: "Order Trace", desc: "Full lifecycle analysis" },
  { name: "Payment Diagnose", desc: "Plain-language failures" },
  { name: "Inventory Check", desc: "Stock & reservation audit" },
  { name: "Shipment Status", desc: "Carrier & label tracking" },
];

export default function OpsInvestigator() {
  return (
    <section
      id="investigator"
      className="px-5 py-14 md:px-8 md:py-16"
      style={{ background: "var(--ops-bg)", color: "#fff" }}
    >
      <div className="mx-auto max-w-[900px] text-center">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--peach)" }}>
          How we run our store
        </p>
        <h2 className="font-display mt-3 font-semibold" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)" }}>
          Order stuck? Reki investigates.
        </h2>
        <p className="font-body mx-auto mt-3 max-w-md text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
          Intelligent diagnostics behind every order — coming with full ecommerce.
        </p>

        <div
          className="mt-8 overflow-hidden rounded-xl text-left"
          style={{ background: "var(--ops-surface)", border: "1px solid var(--ops-border)" }}
        >
          <div className="space-y-1 p-5 font-mono text-[12px] md:p-6" style={{ fontFamily: "ui-monospace, monospace" }}>
            <p style={{ color: "#a8d4ab" }}>{">"} reki.investigate --order #4821</p>
            <p style={{ color: "#4ade80" }}>✓ Payment captured</p>
            <p style={{ color: "#4ade80" }}>✓ Inventory reserved</p>
            <p style={{ color: "#f87171" }}>✗ Shipment label timeout</p>
            <p style={{ color: "#fbbf24" }}>Root cause: carrier rate-limited</p>
          </div>
          <div className="flex flex-wrap gap-2 px-5 pb-5">
            {tools.map((t) => (
              <span
                key={t.name}
                className="rounded px-2.5 py-1.5 text-[11px]"
                style={{ background: "rgba(185,119,44,0.22)", color: "#f4d4a8" }}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
