# reki.life

> **Under Construction** landing page with typewriter loader.

Built with **Next.js 14 · TypeScript · Tailwind CSS · Framer Motion** (ready for use when you build out pages).

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
reki-life/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout + metadata (edit title/desc here)
│   │   └── page.tsx            ← Entry point — wires Loader → UnderConstruction
│   │
│   ├── components/
│   │   ├── Loader.tsx          ← Typewriter "reki.life" loader with ripple rings
│   │   ├── UnderConstruction.tsx ← Main construction page with staggered reveal
│   │   ├── StarField.tsx       ← Procedural star field background
│   │   └── GridLines.tsx       ← Ambient grid + center glow
│   │
│   └── styles/
│       └── globals.css         ← Tailwind base + custom animations + fonts
│
├── public/                     ← Static assets (add favicon.ico, og-image.png here)
├── tailwind.config.js          ← Color tokens, font config, custom animations
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Customisation

### Change the typewriter text
Open `src/components/Loader.tsx` and edit:
```ts
const FULL_TEXT = "reki.life"; // ← change this
```

### Adjust timing
```ts
const CHAR_DELAY    = 110;  // ms between each character
const HOLD_AFTER    = 700;  // ms to hold before exit
const FADE_DURATION = 600;  // ms for exit fade
```

### Update social links
In `src/components/UnderConstruction.tsx`, find the social links array and replace `href="#"` with your real URLs.

### Add a real favicon
Drop your `favicon.ico` into `/public/`.

### Colors
All brand colors live in `tailwind.config.js` under `theme.extend.colors`. The main accent is:
```js
accent: "#6c63ff",
"accent-light": "#a78bfa",
```

---

## 🏗 Building Out the Site

When you're ready to add real pages:

1. **New routes** → add files under `src/app/` (e.g. `src/app/about/page.tsx`)
2. **Animations** → Framer Motion is already installed. Import `motion` from `"framer-motion"`.
3. **Remove the construction page** → swap `UnderConstruction` in `page.tsx` with your real homepage component.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

Or deploy directly to **Vercel** (zero config — just push to GitHub and connect the repo).

---

## Stack

| Tool | Purpose |
|---|---|
| Next.js 14 | Framework, routing, SSR/SSG |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Page transitions & animations (ready to use) |
| Space Grotesk | Display font |
| JetBrains Mono | Monospace / typewriter font |
