import Image from "next/image";

export default function PackagingStory() {
  return (
    <section
      id="why"
      className="relative overflow-hidden px-5 py-14 md:px-8 md:py-20"
      style={{
        background:
          "linear-gradient(180deg, #15241c 0%, #1e3328 22%, #2f4a3a 48%, #8a9e8a 72%, var(--cream) 100%)",
      }}
    >
      {/* Soft fade into atelier cream */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
        style={{
          background: "linear-gradient(180deg, transparent, var(--cream))",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-sm"
          style={{
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 24px 48px rgba(15,30,20,0.28)",
          }}
        >
          <Image
            src="/products/memory-match.png"
            alt="Reki carefully designed packaging"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2
            className="font-display font-semibold leading-tight text-white"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}
          >
            Carefully designed Packaging
          </h2>
          <p
            className="font-body mt-5 max-w-md text-[15px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            All Reki games come in boxes made with room to breathe — so children
            not only enjoy playtime, but also learn the joy of tidying up after.
            Premium wood, non-toxic finishes, and packaging that feels as
            thoughtful as the game inside.
          </p>
          <a
            href="/#collections"
            className="reki-btn-primary reki-btn-tab font-body mt-8 inline-block rounded-md px-8 py-3 text-sm font-semibold uppercase tracking-wide"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Why Reki reasons under packaging */}
      <div
        className="relative mx-auto mt-16 grid max-w-[1100px] gap-8 border-t pt-12 sm:grid-cols-3"
        style={{ borderColor: "rgba(26,26,26,0.12)" }}
      >
        {[
          {
            title: "Screen-free play",
            text: "Hands-on games that build real skills — no batteries required.",
          },
          {
            title: "Built to last",
            text: "Solid materials and finishes meant for years of curious play.",
          },
          {
            title: "Grows with your child",
            text: "From first memory games to strategy — play that levels up.",
          },
        ].map((r) => (
          <div key={r.title}>
            <h3 className="font-display text-xl font-semibold" style={{ color: "var(--ink)" }}>
              {r.title}
            </h3>
            <p className="font-body mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
