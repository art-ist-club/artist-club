import type { LegalNoticePageContent } from "@/content/types";

const CONTACT = "info@art-ist.club";
const OPERATOR = "Atilla Demirkiran";
const LOCATION = "Izmir, Turkey";
const BRAND = "ART-IST.CLUB";
const SITE = "art-ist.club";

type TurkeyNotices = {
  kvkk: LegalNoticePageContent;
  explicitConsent: LegalNoticePageContent;
  electronicCommunications: LegalNoticePageContent;
  distanceSalesPreliminary: LegalNoticePageContent;
  distanceSalesAgreement: LegalNoticePageContent;
  cancellation: LegalNoticePageContent;
};

export const turkeyNoticesEn: TurkeyNotices = {
  kvkk: {
    slug: "kvkk",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "controller",
        heading: "Identity of the data controller",
        paragraphs: [
          `On the ${BRAND} platform, the data controller for your personal data is ${OPERATOR}. Brand name: ${BRAND}. Location: ${LOCATION}. Website: ${SITE}.`,
          `For requests and contact, use this email: ${CONTACT}. This notice does not publish a phone number, full address, tax number, national ID number, MERSIS number, or trade registry information.`,
        ],
      },
      {
        id: "categories",
        heading: "Categories of personal data processed",
        paragraphs: [
          "Identity and account data: name/display name, email, account type, and records associated with authentication.",
          "Profile and content data: biography, category, language, location preferences, photos, videos, gallery, and similar professional content.",
          "Transaction and communication data: job requests, messaging content, favorites, and records of in-platform interactions.",
          "Technical and security data: session information, device/browser information, log records, and technical data related to security reviews.",
          "When paid services are offered: subscription/transaction status and mandatory transaction records related to billing. The payment provider may process card data on its own infrastructure; sensitive payment data such as card numbers is not stored on the platform.",
        ],
      },
      {
        id: "purposes",
        heading: "Purposes of processing",
        paragraphs: [
          "Creating and managing accounts, authentication, and delivering the profile and discovery experience.",
          "Operating the job request and messaging infrastructure, and providing favorites and similar user features.",
          "Security, prevention of misuse, troubleshooting, and improving the service.",
          "Fulfilling legal obligations; keeping subscription/transaction records when paid services are offered.",
          "Processing based on explicit consent is carried out only when separate consent has been obtained and is limited to the scope of that consent.",
        ],
      },
      {
        id: "legal-bases",
        heading: "Legal bases",
        paragraphs: [
          "Under KVKK Article 5, legal bases such as the establishment or performance of a contract, legal obligation, legitimate interest (security, service operation), and, where needed, explicit consent are considered.",
          "This privacy notice is not a consent form. Opening an account is not conditioned on a requirement such as \"I approve this notice\"; the text exists solely to inform the user.",
        ],
      },
      {
        id: "recipients",
        heading: "Categories of recipients data may be transferred to",
        paragraphs: [
          "Hosting, authentication, database, storage, and similar infrastructure providers, to the extent necessary for operating the service.",
          "Authorized business partners involved in payment and billing processes for paid services, only to the extent necessary.",
          "Legally authorized public institutions and organizations (where mandatory).",
          "If a cross-border transfer occurs, safeguards compliant with applicable KVKK rules are considered. This notice does not fabricate a specific country or server location.",
        ],
      },
      {
        id: "collection",
        heading: "Method of collection",
        paragraphs: [
          "Data is collected electronically through registration/login forms, profile setup steps, job request and messaging interfaces, favorites actions, and technical logs.",
          "When OAuth or a similar login method is used, information necessary for the service to function may be obtained from the identity provider.",
        ],
      },
      {
        id: "retention",
        heading: "Retention approach",
        paragraphs: [
          "Data may be retained for as long as necessary for account activity, service delivery, security, disputes, and legal retention obligations.",
          "When an account is closed, some data may be deleted or anonymized; mandatory records may be retained for a longer period. This notice does not commit to a fixed number of days.",
        ],
      },
      {
        id: "rights",
        heading: "Rights of the data subject",
        paragraphs: [
          "Under KVKK Article 11, you may exercise rights including learning whether your personal data is processed, requesting information, requesting correction, requesting deletion/destruction, restricting processing, objecting, and other rights provided by law.",
          "For rights requests, use this email channel: " + CONTACT,
        ],
      },
      {
        id: "application",
        heading: "How to apply",
        paragraphs: [
          `You may send your requests to ${CONTACT}. Additional information may be requested for identity verification and to clarify your request.`,
          "Response time may vary depending on applicable rules and the nature of the request. This notice does not guarantee a fixed response time.",
        ],
      },
    ],
    relatedPages: {
      heading: "Related Pages",
      intro: "Pages you may want to review alongside this notice:",
      items: [
        { id: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
        { id: "terms", label: "Terms of Use", href: "/legal/terms" },
        {
          id: "explicit",
          label: "Explicit Consent Notice",
          href: "/legal/explicit-consent",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Keep using the platform",
      description:
        "Discover artists, sign up, or write to us about your privacy requests.",
    },
  },

  explicitConsent: {
    slug: "explicit-consent",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "scope",
        heading: "Scope",
        paragraphs: [
          "This notice has been prepared for the processing activities that require explicit consent under KVKK. It is not a repetition of the privacy notice and is not framed as a mandatory condition for opening an account.",
          "Explicit consent must be freely given, specific to a particular matter, informed, and optional. Pre-checked default consent is not used.",
        ],
      },
      {
        id: "when-needed",
        heading: "When it may be required",
        paragraphs: [
          "Explicit consent is not required for every operation needed to provide the platform's core services (account, profile, discovery, job requests, messaging); the relevant legal bases are explained in the privacy notice.",
          "Separate explicit consent may be obtained particularly for processing special categories of personal data, optional sharing of profile visibility, or processing scenarios that fall outside the scope of the mandatory service.",
          "Permission for marketing / commercial electronic communications is not the subject of this notice; that permission is subject to a separate, optional consent process.",
        ],
      },
      {
        id: "granular",
        heading: "Granular and revocable consent",
        paragraphs: [
          "If explicit consent is requested, it is presented on a per-matter basis. Users may choose the items they want; consent is not deemed given for items they did not select.",
          "Consent may be withdrawn later. Withdrawing consent aims to stop consent-based processing going forward; it does not remove legal retention obligations.",
        ],
      },
      {
        id: "evidence",
        heading: "Record and evidence",
        paragraphs: [
          "When explicit consent is obtained, the timestamp, the version of the text, and the scope of permission selected may be technically recorded. These records are used solely for compliance and audit purposes.",
          `For questions, contact: ${CONTACT}`,
        ],
      },
    ],
    relatedPages: {
      heading: "Related Pages",
      intro: "Texts recommended to be read together with explicit consent:",
      items: [
        { id: "kvkk", label: "KVKK Privacy Notice", href: "/legal/kvkk" },
        { id: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
        {
          id: "email",
          label: "Commercial Electronic Communications",
          href: "/legal/electronic-communications",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "You're in control",
      description:
        "Only grant the optional permissions you want while using the platform.",
    },
  },

  electronicCommunications: {
    slug: "electronic-communications",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "purpose",
        heading: "Purpose",
        paragraphs: [
          "This notice is an optional permission disclosure for commercial email communications such as campaigns, offers, and announcements.",
          "It is not required to open an account or use the platform. It is off by default. SMS or phone call channels are not currently used.",
        ],
      },
      {
        id: "channel",
        heading: "Channel",
        paragraphs: [
          `The communication channel may only be email. If you grant permission, updates may be sent on behalf of the ${BRAND} brand from ${CONTACT} or the platform's authorized email infrastructure.`,
        ],
      },
      {
        id: "withdrawal",
        heading: "Withdrawing permission",
        paragraphs: [
          "You may withdraw your permission at any time. Withdrawal is available via the unsubscribe link in the email, account settings (when available), or " +
            CONTACT +
            ".",
          "Registration and opt-out processes compliant with IYS and applicable electronic commerce legislation will be applied once systems are ready. This notice does not include a fabricated IYS number or institution information.",
        ],
      },
      {
        id: "no-condition",
        heading: "No condition of use",
        paragraphs: [
          "Permission for commercial electronic communications is not a precondition for registration, login, or use of the core service. If you do not grant permission, you can still use the platform's core functions.",
        ],
      },
    ],
    relatedPages: {
      heading: "Related Pages",
      intro: "Related privacy texts:",
      items: [
        { id: "kvkk", label: "KVKK Privacy Notice", href: "/legal/kvkk" },
        {
          id: "consent",
          label: "Explicit Consent Notice",
          href: "/legal/explicit-consent",
        },
        { id: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Manage your communication preferences",
      description:
        "If you don't want campaign emails, you don't need to grant permission.",
    },
  },

  distanceSalesPreliminary: {
    slug: "distance-sales-preliminary",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "provider",
        heading: "Service provider information",
        paragraphs: [
          `Service brand: ${BRAND}. Service provider / operator: ${OPERATOR}. Location: ${LOCATION}. Website: ${SITE}. Email: ${CONTACT}.`,
          "Phone number, full address, tax number, MERSIS number, and trade registry information are not published at this stage. These fields will be updated on the relevant pages once finalized.",
        ],
      },
      {
        id: "service",
        heading: "Essential characteristics of the service",
        paragraphs: [
          `${BRAND} is a digital platform offering artist discovery, professional profiles, job requests, and a messaging infrastructure.`,
          "When paid membership/subscription services are offered, these services are digital access in nature. Payment may not yet be active; when checkout is opened, the final scope will be shown on the payment screen.",
        ],
      },
      {
        id: "price",
        heading: "Price and currency",
        paragraphs: [
          "When a paid service is offered, the price, taxes, and any additional fees will be clearly shown on the payment/checkout screen.",
          "The currency is planned to be USD. This notice does not publish a fixed price amount.",
        ],
      },
      {
        id: "payment",
        heading: "Payment method",
        paragraphs: [
          "The payment method and payment provider information will be shown on the payment screen. This notice does not fabricate a payment provider's brand name.",
          "Sensitive payment information such as card data may be processed by the relevant payment infrastructure.",
        ],
      },
      {
        id: "duration-renewal",
        heading: "Duration and renewal",
        paragraphs: [
          "Subscription duration and renewal method depend on the plan offered and the terms shown at checkout.",
          "An automatic renewal principle may apply; how renewal works will be explained at the time of purchase. This page does not publish a fixed billing interval or renewal date.",
        ],
      },
      {
        id: "cancel-withdraw",
        heading: "Cancellation and withdrawal",
        paragraphs: [
          "Cancellation and withdrawal processes are explained in the Cancellation and Withdrawal Process page and the Refund Policy.",
          "The 14-day right of withdrawal principle depends on applicable legislation and digital service exceptions. Withdrawal does not automatically mean a refund in every case.",
        ],
      },
      {
        id: "performance",
        heading: "Performance of the digital service",
        paragraphs: [
          "Digital subscription/membership access is provided through the account once the purchase is completed.",
          "The user will be informed of when performance begins and its effect on the right of withdrawal in the checkout and agreement texts.",
        ],
      },
      {
        id: "complaints",
        heading: "Complaints and applications",
        paragraphs: [
          `For complaints and applications, contact: ${CONTACT}. You may also use the guidance on the Contact page.`,
          "Dispute resolution processes are subject to applicable legislation. This notice does not add unconfirmed court names, monetary limits, or institution information.",
        ],
      },
    ],
    relatedPages: {
      heading: "Related Pages",
      intro: "Together with this preliminary information:",
      items: [
        {
          id: "agreement",
          label: "Distance Sales Agreement",
          href: "/legal/distance-sales-agreement",
        },
        {
          id: "cancel",
          label: "Cancellation and Withdrawal",
          href: "/legal/cancellation",
        },
        { id: "refund", label: "Refund Policy", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Subscription Terms",
          href: "/legal/subscription",
        },
      ],
    },
    finalCta: {
      heading: "Clear terms will be shown once payment is opened",
      description:
        "When checkout is published, price, duration, and payment details will appear on screen.",
    },
  },

  distanceSalesAgreement: {
    slug: "distance-sales-agreement",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "parties",
        heading: "Parties",
        paragraphs: [
          `This agreement defines the general framework for the distance service relationship to be formed between ${OPERATOR}, the provider of the ${BRAND} paid digital membership/subscription service, and the user purchasing the service.`,
          `Contact: ${CONTACT}. Location: ${LOCATION}.`,
        ],
      },
      {
        id: "subject",
        heading: "Subject",
        paragraphs: [
          "The subject of this agreement is the paid digital access, membership, or subscription service that may be offered through the platform.",
          "This text is not tied to checkout. Once payment is active, the final terms will take effect together with the payment screen and this agreement.",
        ],
      },
      {
        id: "consistency",
        heading: "Consistency with other policies",
        paragraphs: [
          "This agreement should be read together with the Terms of Use, Subscription Terms, Refund Policy, Cancellation and Withdrawal Process, and Privacy/KVKK notices.",
          "In case of conflict, the current terms shown at checkout for the specific paid service, together with the distance sales texts, will take priority in evaluation.",
        ],
      },
      {
        id: "user-obligations",
        heading: "User obligations",
        paragraphs: [
          "The user is obligated to provide accurate account information, protect their access credentials, and use the service lawfully.",
          "Unauthorized transfer of the service to third parties or its misuse is prohibited.",
        ],
      },
      {
        id: "provider-obligations",
        heading: "Provider obligations",
        paragraphs: [
          "The provider aims to deliver the purchased digital access with reasonable care. No guarantee of uninterrupted service is given.",
          "Notification is intended in case of significant service changes.",
        ],
      },
      {
        id: "price-payment",
        heading: "Price and payment",
        paragraphs: [
          "Price and taxes will be shown at checkout. The currency is planned to be USD. The payment provider will be specified at checkout.",
          "This agreement does not publish a fixed price or the provider's brand name.",
        ],
      },
      {
        id: "term",
        heading: "Term, renewal, termination",
        paragraphs: [
          "Term and renewal are subject to the selected plan and the checkout terms. Cancellation and withdrawal rules are set out in the relevant policies.",
        ],
      },
      {
        id: "liability",
        heading: "Liability",
        paragraphs: [
          "The platform is provided \"as is.\" To the extent permitted by applicable law, liability for indirect damages is limited. This notice does not designate a jurisdiction.",
        ],
      },
    ],
    relatedPages: {
      heading: "Related Pages",
      intro: "Read together with this agreement:",
      items: [
        {
          id: "prelim",
          label: "Preliminary Information",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "terms", label: "Terms of Use", href: "/legal/terms" },
        {
          id: "subscription",
          label: "Subscription Terms",
          href: "/legal/subscription",
        },
        { id: "refund", label: "Refund Policy", href: "/legal/refund" },
      ],
    },
    finalCta: {
      heading: "Get informed before you purchase",
      description:
        "Review the terms carefully once the payment screen is opened.",
    },
  },

  cancellation: {
    slug: "cancellation",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "withdrawal",
        heading: "14-day right of withdrawal principle",
        paragraphs: [
          "Under consumer protection legislation, the 14-day right of withdrawal principle may apply to distance contracts.",
          "For digital services, exceptions in the legislation and the start of performance may affect the right of withdrawal. Withdrawal does not automatically mean an unconditional refund in every case.",
        ],
      },
      {
        id: "cancel-vs-refund",
        heading: "Difference between cancellation and refund",
        paragraphs: [
          "Cancelling a subscription may mean stopping future renewals. A refund, on the other hand, relates to returning a completed payment.",
          "Even where a right of cancellation exists, a refund of past period fees does not arise automatically. Refund evaluation falls under the Refund Policy.",
        ],
      },
      {
        id: "how-to-cancel",
        heading: "General steps for cancellation",
        paragraphs: [
          "1) Log in to your account.",
          "2) Use the cancellation option in the subscription/plan management area that will be provided once paid services go live.",
          "3) If this area is not yet available, send your request to " +
            CONTACT +
            "; identity verification may be requested.",
          "4) When the cancellation takes effect depends on the plan terms. This page does not impose a requirement to cancel 30 days in advance.",
        ],
      },
      {
        id: "auto-renewal",
        heading: "Stopping automatic renewal",
        paragraphs: [
          "If automatic renewal is enabled, cancellation may stop renewal for the next period. The precise moment of effect will be specified in the checkout and subscription terms.",
        ],
      },
      {
        id: "contact",
        heading: "Support",
        paragraphs: [
          `For cancellation/withdrawal requests, contact: ${CONTACT}. You may also use the Contact page.`,
        ],
      },
    ],
    relatedPages: {
      heading: "Related Pages",
      intro: "Texts related to cancellation and withdrawal:",
      items: [
        { id: "refund", label: "Refund Policy", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Subscription Terms",
          href: "/legal/subscription",
        },
        {
          id: "prelim",
          label: "Preliminary Information",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "A transparent cancellation process is intended",
      description:
        "Once paid services go live, management steps will be clarified within the account.",
    },
  },
};
