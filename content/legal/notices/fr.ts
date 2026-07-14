import type { LegalNoticePageContent } from "@/content/types";

const CONTACT = "info@art-ist.club";
const OPERATOR = "Atilla Demirkiran";
const LOCATION = "Izmir, Turquie";
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

export const turkeyNoticesFr: TurkeyNotices = {
  kvkk: {
    slug: "kvkk",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "controller",
        heading: "Identité du responsable du traitement",
        paragraphs: [
          `Sur la plateforme ${BRAND}, le responsable du traitement de vos données personnelles est ${OPERATOR}. Nom de la marque : ${BRAND}. Localisation : ${LOCATION}. Site web : ${SITE}.`,
          `Pour toute demande ou contact, utilisez cette adresse e-mail : ${CONTACT}. Ce texte ne publie ni numéro de téléphone, ni adresse complète, ni numéro fiscal, ni numéro d'identité national, ni numéro MERSIS, ni information de registre du commerce.`,
        ],
      },
      {
        id: "categories",
        heading: "Catégories de données personnelles traitées",
        paragraphs: [
          "Données d'identité et de compte : nom/nom d'affichage, e-mail, type de compte et enregistrements liés à l'authentification.",
          "Données de profil et de contenu : biographie, catégorie, langue, préférences de localisation, photos, vidéos, galerie et contenus professionnels similaires.",
          "Données de transaction et de communication : demandes de mission, contenu des messages, favoris et enregistrements des interactions au sein de la plateforme.",
          "Données techniques et de sécurité : informations de session, informations sur l'appareil/le navigateur, journaux et données techniques liées aux vérifications de sécurité.",
          "Lorsque des services payants sont proposés : statut d'abonnement/de transaction et enregistrements de transaction obligatoires liés à la facturation. Le prestataire de paiement peut traiter les données de carte sur sa propre infrastructure ; les données de paiement sensibles, comme les numéros de carte, ne sont pas conservées sur la plateforme.",
        ],
      },
      {
        id: "purposes",
        heading: "Finalités du traitement",
        paragraphs: [
          "Création et gestion des comptes, authentification, et fourniture de l'expérience de profil et de découverte.",
          "Exploitation de l'infrastructure de demandes de mission et de messagerie, et fourniture des favoris et fonctionnalités utilisateur similaires.",
          "Sécurité, prévention des utilisations abusives, résolution des problèmes et amélioration du service.",
          "Respect des obligations légales ; conservation des enregistrements d'abonnement/de transaction lorsque des services payants sont proposés.",
          "Les traitements fondés sur le consentement explicite ne sont réalisés que lorsqu'un consentement distinct a été obtenu et se limitent au périmètre de ce consentement.",
        ],
      },
      {
        id: "legal-bases",
        heading: "Bases légales",
        paragraphs: [
          "Dans le cadre de l'article 5 de la KVKK, des bases légales telles que la conclusion ou l'exécution d'un contrat, une obligation légale, un intérêt légitime (sécurité, exploitation du service) et, si nécessaire, le consentement explicite sont prises en compte.",
          "Ce texte d'information n'est pas un formulaire de consentement. L'ouverture d'un compte n'est pas conditionnée à une exigence telle que « j'approuve cette information » ; ce texte a pour seul but d'informer l'utilisateur.",
        ],
      },
      {
        id: "recipients",
        heading: "Catégories de destinataires susceptibles de recevoir un transfert",
        paragraphs: [
          "Fournisseurs d'hébergement, d'authentification, de base de données, de stockage et d'infrastructure similaire, dans la mesure nécessaire à l'exploitation du service.",
          "Partenaires commerciaux autorisés impliqués dans les processus de paiement et de facturation pour les services payants, uniquement dans la mesure nécessaire.",
          "Institutions et organismes publics légalement habilités (dans les cas obligatoires).",
          "En cas de transfert transfrontalier, des garanties conformes aux règles KVKK en vigueur seront envisagées. Ce texte n'invente pas un pays ou un emplacement de serveur spécifique.",
        ],
      },
      {
        id: "collection",
        heading: "Méthode de collecte",
        paragraphs: [
          "Les données sont collectées par voie électronique via les formulaires d'inscription/connexion, les étapes de configuration du profil, les interfaces de demande de mission et de messagerie, les actions de favoris et les journaux techniques.",
          "Lorsqu'OAuth ou une méthode de connexion similaire est utilisée, les informations nécessaires au fonctionnement du service peuvent être obtenues auprès du fournisseur d'identité.",
        ],
      },
      {
        id: "retention",
        heading: "Approche de conservation",
        paragraphs: [
          "Les données peuvent être conservées aussi longtemps que nécessaire pour l'activité du compte, la fourniture du service, la sécurité, les litiges et les obligations légales de conservation.",
          "À la fermeture d'un compte, certaines données peuvent être supprimées ou anonymisées ; les enregistrements obligatoires peuvent être conservés plus longtemps. Ce texte ne s'engage pas sur un nombre de jours fixe.",
        ],
      },
      {
        id: "rights",
        heading: "Droits de la personne concernée",
        paragraphs: [
          "Dans le cadre de l'article 11 de la KVKK, vous pouvez exercer des droits tels que : savoir si vos données personnelles sont traitées, demander des informations, demander une correction, demander une suppression/destruction, restreindre le traitement, vous opposer, et exercer les autres droits prévus par la loi.",
          "Pour vos demandes relatives à vos droits, utilisez ce canal e-mail : " + CONTACT,
        ],
      },
      {
        id: "application",
        heading: "Comment faire une demande",
        paragraphs: [
          `Vous pouvez adresser vos demandes à ${CONTACT}. Des informations supplémentaires peuvent être demandées pour vérifier votre identité et clarifier votre demande.`,
          "Le délai de réponse peut varier selon les règles applicables et la nature de la demande. Ce texte ne garantit pas un délai de réponse fixe.",
        ],
      },
    ],
    relatedPages: {
      heading: "Pages liées",
      intro: "Pages que vous pouvez consulter avec ce texte :",
      items: [
        { id: "privacy", label: "Politique de confidentialité", href: "/legal/privacy" },
        { id: "terms", label: "Conditions d'utilisation", href: "/legal/terms" },
        {
          id: "explicit",
          label: "Texte de consentement explicite",
          href: "/legal/explicit-consent",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continuez à utiliser la plateforme",
      description:
        "Découvrez des artistes, inscrivez-vous ou écrivez-nous pour vos demandes relatives à la confidentialité.",
    },
  },

  explicitConsent: {
    slug: "explicit-consent",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "scope",
        heading: "Portée",
        paragraphs: [
          "Ce texte a été préparé pour les traitements nécessitant un consentement explicite au titre de la KVKK. Il ne constitue pas une répétition du texte d'information et n'est pas présenté comme une condition obligatoire pour ouvrir un compte.",
          "Le consentement explicite doit être libre, spécifique à un sujet donné, informé et facultatif. Aucune case pré-cochée par défaut n'est utilisée.",
        ],
      },
      {
        id: "when-needed",
        heading: "Quand il peut être requis",
        paragraphs: [
          "Un consentement explicite n'est pas requis pour chaque opération nécessaire à la fourniture des services essentiels de la plateforme (compte, profil, découverte, demandes de mission, messagerie) ; les bases légales correspondantes sont expliquées dans le texte d'information.",
          "Un consentement explicite distinct peut être recueilli notamment pour le traitement de catégories particulières de données personnelles, le partage facultatif de la visibilité du profil, ou des scénarios de traitement ne relevant pas du périmètre du service obligatoire.",
          "L'autorisation relative au marketing ou aux communications électroniques commerciales n'est pas l'objet de ce texte ; elle est soumise à un processus de consentement distinct et facultatif.",
        ],
      },
      {
        id: "granular",
        heading: "Consentement granulaire et révocable",
        paragraphs: [
          "Lorsqu'un consentement explicite est demandé, il est présenté par sujet. L'utilisateur peut choisir les éléments qu'il souhaite ; le consentement n'est pas considéré comme donné pour les éléments non sélectionnés.",
          "Le consentement peut être retiré ultérieurement. Le retrait du consentement vise à arrêter, pour l'avenir, le traitement fondé sur ce consentement ; il ne supprime pas les obligations légales de conservation.",
        ],
      },
      {
        id: "evidence",
        heading: "Enregistrement et preuve",
        paragraphs: [
          "Lorsqu'un consentement explicite est obtenu, l'horodatage, la version du texte et le périmètre d'autorisation sélectionné peuvent être enregistrés techniquement. Ces enregistrements ont pour seule finalité la conformité et l'audit.",
          `Pour toute question : ${CONTACT}`,
        ],
      },
    ],
    relatedPages: {
      heading: "Pages liées",
      intro: "Textes recommandés à lire avec le consentement explicite :",
      items: [
        { id: "kvkk", label: "Texte d'information KVKK", href: "/legal/kvkk" },
        { id: "privacy", label: "Politique de confidentialité", href: "/legal/privacy" },
        {
          id: "email",
          label: "Communications électroniques commerciales",
          href: "/legal/electronic-communications",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Vous gardez le contrôle",
      description:
        "N'accordez que les autorisations facultatives que vous souhaitez réellement en utilisant la plateforme.",
    },
  },

  electronicCommunications: {
    slug: "electronic-communications",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "purpose",
        heading: "Objectif",
        paragraphs: [
          "Ce texte constitue une information sur une autorisation facultative concernant les communications e-mail à caractère commercial telles que campagnes, offres et annonces.",
          "Il n'est pas requis pour ouvrir un compte ou utiliser la plateforme. Il est désactivé par défaut. Les canaux SMS ou appel téléphonique ne sont pas utilisés actuellement.",
        ],
      },
      {
        id: "channel",
        heading: "Canal",
        paragraphs: [
          `Le canal de communication ne peut être que l'e-mail. Si vous accordez votre autorisation, des informations pourront être envoyées au nom de la marque ${BRAND} depuis ${CONTACT} ou depuis l'infrastructure e-mail autorisée de la plateforme.`,
        ],
      },
      {
        id: "withdrawal",
        heading: "Retrait de l'autorisation",
        paragraphs: [
          "Vous pouvez retirer votre autorisation à tout moment. Le retrait s'effectue via le lien de désabonnement dans l'e-mail, les paramètres du compte (si disponibles), ou " +
            CONTACT +
            ".",
          "Des processus d'inscription et de refus conformes à l'IYS et à la législation applicable sur le commerce électronique seront mis en œuvre une fois les systèmes prêts. Ce texte ne contient aucun numéro IYS ou information d'organisme fictifs.",
        ],
      },
      {
        id: "no-condition",
        heading: "Aucune condition d'utilisation",
        paragraphs: [
          "L'autorisation relative aux communications électroniques commerciales n'est pas une condition préalable à l'inscription, à la connexion ou à l'utilisation des fonctionnalités essentielles. Sans cette autorisation, vous pouvez toujours utiliser les fonctions essentielles de la plateforme.",
        ],
      },
    ],
    relatedPages: {
      heading: "Pages liées",
      intro: "Textes de confidentialité liés :",
      items: [
        { id: "kvkk", label: "Texte d'information KVKK", href: "/legal/kvkk" },
        {
          id: "consent",
          label: "Texte de consentement explicite",
          href: "/legal/explicit-consent",
        },
        { id: "privacy", label: "Politique de confidentialité", href: "/legal/privacy" },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Gérez vos préférences de communication",
      description:
        "Si vous ne souhaitez pas recevoir d'e-mails de campagne, vous n'avez pas besoin d'accorder d'autorisation.",
    },
  },

  distanceSalesPreliminary: {
    slug: "distance-sales-preliminary",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "provider",
        heading: "Informations sur le prestataire de service",
        paragraphs: [
          `Marque du service : ${BRAND}. Prestataire de service / exploitant : ${OPERATOR}. Localisation : ${LOCATION}. Site web : ${SITE}. E-mail : ${CONTACT}.`,
          "Le numéro de téléphone, l'adresse complète, le numéro fiscal, le numéro MERSIS et les informations de registre du commerce ne sont pas publiés à ce stade. Ces informations seront mises à jour sur les pages concernées une fois finalisées.",
        ],
      },
      {
        id: "service",
        heading: "Caractéristiques essentielles du service",
        paragraphs: [
          `${BRAND} est une plateforme numérique offrant la découverte d'artistes, des profils professionnels, des demandes de mission et une infrastructure de messagerie.`,
          "Lorsque des services d'adhésion/abonnement payants sont proposés, ces services sont de nature à accès numérique. Le paiement peut ne pas encore être actif ; lorsque le processus de paiement sera ouvert, le périmètre final sera affiché sur l'écran de paiement.",
        ],
      },
      {
        id: "price",
        heading: "Prix et devise",
        paragraphs: [
          "Lorsqu'un service payant est proposé, le prix, les taxes et les frais supplémentaires éventuels seront clairement affichés sur l'écran de paiement/de commande.",
          "La devise prévue est le USD. Ce texte ne publie pas de montant de prix fixe.",
        ],
      },
      {
        id: "payment",
        heading: "Mode de paiement",
        paragraphs: [
          "Le mode de paiement et les informations relatives au prestataire de paiement seront affichés sur l'écran de paiement. Ce texte n'invente pas le nom de marque d'un prestataire de paiement.",
          "Les informations de paiement sensibles, comme les données de carte, peuvent être traitées par l'infrastructure de paiement concernée.",
        ],
      },
      {
        id: "duration-renewal",
        heading: "Durée et renouvellement",
        paragraphs: [
          "La durée de l'abonnement et le mode de renouvellement dépendent du plan proposé et des conditions affichées lors du paiement.",
          "Un principe de renouvellement automatique peut s'appliquer ; le fonctionnement du renouvellement sera expliqué au moment de l'achat. Cette page ne publie pas d'intervalle de facturation ou de date de renouvellement fixe.",
        ],
      },
      {
        id: "cancel-withdraw",
        heading: "Annulation et rétractation",
        paragraphs: [
          "Les processus d'annulation et de rétractation sont expliqués dans la page relative au processus d'annulation et de rétractation ainsi que dans la politique de remboursement.",
          "Le principe du droit de rétractation de 14 jours dépend de la législation applicable et des exceptions relatives aux services numériques. La rétractation ne signifie pas systématiquement un remboursement automatique.",
        ],
      },
      {
        id: "performance",
        heading: "Exécution du service numérique",
        paragraphs: [
          "L'accès numérique à l'abonnement/adhésion est fourni via le compte une fois l'achat terminé.",
          "Le moment où l'exécution débute et son incidence sur le droit de rétractation seront communiqués à l'utilisateur dans les textes de paiement et de contrat.",
        ],
      },
      {
        id: "complaints",
        heading: "Réclamations et demandes",
        paragraphs: [
          `Pour les réclamations et demandes, contactez : ${CONTACT}. Vous pouvez également utiliser les indications de la page Contact.`,
          "Les processus de résolution des litiges sont soumis à la législation applicable. Ce texte n'ajoute aucun nom de tribunal, limite monétaire ou information d'organisme non confirmés.",
        ],
      },
    ],
    relatedPages: {
      heading: "Pages liées",
      intro: "En complément de cette information préalable :",
      items: [
        {
          id: "agreement",
          label: "Contrat de vente à distance",
          href: "/legal/distance-sales-agreement",
        },
        {
          id: "cancel",
          label: "Annulation et rétractation",
          href: "/legal/cancellation",
        },
        { id: "refund", label: "Politique de remboursement", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Conditions d'abonnement",
          href: "/legal/subscription",
        },
      ],
    },
    finalCta: {
      heading: "Des conditions claires seront affichées à l'ouverture du paiement",
      description:
        "Lorsque le paiement sera publié, le prix, la durée et les détails de paiement apparaîtront à l'écran.",
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
          `Ce contrat définit le cadre général de la relation de vente à distance à établir entre ${OPERATOR}, prestataire du service d'adhésion/abonnement numérique payant ${BRAND}, et l'utilisateur qui achète le service.`,
          `Contact : ${CONTACT}. Localisation : ${LOCATION}.`,
        ],
      },
      {
        id: "subject",
        heading: "Objet",
        paragraphs: [
          "L'objet de ce contrat est l'accès numérique, l'adhésion ou le service d'abonnement payant susceptible d'être proposé via la plateforme.",
          "Ce texte n'est pas lié au paiement. Une fois le paiement actif, les conditions finales prendront effet avec l'écran de paiement et ce contrat.",
        ],
      },
      {
        id: "consistency",
        heading: "Cohérence avec les autres politiques",
        paragraphs: [
          "Ce contrat doit être lu conjointement avec les Conditions d'utilisation, les Conditions d'abonnement, la Politique de remboursement, le processus d'annulation et de rétractation, et les textes de confidentialité/KVKK.",
          "En cas de contradiction, les conditions actuelles affichées lors du paiement pour le service payant concerné, ainsi que les textes de vente à distance, seront prioritaires dans l'interprétation.",
        ],
      },
      {
        id: "user-obligations",
        heading: "Obligations de l'utilisateur",
        paragraphs: [
          "L'utilisateur est tenu de fournir des informations de compte exactes, de protéger ses identifiants d'accès et d'utiliser le service dans le respect de la loi.",
          "Le transfert non autorisé du service à des tiers ou son utilisation abusive sont interdits.",
        ],
      },
      {
        id: "provider-obligations",
        heading: "Obligations du prestataire",
        paragraphs: [
          "Le prestataire vise à fournir l'accès numérique acheté avec une diligence raisonnable. Aucune garantie de service ininterrompu n'est donnée.",
          "En cas de modification importante du service, une information est prévue.",
        ],
      },
      {
        id: "price-payment",
        heading: "Prix et paiement",
        paragraphs: [
          "Le prix et les taxes seront affichés lors du paiement. La devise prévue est le USD. Le prestataire de paiement sera indiqué lors du paiement.",
          "Ce contrat ne publie pas de prix fixe ni le nom de marque du prestataire.",
        ],
      },
      {
        id: "term",
        heading: "Durée, renouvellement, résiliation",
        paragraphs: [
          "La durée et le renouvellement sont soumis au plan choisi et aux conditions affichées lors du paiement. Les règles d'annulation et de rétractation figurent dans les politiques concernées.",
        ],
      },
      {
        id: "liability",
        heading: "Responsabilité",
        paragraphs: [
          "La plateforme est fournie « en l'état ». Dans la mesure permise par le droit applicable, la responsabilité pour les dommages indirects est limitée. Ce texte ne désigne pas de juridiction.",
        ],
      },
    ],
    relatedPages: {
      heading: "Pages liées",
      intro: "À lire avec ce contrat :",
      items: [
        {
          id: "prelim",
          label: "Information préalable",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "terms", label: "Conditions d'utilisation", href: "/legal/terms" },
        {
          id: "subscription",
          label: "Conditions d'abonnement",
          href: "/legal/subscription",
        },
        { id: "refund", label: "Politique de remboursement", href: "/legal/refund" },
      ],
    },
    finalCta: {
      heading: "Informez-vous avant l'achat",
      description:
        "Examinez attentivement les conditions dès l'ouverture de l'écran de paiement.",
    },
  },

  cancellation: {
    slug: "cancellation",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "withdrawal",
        heading: "Principe du droit de rétractation de 14 jours",
        paragraphs: [
          "Dans le cadre de la législation relative à la consommation, le principe du droit de rétractation de 14 jours peut s'appliquer aux contrats à distance.",
          "Pour les services numériques, les exceptions prévues par la législation et le début de l'exécution peuvent affecter le droit de rétractation. La rétractation ne signifie pas systématiquement un remboursement automatique et inconditionnel.",
        ],
      },
      {
        id: "cancel-vs-refund",
        heading: "Différence entre annulation et remboursement",
        paragraphs: [
          "L'annulation d'un abonnement peut signifier l'arrêt des renouvellements futurs. Le remboursement, en revanche, concerne la restitution d'un paiement déjà effectué.",
          "Même en cas de droit d'annulation, le remboursement des frais des périodes passées n'est pas automatique. L'évaluation du remboursement relève de la politique de remboursement.",
        ],
      },
      {
        id: "how-to-cancel",
        heading: "Étapes générales pour annuler",
        paragraphs: [
          "1) Connectez-vous à votre compte.",
          "2) Utilisez l'option d'annulation dans l'espace de gestion des abonnements/plans qui sera mis à disposition lors du lancement des services payants.",
          "3) Si cet espace n'est pas encore disponible, adressez votre demande à " +
            CONTACT +
            " ; une vérification d'identité peut être demandée.",
          "4) Le moment où l'annulation prend effet dépend des conditions du plan. Cette page n'impose pas d'annulation 30 jours à l'avance.",
        ],
      },
      {
        id: "auto-renewal",
        heading: "Arrêt du renouvellement automatique",
        paragraphs: [
          "Si le renouvellement automatique est activé, l'annulation peut arrêter le renouvellement pour la prochaine période. Le moment exact de la prise d'effet sera précisé dans les conditions de paiement et d'abonnement.",
        ],
      },
      {
        id: "contact",
        heading: "Support",
        paragraphs: [
          `Pour les demandes d'annulation/rétractation, contactez : ${CONTACT}. Vous pouvez également utiliser la page Contact.`,
        ],
      },
    ],
    relatedPages: {
      heading: "Pages liées",
      intro: "Textes liés à l'annulation et à la rétractation :",
      items: [
        { id: "refund", label: "Politique de remboursement", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Conditions d'abonnement",
          href: "/legal/subscription",
        },
        {
          id: "prelim",
          label: "Information préalable",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Un processus d'annulation transparent est visé",
      description:
        "Lors du lancement des services payants, les étapes de gestion seront précisées dans le compte.",
    },
  },
};
