export const supportedLocales = [
    "tr",
    "en",
    "de",
    "fr",
    "es",
    "ar",
  ] as const;
  
  export type Locale = (typeof supportedLocales)[number];
  
  export const defaultLocale: Locale = "tr";
  
  export const localeConfig: Record<
    Locale,
    {
      name: string;
      nativeName: string;
      direction: "ltr" | "rtl";
      htmlLang: string;
    }
  > = {
    tr: {
      name: "Turkish",
      nativeName: "Türkçe",
      direction: "ltr",
      htmlLang: "tr",
    },
    en: {
      name: "English",
      nativeName: "English",
      direction: "ltr",
      htmlLang: "en",
    },
    de: {
      name: "German",
      nativeName: "Deutsch",
      direction: "ltr",
      htmlLang: "de",
    },
    fr: {
      name: "French",
      nativeName: "Français",
      direction: "ltr",
      htmlLang: "fr",
    },
    es: {
      name: "Spanish",
      nativeName: "Español",
      direction: "ltr",
      htmlLang: "es",
    },
    ar: {
      name: "Arabic",
      nativeName: "العربية",
      direction: "rtl",
      htmlLang: "ar",
    },
  };
  
  export const localeCookieName = "art-ist-locale";
  export const localeStorageKey = "art-ist-locale";
  
  export function isSupportedLocale(value: unknown): value is Locale {
    return (
      typeof value === "string" &&
      supportedLocales.includes(value as Locale)
    );
  }
  
  export function normalizeLocale(value: unknown): Locale {
    if (isSupportedLocale(value)) {
      return value;
    }
  
    if (typeof value === "string") {
      const shortLocale = value.trim().toLowerCase().split("-")[0];
  
      if (isSupportedLocale(shortLocale)) {
        return shortLocale;
      }
    }
  
    return defaultLocale;
  }
  
  export function getLocaleDirection(locale: Locale): "ltr" | "rtl" {
    return localeConfig[locale].direction;
  }
  
  export function getLocaleHtmlLang(locale: Locale): string {
    return localeConfig[locale].htmlLang;
  }
  