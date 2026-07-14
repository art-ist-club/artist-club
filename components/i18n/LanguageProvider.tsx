"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  defaultLocale,
  getLocaleDirection,
  getLocaleHtmlLang,
  isSupportedLocale,
  localeCookieName,
  localeStorageKey,
  type Locale,
} from "@/lib/i18n";
import {
  getDictionary,
  getTranslation,
  type Dictionary,
} from "@/lib/dictionaries";

type LanguageContextValue = {
  locale: Locale;
  direction: "ltr" | "rtl";
  dictionary: Dictionary;
  changeLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
  /** Must match the locale used for SSR so hydration stays consistent. */
  initialLocale?: Locale;
};

function hasLocaleCookie(): boolean {
  if (typeof document === "undefined") {
    return false;
  }

  return document.cookie
    .split(";")
    .some((part) => part.trim().startsWith(`${localeCookieName}=`));
}

export default function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: LanguageProviderProps) {
  // First paint uses the same locale as the server (cookie → layout → prop).
  // Never read localStorage here — that caused hydration mismatches.
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    // Migrate legacy localStorage-only preferences after hydration when no cookie exists.
    if (hasLocaleCookie()) {
      return;
    }

    try {
      const storedLocale = window.localStorage.getItem(localeStorageKey);

      if (isSupportedLocale(storedLocale) && storedLocale !== initialLocale) {
        setLocale(storedLocale);
      }
    } catch {
      // localStorage may be unavailable
    }
  }, [initialLocale]);

  useEffect(() => {
    const html = document.documentElement;
    const direction = getLocaleDirection(locale);

    html.lang = getLocaleHtmlLang(locale);
    html.dir = direction;

    try {
      window.localStorage.setItem(localeStorageKey, locale);
    } catch {
      // ignore persistence failures
    }

    document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  const changeLocale = useCallback((nextLocale: Locale) => {
    setLocale(nextLocale);
  }, []);

  const dictionary = useMemo(() => getDictionary(locale), [locale]);

  const t = useCallback(
    (key: string) => getTranslation(dictionary, key),
    [dictionary]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      direction: getLocaleDirection(locale),
      dictionary,
      changeLocale,
      t,
    }),
    [locale, dictionary, changeLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage, LanguageProvider içinde kullanılmalıdır."
    );
  }

  return context;
}
