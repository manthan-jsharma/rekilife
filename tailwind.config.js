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
        bg:      "#f7f3ec",
        surface: "#ffffff",
        border:  "#e5dfd3",
        accent:  "#b9772c",
        "accent-light": "#e7af6e",
        "accent-glow":  "#f4ba78",
        cream:   "#f7f3ec",
        sage:    "#5f8f6a",
        honey:   "#b9772c",
        coral:   "#c47a5a",
        muted:   "#6b7268",
        subtle:  "#9a958c",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "Courier New", "monospace"],
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
