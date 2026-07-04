import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ART-IST.CLUB | Global Artist Discovery Platform",
  description:
    "ART-IST.CLUB is a global artist discovery platform connecting artists with producers, brands and creative opportunities.",
  openGraph: {
    title: "ART-IST.CLUB",
    description:
      "The global stage for artists, producers and creative opportunities.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
