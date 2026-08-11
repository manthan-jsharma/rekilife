export default function HelpWidget() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <a
        href="mailto:hello@reki.life"
        className="reki-btn-pill font-body hidden rounded-full bg-white px-4 py-2 text-[13px] shadow-md transition-shadow sm:block"
        style={{ color: "var(--ink)", border: "1px solid var(--border)" }}
      >
        Need Help? Chat with us
      </a>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp help"
        className="reki-btn-pill flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-shadow"
        style={{ background: "#25D366" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.8L2 22l5.3-1.4C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.4-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.3-1.3-1.5-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
        </svg>
      </a>
    </div>
  );
}
