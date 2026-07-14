import type { LegalNoticePageContent } from "@/content/types";

const CONTACT = "info@art-ist.club";
const OPERATOR = "Atilla Demirkiran";
const LOCATION = "Izmir, Türkei";
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

export const turkeyNoticesDe: TurkeyNotices = {
  kvkk: {
    slug: "kvkk",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "controller",
        heading: "Identität des Verantwortlichen",
        paragraphs: [
          `Verantwortlicher für Ihre personenbezogenen Daten auf der Plattform ${BRAND} ist ${OPERATOR}. Markenname: ${BRAND}. Standort: ${LOCATION}. Website: ${SITE}.`,
          `Für Anfragen und Kontakt nutzen Sie diese E-Mail-Adresse: ${CONTACT}. Dieser Hinweis veröffentlicht keine Telefonnummer, vollständige Adresse, Steuernummer, nationale Identifikationsnummer, MERSIS-Nummer oder Handelsregisterangaben.`,
        ],
      },
      {
        id: "categories",
        heading: "Kategorien der verarbeiteten personenbezogenen Daten",
        paragraphs: [
          "Identitäts- und Kontodaten: Name/Anzeigename, E-Mail, Kontotyp und mit der Authentifizierung verbundene Aufzeichnungen.",
          "Profil- und Inhaltsdaten: Biografie, Kategorie, Sprache, Standortpräferenzen, Fotos, Videos, Galerie und ähnliche professionelle Inhalte.",
          "Transaktions- und Kommunikationsdaten: Auftragsanfragen, Nachrichteninhalte, Favoriten und Aufzeichnungen von Interaktionen innerhalb der Plattform.",
          "Technische und Sicherheitsdaten: Sitzungsinformationen, Geräte-/Browserinformationen, Protokolldaten und technische Daten im Zusammenhang mit Sicherheitsprüfungen.",
          "Sofern kostenpflichtige Dienste angeboten werden: Abonnement-/Transaktionsstatus und zwingende Transaktionsaufzeichnungen im Zusammenhang mit der Abrechnung. Der Zahlungsanbieter kann Kartendaten auf seiner eigenen Infrastruktur verarbeiten; sensible Zahlungsdaten wie Kartennummern werden nicht auf der Plattform gespeichert.",
        ],
      },
      {
        id: "purposes",
        heading: "Zwecke der Verarbeitung",
        paragraphs: [
          "Erstellung und Verwaltung von Konten, Authentifizierung sowie Bereitstellung des Profil- und Entdeckungserlebnisses.",
          "Betrieb der Infrastruktur für Auftragsanfragen und Nachrichten sowie Bereitstellung von Favoriten und ähnlichen Nutzerfunktionen.",
          "Sicherheit, Verhinderung von Missbrauch, Fehlerbehebung und Weiterentwicklung des Dienstes.",
          "Erfüllung gesetzlicher Verpflichtungen; Führung von Abonnement-/Transaktionsaufzeichnungen, wenn kostenpflichtige Dienste angeboten werden.",
          "Verarbeitungen auf Grundlage einer ausdrücklichen Einwilligung erfolgen nur, wenn eine gesonderte Einwilligung eingeholt wurde, und beschränken sich auf deren Umfang.",
        ],
      },
      {
        id: "legal-bases",
        heading: "Rechtsgrundlagen",
        paragraphs: [
          "Im Rahmen von KVKK Art. 5 werden Rechtsgrundlagen wie der Abschluss oder die Erfüllung eines Vertrags, eine gesetzliche Verpflichtung, ein berechtigtes Interesse (Sicherheit, Betrieb des Dienstes) und, soweit erforderlich, eine ausdrückliche Einwilligung berücksichtigt.",
          "Dieser Datenschutzhinweis ist keine Einwilligungserklärung. Die Eröffnung eines Kontos wird nicht an eine Zustimmung zu diesem Hinweis als Bedingung geknüpft; der Text dient ausschließlich der Information der Nutzer.",
        ],
      },
      {
        id: "recipients",
        heading: "Kategorien von Empfängern, an die Daten übermittelt werden können",
        paragraphs: [
          "Hosting-, Authentifizierungs-, Datenbank-, Speicher- und ähnliche Infrastrukturanbieter, im für den Betrieb des Dienstes erforderlichen Umfang.",
          "Autorisierte Geschäftspartner, die an Zahlungs- und Abrechnungsprozessen für kostenpflichtige Dienste beteiligt sind, nur im erforderlichen Umfang.",
          "Gesetzlich befugte öffentliche Stellen und Behörden (in zwingenden Fällen).",
          "Sollte eine grenzüberschreitende Übermittlung erfolgen, werden Garantien in Einklang mit den geltenden KVKK-Regeln geprüft. Dieser Hinweis erfindet kein bestimmtes Land oder keinen bestimmten Serverstandort.",
        ],
      },
      {
        id: "collection",
        heading: "Art der Erhebung",
        paragraphs: [
          "Daten werden elektronisch erhoben, unter anderem über Registrierungs-/Anmeldeformulare, Schritte zur Profilerstellung, Schnittstellen für Auftragsanfragen und Nachrichten, Favoritenfunktionen und technische Protokolle.",
          "Bei Verwendung von OAuth oder einer ähnlichen Anmeldemethode können die für den Betrieb des Dienstes erforderlichen Informationen vom Identitätsanbieter bezogen werden.",
        ],
      },
      {
        id: "retention",
        heading: "Ansatz zur Aufbewahrung",
        paragraphs: [
          "Daten können so lange aufbewahrt werden, wie es für die Kontoaktivität, die Erbringung des Dienstes, die Sicherheit, Streitigkeiten und gesetzliche Aufbewahrungspflichten erforderlich ist.",
          "Bei Schließung eines Kontos können bestimmte Daten gelöscht oder anonymisiert werden; zwingende Aufzeichnungen können länger aufbewahrt werden. Dieser Hinweis verpflichtet sich nicht auf eine feste Anzahl von Tagen.",
        ],
      },
      {
        id: "rights",
        heading: "Rechte der betroffenen Person",
        paragraphs: [
          "Im Rahmen von KVKK Art. 11 können Sie unter anderem folgende Rechte ausüben: zu erfahren, ob Ihre personenbezogenen Daten verarbeitet werden, Informationen anzufordern, eine Berichtigung zu verlangen, eine Löschung/Vernichtung zu verlangen, die Verarbeitung einzuschränken, Widerspruch einzulegen sowie weitere gesetzlich vorgesehene Rechte.",
          "Für Rechteanfragen nutzen Sie diesen E-Mail-Kanal: " + CONTACT,
        ],
      },
      {
        id: "application",
        heading: "Vorgehen bei einer Anfrage",
        paragraphs: [
          `Sie können Ihre Anfragen an ${CONTACT} senden. Zur Identitätsprüfung und zur Klärung Ihrer Anfrage können zusätzliche Informationen angefordert werden.`,
          "Die Antwortzeit kann je nach geltenden Vorschriften und Art der Anfrage variieren. Dieser Hinweis garantiert keine feste Antwortzeit.",
        ],
      },
    ],
    relatedPages: {
      heading: "Verwandte Seiten",
      intro: "Seiten, die Sie zusammen mit diesem Hinweis lesen können:",
      items: [
        { id: "privacy", label: "Datenschutzerklärung", href: "/legal/privacy" },
        { id: "terms", label: "Nutzungsbedingungen", href: "/legal/terms" },
        {
          id: "explicit",
          label: "Hinweis zur ausdrücklichen Einwilligung",
          href: "/legal/explicit-consent",
        },
        { id: "contact", label: "Kontakt", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Nutzen Sie die Plattform weiter",
      description:
        "Entdecken Sie Künstler, registrieren Sie sich oder schreiben Sie uns für Ihre Datenschutzanfragen.",
    },
  },

  explicitConsent: {
    slug: "explicit-consent",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "scope",
        heading: "Anwendungsbereich",
        paragraphs: [
          "Dieser Hinweis wurde für Verarbeitungsvorgänge erstellt, die nach dem KVKK eine ausdrückliche Einwilligung erfordern. Er ist keine Wiederholung des Datenschutzhinweises und wird nicht als zwingende Voraussetzung für die Eröffnung eines Kontos gestaltet.",
          "Eine ausdrückliche Einwilligung muss freiwillig, auf einen bestimmten Sachverhalt bezogen, informiert und optional sein. Vorausgewählte Standardzustimmungen werden nicht verwendet.",
        ],
      },
      {
        id: "when-needed",
        heading: "Wann sie erforderlich sein kann",
        paragraphs: [
          "Für jede Maßnahme zur Bereitstellung der Kerndienste der Plattform (Konto, Profil, Entdeckung, Auftragsanfragen, Nachrichten) ist keine ausdrückliche Einwilligung erforderlich; die entsprechenden Rechtsgrundlagen werden im Datenschutzhinweis erläutert.",
          "Insbesondere bei der Verarbeitung besonderer Kategorien personenbezogener Daten, bei der optionalen Freigabe der Profilsichtbarkeit oder bei Verarbeitungsvorgängen außerhalb des zwingenden Leistungsumfangs kann eine gesonderte ausdrückliche Einwilligung eingeholt werden.",
          "Die Erlaubnis für Marketing- bzw. kommerzielle elektronische Kommunikation ist nicht Gegenstand dieses Hinweises; sie unterliegt einem gesonderten, optionalen Einwilligungsverfahren.",
        ],
      },
      {
        id: "granular",
        heading: "Granulare und widerrufliche Einwilligung",
        paragraphs: [
          "Sofern eine ausdrückliche Einwilligung angefragt wird, erfolgt dies themenbezogen. Nutzer können die gewünschten Optionen auswählen; für nicht ausgewählte Verarbeitungen wird keine Einwilligung angenommen.",
          "Die Einwilligung kann später widerrufen werden. Der Widerruf zielt darauf ab, die auf der Einwilligung beruhende Verarbeitung für die Zukunft zu beenden; gesetzliche Aufbewahrungspflichten bleiben davon unberührt.",
        ],
      },
      {
        id: "evidence",
        heading: "Aufzeichnung und Nachweis",
        paragraphs: [
          "Beim Einholen einer ausdrücklichen Einwilligung können Zeitstempel, die Version des Textes und der ausgewählte Umfang der Erlaubnis technisch aufgezeichnet werden. Diese Aufzeichnungen dienen ausschließlich Compliance- und Prüfzwecken.",
          `Bei Fragen wenden Sie sich an: ${CONTACT}`,
        ],
      },
    ],
    relatedPages: {
      heading: "Verwandte Seiten",
      intro: "Texte, die zusammen mit der ausdrücklichen Einwilligung gelesen werden sollten:",
      items: [
        { id: "kvkk", label: "KVKK-Datenschutzhinweis", href: "/legal/kvkk" },
        { id: "privacy", label: "Datenschutzerklärung", href: "/legal/privacy" },
        {
          id: "email",
          label: "Kommerzielle elektronische Kommunikation",
          href: "/legal/electronic-communications",
        },
        { id: "contact", label: "Kontakt", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Sie haben die Kontrolle",
      description:
        "Erteilen Sie bei der Nutzung der Plattform nur die optionalen Berechtigungen, die Sie wirklich möchten.",
    },
  },

  electronicCommunications: {
    slug: "electronic-communications",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "purpose",
        heading: "Zweck",
        paragraphs: [
          "Dieser Hinweis ist eine optionale Erlaubnisinformation für kommerzielle E-Mail-Kommunikation wie Kampagnen, Angebote und Ankündigungen.",
          "Sie ist keine Voraussetzung für die Eröffnung eines Kontos oder die Nutzung der Plattform. Standardmäßig ist sie deaktiviert. SMS- oder Telefonanrufkanäle werden derzeit nicht verwendet.",
        ],
      },
      {
        id: "channel",
        heading: "Kanal",
        paragraphs: [
          `Der Kommunikationskanal kann ausschließlich E-Mail sein. Wenn Sie Ihre Erlaubnis erteilen, können Mitteilungen im Namen der Marke ${BRAND} von ${CONTACT} oder der autorisierten E-Mail-Infrastruktur der Plattform versendet werden.`,
        ],
      },
      {
        id: "withdrawal",
        heading: "Widerruf der Erlaubnis",
        paragraphs: [
          "Sie können Ihre Erlaubnis jederzeit widerrufen. Der Widerruf kann über den Abmeldelink in der E-Mail, die Kontoeinstellungen (sofern verfügbar) oder " +
            CONTACT +
            " erfolgen.",
          "Registrierungs- und Widerspruchsprozesse gemäß IYS und den geltenden Vorschriften des elektronischen Handels werden angewendet, sobald die entsprechenden Systeme bereit sind. Dieser Hinweis enthält keine erfundene IYS-Nummer oder Behördenangabe.",
        ],
      },
      {
        id: "no-condition",
        heading: "Kein Nutzungsvorbehalt",
        paragraphs: [
          "Die Erlaubnis für kommerzielle elektronische Kommunikation ist keine Voraussetzung für Registrierung, Anmeldung oder die Nutzung der Kernfunktionen. Ohne diese Erlaubnis können Sie die Kernfunktionen der Plattform weiterhin nutzen.",
        ],
      },
    ],
    relatedPages: {
      heading: "Verwandte Seiten",
      intro: "Verwandte Datenschutztexte:",
      items: [
        { id: "kvkk", label: "KVKK-Datenschutzhinweis", href: "/legal/kvkk" },
        {
          id: "consent",
          label: "Hinweis zur ausdrücklichen Einwilligung",
          href: "/legal/explicit-consent",
        },
        { id: "privacy", label: "Datenschutzerklärung", href: "/legal/privacy" },
        { id: "contact", label: "Kontakt", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Verwalten Sie Ihre Kommunikationspräferenzen",
      description:
        "Wenn Sie keine Kampagnen-E-Mails wünschen, müssen Sie keine Erlaubnis erteilen.",
    },
  },

  distanceSalesPreliminary: {
    slug: "distance-sales-preliminary",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "provider",
        heading: "Angaben zum Dienstanbieter",
        paragraphs: [
          `Marke des Dienstes: ${BRAND}. Dienstanbieter/Betreiber: ${OPERATOR}. Standort: ${LOCATION}. Website: ${SITE}. E-Mail: ${CONTACT}.`,
          "Telefonnummer, vollständige Adresse, Steuernummer, MERSIS-Nummer und Handelsregisterangaben werden in dieser Phase nicht veröffentlicht. Diese Angaben werden auf den entsprechenden Seiten aktualisiert, sobald sie feststehen.",
        ],
      },
      {
        id: "service",
        heading: "Wesentliche Merkmale des Dienstes",
        paragraphs: [
          `${BRAND} ist eine digitale Plattform, die die Entdeckung von Künstlern, professionelle Profile, Auftragsanfragen und eine Nachrichteninfrastruktur bietet.`,
          "Sofern kostenpflichtige Mitgliedschafts-/Abonnementdienste angeboten werden, handelt es sich um digitalen Zugang. Die Zahlungsfunktion ist möglicherweise noch nicht aktiv; sobald der Bezahlvorgang eröffnet wird, wird der endgültige Leistungsumfang auf dem Zahlungsbildschirm angezeigt.",
        ],
      },
      {
        id: "price",
        heading: "Preis und Währung",
        paragraphs: [
          "Sobald ein kostenpflichtiger Dienst angeboten wird, werden Preis, Steuern und etwaige Zusatzkosten auf dem Zahlungs-/Bezahlbildschirm klar angezeigt.",
          "Als Währung ist USD vorgesehen. Dieser Hinweis veröffentlicht keinen festen Preisbetrag.",
        ],
      },
      {
        id: "payment",
        heading: "Zahlungsmethode",
        paragraphs: [
          "Zahlungsmethode und Angaben zum Zahlungsanbieter werden auf dem Zahlungsbildschirm angezeigt. Dieser Hinweis erfindet keinen Markennamen für einen Zahlungsanbieter.",
          "Sensible Zahlungsinformationen wie Kartendaten können von der jeweiligen Zahlungsinfrastruktur verarbeitet werden.",
        ],
      },
      {
        id: "duration-renewal",
        heading: "Laufzeit und Verlängerung",
        paragraphs: [
          "Laufzeit des Abonnements und Art der Verlängerung hängen vom angebotenen Plan und den beim Bezahlvorgang angezeigten Bedingungen ab.",
          "Es kann ein Prinzip der automatischen Verlängerung gelten; wie die Verlängerung abläuft, wird zum Zeitpunkt des Kaufs erläutert. Diese Seite veröffentlicht kein festes Abrechnungsintervall oder Verlängerungsdatum.",
        ],
      },
      {
        id: "cancel-withdraw",
        heading: "Kündigung und Widerruf",
        paragraphs: [
          "Kündigungs- und Widerrufsprozesse werden auf der Seite zum Kündigungs- und Widerrufsverfahren sowie in der Rückerstattungsrichtlinie erläutert.",
          "Das Prinzip des 14-tägigen Widerrufsrechts hängt von den anwendbaren Vorschriften und den Ausnahmen für digitale Dienste ab. Ein Widerruf bedeutet nicht in jedem Fall automatisch eine Rückerstattung.",
        ],
      },
      {
        id: "performance",
        heading: "Erbringung der digitalen Leistung",
        paragraphs: [
          "Der digitale Abonnement-/Mitgliedschaftszugang wird nach Abschluss des Kaufs über das Konto bereitgestellt.",
          "Wann die Leistung beginnt und welche Auswirkungen dies auf das Widerrufsrecht hat, wird dem Nutzer im Bezahlvorgang und in den Vertragstexten mitgeteilt.",
        ],
      },
      {
        id: "complaints",
        heading: "Beschwerden und Anfragen",
        paragraphs: [
          `Für Beschwerden und Anfragen wenden Sie sich an: ${CONTACT}. Zudem können die Hinweise auf der Kontaktseite genutzt werden.`,
          "Verfahren zur Streitbeilegung unterliegen den geltenden Vorschriften. Dieser Hinweis fügt keine unbestätigten Gerichtsnamen, Betragsgrenzen oder Behördenangaben hinzu.",
        ],
      },
    ],
    relatedPages: {
      heading: "Verwandte Seiten",
      intro: "Zusammen mit dieser Vorabinformation:",
      items: [
        {
          id: "agreement",
          label: "Fernabsatzvertrag",
          href: "/legal/distance-sales-agreement",
        },
        {
          id: "cancel",
          label: "Kündigung und Widerruf",
          href: "/legal/cancellation",
        },
        { id: "refund", label: "Rückerstattungsrichtlinie", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Abonnementbedingungen",
          href: "/legal/subscription",
        },
      ],
    },
    finalCta: {
      heading: "Klare Bedingungen bei Eröffnung des Bezahlvorgangs",
      description:
        "Sobald der Bezahlvorgang veröffentlicht ist, werden Preis, Laufzeit und Zahlungsdetails auf dem Bildschirm angezeigt.",
    },
  },

  distanceSalesAgreement: {
    slug: "distance-sales-agreement",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "parties",
        heading: "Vertragsparteien",
        paragraphs: [
          `Dieser Vertrag legt den allgemeinen Rahmen für das Fernabsatzverhältnis fest, das zwischen ${OPERATOR} als Anbieter des kostenpflichtigen digitalen Mitgliedschafts-/Abonnementdienstes von ${BRAND} und dem Nutzer, der den Dienst erwirbt, begründet wird.`,
          `Kontakt: ${CONTACT}. Standort: ${LOCATION}.`,
        ],
      },
      {
        id: "subject",
        heading: "Gegenstand",
        paragraphs: [
          "Gegenstand dieses Vertrags ist der kostenpflichtige digitale Zugang, die Mitgliedschaft oder der Abonnementdienst, der über die Plattform angeboten werden kann.",
          "Dieser Text ist nicht an den Bezahlvorgang gebunden. Sobald die Zahlungsfunktion aktiv ist, treten die endgültigen Bedingungen zusammen mit dem Zahlungsbildschirm und diesem Vertrag in Kraft.",
        ],
      },
      {
        id: "consistency",
        heading: "Übereinstimmung mit anderen Richtlinien",
        paragraphs: [
          "Dieser Vertrag ist zusammen mit den Nutzungsbedingungen, den Abonnementbedingungen, der Rückerstattungsrichtlinie, dem Kündigungs- und Widerrufsverfahren sowie den Datenschutz-/KVKK-Hinweisen zu lesen.",
          "Im Falle eines Widerspruchs haben die zum jeweiligen kostenpflichtigen Dienst beim Bezahlvorgang angezeigten aktuellen Bedingungen zusammen mit den Fernabsatztexten Vorrang bei der Auslegung.",
        ],
      },
      {
        id: "user-obligations",
        heading: "Pflichten des Nutzers",
        paragraphs: [
          "Der Nutzer ist verpflichtet, korrekte Kontoinformationen anzugeben, seine Zugangsdaten zu schützen und den Dienst rechtmäßig zu nutzen.",
          "Die unbefugte Weitergabe des Dienstes an Dritte oder dessen Missbrauch ist untersagt.",
        ],
      },
      {
        id: "provider-obligations",
        heading: "Pflichten des Anbieters",
        paragraphs: [
          "Der Anbieter ist bestrebt, den erworbenen digitalen Zugang mit angemessener Sorgfalt bereitzustellen. Es wird keine Garantie für einen unterbrechungsfreien Dienst gegeben.",
          "Bei wesentlichen Änderungen des Dienstes wird eine Benachrichtigung angestrebt.",
        ],
      },
      {
        id: "price-payment",
        heading: "Preis und Zahlung",
        paragraphs: [
          "Preis und Steuern werden beim Bezahlvorgang angezeigt. Als Währung ist USD vorgesehen. Der Zahlungsanbieter wird beim Bezahlvorgang angegeben.",
          "Dieser Vertrag veröffentlicht keinen festen Preis und keinen Markennamen des Anbieters.",
        ],
      },
      {
        id: "term",
        heading: "Laufzeit, Verlängerung, Beendigung",
        paragraphs: [
          "Laufzeit und Verlängerung unterliegen dem gewählten Plan und den Bedingungen des Bezahlvorgangs. Die Regeln zu Kündigung und Widerruf sind in den jeweiligen Richtlinien enthalten.",
        ],
      },
      {
        id: "liability",
        heading: "Haftung",
        paragraphs: [
          "Die Plattform wird im vorliegenden Zustand bereitgestellt. Im nach geltendem Recht zulässigen Umfang ist die Haftung für indirekte Schäden beschränkt. Dieser Hinweis legt keinen Gerichtsstand fest.",
        ],
      },
    ],
    relatedPages: {
      heading: "Verwandte Seiten",
      intro: "Lesen Sie zusammen mit diesem Vertrag:",
      items: [
        {
          id: "prelim",
          label: "Vorabinformation",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "terms", label: "Nutzungsbedingungen", href: "/legal/terms" },
        {
          id: "subscription",
          label: "Abonnementbedingungen",
          href: "/legal/subscription",
        },
        { id: "refund", label: "Rückerstattungsrichtlinie", href: "/legal/refund" },
      ],
    },
    finalCta: {
      heading: "Informieren Sie sich vor dem Kauf",
      description:
        "Prüfen Sie die Bedingungen sorgfältig, sobald der Zahlungsbildschirm geöffnet wird.",
    },
  },

  cancellation: {
    slug: "cancellation",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "withdrawal",
        heading: "Prinzip des 14-tägigen Widerrufsrechts",
        paragraphs: [
          "Im Rahmen der Verbrauchergesetzgebung kann bei Fernabsatzverträgen das Prinzip des 14-tägigen Widerrufsrechts gelten.",
          "Bei digitalen Diensten können gesetzliche Ausnahmen und der Beginn der Leistungserbringung das Widerrufsrecht beeinflussen. Ein Widerruf bedeutet nicht in jedem Fall eine automatische und bedingungslose Rückerstattung.",
        ],
      },
      {
        id: "cancel-vs-refund",
        heading: "Unterschied zwischen Kündigung und Rückerstattung",
        paragraphs: [
          "Die Kündigung eines Abonnements kann bedeuten, dass zukünftige Verlängerungen gestoppt werden. Eine Rückerstattung hingegen betrifft die Rückzahlung einer bereits abgeschlossenen Zahlung.",
          "Selbst wenn ein Kündigungsrecht besteht, entsteht keine automatische Rückerstattung für bereits abgelaufene Zeiträume. Die Beurteilung von Rückerstattungen erfolgt im Rahmen der Rückerstattungsrichtlinie.",
        ],
      },
      {
        id: "how-to-cancel",
        heading: "Allgemeine Schritte zur Kündigung",
        paragraphs: [
          "1) Melden Sie sich bei Ihrem Konto an.",
          "2) Nutzen Sie die Kündigungsoption im Bereich zur Verwaltung von Abonnements/Plänen, der zur Verfügung gestellt wird, sobald kostenpflichtige Dienste live gehen.",
          "3) Sollte dieser Bereich noch nicht verfügbar sein, senden Sie Ihre Anfrage an " +
            CONTACT +
            "; eine Identitätsprüfung kann angefordert werden.",
          "4) Wann die Kündigung wirksam wird, hängt von den Planbedingungen ab. Diese Seite verlangt keine Kündigung 30 Tage im Voraus.",
        ],
      },
      {
        id: "auto-renewal",
        heading: "Stoppen der automatischen Verlängerung",
        paragraphs: [
          "Sofern eine automatische Verlängerung besteht, kann die Kündigung die Verlängerung für den nächsten Zeitraum stoppen. Der genaue Zeitpunkt der Wirkung wird im Bezahlvorgang und in den Abonnementbedingungen angegeben.",
        ],
      },
      {
        id: "contact",
        heading: "Support",
        paragraphs: [
          `Für Kündigungs-/Widerrufsanfragen wenden Sie sich an: ${CONTACT}. Sie können auch die Kontaktseite nutzen.`,
        ],
      },
    ],
    relatedPages: {
      heading: "Verwandte Seiten",
      intro: "Texte im Zusammenhang mit Kündigung und Widerruf:",
      items: [
        { id: "refund", label: "Rückerstattungsrichtlinie", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Abonnementbedingungen",
          href: "/legal/subscription",
        },
        {
          id: "prelim",
          label: "Vorabinformation",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "contact", label: "Kontakt", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Ein transparenter Kündigungsprozess ist beabsichtigt",
      description:
        "Sobald kostenpflichtige Dienste live gehen, werden die Verwaltungsschritte im Konto klar dargestellt.",
    },
  },
};
