import type { Locale } from "@/lib/i18n";
import type {
  CorporateContentBundle,
  CorporatePageKey,
  LegalContentBundle,
  LegalPageKey,
} from "@/content/types";

import { corporateContent as corporateTr } from "@/content/corporate/tr";
import { corporateContent as corporateEn } from "@/content/corporate/en";
import { corporateContent as corporateDe } from "@/content/corporate/de";
import { corporateContent as corporateFr } from "@/content/corporate/fr";
import { corporateContent as corporateEs } from "@/content/corporate/es";
import { corporateContent as corporateAr } from "@/content/corporate/ar";

import { legalContent as legalTr } from "@/content/legal/tr";
import { legalContent as legalEn } from "@/content/legal/en";
import { legalContent as legalDe } from "@/content/legal/de";
import { legalContent as legalFr } from "@/content/legal/fr";
import { legalContent as legalEs } from "@/content/legal/es";
import { legalContent as legalAr } from "@/content/legal/ar";

const corporateByLocale: Record<Locale, CorporateContentBundle> = {
  tr: corporateTr,
  en: corporateEn,
  de: corporateDe,
  fr: corporateFr,
  es: corporateEs,
  ar: corporateAr,
};

const legalByLocale: Record<Locale, LegalContentBundle> = {
  tr: legalTr,
  en: legalEn,
  de: legalDe,
  fr: legalFr,
  es: legalEs,
  ar: legalAr,
};

export function getCorporateContent(
  locale: Locale
): CorporateContentBundle {
  return corporateByLocale[locale] ?? corporateByLocale.tr;
}

export function getCorporatePage(
  locale: Locale,
  key: CorporatePageKey
) {
  return getCorporateContent(locale)[key];
}

export function getLegalContent(locale: Locale): LegalContentBundle {
  return legalByLocale[locale] ?? legalByLocale.tr;
}

export function getLegalPage(locale: Locale, key: LegalPageKey) {
  return getLegalContent(locale)[key];
}
