import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "reki.life — Wooden Games for Curious Minds",
  description:
    "Premium physical games for kids — puzzles, smart chess, and intuitive play. Screen-free. Montessori-inspired.",
  openGraph: {
    title: "reki.life — Wooden Games for Curious Minds",
    description: "Premium physical games for kids — puzzles, smart chess, and intuitive play.",
    url: "https://reki.life",
    siteName: "reki.life",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
