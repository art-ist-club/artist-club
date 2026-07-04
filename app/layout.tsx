import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.art-ist.club"),
  title: {
    default: "ART-IST.CLUB | Global Sanatçı Keşif Platformu",
    template: "%s | ART-IST.CLUB"
  },
  description:
    "ART-IST.CLUB; oyuncular, müzisyenler, modeller, dansçılar ve yaratıcı yetenekleri yapımcılar, markalar, casting şirketleri ve global fırsatlarla buluşturan premium sanatçı keşif platformudur.",
  keywords: [
    "artist platform",
    "sanatçı platformu",
    "casting platform",
    "oyuncu keşif",
    "müzisyen keşif",
    "model platformu",
    "dansçı platformu",
    "creative talent",
    "ART-IST.CLUB"
  ],
  authors: [{ name: "ART-IST.CLUB" }],
  creator: "ART-IST.CLUB",
  publisher: "ART-IST.CLUB",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "ART-IST.CLUB | Global Sanatçı Keşif Platformu",
    description:
      "Sanatçıları yapımcılar, markalar, casting şirketleri ve global yaratıcı fırsatlarla buluşturan premium keşif platformu.",
    url: "https://www.art-ist.club",
    siteName: "ART-IST.CLUB",
    locale: "tr_TR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ART-IST.CLUB | Global Sanatçı Keşif Platformu",
    description:
      "Sanatçıların dünyaya açılan premium sahnesi."
  },
  alternates: {
    canonical: "https://www.art-ist.club"
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