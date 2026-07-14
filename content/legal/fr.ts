import type { LegalContentBundle } from "@/content/types";
import { turkeyNoticesFr } from "@/content/legal/notices/fr";

export const legalContent: LegalContentBundle = {
  terms: {
    slug: "terms",
    updatedAt: "2026-07-14",
    acceptance: {
      heading: "Acceptation",
      paragraphs: [
        "En accédant à ART-IST.CLUB ou en l'utilisant, vous confirmez avoir lu, compris et accepté les présentes Conditions d'utilisation.",
        "Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser la plateforme. Créer un compte, vous connecter, publier un profil, envoyer une demande de mission ou échanger des messages constitue une acceptation.",
      ],
    },
    purpose: {
      heading: "Objet de la plateforme",
      paragraphs: [
        "ART-IST.CLUB est une plateforme numérique mondiale qui propose la découverte d'artistes, la création de profils professionnels, la communication et une infrastructure de demandes de mission.",
        "La plateforme n'est ni une agence, ni une société de management, ni un employeur. ART-IST.CLUB n'est pas partie aux contrats conclus entre artistes et clients, ne gère pas les projets et ne garantit ni revenus, ni missions, ni résultats.",
        "Notre objectif est de faciliter la découverte mutuelle des parties et leur mise en relation directe.",
      ],
    },
    accounts: {
      heading: "Comptes",
      paragraphs: [
        "Lors de la création d'un compte, vous devez fournir des informations exactes, à jour et complètes. L'utilisation d'informations trompeuses ou des données d'une autre personne est interdite.",
        "Vous êtes responsable de la sécurité de votre compte. Gardez vos identifiants confidentiels et signalez rapidement tout accès non autorisé.",
        "Vous êtes responsable des activités effectuées via votre compte. Les comptes qui enfreignent ces règles peuvent être suspendus ou fermés.",
      ],
    },
    artistContent: {
      heading: "Contenu des artistes",
      paragraphs: [
        "Vous êtes responsable du contenu que vous partagez dans les profils, galeries et autres espaces. Vous garantissez détenir les droits nécessaires pour publier ce contenu ou avoir obtenu les autorisations requises.",
        "Les atteintes au droit d'auteur, aux marques ainsi que les contenus illégaux, haineux, obscènes ou nuisibles sont interdits.",
        "La plateforme se réserve le droit de retirer ou de restreindre l'accès à tout contenu qui enfreint ces règles.",
      ],
    },
    jobRequests: {
      heading: "Demandes de mission",
      paragraphs: [
        "Les demandes de mission et les fonctions de messagerie aident les artistes et les clients à entrer en contact.",
        "Les accords, le périmètre, les honoraires, les délais et les autres conditions commerciales sont définis directement entre les parties. ART-IST.CLUB n'est pas partie à ces accords et ne conclut aucun contrat au nom de quiconque.",
        "La plateforme ne collecte pas les paiements liés aux accords de mission, ne gère pas les contrats et ne garantit pas le résultat des projets.",
      ],
    },
    prohibited: {
      heading: "Comportements interdits",
      intro:
        "Toute utilisation abusive de la plateforme est interdite, y compris, sans s'y limiter, les comportements suivants :",
      items: [
        "Créer des comptes faux, trompeurs ou non autorisés",
        "Fraude, usurpation d'identité ou manipulation financière",
        "Spam, messages non sollicités en masse ou communications harcelantes",
        "Harcèlement, menaces, discrimination ou comportement haineux",
        "Publier du contenu illégal ou encourager des activités illégales",
        "Se faire passer pour une autre personne ou organisation sans autorisation",
        "Abus technique visant les systèmes, les dispositifs de sécurité ou d'autres utilisateurs",
      ],
    },
    intellectualProperty: {
      heading: "Propriété intellectuelle",
      paragraphs: [
        "La marque ART-IST.CLUB, les logos, le design, le logiciel, l'interface et les éléments appartenant à la plateforme sont protégés par des droits de propriété intellectuelle.",
        "Les utilisateurs ne peuvent pas copier, modifier, distribuer ou exploiter commercialement la marque, le design ou le logiciel de la plateforme sans autorisation.",
        "Les droits sur le contenu créé par les utilisateurs restent la propriété de l'utilisateur, dans la mesure prévue par la loi et les pages juridiques associées ; la plateforme ne reçoit que les autorisations nécessaires au fonctionnement du service.",
      ],
    },
    serviceChanges: {
      heading: "Évolutions du service",
      paragraphs: [
        "ART-IST.CLUB se réserve le droit de mettre à jour, modifier, suspendre temporairement ou retirer des fonctionnalités.",
        "Ces changements peuvent être motivés par le développement du produit, la sécurité, la performance ou des exigences légales. Un préavis raisonnable est envisagé pour les changements substantiels, mais un service ininterrompu ou inchangé n'est pas garanti.",
      ],
    },
    liability: {
      heading: "Limitation de responsabilité",
      paragraphs: [
        "La plateforme est fournie « en l'état ». ART-IST.CLUB ne garantit pas un service ininterrompu, sans erreur ou continuellement disponible.",
        "La plateforme ne garantit ni revenus, ni missions, ni résultats liés aux accords, paiements ou prestations entre artistes et clients.",
        "Dans la mesure permise par le droit applicable, la responsabilité pour les dommages indirects, accessoires ou consécutifs est limitée. Le présent texte n'attribue aucune juridiction ou tribunal spécifique.",
      ],
    },
    termination: {
      heading: "Résiliation de compte",
      paragraphs: [
        "Les comptes qui enfreignent les présentes conditions ou les politiques de la plateforme peuvent être suspendus ou fermés.",
        "L'accès peut être restreint pour des raisons de sécurité, en cas d'abus, de suspicion de fraude ou d'exigences légales.",
        "Si vous souhaitez fermer votre compte, suivez les indications de la page Contact.",
      ],
    },
    updates: {
      heading: "Mises à jour",
      paragraphs: [
        "Les présentes Conditions d'utilisation peuvent être mises à jour au fil du temps. Une version mise à jour prend effet dès sa publication sur cette page.",
        "La poursuite de l'utilisation de la plateforme après une mise à jour signifie que vous acceptez les conditions révisées. Une notification aux utilisateurs est envisagée pour les changements substantiels.",
      ],
    },
    relatedPages: {
      heading: "Pages associées",
      intro: "Ces pages peuvent être consultées en complément des Conditions d'utilisation.",
      items: [
        {
          id: "privacy",
          label: "Politique de confidentialité",
          href: "/legal/privacy",
        },
        {
          id: "cookies",
          label: "Politique relative aux cookies",
          href: "/legal/cookies",
        },
        {
          id: "refund",
          label: "Politique de remboursement",
          href: "/legal/refund",
        },
        {
          id: "subscription",
          label: "Conditions d'abonnement",
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
      heading: "Continuez à explorer la plateforme",
      description:
        "Découvrez des artistes, créez un compte ou contactez-nous via la page Contact.",
    },
  },
  privacy: {
    slug: "privacy",
    updatedAt: "2026-07-14",
    scope: {
      heading: "Champ d'application",
      paragraphs: [
        "La présente Politique de confidentialité explique comment les données personnelles sont collectées, utilisées, stockées et protégées lorsque vous utilisez la plateforme ART-IST.CLUB.",
        "Elle couvre la création de compte, la gestion du profil, la découverte d'artistes, les demandes de mission, la messagerie et les fonctionnalités associées de la plateforme. Elle vise à fournir une information claire et professionnelle, conforme à des principes de confidentialité largement reconnus.",
        "Ce texte n'invente aucune information non vérifiée relative à l'identité de l'entreprise, à une adresse, à un numéro de téléphone ou à un délégué à la protection des données nommément désigné. Ces informations n'apparaissent que lorsqu'elles sont publiées sous une forme vérifiée sur les pages concernées.",
      ],
    },
    dataCollected: {
      heading: "Informations que nous collectons",
      paragraphs: [
        "Informations de compte : données d'authentification fournies lors de l'inscription et de la connexion (par exemple l'adresse e-mail et le type de compte).",
        "Informations de profil : nom affiché, biographie, catégories, localisation, langues, images, vidéos et autres informations professionnelles similaires que vous choisissez de partager.",
        "Données d'utilisation et techniques : informations techniques relatives aux sessions, aux appareils ou aux journaux nécessaires au fonctionnement sécurisé de la plateforme.",
        "Contenu des communications et des demandes : informations partagées dans les demandes de mission, les messages et les parcours d'assistance.",
        "Les détails relatifs aux cookies et aux technologies similaires ne sont pas répétés ici ; consultez la Politique relative aux cookies.",
      ],
    },
    dataUse: {
      heading: "Comment nous utilisons les informations",
      paragraphs: [
        "Nous utilisons les données pour créer et gérer les comptes, présenter les profils, faire fonctionner la découverte, permettre les demandes de mission et la messagerie, protéger la sécurité et améliorer le service.",
        "Les données peuvent également être traitées pour le fonctionnement légitime de la plateforme, la satisfaction des demandes des utilisateurs, la prévention des abus et le respect des obligations légales.",
        "ART-IST.CLUB n'étant pas partie aux accords commerciaux conclus entre artistes et clients, les utilisateurs restent responsables des informations qu'ils se communiquent directement entre eux.",
      ],
    },
    accountProfile: {
      heading: "Données de compte et de profil",
      paragraphs: [
        "Les données de compte sont traitées à des fins d'authentification et de contrôle d'accès. Lorsque vous rendez un profil visible, les informations professionnelles que vous choisissez peuvent être visibles par d'autres utilisateurs.",
        "La visibilité du profil dépend du statut de publication, du type de compte et des paramètres de la plateforme. Évitez de partager des informations inexactes ou trompeuses.",
        "Vous êtes responsable du contenu de votre profil et ne devez pas publier de contenu portant atteinte aux droits d'auteur ou à la vie privée.",
      ],
    },
    jobsMessaging: {
      heading: "Demandes de mission et messagerie",
      paragraphs: [
        "Les demandes de mission et les messages sont traités pour mettre en relation les parties concernées et sont associés aux comptes correspondants.",
        "Le contenu des messages et des demandes peut être conservé dans la mesure nécessaire au fonctionnement du service et à l'examen des questions de sécurité ou d'abus.",
        "La plateforme ne négocie aucun accord commercial au nom de quiconque. Les utilisateurs restent responsables des détails de projet qu'ils partagent et des résultats de leurs accords.",
      ],
    },
    security: {
      heading: "Sécurité",
      paragraphs: [
        "L'authentification, les contrôles d'accès et des mesures techniques et organisationnelles appropriées sont appliqués pour protéger les comptes et les données.",
        "Aucun système ne peut garantir une sécurité absolue. Si vous suspectez un accès non autorisé, sécurisez votre compte et suivez les indications de la page Contact.",
        "Les données traitées par l'intermédiaire de prestataires d'infrastructure sont gérées avec des mesures de protection adaptées au fonctionnement sécurisé du service.",
      ],
    },
    userRights: {
      heading: "Vos droits",
      paragraphs: [
        "Selon le droit applicable, vous pouvez disposer de droits tels que l'accès, la rectification, la suppression, la limitation du traitement, l'opposition ou la portabilité des données.",
        "Utilisez les indications de la page Contact pour soumettre vos demandes relatives à la confidentialité. Jusqu'à la publication d'une adresse e-mail publique vérifiée ou d'un contact DPO, la procédure suit les indications de la plateforme.",
        "Nous pouvons demander des informations complémentaires pour vérifier votre identité ou clarifier votre demande. Le délai de réponse peut varier selon le type de demande et les règles applicables.",
      ],
    },
    retention: {
      heading: "Conservation des données",
      paragraphs: [
        "Les données peuvent être conservées aussi longtemps que nécessaire pour faire fonctionner le compte, fournir le service, protéger la sécurité, traiter les litiges et respecter les obligations légales de conservation.",
        "Lorsqu'un compte est fermé, certaines données peuvent être supprimées ou anonymisées ; des enregistrements limités peuvent être conservés plus longtemps lorsque la loi ou des besoins de sécurité légitimes l'exigent.",
        "Les délais exacts de suppression peuvent varier selon le produit et les exigences légales ; cette politique ne s'engage pas sur un nombre de jours fixe.",
      ],
    },
    thirdParties: {
      heading: "Services tiers",
      paragraphs: [
        "La plateforme peut s'appuyer sur des prestataires d'infrastructure de confiance pour l'authentification, l'hébergement, les bases de données, le stockage et des services techniques similaires.",
        "Lorsque des options de connexion OAuth ou similaires sont utilisées, le fournisseur d'identité concerné peut appliquer ses propres pratiques de confidentialité. Cette politique ne couvre pas l'ensemble des pratiques de ces fournisseurs.",
        "Les tiers ne traitent les données que dans la mesure nécessaire au fonctionnement du service. Cette section ne mentionne aucun prestataire de paiement ni aucun nom de partenaire non vérifié.",
      ],
    },
    children: {
      heading: "Confidentialité des enfants",
      paragraphs: [
        "ART-IST.CLUB n'est pas conçu comme un service destiné aux enfants. Les personnes n'ayant pas atteint l'âge légal minimum ne doivent pas utiliser la plateforme.",
        "Lorsque le consentement d'un parent ou d'un tuteur est requis par les règles applicables, ces règles s'appliquent. Si des données d'enfants sont collectées par erreur, une suppression appropriée est prévue dès leur identification.",
      ],
    },
    updates: {
      heading: "Mises à jour de la politique",
      paragraphs: [
        "Cette Politique de confidentialité peut être mise à jour au fil du temps. Une version mise à jour prend effet dès sa publication sur cette page.",
        "Une notification aux utilisateurs est envisagée pour les changements substantiels. La poursuite de l'utilisation de la plateforme après une mise à jour signifie que vous acceptez la politique révisée.",
      ],
    },
    relatedPages: {
      heading: "Pages associées",
      intro:
        "Vous pouvez consulter ces pages associées en complément de la Politique de confidentialité.",
      items: [
        { id: "terms", label: "Conditions d'utilisation", href: "/legal/terms" },
        {
          id: "cookies",
          label: "Politique relative aux cookies",
          href: "/legal/cookies",
        },
        {
          id: "refund",
          label: "Politique de remboursement",
          href: "/legal/refund",
        },
        {
          id: "subscription",
          label: "Conditions d'abonnement",
          href: "/legal/subscription",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continuez à explorer en toute confiance",
      description:
        "Découvrez des artistes, créez un compte ou contactez-nous pour toute demande relative à la confidentialité.",
    },
  },
  cookies: {
    slug: "cookies",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Objet de la présente Politique relative aux cookies",
      paragraphs: [
        "Cette Politique relative aux cookies explique comment ART-IST.CLUB utilise les cookies et technologies similaires.",
        "Son objectif est de soutenir le fonctionnement sécurisé de la plateforme, de conserver les paramètres d'expérience essentiels tels que la préférence de langue, et d'informer clairement les utilisateurs. Lisez cette politique avec la Politique de confidentialité.",
        "Seules les catégories générales correspondant à l'usage actuel de la plateforme sont décrites ici. Aucun réseau publicitaire, produit d'analyse ou nom de fournisseur marketing non utilisé n'est inventé.",
      ],
    },
    whatAreCookies: {
      heading: "Que sont les cookies ?",
      paragraphs: [
        "Les cookies sont de petits fichiers texte qu'un site web place sur votre navigateur. Des technologies similaires (par exemple le stockage local) peuvent également conserver des informations de préférence ou de session sur votre appareil.",
        "Les cookies peuvent prendre en charge des fonctions essentielles telles que la continuité de session, la sécurité et la préférence de langue. Certains cookies sont supprimés à la fermeture du navigateur ; d'autres peuvent rester plus longtemps.",
      ],
    },
    categories: {
      heading: "Catégories de cookies utilisées",
      intro:
        "Les catégories ci-dessous sont regroupées selon la finalité technologique. Chaque statut reflète la pratique actuelle de la plateforme.",
      items: [
        {
          id: "essential",
          title: "Essentiels",
          status: "Actif",
          description:
            "Cookies ou technologies similaires pouvant être nécessaires aux fonctions essentielles de sécurité, de session et d'authentification. Sans eux, la connexion et la protection du compte pourraient ne pas fonctionner correctement.",
        },
        {
          id: "functional",
          title: "Fonctionnels",
          status: "Limité / selon les besoins",
          description:
            "Technologies fonctionnelles qui aident certaines fonctionnalités à fonctionner correctement. Elles ne sont utilisées que dans la mesure nécessaire au fonctionnement du service et ne constituent pas un réseau publicitaire distinct.",
        },
        {
          id: "performance",
          title: "Performance / Analyse",
          status: "Aucune analyse tierce active",
          description:
            "ART-IST.CLUB n'utilise actuellement aucun fournisseur tiers distinct de cookies de performance ou d'analyse. Des journaux techniques internes limités peuvent exister pour la sécurité et l'exploitation ; il ne s'agit pas de mesure publicitaire.",
        },
        {
          id: "preference",
          title: "Préférence",
          status: "Actif",
          description:
            "Utilisés pour mémoriser des paramètres d'expérience tels que la préférence de langue. Par exemple, le cookie de la plateforme qui enregistre le choix de langue afin que les pages se chargent de manière cohérente dans la langue sélectionnée.",
        },
        {
          id: "marketing",
          title: "Marketing (futur)",
          status: "Non actif",
          description:
            "Les cookies de publicité, de reciblage ou de mesure marketing ne sont actuellement pas actifs. Si cette catégorie est introduite ultérieurement, cette politique sera mise à jour — elle n'est pas présentée comme active aujourd'hui.",
        },
      ],
    },
    browserControls: {
      heading: "Gérer les cookies dans votre navigateur",
      paragraphs: [
        "La plupart des navigateurs vous permettent de consulter, de bloquer ou de supprimer les cookies. Les réglages varient selon le navigateur et se trouvent généralement dans les paramètres de confidentialité ou de sécurité.",
        "Bloquer les cookies essentiels peut perturber la connexion, la cohérence linguistique ou d'autres fonctionnalités essentielles. Effacer les cookies de préférence peut nécessiter de redéfinir la langue.",
        "Les réglages du navigateur affectent votre expérience sur la plateforme ; pour les droits relatifs à la confidentialité et les demandes de données, consultez les indications de la Politique de confidentialité et de la page Contact.",
      ],
    },
    thirdParties: {
      heading: "Services tiers",
      paragraphs: [
        "La plateforme peut s'appuyer sur des prestataires techniques pour l'authentification, l'hébergement et une infrastructure similaire. Ces prestataires peuvent utiliser des cookies ou des technologies similaires nécessaires au fonctionnement du service.",
        "Cette politique ne mentionne aucun réseau publicitaire, tableau de bord d'analyse ou pixel marketing non utilisé. Lorsque des options de connexion OAuth ou similaires sont utilisées, les pratiques propres du fournisseur d'identité concerné peuvent également s'appliquer.",
        "Pour le cadre plus large du traitement des données personnelles, consultez la Politique de confidentialité.",
      ],
    },
    updates: {
      heading: "Mises à jour de la politique",
      paragraphs: [
        "Cette Politique relative aux cookies peut être mise à jour au fil du temps. Une version mise à jour prend effet dès sa publication sur cette page.",
        "Si de nouvelles catégories de cookies ou pratiques de tiers sont introduites, la politique sera mise à jour en conséquence.",
      ],
    },
    relatedPages: {
      heading: "Pages associées",
      intro: "Vous pouvez consulter ces pages en complément de la Politique relative aux cookies.",
      items: [
        { id: "privacy", label: "Politique de confidentialité", href: "/legal/privacy" },
        { id: "terms", label: "Conditions d'utilisation", href: "/legal/terms" },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Poursuivez avec des informations claires",
      description:
        "Découvrez la plateforme, créez un compte ou contactez-nous pour toute question.",
    },
  },
  refund: {
    slug: "refund",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Objet de cette politique",
      paragraphs: [
        "Cette Politique de remboursement explique l'approche générale d'ART-IST.CLUB en matière de remboursement pour les services d'adhésion et d'abonnement payants qui pourraient être proposés à l'avenir.",
        "Son objectif est d'aider les utilisateurs à comprendre comment les questions de remboursement seront traitées lorsqu'un service payant sera proposé. Ce texte ne crée ni un droit automatique au remboursement ni une garantie dans un délai fixe.",
      ],
    },
    scope: {
      heading: "Champ d'application",
      paragraphs: [
        "Cette politique est conçue pour s'appliquer aux adhésions payantes, aux abonnements ou à des services d'accès numérique similaires susceptibles d'être proposés sur la plateforme à l'avenir.",
        "Un parcours de paiement actif sur la plateforme n'est pas garanti sur cette page. Lorsqu'un service payant sera lancé, les conditions correspondantes seront précisées via le parcours d'achat et la page Conditions d'abonnement.",
        "Les paiements liés aux projets entre artistes et clients ne relèvent pas de cette politique, car ART-IST.CLUB n'est pas partie à ces accords.",
      ],
    },
    purchaseProcess: {
      heading: "Processus d'achat",
      paragraphs: [
        "Lorsqu'une adhésion ou un abonnement payant est proposé, il est prévu de présenter les conditions correspondantes avant la finalisation du paiement.",
        "Les utilisateurs sont responsables de la lecture des conditions présentées lors de l'achat. Ne finalisez pas le paiement si vous n'acceptez pas ces conditions.",
        "Les conditions présentées doivent être lues conjointement avec les Conditions d'abonnement, les Conditions d'utilisation et la présente Politique de remboursement.",
      ],
    },
    evaluation: {
      heading: "Comment les demandes de remboursement sont évaluées",
      paragraphs: [
        "Les demandes de remboursement peuvent être examinées dans leur propre contexte, en fonction de la nature du service, des conditions d'achat et des règles applicables.",
        "Il n'existe aucun engagement selon lequel chaque demande sera automatiquement approuvée ou résolue dans un délai fixe. Les résultats peuvent varier selon les circonstances.",
        "Les indications pour soumettre une demande seront précisées via le parcours d'achat concerné et la page Contact lorsque les services payants seront disponibles.",
      ],
    },
    cancellation: {
      heading: "Annulation de l'abonnement",
      paragraphs: [
        "Annuler un abonnement n'équivaut pas à obtenir un remboursement. L'annulation peut arrêter les futurs renouvellements ; un remboursement concerne le remboursement d'un paiement déjà effectué.",
        "Même lorsqu'une option d'annulation existe, les remboursements pour les périodes passées ne surviennent pas automatiquement. Les remboursements sont évalués dans le cadre de cette politique et des conditions présentées lors de l'achat.",
        "La distinction entre annulation et remboursement doit être lue conjointement avec la page Conditions d'abonnement.",
      ],
    },
    exceptions: {
      heading: "Exceptions",
      paragraphs: [
        "Certaines demandes peuvent être évaluées différemment en fonction des exigences légales et des conditions applicables.",
        "Cette page ne recense pas tous les scénarios possibles. L'évaluation suit les règles applicables, la nature du service et les conditions présentées lors de l'achat.",
        "Des restrictions d'accès peuvent s'appliquer en cas d'abus, de suspicion de fraude ou de violation des politiques, et ces situations peuvent affecter l'évaluation du remboursement.",
      ],
    },
    updates: {
      heading: "Mises à jour de la politique",
      paragraphs: [
        "Cette Politique de remboursement peut être mise à jour au fil du temps. Une version mise à jour prend effet dès sa publication sur cette page.",
        "Au fur et à mesure du lancement des services payants ou de la clarification des processus, la politique sera mise à jour en conséquence. Une notification aux utilisateurs est envisagée pour les changements substantiels.",
      ],
    },
    relatedPages: {
      heading: "Pages associées",
      intro:
        "Vous pouvez consulter ces pages associées en complément de la Politique de remboursement.",
      items: [
        {
          id: "subscription",
          label: "Conditions d'abonnement",
          href: "/legal/subscription",
        },
        { id: "terms", label: "Conditions d'utilisation", href: "/legal/terms" },
        {
          id: "privacy",
          label: "Politique de confidentialité",
          href: "/legal/privacy",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continuez à explorer la plateforme",
      description:
        "Découvrez des artistes, créez un compte ou contactez-nous pour toute question.",
    },
  },
  subscription: {
    slug: "subscription",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Objet des présentes Conditions d'abonnement",
      paragraphs: [
        "Les présentes Conditions d'abonnement expliquent les principes de fonctionnement généraux des services d'adhésion et d'abonnement payants qui pourraient être proposés sur ART-IST.CLUB à l'avenir.",
        "L'objectif est d'aider les utilisateurs à comprendre le choix des formules, le démarrage, le renouvellement et l'annulation dans un cadre clair et professionnel. Cette page ne mentionne aucun prix, aucune devise, aucune campagne, aucune période d'essai ni aucun nom de prestataire de paiement.",
        "Lorsqu'un service payant sera lancé, les conditions présentées lors de l'achat devront être lues avec les Conditions d'utilisation, la Politique de confidentialité et la Politique de remboursement.",
      ],
    },
    membershipPlans: {
      heading: "Formules d'adhésion",
      paragraphs: [
        "ART-IST.CLUB pourra proposer à l'avenir des formules d'adhésion ou d'abonnement offrant différents niveaux de fonctionnalités en complément de l'accès de base.",
        "Les noms, le contenu et l'étendue des formules ne sont valables que lorsqu'ils sont publiés sur la plateforme. Cette page ne s'engage sur aucune offre, aucun prix ni aucune campagne en particulier.",
        "Si des programmes spéciaux tels que Founding Artist existent, leurs conditions sont expliquées séparément sur les pages de campagne ou d'adhésion correspondantes.",
      ],
    },
    start: {
      heading: "Démarrage de l'abonnement",
      paragraphs: [
        "Lorsqu'un abonnement ou une adhésion payante est proposé, l'accès débute une fois l'étape d'achat terminée et les conditions correspondantes acceptées.",
        "Le moment du démarrage dépend de la formule choisie, du type de compte et des conditions présentées lors de l'achat. Ce texte ne définit ni intervalle de facturation fixe ni date de démarrage précise.",
        "La présentation des conditions correspondantes avant la finalisation du paiement est la pratique prévue.",
      ],
    },
    renewal: {
      heading: "Principe de renouvellement",
      paragraphs: [
        "Dans un modèle d'abonnement, l'accès peut être conçu pour se renouveler sauf indication contraire. Le fonctionnement du renouvellement sera expliqué dans le parcours d'achat et les conditions correspondantes lorsqu'une formule sera proposée.",
        "Cette page ne publie ni dates de renouvellement automatique, ni intervalles de facturation, ni montants de frais. Les modalités de renouvellement suivent uniquement les conditions actuellement publiées sur la plateforme.",
        "Les utilisateurs sont responsables de la vérification du statut de leur formule via les paramètres du compte ou l'interface d'achat avant le renouvellement.",
      ],
    },
    cancellation: {
      heading: "Annulation de l'abonnement",
      paragraphs: [
        "Lorsqu'un abonnement payant est proposé, les utilisateurs sont censés avoir accès à des options d'annulation. L'annulation peut mettre fin aux renouvellements futurs.",
        "L'annulation n'équivaut pas à un remboursement. Les questions de remboursement sont évaluées selon la Politique de remboursement.",
        "Le moment où l'annulation prend effet dépend des conditions présentées au moment où la formule est proposée. Cette page ne crée ni fenêtre d'annulation fixe ni remboursement garanti.",
      ],
    },
    accountResponsibility: {
      heading: "Responsabilité liée au compte",
      paragraphs: [
        "L'accès à l'abonnement ou à l'adhésion est géré par le biais de votre compte. Vous êtes responsable de l'exactitude et de la sécurité des informations de votre compte.",
        "Les actions relatives à l'abonnement effectuées via votre compte sont liées à la propriété du compte. Conservez vos identifiants confidentiels afin d'éviter toute utilisation non autorisée.",
        "L'accès à l'abonnement peut être suspendu ou résilié en cas de violation des règles, d'abus ou de risque pour la sécurité.",
      ],
    },
    serviceChanges: {
      heading: "Modifications du service",
      paragraphs: [
        "ART-IST.CLUB se réserve le droit de mettre à jour, de modifier ou de supprimer les fonctionnalités d'adhésion, les structures de formules ou les expériences d'abonnement.",
        "Un préavis est prévu pour les changements substantiels. Les modifications peuvent être apportées pour des raisons de développement produit, de sécurité, de performance ou d'exigences légales.",
        "Les présentes Conditions d'abonnement peuvent être mises à jour au fil du temps. Une version mise à jour prend effet dès sa publication sur cette page.",
      ],
    },
    relatedPages: {
      heading: "Pages associées",
      intro: "Ces pages peuvent être consultées avec les Conditions d'abonnement.",
      items: [
        { id: "terms", label: "Conditions d'utilisation", href: "/legal/terms" },
        {
          id: "privacy",
          label: "Politique de confidentialité",
          href: "/legal/privacy",
        },
        {
          id: "refund",
          label: "Politique de remboursement",
          href: "/legal/refund",
        },
        { id: "contact", label: "Contact", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continuez à explorer la plateforme",
      description:
        "Découvrez des artistes, créez un compte ou contactez-nous pour toute question.",
    },
  },
  company: {
    slug: "company",
    updatedAt: "2026-07-14",
    companyInformation: {
      heading: "Informations sur l'entreprise",
      paragraphs: [
        "ART-IST.CLUB exploite une plateforme numérique mondiale de découverte d’artistes et de connexions professionnelles.",
        "Exploitant / responsable du traitement : Atilla Demirkıran.",
        "Localisation : İzmir, Türkiye.",
        "E-mail de contact : info@art-ist.club",
        "Site web : art-ist.club",
        "Cette page ne publie pas de numéro de téléphone, d’adresse postale complète, de numéro fiscal, d’identité nationale, de MERSIS ni de registre du commerce. Seules les informations vérifiées et approuvées à la publication figurent ici.",
      ],
    },
    legalTransparency: {
      heading: "Transparence juridique",
      paragraphs: [
        "ART-IST.CLUB vise à communiquer des informations officielles aux utilisateurs, aux partenaires et aux équipes de vérification, sous une forme actuelle et vérifiée.",
        "La transparence ne signifie pas la publication d'informations d'identité provisoires ou inventées. Elle signifie la divulgation claire de données vérifiées lorsqu'elles sont disponibles.",
        "L'objet de la plateforme et son fonctionnement sont expliqués sur la page À propos ; les indications de contact sont disponibles sur la page Contact.",
      ],
    },
    corporateCompliance: {
      heading: "Conformité de l'entreprise",
      paragraphs: [
        "La plateforme est conçue et exploitée dans le but de respecter les obligations légales applicables. Les Conditions d'utilisation, la Politique de confidentialité et les pages juridiques associées font partie de cette démarche.",
        "Un engagement de conformité ne signifie pas remplir des champs d'identité d'entreprise inachevés avec des données non vérifiées. Les informations officielles de constitution apparaîtront ici lorsqu'elles seront disponibles.",
        "Les cadres généraux relatifs aux paiements, aux abonnements et aux remboursements figurent sur les pages juridiques associées ; cette page ne contient aucune information de facturation commerciale ni d'immatriculation.",
      ],
    },
    futureUpdates: {
      heading: "Mises à jour futures",
      paragraphs: [
        "Cette page sera mise à jour à mesure que les informations de l'entreprise seront finalisées. Une version mise à jour prend effet dès sa publication ici.",
        "Les informations publiées ne proviendront que de documents d'entreprise vérifiés. Une notification aux utilisateurs est envisagée pour les mises à jour substantielles.",
        "Cette page ne contient aucune valeur provisoire ou d'exemple pour les champs d'identité officielle.",
      ],
    },
    relatedPages: {
      heading: "Pages associées",
      intro: "Vous pouvez consulter ces pages pour le contexte juridique et institutionnel.",
      items: [
        { id: "about", label: "À propos", href: "/about" },
        { id: "contact", label: "Contact", href: "/contact" },
        { id: "terms", label: "Conditions d'utilisation", href: "/legal/terms" },
        {
          id: "privacy",
          label: "Politique de confidentialité",
          href: "/legal/privacy",
        },
      ],
    },
    finalCta: {
      heading: "Continuez à explorer la plateforme",
      description:
        "Découvrez des artistes, créez un compte ou contactez-nous pour toute question.",
    },
  },
  ...turkeyNoticesFr,
};
