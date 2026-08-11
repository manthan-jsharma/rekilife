const items = [
  { icon: "🚚", text: "Free Shipping Across India on Orders above ₹999" },
  { icon: "🎁", text: "Buy 2 & more Games and get 5% Off" },
  { icon: "★", text: "4.9 out of 5 from happy parents" },
  { icon: "🪵", text: "Screen-free · Montessori inspired · 3+ years" },
];

export default function AnnouncementBar() {
  const loop = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-2"
      style={{ background: "var(--cream)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap px-4">
        {loop.map((item, i) => (
          <span
            key={`${item.text}-${i}`}
            className="font-body inline-flex items-center gap-2 text-[12px] tracking-wide"
            style={{ color: "var(--ink)" }}
          >
            <span aria-hidden>{item.icon}</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
