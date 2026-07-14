import type { LegalNoticePageContent } from "@/content/types";

const CONTACT = "info@art-ist.club";
const OPERATOR = "Atilla Demirkiran";
const LOCATION = "Esmirna, Turquía";
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

export const turkeyNoticesEs: TurkeyNotices = {
  kvkk: {
    slug: "kvkk",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "controller",
        heading: "Identidad del responsable del tratamiento",
        paragraphs: [
          `En la plataforma ${BRAND}, el responsable del tratamiento de sus datos personales es ${OPERATOR}. Nombre de marca: ${BRAND}. Ubicación: ${LOCATION}. Sitio web: ${SITE}.`,
          `Para solicitudes y contacto, utilice este correo electrónico: ${CONTACT}. Este aviso no publica número de teléfono, dirección completa, número fiscal, número de identidad nacional, número MERSIS ni información del registro mercantil.`,
        ],
      },
      {
        id: "categories",
        heading: "Categorías de datos personales tratados",
        paragraphs: [
          "Datos de identidad y de cuenta: nombre/nombre visible, correo electrónico, tipo de cuenta y registros asociados a la autenticación.",
          "Datos de perfil y contenido: biografía, categoría, idioma, preferencias de ubicación, fotos, vídeos, galería y contenidos profesionales similares.",
          "Datos de transacción y comunicación: solicitudes de trabajo, contenido de mensajería, favoritos y registros de interacciones dentro de la plataforma.",
          "Datos técnicos y de seguridad: información de sesión, información del dispositivo/navegador, registros técnicos y datos relacionados con revisiones de seguridad.",
          "Cuando se ofrezcan servicios de pago: estado de suscripción/transacción y registros de transacción obligatorios relacionados con la facturación. El proveedor de pagos puede procesar los datos de tarjeta en su propia infraestructura; los datos de pago sensibles, como los números de tarjeta, no se almacenan en la plataforma.",
        ],
      },
      {
        id: "purposes",
        heading: "Finalidades del tratamiento",
        paragraphs: [
          "Creación y gestión de cuentas, autenticación y prestación de la experiencia de perfil y descubrimiento.",
          "Operación de la infraestructura de solicitudes de trabajo y mensajería, y provisión de favoritos y funciones de usuario similares.",
          "Seguridad, prevención de usos indebidos, resolución de errores y mejora del servicio.",
          "Cumplimiento de obligaciones legales; mantenimiento de registros de suscripción/transacción cuando se ofrezcan servicios de pago.",
          "El tratamiento basado en el consentimiento explícito se lleva a cabo únicamente cuando se ha obtenido un consentimiento independiente y se limita al alcance de dicho consentimiento.",
        ],
      },
      {
        id: "legal-bases",
        heading: "Bases legales",
        paragraphs: [
          "En el marco del artículo 5 de la KVKK, se consideran bases legales como la celebración o ejecución de un contrato, una obligación legal, un interés legítimo (seguridad, operación del servicio) y, cuando sea necesario, el consentimiento explícito.",
          "Este aviso de privacidad no es un formulario de consentimiento. La apertura de una cuenta no se condiciona a un requisito como \"apruebo este aviso\"; el texto tiene como único fin informar al usuario.",
        ],
      },
      {
        id: "recipients",
        heading: "Categorías de destinatarios a los que se pueden transferir datos",
        paragraphs: [
          "Proveedores de hospedaje, autenticación, base de datos, almacenamiento e infraestructura similar, en la medida necesaria para operar el servicio.",
          "Socios comerciales autorizados que participan en los procesos de pago y facturación de los servicios de pago, únicamente en la medida necesaria.",
          "Instituciones y organismos públicos legalmente autorizados (en los casos obligatorios).",
          "Si se produce una transferencia transfronteriza, se evaluarán garantías conformes con las normas KVKK vigentes. Este aviso no inventa un país o ubicación de servidor específicos.",
        ],
      },
      {
        id: "collection",
        heading: "Método de recopilación",
        paragraphs: [
          "Los datos se recopilan electrónicamente a través de formularios de registro/inicio de sesión, pasos de configuración del perfil, interfaces de solicitud de trabajo y mensajería, acciones de favoritos y registros técnicos.",
          "Cuando se utiliza OAuth o un método de inicio de sesión similar, se puede obtener del proveedor de identidad la información necesaria para el funcionamiento del servicio.",
        ],
      },
      {
        id: "retention",
        heading: "Enfoque de conservación",
        paragraphs: [
          "Los datos pueden conservarse durante el tiempo necesario para la actividad de la cuenta, la prestación del servicio, la seguridad, las disputas y las obligaciones legales de conservación.",
          "Al cerrar una cuenta, algunos datos pueden eliminarse o anonimizarse; los registros obligatorios pueden conservarse durante más tiempo. Este aviso no se compromete a un número fijo de días.",
        ],
      },
      {
        id: "rights",
        heading: "Derechos del interesado",
        paragraphs: [
          "En el marco del artículo 11 de la KVKK, puede ejercer derechos como conocer si sus datos personales están siendo tratados, solicitar información, solicitar la rectificación, solicitar la eliminación/destrucción, restringir el tratamiento, oponerse y ejercer los demás derechos previstos por la ley.",
          "Para solicitudes relacionadas con sus derechos, utilice este canal de correo electrónico: " + CONTACT,
        ],
      },
      {
        id: "application",
        heading: "Cómo presentar una solicitud",
        paragraphs: [
          `Puede enviar sus solicitudes a ${CONTACT}. Se puede solicitar información adicional para verificar su identidad y aclarar su solicitud.`,
          "El tiempo de respuesta puede variar según las normas aplicables y la naturaleza de la solicitud. Este aviso no garantiza un tiempo de respuesta fijo.",
        ],
      },
    ],
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Páginas que puede revisar junto con este aviso:",
      items: [
        { id: "privacy", label: "Política de privacidad", href: "/legal/privacy" },
        { id: "terms", label: "Condiciones de uso", href: "/legal/terms" },
        {
          id: "explicit",
          label: "Aviso de consentimiento explícito",
          href: "/legal/explicit-consent",
        },
        { id: "contact", label: "Contacto", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Siga utilizando la plataforma",
      description:
        "Descubra artistas, regístrese o escríbanos para sus solicitudes relacionadas con la privacidad.",
    },
  },

  explicitConsent: {
    slug: "explicit-consent",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "scope",
        heading: "Alcance",
        paragraphs: [
          "Este aviso se ha preparado para los tratamientos que requieren consentimiento explícito conforme a la KVKK. No es una repetición del aviso de privacidad y no se plantea como condición obligatoria para abrir una cuenta.",
          "El consentimiento explícito debe ser libre, referido a un asunto concreto, informado y opcional. No se utiliza un consentimiento premarcado por defecto.",
        ],
      },
      {
        id: "when-needed",
        heading: "Cuándo puede ser necesario",
        paragraphs: [
          "No se requiere consentimiento explícito para cada operación necesaria para prestar los servicios esenciales de la plataforma (cuenta, perfil, descubrimiento, solicitudes de trabajo, mensajería); las bases legales correspondientes se explican en el aviso de privacidad.",
          "Se puede recabar un consentimiento explícito independiente, en particular, para el tratamiento de categorías especiales de datos personales, para el uso compartido opcional de la visibilidad del perfil, o para escenarios de tratamiento que quedan fuera del alcance del servicio obligatorio.",
          "El permiso para marketing o comunicaciones electrónicas comerciales no es objeto de este aviso; dicho permiso está sujeto a un proceso de consentimiento independiente y opcional.",
        ],
      },
      {
        id: "granular",
        heading: "Consentimiento granular y revocable",
        paragraphs: [
          "Cuando se solicita el consentimiento explícito, se presenta por temas concretos. El usuario puede elegir los elementos que desee; no se considera otorgado el consentimiento para los elementos no seleccionados.",
          "El consentimiento puede retirarse posteriormente. La retirada del consentimiento tiene como objetivo detener, de cara al futuro, el tratamiento basado en dicho consentimiento; no elimina las obligaciones legales de conservación.",
        ],
      },
      {
        id: "evidence",
        heading: "Registro y evidencia",
        paragraphs: [
          "Cuando se obtiene el consentimiento explícito, la marca de tiempo, la versión del texto y el alcance del permiso seleccionado pueden registrarse técnicamente. Estos registros se utilizan únicamente con fines de cumplimiento y auditoría.",
          `Para consultas, contacte: ${CONTACT}`,
        ],
      },
    ],
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Textos recomendados para leer junto con el consentimiento explícito:",
      items: [
        { id: "kvkk", label: "Aviso de privacidad KVKK", href: "/legal/kvkk" },
        { id: "privacy", label: "Política de privacidad", href: "/legal/privacy" },
        {
          id: "email",
          label: "Comunicaciones electrónicas comerciales",
          href: "/legal/electronic-communications",
        },
        { id: "contact", label: "Contacto", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Usted tiene el control",
      description:
        "Otorgue únicamente los permisos opcionales que realmente desee mientras utiliza la plataforma.",
    },
  },

  electronicCommunications: {
    slug: "electronic-communications",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "purpose",
        heading: "Propósito",
        paragraphs: [
          "Este aviso constituye información sobre un permiso opcional para comunicaciones por correo electrónico de carácter comercial, como campañas, ofertas y anuncios.",
          "No es obligatorio para abrir una cuenta ni para usar la plataforma. Está desactivado por defecto. Los canales de SMS o llamadas telefónicas no se utilizan actualmente.",
        ],
      },
      {
        id: "channel",
        heading: "Canal",
        paragraphs: [
          `El canal de comunicación solo puede ser el correo electrónico. Si otorga su permiso, se podrán enviar comunicaciones en nombre de la marca ${BRAND} desde ${CONTACT} o desde la infraestructura de correo electrónico autorizada de la plataforma.`,
        ],
      },
      {
        id: "withdrawal",
        heading: "Retirada del permiso",
        paragraphs: [
          "Puede retirar su permiso en cualquier momento. La retirada se puede realizar mediante el enlace de baja incluido en el correo electrónico, la configuración de la cuenta (cuando esté disponible), o a través de " +
            CONTACT +
            ".",
          "Se aplicarán procesos de registro y rechazo conformes con el IYS y la legislación de comercio electrónico aplicable una vez que los sistemas estén listos. Este aviso no incluye ningún número IYS ni información institucional ficticios.",
        ],
      },
      {
        id: "no-condition",
        heading: "Sin condición de uso",
        paragraphs: [
          "El permiso para comunicaciones electrónicas comerciales no es un requisito previo para el registro, el inicio de sesión o el uso de las funciones esenciales. Si no otorga el permiso, puede seguir utilizando las funciones esenciales de la plataforma.",
        ],
      },
    ],
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Textos de privacidad relacionados:",
      items: [
        { id: "kvkk", label: "Aviso de privacidad KVKK", href: "/legal/kvkk" },
        {
          id: "consent",
          label: "Aviso de consentimiento explícito",
          href: "/legal/explicit-consent",
        },
        { id: "privacy", label: "Política de privacidad", href: "/legal/privacy" },
        { id: "contact", label: "Contacto", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Gestione sus preferencias de comunicación",
      description:
        "Si no desea recibir correos de campañas, no necesita otorgar el permiso.",
    },
  },

  distanceSalesPreliminary: {
    slug: "distance-sales-preliminary",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "provider",
        heading: "Información del prestador del servicio",
        paragraphs: [
          `Marca del servicio: ${BRAND}. Prestador del servicio / operador: ${OPERATOR}. Ubicación: ${LOCATION}. Sitio web: ${SITE}. Correo electrónico: ${CONTACT}.`,
          "El número de teléfono, la dirección completa, el número fiscal, el número MERSIS y la información del registro mercantil no se publican en esta etapa. Estos datos se actualizarán en las páginas correspondientes cuando se finalicen.",
        ],
      },
      {
        id: "service",
        heading: "Características esenciales del servicio",
        paragraphs: [
          `${BRAND} es una plataforma digital que ofrece descubrimiento de artistas, perfiles profesionales, solicitudes de trabajo y una infraestructura de mensajería.`,
          "Cuando se ofrezcan servicios de membresía/suscripción de pago, dichos servicios tendrán la naturaleza de acceso digital. El pago puede no estar activo todavía; cuando se abra el proceso de pago, el alcance final se mostrará en la pantalla de pago.",
        ],
      },
      {
        id: "price",
        heading: "Precio y moneda",
        paragraphs: [
          "Cuando se ofrezca un servicio de pago, el precio, los impuestos y cualquier cargo adicional se mostrarán claramente en la pantalla de pago/checkout.",
          "La moneda prevista es el USD. Este aviso no publica un importe de precio fijo.",
        ],
      },
      {
        id: "payment",
        heading: "Método de pago",
        paragraphs: [
          "El método de pago y la información del proveedor de pagos se mostrarán en la pantalla de pago. Este aviso no inventa el nombre de marca de un proveedor de pagos.",
          "La información de pago sensible, como los datos de tarjeta, puede ser procesada por la infraestructura de pago correspondiente.",
        ],
      },
      {
        id: "duration-renewal",
        heading: "Duración y renovación",
        paragraphs: [
          "La duración de la suscripción y la forma de renovación dependen del plan ofrecido y de las condiciones mostradas en el checkout.",
          "Puede aplicarse un principio de renovación automática; cómo funcionará la renovación se explicará en el momento de la compra. Esta página no publica un intervalo de facturación o una fecha de renovación fijos.",
        ],
      },
      {
        id: "cancel-withdraw",
        heading: "Cancelación y desistimiento",
        paragraphs: [
          "Los procesos de cancelación y desistimiento se explican en la página del Proceso de Cancelación y Desistimiento y en la Política de Reembolsos.",
          "El principio del derecho de desistimiento de 14 días depende de la legislación aplicable y de las excepciones relativas a los servicios digitales. El desistimiento no implica en todos los casos un reembolso automático.",
        ],
      },
      {
        id: "performance",
        heading: "Ejecución del servicio digital",
        paragraphs: [
          "El acceso digital a la suscripción/membresía se proporciona a través de la cuenta una vez completada la compra.",
          "El momento en que comienza la ejecución y su efecto sobre el derecho de desistimiento se informará al usuario en los textos de checkout y de contrato.",
        ],
      },
      {
        id: "complaints",
        heading: "Reclamaciones y solicitudes",
        paragraphs: [
          `Para reclamaciones y solicitudes, contacte: ${CONTACT}. También puede utilizar las indicaciones de la página de Contacto.`,
          "Los procesos de resolución de disputas están sujetos a la legislación aplicable. Este aviso no añade nombres de tribunales, límites monetarios ni información institucional no confirmados.",
        ],
      },
    ],
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Junto con esta información previa:",
      items: [
        {
          id: "agreement",
          label: "Contrato de Venta a Distancia",
          href: "/legal/distance-sales-agreement",
        },
        {
          id: "cancel",
          label: "Cancelación y Desistimiento",
          href: "/legal/cancellation",
        },
        { id: "refund", label: "Política de Reembolsos", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Condiciones de Suscripción",
          href: "/legal/subscription",
        },
      ],
    },
    finalCta: {
      heading: "Se mostrarán condiciones claras al abrir el pago",
      description:
        "Cuando se publique el checkout, el precio, la duración y los detalles de pago aparecerán en pantalla.",
    },
  },

  distanceSalesAgreement: {
    slug: "distance-sales-agreement",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "parties",
        heading: "Partes",
        paragraphs: [
          `Este contrato define el marco general de la relación de servicio a distancia que se establecerá entre ${OPERATOR}, el proveedor del servicio de membresía/suscripción digital de pago de ${BRAND}, y el usuario que adquiere el servicio.`,
          `Contacto: ${CONTACT}. Ubicación: ${LOCATION}.`,
        ],
      },
      {
        id: "subject",
        heading: "Objeto",
        paragraphs: [
          "El objeto de este contrato es el acceso digital, la membresía o el servicio de suscripción de pago que pueda ofrecerse a través de la plataforma.",
          "Este texto no está vinculado al checkout. Una vez que el pago esté activo, las condiciones finales entrarán en vigor junto con la pantalla de pago y este contrato.",
        ],
      },
      {
        id: "consistency",
        heading: "Coherencia con otras políticas",
        paragraphs: [
          "Este contrato debe leerse junto con las Condiciones de Uso, las Condiciones de Suscripción, la Política de Reembolsos, el Proceso de Cancelación y Desistimiento, y los avisos de Privacidad/KVKK.",
          "En caso de conflicto, tendrán prioridad en la interpretación las condiciones vigentes mostradas en el checkout específicas del servicio de pago en cuestión, junto con los textos de venta a distancia.",
        ],
      },
      {
        id: "user-obligations",
        heading: "Obligaciones del usuario",
        paragraphs: [
          "El usuario está obligado a proporcionar información de cuenta veraz, proteger sus credenciales de acceso y utilizar el servicio de conformidad con la ley.",
          "Se prohíbe la transferencia no autorizada del servicio a terceros o su uso indebido.",
        ],
      },
      {
        id: "provider-obligations",
        heading: "Obligaciones del prestador",
        paragraphs: [
          "El prestador tiene como objetivo ofrecer el acceso digital adquirido con la diligencia razonable. No se garantiza un servicio ininterrumpido.",
          "Se prevé informar en caso de cambios significativos en el servicio.",
        ],
      },
      {
        id: "price-payment",
        heading: "Precio y pago",
        paragraphs: [
          "El precio y los impuestos se mostrarán en el checkout. La moneda prevista es el USD. El proveedor de pagos se indicará en el checkout.",
          "Este contrato no publica un precio fijo ni el nombre de marca del proveedor.",
        ],
      },
      {
        id: "term",
        heading: "Duración, renovación, terminación",
        paragraphs: [
          "La duración y la renovación están sujetas al plan elegido y a las condiciones del checkout. Las reglas de cancelación y desistimiento figuran en las políticas correspondientes.",
        ],
      },
      {
        id: "liability",
        heading: "Responsabilidad",
        paragraphs: [
          "La plataforma se ofrece \"tal cual\". En la medida permitida por la ley aplicable, la responsabilidad por daños indirectos es limitada. Este aviso no designa una jurisdicción.",
        ],
      },
    ],
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Lea junto con este contrato:",
      items: [
        {
          id: "prelim",
          label: "Información Previa",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "terms", label: "Condiciones de Uso", href: "/legal/terms" },
        {
          id: "subscription",
          label: "Condiciones de Suscripción",
          href: "/legal/subscription",
        },
        { id: "refund", label: "Política de Reembolsos", href: "/legal/refund" },
      ],
    },
    finalCta: {
      heading: "Infórmese antes de comprar",
      description:
        "Revise cuidadosamente las condiciones cuando se abra la pantalla de pago.",
    },
  },

  cancellation: {
    slug: "cancellation",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "withdrawal",
        heading: "Principio del derecho de desistimiento de 14 días",
        paragraphs: [
          "En el marco de la legislación de protección al consumidor, puede aplicarse el principio del derecho de desistimiento de 14 días en los contratos a distancia.",
          "Para los servicios digitales, las excepciones previstas en la legislación y el inicio de la ejecución pueden afectar al derecho de desistimiento. El desistimiento no implica en todos los casos un reembolso automático e incondicional.",
        ],
      },
      {
        id: "cancel-vs-refund",
        heading: "Diferencia entre cancelación y reembolso",
        paragraphs: [
          "La cancelación de una suscripción puede referirse a detener las renovaciones futuras. El reembolso, en cambio, se refiere a la devolución de un pago ya completado.",
          "Incluso si existe un derecho de cancelación, el reembolso de las tarifas de periodos pasados no surge automáticamente. La evaluación del reembolso se rige por la Política de Reembolsos.",
        ],
      },
      {
        id: "how-to-cancel",
        heading: "Pasos generales para cancelar",
        paragraphs: [
          "1) Inicie sesión en su cuenta.",
          "2) Utilice la opción de cancelación en el área de gestión de suscripciones/planes que se ofrecerá cuando se lancen los servicios de pago.",
          "3) Si esta área aún no está disponible, envíe su solicitud a " +
            CONTACT +
            "; se puede solicitar verificación de identidad.",
          "4) El momento en que la cancelación surta efecto depende de las condiciones del plan. Esta página no impone la obligación de cancelar con 30 días de antelación.",
        ],
      },
      {
        id: "auto-renewal",
        heading: "Detener la renovación automática",
        paragraphs: [
          "Si la renovación automática está activada, la cancelación puede detener la renovación del siguiente periodo. El momento exacto en que surtirá efecto se especificará en las condiciones de checkout y de suscripción.",
        ],
      },
      {
        id: "contact",
        heading: "Soporte",
        paragraphs: [
          `Para solicitudes de cancelación/desistimiento, contacte: ${CONTACT}. También puede utilizar la página de Contacto.`,
        ],
      },
    ],
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Textos relacionados con la cancelación y el desistimiento:",
      items: [
        { id: "refund", label: "Política de Reembolsos", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Condiciones de Suscripción",
          href: "/legal/subscription",
        },
        {
          id: "prelim",
          label: "Información Previa",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "contact", label: "Contacto", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Se busca un proceso de cancelación transparente",
      description:
        "Cuando se lancen los servicios de pago, los pasos de gestión se aclararán dentro de la cuenta.",
    },
  },
};
