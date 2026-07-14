import type { LegalContentBundle } from "@/content/types";
import { turkeyNoticesEn } from "@/content/legal/notices/en";

export const legalContent: LegalContentBundle = {
  terms: {
    slug: "terms",
    updatedAt: "2026-07-14",
    acceptance: {
      heading: "Acceptance",
      paragraphs: [
        "By accessing or using ART-IST.CLUB, you confirm that you have read, understood, and agree to these Terms of Use.",
        "If you do not agree, you must not use the platform. Creating an account, signing in, publishing a profile, sending a job request, or messaging constitutes acceptance.",
      ],
    },
    purpose: {
      heading: "Purpose of the platform",
      paragraphs: [
        "ART-IST.CLUB is a global digital platform that provides artist discovery, professional profile creation, communication, and job-request infrastructure.",
        "The platform is not an agency, management company, or employer. ART-IST.CLUB is not a party to contracts between artists and clients, does not manage projects, and does not guarantee income, projects, or outcomes.",
        "Our purpose is to make it easier for parties to discover each other and connect directly.",
      ],
    },
    accounts: {
      heading: "Accounts",
      paragraphs: [
        "When creating an account, you must provide accurate, current, and complete information. Using misleading information or someone else’s details is prohibited.",
        "You are responsible for your account security. Keep your credentials confidential and report unauthorized access promptly.",
        "You are responsible for activity that occurs through your account. Accounts that violate these rules may be suspended or closed.",
      ],
    },
    artistContent: {
      heading: "Artist content",
      paragraphs: [
        "You are responsible for content you share in profiles, galleries, and other areas. You represent that you hold the legal rights to publish that content or have obtained the required permissions.",
        "Copyright infringement, trademark infringement, and unlawful, hateful, obscene, or harmful content are prohibited.",
        "The platform reserves the right to remove or restrict access to content that violates these rules.",
      ],
    },
    jobRequests: {
      heading: "Job requests",
      paragraphs: [
        "Job requests and messaging features help artists and clients connect.",
        "Agreements, scope, fees, timing, and other commercial terms are defined directly between the parties. ART-IST.CLUB is not a party to those agreements and does not enter contracts on anyone’s behalf.",
        "The platform does not collect payments for project agreements, manage contracts, or guarantee project outcomes.",
      ],
    },
    prohibited: {
      heading: "Prohibited conduct",
      intro:
        "Misuse of the platform is prohibited, including but not limited to the following:",
      items: [
        "Creating fake, misleading, or unauthorized accounts",
        "Fraud, identity theft, or financial manipulation",
        "Spam, unsolicited bulk messages, or harassing communication",
        "Harassment, threats, discrimination, or hateful behavior",
        "Publishing illegal content or encouraging illegal activity",
        "Impersonating another person or organization without permission",
        "Technical abuse targeting systems, security controls, or other users",
      ],
    },
    intellectualProperty: {
      heading: "Intellectual property",
      paragraphs: [
        "The ART-IST.CLUB brand, logos, design, software, interface, and platform-owned materials are protected by intellectual property rights.",
        "Users may not copy, modify, distribute, or commercially exploit the platform’s brand, design, or software without permission.",
        "Rights in user-created content remain with the user as applicable under the law and related legal pages; the platform receives only the permissions needed to operate the service.",
      ],
    },
    serviceChanges: {
      heading: "Service changes",
      paragraphs: [
        "ART-IST.CLUB reserves the right to update, change, temporarily suspend, or remove features.",
        "Changes may be made for product development, security, performance, or legal requirements. Reasonable notice is intended for material changes, but uninterrupted or unchanged service is not promised.",
      ],
    },
    liability: {
      heading: "Limitation of liability",
      paragraphs: [
        "The platform is provided “as is.” ART-IST.CLUB does not guarantee uninterrupted, error-free, or continuously available service.",
        "The platform does not guarantee income, work, or outcomes related to agreements, payments, or results between artists and clients.",
        "To the extent permitted by applicable law, liability for indirect, incidental, or consequential damages is limited. This text does not assign a specific court or jurisdiction.",
      ],
    },
    termination: {
      heading: "Account termination",
      paragraphs: [
        "Accounts that violate these terms or platform policies may be suspended or closed.",
        "Access may be restricted for security reasons, abuse, suspected fraud, or legal requirements.",
        "If you wish to close your account, use the guidance on the Contact page.",
      ],
    },
    updates: {
      heading: "Updates",
      paragraphs: [
        "These Terms of Use may be updated over time. An updated version becomes effective when published on this page.",
        "Continued use of the platform after an update means you accept the revised terms. User notice is intended for material changes.",
      ],
    },
    relatedPages: {
      heading: "Related pages",
      intro: "These pages may be reviewed together with the Terms of Use.",
      items: [
        {
          id: "privacy",
          label: "Privacy Policy",
          href: "/legal/privacy",
        },
        {
          id: "cookies",
          label: "Cookie Policy",
          href: "/legal/cookies",
        },
        {
          id: "refund",
          label: "Refund Policy",
          href: "/legal/refund",
        },
        {
          id: "subscription",
          label: "Subscription Terms",
          href: "/legal/subscription",
        },
        {
          id: "contact",
          label: "Contact",
          href: "/contact",
        },
      ],
    },
    finalCta: {
      heading: "Continue exploring the platform",
      description:
        "Discover artists, create an account, or reach out through Contact.",
    },
  },
  privacy: {
    slug: "privacy",
    updatedAt: "2026-07-14",
    scope: {
      heading: "Scope",
      paragraphs: [
        "This Privacy Policy explains how personal data is collected, used, stored, and protected when you use the ART-IST.CLUB platform.",
        "It covers account creation, profile management, artist discovery, job requests, messaging, and related platform features. It aims to provide clear, professional information aligned with widely recognized privacy principles.",
        "This text does not invent unverified company identity details, addresses, phone numbers, or a named data protection officer. Such details appear only when published in a verified form on the relevant pages.",
      ],
    },
    dataCollected: {
      heading: "Information we collect",
      paragraphs: [
        "Account information: authentication data provided during registration and sign-in (for example email and account type).",
        "Profile information: display name, biography, categories, location, languages, images, videos, and similar professional details you choose to share.",
        "Usage and technical data: technical information related to sessions, devices, or logs needed for secure platform operation.",
        "Communication and request content: information shared in job requests, messages, and support guidance flows.",
        "Details about cookies and similar technologies are not repeated here; see the Cookie Policy page.",
      ],
    },
    dataUse: {
      heading: "How we use information",
      paragraphs: [
        "We use data to create and manage accounts, present profiles, operate discovery, enable job requests and messaging, protect security, and improve the service.",
        "Data may also be processed for legitimate operation of the platform, fulfilling user requests, preventing abuse, and meeting legal obligations.",
        "Because ART-IST.CLUB is not a party to commercial agreements between artists and clients, users remain responsible for information they share directly with each other.",
      ],
    },
    accountProfile: {
      heading: "Account and profile data",
      paragraphs: [
        "Account data is processed for authentication and access control. When you make a profile discoverable, the professional details you choose may be visible to other users.",
        "Profile visibility depends on publishing status, account type, and platform settings. Avoid sharing inaccurate or misleading information.",
        "You are responsible for your profile content and must not publish content that infringes copyright or privacy rights.",
      ],
    },
    jobsMessaging: {
      heading: "Job requests and messaging",
      paragraphs: [
        "Job requests and messages are processed to connect the relevant parties and are associated with the related accounts.",
        "Message and request content may be retained as needed to operate the service and to review security or abuse concerns.",
        "The platform does not negotiate commercial deals on anyone’s behalf. Users remain responsible for project details they share and for outcomes of agreements.",
      ],
    },
    security: {
      heading: "Security",
      paragraphs: [
        "Authentication, access controls, and appropriate technical and organizational measures are applied to protect accounts and data.",
        "No system can guarantee absolute security. If you suspect unauthorized access, secure your account and use the guidance on the Contact page.",
        "Data processed through infrastructure providers is managed with protective measures appropriate for operating the service securely.",
      ],
    },
    userRights: {
      heading: "Your rights",
      paragraphs: [
        "Depending on applicable law, you may have rights such as access, correction, deletion, restriction of processing, objection, or data portability.",
        "Use the guidance on the Contact page to submit privacy-related requests. Until a verified public email or DPO contact is published, the process follows platform guidance.",
        "We may ask for additional information to verify identity or clarify the request. Response timing can vary by request type and applicable rules.",
      ],
    },
    retention: {
      heading: "Data retention",
      paragraphs: [
        "Data may be retained for as long as needed to operate the account, provide the service, protect security, handle disputes, and meet legal retention duties.",
        "When an account is closed, some data may be deleted or anonymized; limited records may be kept longer where required by law or legitimate security needs.",
        "Exact deletion timelines can vary by product and legal requirements; this policy does not commit to a fixed number of days.",
      ],
    },
    thirdParties: {
      heading: "Third-party services",
      paragraphs: [
        "The platform may rely on trusted infrastructure providers for authentication, hosting, databases, storage, and similar technical services.",
        "When OAuth or similar sign-in options are used, the relevant identity provider may apply its own privacy practices. This policy does not cover all practices of those providers.",
        "Third parties process data only as needed to operate the service. This section does not list payment providers or unverified partner names.",
      ],
    },
    children: {
      heading: "Children’s privacy",
      paragraphs: [
        "ART-IST.CLUB is not designed as a service directed at children. Persons below the legal minimum age should not use the platform.",
        "Where parental or guardian consent is required by applicable rules, those rules apply. If children’s data is collected by mistake, appropriate deletion is intended once identified.",
      ],
    },
    updates: {
      heading: "Policy updates",
      paragraphs: [
        "This Privacy Policy may be updated over time. An updated version becomes effective when published on this page.",
        "User notice is intended for material changes. Continued use after an update means you accept the revised policy.",
      ],
    },
    relatedPages: {
      heading: "Related pages",
      intro: "You can review these related pages together with the Privacy Policy.",
      items: [
        { id: "terms", label: "Terms of Use", href: "/legal/terms" },
        { id: "cookies", label: "Cookie Policy", href: "/legal/cookies" },
        { id: "refund", label: "Refund Policy", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Subscription Terms",
          href: "/legal/subscription",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continue exploring with confidence",
      description:
        "Discover artists, create an account, or contact us for privacy-related requests.",
    },
  },
  cookies: {
    slug: "cookies",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Purpose of this Cookie Policy",
      paragraphs: [
        "This Cookie Policy explains how ART-IST.CLUB uses cookies and similar technologies.",
        "Its purpose is to support secure platform operation, keep essential experience settings such as language preference, and inform users clearly. Read this policy together with the Privacy Policy.",
        "Only general categories aligned with current platform use are described here. Unused advertising networks, analytics products, or marketing provider names are not invented.",
      ],
    },
    whatAreCookies: {
      heading: "What are cookies?",
      paragraphs: [
        "Cookies are small text files a website places on your browser. Similar technologies (for example local storage) may also keep preference or session-related information on your device.",
        "Cookies can support essential functions such as session continuity, security, and language preference. Some cookies are deleted when the browser closes; others may remain longer.",
      ],
    },
    categories: {
      heading: "Cookie categories in use",
      intro:
        "The categories below are grouped by technology purpose. Each status reflects the platform’s current practice.",
      items: [
        {
          id: "essential",
          title: "Essential",
          status: "Active",
          description:
            "Cookies or similar technologies that may be required for core security, session, and authentication functions. Without them, sign-in and account protection may not work correctly.",
        },
        {
          id: "functional",
          title: "Functional",
          status: "Limited / as needed",
          description:
            "Functional technologies that help certain features operate properly. They are used only as needed to run the service and are not a separate advertising network.",
        },
        {
          id: "performance",
          title: "Performance / Analytics",
          status: "No active third-party analytics",
          description:
            "ART-IST.CLUB does not currently use a separate third-party performance or analytics cookie provider. Limited first-party technical logs may occur for security and operations; that is not advertising measurement.",
        },
        {
          id: "preference",
          title: "Preference",
          status: "Active",
          description:
            "Used to remember experience settings such as language preference. For example, the platform cookie that stores language choice so pages load consistently in the selected language.",
        },
        {
          id: "marketing",
          title: "Marketing (future)",
          status: "Not active",
          description:
            "Cookies for advertising, retargeting, or marketing measurement are not currently active. If this category is introduced later, this policy will be updated — it is not presented as live today.",
        },
      ],
    },
    browserControls: {
      heading: "Managing cookies in your browser",
      paragraphs: [
        "Most browsers let you view, block, or delete cookies. Controls vary by browser and are usually found under Privacy or Security settings.",
        "Blocking essential cookies may disrupt sign-in, language consistency, or other core features. Clearing preference cookies may require you to set language again.",
        "Browser controls affect your experience on the platform; for privacy rights and data requests, use the Privacy Policy and Contact page guidance.",
      ],
    },
    thirdParties: {
      heading: "Third-party services",
      paragraphs: [
        "The platform may rely on technical providers for authentication, hosting, and similar infrastructure. Those providers may use cookies or similar technologies needed to operate the service.",
        "This policy does not list unused advertising networks, analytics dashboards, or marketing pixels. When OAuth or similar sign-in is used, the relevant identity provider’s own practices may also apply.",
        "For the broader framework of personal data processing, see the Privacy Policy.",
      ],
    },
    updates: {
      heading: "Policy updates",
      paragraphs: [
        "This Cookie Policy may be updated over time. An updated version becomes effective when published on this page.",
        "If new cookie categories or third-party practices are introduced, the policy will be updated accordingly.",
      ],
    },
    relatedPages: {
      heading: "Related pages",
      intro: "You can review these pages together with the Cookie Policy.",
      items: [
        { id: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
        { id: "terms", label: "Terms of Use", href: "/legal/terms" },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continue with clear information",
      description:
        "Explore the platform, create an account, or contact us with questions.",
    },
  },
  refund: {
    slug: "refund",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Purpose of this policy",
      paragraphs: [
        "This Refund Policy explains ART-IST.CLUB’s general approach to refunds for paid membership and subscription services that may be offered in the future.",
        "Its purpose is to help users understand how refund topics will be handled when a paid service is offered. This text does not create an automatic refund right or a fixed-window guarantee.",
      ],
    },
    scope: {
      heading: "Scope",
      paragraphs: [
        "This policy is prepared to apply to paid membership, subscription, or similar digital access services that may be offered on the platform in the future.",
        "An active platform payment flow is not promised on this page. When a paid service launches, the relevant terms will be clarified through the purchase experience and the Subscription Terms page.",
        "Project payments between artists and clients fall outside this policy because ART-IST.CLUB is not a party to those agreements.",
      ],
    },
    purchaseProcess: {
      heading: "Purchase process",
      paragraphs: [
        "When a paid membership or subscription is offered, presenting the relevant terms before payment is completed is the intended practice.",
        "Users are responsible for reviewing the terms shown at purchase. Do not complete payment unless you accept those terms.",
        "Presented terms should be read together with the Subscription Terms, Terms of Use, and this Refund Policy.",
      ],
    },
    evaluation: {
      heading: "How refund requests are evaluated",
      paragraphs: [
        "Refund requests may be reviewed in their own context based on the nature of the service, the purchase terms, and applicable rules.",
        "There is no commitment that every request will be automatically approved or resolved within a fixed number of days. Outcomes may vary with the circumstances.",
        "Guidance for submitting requests will be clarified through the relevant purchase flow and the Contact page when paid services go live.",
      ],
    },
    cancellation: {
      heading: "Subscription cancellation",
      paragraphs: [
        "Cancelling a subscription is not the same as receiving a refund. Cancellation may stop future renewals; a refund concerns returning a completed payment.",
        "Even where a cancellation option exists, refunds for past periods do not arise automatically. Refunds are assessed within the framework of this policy and the terms shown at purchase.",
        "The distinction between cancellation and refund should be read together with the Subscription Terms page.",
      ],
    },
    exceptions: {
      heading: "Exceptions",
      paragraphs: [
        "Some requests may be assessed differently based on legal requirements and applicable conditions.",
        "This page does not list every possible scenario. Evaluation follows applicable rules, the nature of the service, and the terms presented at purchase.",
        "Access restrictions may apply in cases of abuse, suspected fraud, or policy violations, and those situations may affect refund evaluation.",
      ],
    },
    updates: {
      heading: "Policy updates",
      paragraphs: [
        "This Refund Policy may be updated over time. An updated version becomes effective when published on this page.",
        "As paid services launch or processes become clearer, the policy will be updated accordingly. User notice is intended for material changes.",
      ],
    },
    relatedPages: {
      heading: "Related pages",
      intro: "You can review these related pages together with the Refund Policy.",
      items: [
        {
          id: "subscription",
          label: "Subscription Terms",
          href: "/legal/subscription",
        },
        { id: "terms", label: "Terms of Use", href: "/legal/terms" },
        { id: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continue exploring the platform",
      description:
        "Discover artists, create an account, or contact us with questions.",
    },
  },
  subscription: {
    slug: "subscription",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Purpose of these Subscription Terms",
      paragraphs: [
        "These Subscription Terms explain the general operating principles for paid membership and subscription services that may be offered on ART-IST.CLUB in the future.",
        "The goal is to help users understand plan selection, start, renewal, and cancellation in a clear professional framework. This page does not include prices, currencies, campaigns, trial periods, or payment provider names.",
        "When a paid service launches, the terms shown at purchase should be read together with the Terms of Use, Privacy Policy, and Refund Policy.",
      ],
    },
    membershipPlans: {
      heading: "Membership plans",
      paragraphs: [
        "ART-IST.CLUB may offer membership or subscription plans with different feature levels alongside basic access in the future.",
        "Plan names, scope, and content are valid only when published on the platform. This page does not commit to a specific package, price, or campaign.",
        "If special programs such as Founding Artist exist, their conditions are explained separately on the related campaign or membership pages.",
      ],
    },
    start: {
      heading: "Subscription start",
      paragraphs: [
        "When a paid subscription or membership is offered, access begins after the purchase step is completed and the relevant terms are accepted.",
        "The start moment depends on the selected plan, account type, and terms shown at purchase. This text does not define a fixed billing interval or a specific start date.",
        "Presenting the relevant terms before payment is completed is the intended practice.",
      ],
    },
    renewal: {
      heading: "Renewal principle",
      paragraphs: [
        "In a subscription model, access may be designed to renew unless otherwise stated. How renewal works will be explained in the purchase experience and related terms when a plan is offered.",
        "This page does not publish automatic renewal dates, billing intervals, or fee amounts. Renewal details follow only the current terms published on the platform.",
        "Users are responsible for monitoring plan status through account settings or the purchase interface before renewal.",
      ],
    },
    cancellation: {
      heading: "Subscription cancellation",
      paragraphs: [
        "When a paid subscription is offered, users are intended to have access to cancellation options. Cancellation may stop future renewals.",
        "Cancellation is not the same as a refund. Refund topics are assessed under the Refund Policy.",
        "When cancellation takes effect depends on the terms shown when the plan is offered. This page does not create a fixed cancellation window or a guaranteed refund.",
      ],
    },
    accountResponsibility: {
      heading: "Account responsibility",
      paragraphs: [
        "Subscription or membership access is managed through your account. You are responsible for the accuracy and security of your account information.",
        "Subscription actions performed through your account are tied to account ownership. Keep your credentials confidential to prevent unauthorized use.",
        "Subscription access may be suspended or ended in cases of rule violations, abuse, or security risk.",
      ],
    },
    serviceChanges: {
      heading: "Service changes",
      paragraphs: [
        "ART-IST.CLUB reserves the right to update, change, or remove membership features, plan structures, or subscription experiences.",
        "User notice is intended for material changes. Changes may be made for product development, security, performance, or legal requirements.",
        "These Subscription Terms may be updated over time. An updated version becomes effective when published on this page.",
      ],
    },
    relatedPages: {
      heading: "Related pages",
      intro:
        "You can review these related pages together with the Subscription Terms.",
      items: [
        { id: "terms", label: "Terms of Use", href: "/legal/terms" },
        { id: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
        { id: "refund", label: "Refund Policy", href: "/legal/refund" },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continue exploring the platform",
      description:
        "Discover artists, create an account, or contact us with questions.",
    },
  },
  company: {
    slug: "company",
    updatedAt: "2026-07-14",
    companyInformation: {
      heading: "Company information",
      paragraphs: [
        "ART-IST.CLUB operates as a global digital platform for artist discovery and professional connections.",
        "Operator / data controller: Atilla Demirkıran.",
        "Location: İzmir, Türkiye.",
        "Contact email: info@art-ist.club",
        "Website: art-ist.club",
        "This page does not publish a phone number, full postal address, tax ID, national ID, MERSIS, or trade registry details. Only verified information approved for publication is shown.",
      ],
    },
    legalTransparency: {
      heading: "Legal transparency",
      paragraphs: [
        "ART-IST.CLUB aims to share official information with users, partners, and review teams in a current and verified form.",
        "Transparency does not mean publishing temporary or invented identity details. It means disclosing verified records clearly when they are ready.",
        "The platform purpose and how it works are explained on the About page; contact guidance is available on the Contact page.",
      ],
    },
    corporateCompliance: {
      heading: "Corporate compliance",
      paragraphs: [
        "The platform is designed and operated with the goal of aligning with applicable legal obligations. Terms of Use, Privacy Policy, and related legal pages are part of that approach.",
        "A compliance commitment does not mean filling unfinished corporate identity fields with unverified data. Official formation details will appear here when ready.",
        "General frameworks for payments, subscriptions, and refunds live on the related legal pages; this page does not contain commercial billing or registry details.",
      ],
    },
    futureUpdates: {
      heading: "Future updates",
      paragraphs: [
        "This page will be updated as company information is finalized. An updated version becomes effective when published here.",
        "Published details will come only from verified corporate records. User notice is intended for material updates.",
        "This page does not include temporary or sample values for official identity fields.",
      ],
    },
    relatedPages: {
      heading: "Related pages",
      intro: "You can review these pages for corporate and legal context.",
      items: [
        { id: "about", label: "About", href: "/about" },
        { id: "contact", label: "Contact", href: "/contact" },
        { id: "terms", label: "Terms of Use", href: "/legal/terms" },
        { id: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
      ],
    },
    finalCta: {
      heading: "Continue exploring the platform",
      description:
        "Discover artists, create an account, or contact us with questions.",
    },
  },
  ...turkeyNoticesEn,
};
