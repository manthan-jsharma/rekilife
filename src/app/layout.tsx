import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "reki.life — Play Smarter. Play Together.",
  description:
    "Premium physical games for curious minds. Puzzles, smart chess, and intuitive games for kids — powered by intelligent ecommerce.",
  openGraph: {
    title: "reki.life — Play Smarter. Play Together.",
    description:
      "Premium physical games for curious minds. Puzzles, smart chess, and intuitive games for kids.",
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
      <body>{children}</body>
    </html>
  );
}
