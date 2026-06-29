/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#0a0a0f",
        surface: "#13131f",
        border:  "#1e1e30",
        accent:  "#6c63ff",
        "accent-light": "#a78bfa",
        "accent-glow":  "#c4b5fd",
        muted:   "#6b7280",
        subtle:  "#374151",
      },
      fontFamily: {
        mono: ["'Courier New'", "Courier", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        "ping-slow": {
          "0%":   { transform: "scale(1)",   opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.1" },
          "50%":       { opacity: "0.8" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        blink:      "blink 1s step-end infinite",
        float:      "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        "ping-slow": "ping-slow 2s cubic-bezier(0,0,0.2,1) infinite",
        twinkle:    "twinkle 3s ease-in-out infinite",
        shimmer:    "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
