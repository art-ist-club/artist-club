import type { Locale } from "@/lib/i18n";

import trCommon from "@/messages/tr/common.json";
import trNavigation from "@/messages/tr/navigation.json";
import trLanding from "@/messages/tr/landing.json";
import trFounding from "@/messages/tr/founding.json";
import trAuth from "@/messages/tr/auth.json";
import trDiscover from "@/messages/tr/discover.json";
import trDashboard from "@/messages/tr/dashboard.json";
import trProfile from "@/messages/tr/profile.json";
import trMessaging from "@/messages/tr/messaging.json";
import trJobRequests from "@/messages/tr/job-requests.json";
import trErrors from "@/messages/tr/errors.json";
import trNotifications from "@/messages/tr/notifications.json";
import trCorporate from "@/messages/tr/corporate.json";
import trComingSoon from "@/messages/tr/coming-soon.json";

import enCommon from "@/messages/en/common.json";
import enNavigation from "@/messages/en/navigation.json";
import enLanding from "@/messages/en/landing.json";
import enFounding from "@/messages/en/founding.json";
import enAuth from "@/messages/en/auth.json";
import enDiscover from "@/messages/en/discover.json";
import enDashboard from "@/messages/en/dashboard.json";
import enProfile from "@/messages/en/profile.json";
import enMessaging from "@/messages/en/messaging.json";
import enJobRequests from "@/messages/en/job-requests.json";
import enErrors from "@/messages/en/errors.json";
import enNotifications from "@/messages/en/notifications.json";
import enCorporate from "@/messages/en/corporate.json";
import enComingSoon from "@/messages/en/coming-soon.json";

import deCommon from "@/messages/de/common.json";
import deNavigation from "@/messages/de/navigation.json";
import deLanding from "@/messages/de/landing.json";
import deFounding from "@/messages/de/founding.json";
import deAuth from "@/messages/de/auth.json";
import deDiscover from "@/messages/de/discover.json";
import deDashboard from "@/messages/de/dashboard.json";
import deProfile from "@/messages/de/profile.json";
import deMessaging from "@/messages/de/messaging.json";
import deJobRequests from "@/messages/de/job-requests.json";
import deErrors from "@/messages/de/errors.json";
import deNotifications from "@/messages/de/notifications.json";
import deCorporate from "@/messages/de/corporate.json";
import deComingSoon from "@/messages/de/coming-soon.json";

import frCommon from "@/messages/fr/common.json";
import frNavigation from "@/messages/fr/navigation.json";
import frLanding from "@/messages/fr/landing.json";
import frFounding from "@/messages/fr/founding.json";
import frAuth from "@/messages/fr/auth.json";
import frDiscover from "@/messages/fr/discover.json";
import frDashboard from "@/messages/fr/dashboard.json";
import frProfile from "@/messages/fr/profile.json";
import frMessaging from "@/messages/fr/messaging.json";
import frJobRequests from "@/messages/fr/job-requests.json";
import frErrors from "@/messages/fr/errors.json";
import frNotifications from "@/messages/fr/notifications.json";
import frCorporate from "@/messages/fr/corporate.json";
import frComingSoon from "@/messages/fr/coming-soon.json";

import esCommon from "@/messages/es/common.json";
import esNavigation from "@/messages/es/navigation.json";
import esLanding from "@/messages/es/landing.json";
import esFounding from "@/messages/es/founding.json";
import esAuth from "@/messages/es/auth.json";
import esDiscover from "@/messages/es/discover.json";
import esDashboard from "@/messages/es/dashboard.json";
import esProfile from "@/messages/es/profile.json";
import esMessaging from "@/messages/es/messaging.json";
import esJobRequests from "@/messages/es/job-requests.json";
import esErrors from "@/messages/es/errors.json";
import esNotifications from "@/messages/es/notifications.json";
import esCorporate from "@/messages/es/corporate.json";
import esComingSoon from "@/messages/es/coming-soon.json";

