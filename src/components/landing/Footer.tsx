const footerLinks = {
  shop: [
    { label: "Puzzles", href: "#categories" },
    { label: "Smart Chess", href: "#categories" },
    { label: "Intuitive Games", href: "#categories" },
    { label: "All Products", href: "#products" },
  ],
  company: [
    { label: "About", href: "#why" },
    { label: "Ops Investigator", href: "#investigator" },
    { label: "Contact", href: "mailto:hello@reki.life" },
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:hello@reki.life" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="px-6 py-16"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="font-display text-2xl font-bold tracking-tight">
              <span className="text-white">reki</span>
              <span style={{ color: "var(--accent-light)" }}>.life</span>
            </a>
            <p
              className="font-body mt-3 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Premium physical games for curious minds. Play smarter. Play
              together.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h4
              className="font-body mb-4 text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--subtle)" }}
            >
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm transition-colors hover:text-white"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4
              className="font-body mb-4 text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--subtle)" }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm transition-colors hover:text-white"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4
              className="font-body mb-4 text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--subtle)" }}
            >
              Connect
            </h4>
            <ul className="space-y-2">
              {footerLinks.social.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm transition-colors hover:text-white"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="font-body text-xs"
            style={{ color: "var(--subtle)" }}
          >
            © {new Date().getFullYear()} reki.life — all rights reserved
          </p>
          <p
            className="font-mono text-[10px]"
            style={{ color: "var(--subtle)" }}
          >
            Ecommerce · Inventory · Payments · Ops — launching soon
          </p>
        </div>
      </div>
    </footer>
  );
}
