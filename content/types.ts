export type ContentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type InformationDocument = {
  slug: string;
  updatedAt: string | null;
  sections: ContentSection[];
};

export type AboutTextBlock = {
  heading: string;
  paragraphs: string[];
};

export type AboutCard = {
  id: string;
  title: string;
  description: string;
};

export type AboutStep = {
  id: string;
  title: string;
  description: string;
};

export type AboutValue = {
  id: string;
  title: string;
  description: string;
};

export type AboutPageContent = {
  slug: "about";
  updatedAt: string | null;
  whoWeAre: AboutTextBlock;
  mission: AboutTextBlock;
  vision: AboutTextBlock;
  whyUs: {
    heading: string;
    cards: AboutCard[];
  };
  howItWorks: {
    heading: string;
    steps: AboutStep[];
  };
  whoFor: {
    heading: string;
    intro: string;
    audiences: string[];
    futureNote: string;
  };
  values: {
    heading: string;
    items: AboutValue[];
  };
  future: {
    heading: string;
    intro: string;
    items: string[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type ContactChannelGuideItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type ContactPageContent = {
  slug: "contact";
  updatedAt: string | null;
  contactInfo: AboutTextBlock;
  categories: {
    heading: string;
    cards: AboutCard[];
  };
  responsePrinciples: AboutTextBlock;
  channels: {
    heading: string;
    intro: string;
    items: ContactChannelGuideItem[];
  };
  faqShortcut: {
    heading: string;
    description: string;
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  heading: string;
  items: FaqItem[];
};

export type FaqQuickLink = {
  id: string;
  label: string;
  href: string;
};

export type FaqPageContent = {
  slug: "faq";
  updatedAt: string | null;
  categories: FaqCategory[];
  quickLinks: {
    heading: string;
    intro: string;
    items: FaqQuickLink[];
  };
  stillNeedHelp: {
    heading: string;
    description: string;
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type CorporateContentBundle = {
  about: AboutPageContent;
  contact: ContactPageContent;
  faq: FaqPageContent;
};

export type LegalRelatedLink = {
  id: string;
  label: string;
  href: string;
};

export type TermsPageContent = {
  slug: "terms";
  updatedAt: string | null;
  acceptance: AboutTextBlock;
  purpose: AboutTextBlock;
  accounts: AboutTextBlock;
  artistContent: AboutTextBlock;
  jobRequests: AboutTextBlock;
  prohibited: {
    heading: string;
    intro: string;
    items: string[];
  };
  intellectualProperty: AboutTextBlock;
  serviceChanges: AboutTextBlock;
  liability: AboutTextBlock;
  termination: AboutTextBlock;
  updates: AboutTextBlock;
  relatedPages: {
    heading: string;
    intro: string;
    items: LegalRelatedLink[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type PrivacyPageContent = {
  slug: "privacy";
  updatedAt: string | null;
  scope: AboutTextBlock;
  dataCollected: AboutTextBlock;
  dataUse: AboutTextBlock;
  accountProfile: AboutTextBlock;
  jobsMessaging: AboutTextBlock;
  security: AboutTextBlock;
  userRights: AboutTextBlock;
  retention: AboutTextBlock;
  thirdParties: AboutTextBlock;
  children: AboutTextBlock;
  updates: AboutTextBlock;
  relatedPages: {
    heading: string;
    intro: string;
    items: LegalRelatedLink[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type CookieCategory = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export type CookiesPageContent = {
  slug: "cookies";
  updatedAt: string | null;
  purpose: AboutTextBlock;
  whatAreCookies: AboutTextBlock;
  categories: {
    heading: string;
    intro: string;
    items: CookieCategory[];
  };
  browserControls: AboutTextBlock;
  thirdParties: AboutTextBlock;
  updates: AboutTextBlock;
  relatedPages: {
    heading: string;
    intro: string;
    items: LegalRelatedLink[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type RefundPageContent = {
  slug: "refund";
  updatedAt: string | null;
  purpose: AboutTextBlock;
  scope: AboutTextBlock;
  purchaseProcess: AboutTextBlock;
  evaluation: AboutTextBlock;
  cancellation: AboutTextBlock;
  exceptions: AboutTextBlock;
  updates: AboutTextBlock;
  relatedPages: {
    heading: string;
    intro: string;
    items: LegalRelatedLink[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type SubscriptionPageContent = {
  slug: "subscription";
  updatedAt: string | null;
  purpose: AboutTextBlock;
  membershipPlans: AboutTextBlock;
  start: AboutTextBlock;
  renewal: AboutTextBlock;
  cancellation: AboutTextBlock;
  accountResponsibility: AboutTextBlock;
  serviceChanges: AboutTextBlock;
  relatedPages: {
    heading: string;
    intro: string;
    items: LegalRelatedLink[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type CompanyPageContent = {
  slug: "company";
  updatedAt: string | null;
  companyInformation: AboutTextBlock;
  legalTransparency: AboutTextBlock;
  corporateCompliance: AboutTextBlock;
  futureUpdates: AboutTextBlock;
  relatedPages: {
    heading: string;
    intro: string;
    items: LegalRelatedLink[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

/** Shared shape for Turkey legal notice pages (KVKK, consent, distance sales, etc.) */
export type LegalNoticePageContent = {
  slug: string;
  updatedAt: string | null;
  sections: Array<{
    id: string;
    heading: string;
    paragraphs: string[];
  }>;
  relatedPages: {
    heading: string;
    intro: string;
    items: LegalRelatedLink[];
  };
  finalCta: {
    heading: string;
    description: string;
  };
};

export type LegalContentBundle = {
  terms: TermsPageContent;
  privacy: PrivacyPageContent;
  cookies: CookiesPageContent;
  refund: RefundPageContent;
  subscription: SubscriptionPageContent;
  company: CompanyPageContent;
  kvkk: LegalNoticePageContent;
  explicitConsent: LegalNoticePageContent;
  electronicCommunications: LegalNoticePageContent;
  distanceSalesPreliminary: LegalNoticePageContent;
  distanceSalesAgreement: LegalNoticePageContent;
  cancellation: LegalNoticePageContent;
};

export type CorporatePageKey = keyof CorporateContentBundle;
export type LegalPageKey = keyof LegalContentBundle;
export type LegalNoticePageKey =
  | "kvkk"
  | "explicitConsent"
  | "electronicCommunications"
  | "distanceSalesPreliminary"
  | "distanceSalesAgreement"
  | "cancellation";