import arCommon from "@/messages/ar/common.json";
import arNavigation from "@/messages/ar/navigation.json";
import arLanding from "@/messages/ar/landing.json";
import arFounding from "@/messages/ar/founding.json";
import arAuth from "@/messages/ar/auth.json";
import arDiscover from "@/messages/ar/discover.json";
import arDashboard from "@/messages/ar/dashboard.json";
import arProfile from "@/messages/ar/profile.json";
import arMessaging from "@/messages/ar/messaging.json";
import arJobRequests from "@/messages/ar/job-requests.json";
import arErrors from "@/messages/ar/errors.json";
import arNotifications from "@/messages/ar/notifications.json";
import arCorporate from "@/messages/ar/corporate.json";
import arComingSoon from "@/messages/ar/coming-soon.json";

export type DictionaryPrimitive = string | number | boolean | null;

export type DictionaryValue =
  | DictionaryPrimitive
  | DictionaryValue[]
  | {
      [key: string]: DictionaryValue;
    };

export type Dictionary = {
  [key: string]: DictionaryValue;
};

function localeBundle(
  common: DictionaryValue,
  navigation: DictionaryValue,
  landing: DictionaryValue,
  founding: DictionaryValue,
  auth: DictionaryValue,
  discover: DictionaryValue,
  dashboard: DictionaryValue,
  profile: DictionaryValue,
  messaging: DictionaryValue,
  jobRequests: DictionaryValue,
  errors: DictionaryValue,
  notifications: DictionaryValue,
  corporate: DictionaryValue,
  comingSoon: DictionaryValue
): Dictionary {
  return {
    common,
    navigation,
    landing,
    founding,
    auth,
    discover,
    dashboard,
    profile,
    messaging,
    "job-requests": jobRequests,
    errors,
    notifications,
    corporate,
    "coming-soon": comingSoon,
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  tr: localeBundle(
    trCommon,
    trNavigation,
    trLanding,
    trFounding,
    trAuth,
    trDiscover,
    trDashboard,
    trProfile,
    trMessaging,
    trJobRequests,
    trErrors,
    trNotifications,
    trCorporate,
    trComingSoon
  ),
  en: localeBundle(
    enCommon,
    enNavigation,
    enLanding,
    enFounding,
    enAuth,
    enDiscover,
    enDashboard,
    enProfile,
    enMessaging,
    enJobRequests,
    enErrors,
    enNotifications,
    enCorporate,
    enComingSoon
  ),
  de: localeBundle(
    deCommon,
    deNavigation,
    deLanding,
    deFounding,
    deAuth,
    deDiscover,
    deDashboard,
    deProfile,
    deMessaging,
    deJobRequests,
    deErrors,
    deNotifications,
    deCorporate,
    deComingSoon
  ),
  fr: localeBundle(
    frCommon,
    frNavigation,
    frLanding,
    frFounding,
    frAuth,
    frDiscover,
    frDashboard,
    frProfile,
    frMessaging,
    frJobRequests,
    frErrors,
    frNotifications,
    frCorporate,
    frComingSoon
  ),
  es: localeBundle(
    esCommon,
    esNavigation,
    esLanding,
    esFounding,
    esAuth,
    esDiscover,
    esDashboard,
    esProfile,
    esMessaging,
    esJobRequests,
    esErrors,
    esNotifications,
    esCorporate,
    esComingSoon
  ),
  ar: localeBundle(
    arCommon,
    arNavigation,
    arLanding,
    arFounding,
    arAuth,
    arDiscover,
    arDashboard,
    arProfile,
    arMessaging,
    arJobRequests,
    arErrors,
    arNotifications,
    arCorporate,
    arComingSoon
  ),
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.tr;
}

export function getTranslation(
  dictionary: Dictionary,
  key: string
): string {
  const value = key.split(".").reduce<DictionaryValue | undefined>(
    (current, segment) => {
      if (current == null) {
        return undefined;
      }

      if (Array.isArray(current)) {
        const index = Number(segment);

        if (!Number.isInteger(index) || index < 0 || index >= current.length) {
          return undefined;
        }

        return current[index];
      }

      if (typeof current === "object" && segment in current) {
        return current[segment];
      }

      return undefined;
    },
    dictionary
  );

  return typeof value === "string" ? value : key;
}

export function formatMessage(
  template: string,
  vars: Record<string, string | number>
): string {
  return Object.entries(vars).reduce(
    (result, [name, value]) =>
      result.replaceAll(`{{${name}}}`, String(value)),
    template
  );
}
