import type { Metadata } from "next";
import { cookies } from "next/headers";
import LanguageProvider from "@/components/i18n/LanguageProvider";
import { SoftLaunchProvider } from "@/components/launch/SoftLaunchProvider";
import { isSoftLaunch } from "@/lib/launch";
import {
  defaultLocale,
  getLocaleDirection,
  getLocaleHtmlLang,
  isSupportedLocale,
  localeCookieName,
  type Locale,
} from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.art-ist.club"),
  title: {
    default: "ART-IST.CLUB | Global Artist Discovery Platform",
    template: "%s | ART-IST.CLUB",
  },
  description:
    "ART-IST.CLUB is the premium artist discovery platform connecting actors, musicians, models, dancers, and creative talent with producers, brands, casting companies, and global opportunities.",
  keywords: [
    "artist platform",
    "casting platform",
    "talent discovery",
    "musician discovery",
    "model platform",
    "dance talent",
    "creative talent",
    "ART-IST.CLUB",
  ],
  authors: [{ name: "ART-IST.CLUB" }],
  creator: "ART-IST.CLUB",
  publisher: "ART-IST.CLUB",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ART-IST.CLUB | Global Artist Discovery Platform",
    description:
      "A premium discovery platform connecting artists with producers, brands, casting companies, and global creative opportunities.",
    url: "https://www.art-ist.club",
    siteName: "ART-IST.CLUB",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ART-IST.CLUB | Global Artist Discovery Platform",
    description: "The premium stage where artists meet the world.",
  },
  alternates: {
    canonical: "https://www.art-ist.club",
  },
};

function resolveInitialLocale(raw: string | undefined): Locale {
  return isSupportedLocale(raw) ? raw : defaultLocale;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const initialLocale = resolveInitialLocale(
    cookieStore.get(localeCookieName)?.value
  );
  const htmlLang = getLocaleHtmlLang(initialLocale);
  const direction = getLocaleDirection(initialLocale);
  const softLaunch = isSoftLaunch();

  return (
    <html lang={htmlLang} dir={direction}>
      <body>
        <LanguageProvider initialLocale={initialLocale}>
          <SoftLaunchProvider value={softLaunch}>
            {children}
          </SoftLaunchProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
