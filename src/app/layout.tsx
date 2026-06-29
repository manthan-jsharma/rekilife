import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "reki.life — Coming Soon",
  description:
    "Something beautiful is being crafted. reki.life is under construction.",
  openGraph: {
    title: "reki.life — Coming Soon",
    description: "Something beautiful is being crafted.",
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
