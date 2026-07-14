import type { CorporateContentBundle } from "@/content/types";

export const corporateContent: CorporateContentBundle = {
  about: {
    slug: "about",
    updatedAt: "2026-07-14",
    whoWeAre: {
      heading: "Who we are",
      paragraphs: [
        "ART-IST.CLUB is a global digital discovery platform that connects artists directly with the people looking for them.",
        "We provide professional profile infrastructure that makes an artist’s skills, work, and creative identity visible. Discovery can follow country, city, category, language, and working style.",
        "Our purpose is to enable clear, direct connections between individual clients and artists — and to help artists become more discoverable for professional opportunities.",
      ],
    },
    mission: {
      heading: "Our mission",
      paragraphs: [
        "To make it easier for artists to meet the right opportunities beyond geography, language, and industry boundaries.",
        "We keep discovery simple, communication direct, and the professional profile at the center.",
      ],
    },
    vision: {
      heading: "Our vision",
      paragraphs: [
        "To build a trusted, inclusive, and global digital ecosystem for artist discovery and professional connections.",
        "A dedicated B2B space for brands, agencies, production companies, and institutional clients — along with verified artist profiles and collaboration tools — is part of this longer-term vision.",
      ],
    },
    whyUs: {
      heading: "Why ART-IST.CLUB?",
      cards: [
        {
          id: "global-reach",
          title: "Global reach",
          description:
            "Artists and clients from different countries can meet in one discovery experience.",
        },
        {
          id: "multilingual",
          title: "Multilingual experience",
          description:
            "The platform experience is offered in multiple languages to support a wider audience.",
        },
        {
          id: "direct-connection",
          title: "Direct connection",
          description:
            "Artists and clients can connect through job requests and messaging without relying on a middle layer.",
        },
        {
          id: "professional-profiles",
          title: "Professional artist profiles",
          description:
            "Profiles present category, portfolio, location, and working details in a clear professional format.",
        },
        {
          id: "category-location",
          title: "Category and location discovery",
          description:
            "Filters help clients find artists that match real project needs more quickly.",
        },
        {
          id: "artist-growth",
          title: "Artist-focused growth",
          description:
            "The platform is designed to strengthen artist visibility and access to professional opportunities.",
        },
      ],
    },
    howItWorks: {
      heading: "How it works",
      steps: [
        {
          id: "create-profile",
          title: "Create a profile",
          description:
            "An artist builds a professional profile that presents skills, work, and essential details.",
        },
        {
          id: "discover",
          title: "Discover and filter",
          description:
            "Clients explore artists by category, location, language, and other relevant criteria.",
        },
        {
          id: "connect",
          title: "Connect directly",
          description:
            "Both sides communicate through job requests and messaging. The platform does not negotiate contracts or manage projects on anyone’s behalf.",
        },
      ],
    },
    whoFor: {
      heading: "Who it is for",
      intro:
        "ART-IST.CLUB brings together creative professionals and individual clients looking for artists in one shared ecosystem.",
      audiences: [
        "Actors",
        "Musicians",
        "Singers",
        "DJs",
        "Models",
        "Dancers",
        "Performance artists",
        "Content creators",
        "Photographers",
        "Visual artists",
        "Individual clients looking for artists",
      ],
      futureNote:
        "Dedicated solutions for brands, agencies, production companies, and institutional clients are planned for the future.",
    },
    values: {
      heading: "Our values",
      items: [
        {
          id: "accessibility",
          title: "Accessibility",
          description:
            "We keep discovery and communication as clear, open, and usable as possible.",
        },
        {
          id: "transparency",
          title: "Transparency",
          description:
            "We state clearly what the platform does — and what it does not do.",
        },
        {
          id: "inclusion",
          title: "Inclusion",
          description:
            "We support artists across geographies, languages, and creative disciplines.",
        },
        {
          id: "professionalism",
          title: "Professionalism",
          description:
            "We design profile and connection flows for serious creative collaboration.",
        },
        {
          id: "respect",
          title: "Respect for artists",
          description:
            "We put an artist’s work, identity, and creative value at the center.",
        },
      ],
    },
    future: {
      heading: "Future vision",
      intro:
        "The areas below are not live product modules today. They are part of the ART-IST.CLUB roadmap.",
      items: [
        "B2B solutions for brands, agencies, and institutional clients",
        "Verified artist profile infrastructure",
        "Corporate job posting and collaboration flows",
        "Global partnerships",
        "Collaboration spaces for local governments and cultural projects",
      ],
    },
    finalCta: {
      heading: "Start discovering or create your profile",
      description:
        "Looking for an artist? Start exploring. Want professional visibility? Create your artist profile.",
    },
  },
  contact: {
    slug: "contact",
    updatedAt: "2026-07-14",
    contactInfo: {
      heading: "Contact information",
      paragraphs: [
        "Verified general contact email: info@art-ist.club. A phone number and full physical address are not published at this stage.",
        "Verified contact and guidance channels are the relevant pages and account flows on the platform. The goal is to route requests to the right context and team — without sharing unverified contact details.",
        "Partnership, media, and legal topics are handled with the same transparency principle through structured guidance on existing platform pages.",
      ],
    },
    categories: {
      heading: "Support categories",
      cards: [
        {
          id: "general",
          title: "General questions",
          description:
            "Inquiries about the platform purpose, artist discovery, and general use.",
        },
        {
          id: "account",
          title: "Account and access",
          description:
            "Topics related to registration, sign-in, account type, and profile access.",
        },
        {
          id: "technical",
          title: "Technical support",
          description:
            "Technical topics related to page access, account use, and the platform experience.",
        },
        {
          id: "partnerships",
          title: "Partnerships",
          description:
            "Requests from brands, agencies, payment providers, and future institutional partners.",
        },
        {
          id: "media",
          title: "Media and press",
          description:
            "Press, publication, and informational requests about the platform.",
        },
        {
          id: "legal",
          title: "Legal and privacy",
          description:
            "Terms of use, privacy, cookies, subscriptions, and related legal information.",
        },
      ],
    },
    responsePrinciples: {
      heading: "How we respond",
      paragraphs: [
        "Incoming requests are assessed by topic and directed to the relevant team.",
        "Response timing may vary depending on scope, priority, and any required checks. We do not promise a fixed reply window or guaranteed turnaround.",
        "Because ART-IST.CLUB is a global platform, users may be in different time zones; review considers that reality.",
      ],
    },
    channels: {
      heading: "Common contact pathways",
      intro:
        "Starting with the right platform page for your topic helps you get clearer and faster guidance.",
      items: [
        {
          id: "account-access",
          title: "Account actions",
          description:
            "Use Login and Register for sign-in, registration, and account access.",
          href: "/login",
          linkLabel: "Go to Login",
        },
        {
          id: "discover-artists",
          title: "Artist discovery",
          description:
            "Use Discover to search, filter, and explore artists.",
          href: "/discover",
          linkLabel: "Go to Discover",
        },
        {
          id: "about-platform",
          title: "About the platform",
          description:
            "Visit About for mission, vision, and platform approach.",
          href: "/about",
          linkLabel: "Go to About",
        },
        {
          id: "faq-help",
          title: "Frequently asked questions",
          description:
            "Check FAQ for common questions first.",
          href: "/faq",
          linkLabel: "Go to FAQ",
        },
        {
          id: "legal-topics",
          title: "Legal topics",
          description:
            "Review legal pages for terms, privacy, and related policies.",
          href: "/legal/terms",
          linkLabel: "Terms of Use",
        },
        {
          id: "partnership-route",
          title: "Partnership requests",
          description:
            "For institutional and support requests, use info@art-ist.club. Context is also available on the About page and related legal pages.",
          href: "/about",
          linkLabel: "About for institutional context",
        },
      ],
    },
    faqShortcut: {
      heading: "Quick help via FAQ",
      description:
        "Many answers are collected on the FAQ page. We recommend starting there before escalating a request.",
    },
    finalCta: {
      heading: "You are in the right place",
      description:
        "Start discovering artists, create a professional profile, or explore the ART-IST.CLUB vision.",
    },
  },
  faq: {
    slug: "faq",
    updatedAt: "2026-07-14",
    categories: [
      {
        id: "platform",
        heading: "About the platform",
        items: [
          {
            id: "what-is",
            question: "What is ART-IST.CLUB?",
            answer:
              "ART-IST.CLUB is a global digital discovery platform designed to connect artists directly with people looking for them. It helps artists become discoverable through professional profiles and helps clients search by category, location, language, and working style.",
          },
          {
            id: "who-for",
            question: "Who is the platform designed for?",
            answer:
              "It is designed for actors, musicians, singers, DJs, models, dancers, performance artists, content creators, photographers, visual artists, and individual clients looking for artists. Dedicated offerings for brands, agencies, and institutional clients are part of the future vision.",
          },
          {
            id: "countries",
            question: "In which countries can the platform be used?",
            answer:
              "ART-IST.CLUB is designed for global access. Availability expands through internet access, account creation, and the discovery experience across broad geographies. Any country-specific limitations, if applicable, are stated in the relevant legal pages.",
          },
          {
            id: "is-agency",
            question: "Is ART-IST.CLUB an agency?",
            answer:
              "No. ART-IST.CLUB is not an agency, management company, or employer. The platform provides discovery, professional profiles, job requests, and messaging infrastructure. Parties communicate on their own behalf.",
          },
          {
            id: "platform-role",
            question: "What role does the platform play between artists and clients?",
            answer:
              "The platform makes discovery and direct connection easier. It does not act as a manager, does not become a party to contracts, does not manage projects, and does not guarantee work or income.",
          },
        ],
      },
      {
        id: "artists",
        heading: "For artists",
        items: [
          {
            id: "who-can-create",
            question: "Who can create an artist account?",
            answer:
              "Artists who want to present their skills and work in a professional profile can create an artist account through registration. You need to select the appropriate account type during sign-up.",
          },
          {
            id: "how-profile",
            question: "How is an artist profile created?",
            answer:
              "After registration, complete the profile setup steps to add categories, biography, visuals, and related professional details. Profile setup continues at /profile/setup.",
          },
          {
            id: "who-sees",
            question: "Who can see my profile?",
            answer:
              "Published profiles that are open to discovery can be viewed by users through Discover and related public artist pages. Visibility depends on profile status, publishing settings, and platform rules.",
          },
          {
            id: "update-profile",
            question: "Can I update my profile later?",
            answer:
              "Yes. After signing in, you can update your profile information through the available dashboard and setup flows.",
          },
          {
            id: "job-requests-artists",
            question: "How are job requests received?",
            answer:
              "Clients can send job requests from an artist profile. Requests are followed through the artist dashboard and messaging experience. The platform does not accept or manage requests on your behalf.",
          },
          {
            id: "no-income-guarantee",
            question: "Does ART-IST.CLUB guarantee work or income?",
            answer:
              "No. The platform aims to improve visibility and connection opportunities. It does not guarantee jobs, projects, income, or outcomes.",
          },
        ],
      },
      {
        id: "clients",
        heading: "For clients",
        items: [
          {
            id: "how-discover",
            question: "How can I discover artists?",
            answer:
              "Use the Discover page to search and browse artists by category, location, and other available filters.",
          },
          {
            id: "review-profiles",
            question: "How can I review artist profiles?",
            answer:
              "Open profiles from Discover results or go directly to an artist page to review profile details, categories, and shared work.",
          },
          {
            id: "send-job-request",
            question: "How do I send a job request?",
            answer:
              "You can create a job request from the artist profile you are interested in. Clear details about needs, timing, and project context help communication.",
          },
          {
            id: "how-communicate",
            question: "How do I communicate with an artist?",
            answer:
              "Communication runs through the platform’s job request and messaging flows so that both sides can connect in a direct, trackable way.",
          },
          {
            id: "not-party",
            question: "Is ART-IST.CLUB a party to the contract?",
            answer:
              "No. ART-IST.CLUB is not a party to contracts between artists and clients. Scope, terms, and agreements are defined directly between the parties.",
          },
          {
            id: "payment-process",
            question: "How do payment and agreements work?",
            answer:
              "The platform does not currently collect payments or manage contracts on behalf of the parties. Payment and agreement terms are decided between them. If membership or subscription fees apply, they are explained on the related legal and subscription pages.",
          },
        ],
      },
      {
        id: "account-security",
        heading: "Account and security",
        items: [
          {
            id: "account-required",
            question: "Is creating an account required?",
            answer:
              "Parts of discovery may be publicly available, but features such as job requests, messaging, favorites, and profile management typically require an account.",
          },
          {
            id: "forgot-password",
            question: "I forgot my password. What should I do?",
            answer:
              "A dedicated public password-reset page is not published at this time. Use the Login page to sign in. If you need access help, follow the guidance on the Contact page. Where identity providers offer recovery options, those appear through the sign-in experience.",
          },
          {
            id: "data-protection",
            question: "How is my account information protected?",
            answer:
              "Account and authentication infrastructure is managed under the platform’s security practices and Privacy Policy. Review the Privacy Policy page for current practices.",
          },
          {
            id: "report-profile",
            question: "How do I report a fake or misleading profile?",
            answer:
              "If you encounter a suspicious or misleading profile, report it using the guidance on the Contact page. Reviews are routed to the relevant team by topic.",
          },
          {
            id: "close-account",
            question: "How can I close my account?",
            answer:
              "For account closure requests, use the guidance on the Contact page. Related legal information appears on the Privacy Policy and Terms of Use pages.",
          },
        ],
      },
      {
        id: "membership",
        heading: "Membership and payments",
        items: [
          {
            id: "membership-options",
            question: "Where are membership options published?",
            answer:
              "Membership and campaign information appears only on the relevant pages published on the platform (for example Founding Artist and subscription information pages). This FAQ does not promise prices or packages.",
          },
          {
            id: "terms-before-payment",
            question: "Are terms shown before payment starts?",
            answer:
              "When a paid membership or subscription flow is offered, presenting the relevant terms before payment is the intended practice. Current terms can be reviewed on the Subscription Terms page.",
          },
          {
            id: "where-subscription",
            question: "Where can I review subscription terms?",
            answer:
              "You can review Subscription Terms at /legal/subscription.",
          },
          {
            id: "where-refund",
            question: "Where is the refund policy?",
            answer:
              "The Refund Policy is published at /legal/refund. Scope and conditions follow only the text on that page.",
          },
          {
            id: "fees-by-country",
            question: "Do fees vary by country?",
            answer:
              "Whether fees vary by country is stated only in the current offers and legal texts published on the platform. This FAQ does not commit to fixed prices or country-based rate tables.",
          },
        ],
      },
      {
        id: "jobs-messaging",
        heading: "Job requests and messaging",
        items: [
          {
            id: "after-request",
            question: "What happens after a job request is sent?",
            answer:
              "The request is delivered to the artist side. The artist can review, reply, or decline. The platform does not accept requests automatically.",
          },
          {
            id: "artist-can-decline",
            question: "Can an artist decline a request?",
            answer:
              "Yes. Artists may evaluate and decline incoming job requests. The accept or decline decision belongs to the artist.",
          },
          {
            id: "messages-in-platform",
            question: "Are messages handled inside the platform?",
            answer:
              "Job request and conversation flows are designed to run through the in-platform messaging experience so communication stays associated with the relevant accounts.",
          },
          {
            id: "dispute-role",
            question: "Does ART-IST.CLUB intervene in disputes?",
            answer:
              "ART-IST.CLUB does not join commercial disputes as a contracting party. Policy violations or safety issues may be reviewed; commercial resolution remains between the parties.",
          },
          {
            id: "report-messages",
            question: "How do I report inappropriate messages?",
            answer:
              "You can report inappropriate or abusive messages using the guidance on the Contact page. Reviews are handled by topic.",
          },
        ],
      },
      {
        id: "legal-privacy",
        heading: "Privacy and legal",
        items: [
          {
            id: "where-privacy",
            question: "Where is the Privacy Policy?",
            answer:
              "The Privacy Policy is published at /legal/privacy.",
          },
          {
            id: "cookies-how",
            question: "How are cookies used?",
            answer:
              "Cookie use is explained on the Cookie Policy page (/legal/cookies). Current practice follows that page.",
          },
          {
            id: "where-terms",
            question: "Where are the Terms of Use?",
            answer:
              "Terms of Use are available at /legal/terms.",
          },
          {
            id: "data-requests",
            question: "How do I submit personal data requests?",
            answer:
              "For requests about your personal data, contact info@art-ist.club and review the Privacy Policy and KVKK notice.",
          },
          {
            id: "legal-channel",
            question: "Where is the legal contact channel explained?",
            answer:
              "Guidance for legal topics is explained on the Contact page and related legal pages (Terms, Privacy, Cookies, Refund, Subscription, Company Information). Unverified contact details are not published.",
          },
        ],
      },
    ],
    quickLinks: {
      heading: "Quick links",
      intro: "Go directly to the page you need.",
      items: [
        { id: "ql-discover", label: "Discover", href: "/discover" },
        { id: "ql-register", label: "Register", href: "/register" },
        { id: "ql-login", label: "Login", href: "/login" },
        { id: "ql-about", label: "About", href: "/about" },
        { id: "ql-contact", label: "Contact", href: "/contact" },
        { id: "ql-terms", label: "Terms of Use", href: "/legal/terms" },
        { id: "ql-privacy", label: "Privacy Policy", href: "/legal/privacy" },
        { id: "ql-cookies", label: "Cookie Policy", href: "/legal/cookies" },
        { id: "ql-refund", label: "Refund Policy", href: "/legal/refund" },
        {
          id: "ql-subscription",
          label: "Subscription Terms",
          href: "/legal/subscription",
        },
      ],
    },
    stillNeedHelp: {
      heading: "Still need help?",
      description:
        "If you cannot find the answer here, continue with the categories and guidance on the Contact page.",
    },
    finalCta: {
      heading: "Start discovering or learn more",
      description:
        "Discover artists, create an account, or explore the ART-IST.CLUB vision.",
    },
  },
};
