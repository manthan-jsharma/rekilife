const pillars = [
  {
    title: "Personalized play",
    description: "You can find the right game for every age and curiosity.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="10" width="24" height="22" rx="3" stroke="#b9772c" strokeWidth="1.6" />
        <path d="M14 18h12M14 23h8" stroke="#c45c4a" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M20 6v4" stroke="#b9772c" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Gift-ready packaging",
    description: "All games come thoughtfully packed and ready to gift.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="14" width="24" height="18" rx="2" stroke="#b9772c" strokeWidth="1.6" />
        <path d="M8 20h24" stroke="#b9772c" strokeWidth="1.6" />
        <path d="M20 14v18" stroke="#c45c4a" strokeWidth="1.6" />
        <path d="M16 10c0-2 2-4 4-4s4 2 4 4" stroke="#b9772c" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Fast shipping",
    description: "We ship your orders quickly across India.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 24h18V12H6v12z" stroke="#b9772c" strokeWidth="1.6" />
        <path d="M24 16h6l4 5v3h-10v-8z" stroke="#b9772c" strokeWidth="1.6" />
        <circle cx="12" cy="28" r="2.5" stroke="#c45c4a" strokeWidth="1.6" />
        <circle cx="28" cy="28" r="2.5" stroke="#c45c4a" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "5 star reviews",
    description: "Trusted by parents who choose lasting, screen-free play.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 8l2.8 8.2H32l-7 5.2 2.6 8.2L20 24.8l-7.6 4.6 2.6-8.2-7-5.2h9.2L20 8z"
          stroke="#b9772c"
          strokeWidth="1.6"
          fill="none"
        />
        <circle cx="30" cy="12" r="2" fill="#c45c4a" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="px-5 py-10 md:px-8 md:py-12" style={{ background: "#15241c" }}>
      <div className="mx-auto max-w-[1100px]">
        <div className="reki-panel-gradient rounded-xl px-6 py-10 md:px-8 md:py-12">
          <div className="reki-panel-rule-top" aria-hidden />
          <div className="reki-panel-rule-bottom" aria-hidden />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {pillars.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-body text-[15px] font-semibold" style={{ color: "var(--ink)" }}>
                  {item.title}
                </h3>
                <p
                  className="font-body mt-1.5 max-w-[200px] text-[13px] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
