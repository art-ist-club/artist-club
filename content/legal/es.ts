import type { LegalContentBundle } from "@/content/types";
import { turkeyNoticesEs } from "@/content/legal/notices/es";

export const legalContent: LegalContentBundle = {
  terms: {
    slug: "terms",
    updatedAt: "2026-07-14",
    acceptance: {
      heading: "Aceptación",
      paragraphs: [
        "Al acceder a ART-IST.CLUB o utilizar la plataforma, usted confirma que ha leído, comprendido y aceptado estos Términos de Uso.",
        "Si no está de acuerdo, no debe utilizar la plataforma. Crear una cuenta, iniciar sesión, publicar un perfil, enviar una solicitud de trabajo o enviar mensajes constituye aceptación.",
      ],
    },
    purpose: {
      heading: "Finalidad de la plataforma",
      paragraphs: [
        "ART-IST.CLUB es una plataforma digital global que ofrece descubrimiento de artistas, creación de perfiles profesionales, comunicación e infraestructura para solicitudes de trabajo.",
        "La plataforma no es una agencia, empresa de management ni empleador. ART-IST.CLUB no es parte de los acuerdos entre artistas y clientes, no gestiona proyectos y no garantiza ingresos, proyectos ni resultados.",
        "Nuestro propósito es facilitar que las partes se descubran entre sí y se conecten directamente.",
      ],
    },
    accounts: {
      heading: "Cuentas",
      paragraphs: [
        "Al crear una cuenta, debe proporcionar información exacta, actual y completa. Está prohibido utilizar información engañosa o los datos de otra persona.",
        "Usted es responsable de la seguridad de su cuenta. Mantenga sus credenciales confidenciales e informe de inmediato cualquier acceso no autorizado.",
        "Usted es responsable de la actividad que se realice a través de su cuenta. Las cuentas que infrinjan estas normas podrán suspenderse o cerrarse.",
      ],
    },
    artistContent: {
      heading: "Contenido de los artistas",
      paragraphs: [
        "Usted es responsable del contenido que comparte en perfiles, galerías y otras áreas. Declara que posee los derechos legales necesarios para publicar dicho contenido o que ha obtenido los permisos correspondientes.",
        "Están prohibidas las infracciones de derechos de autor, las infracciones de marca y los contenidos ilegales, discriminatorios, obscenos o dañinos.",
        "La plataforma se reserva el derecho de retirar o restringir el acceso a contenido que infrinja estas normas.",
      ],
    },
    jobRequests: {
      heading: "Solicitudes de trabajo",
      paragraphs: [
        "Las solicitudes de trabajo y las funciones de mensajería ayudan a que artistas y clientes se conecten entre sí.",
        "Los acuerdos, el alcance, los honorarios, los plazos y demás condiciones comerciales se definen directamente entre las partes. ART-IST.CLUB no es parte de dichos acuerdos y no celebra contratos en nombre de ninguna de las partes.",
        "La plataforma no cobra pagos por los acuerdos de proyecto, no gestiona contratos ni garantiza los resultados de los proyectos.",
      ],
    },
    prohibited: {
      heading: "Conductas prohibidas",
      intro:
        "Está prohibido el uso indebido de la plataforma, incluyendo, entre otros, los siguientes comportamientos:",
      items: [
        "Crear cuentas falsas, engañosas o no autorizadas",
        "Fraude, robo de identidad o manipulación financiera",
        "Spam, mensajes masivos no solicitados o comunicación de acoso",
        "Acoso, amenazas, discriminación o comportamiento de odio",
        "Publicar contenido ilegal o incitar a actividades ilegales",
        "Suplantar a otra persona u organización sin autorización",
        "Abuso técnico dirigido a sistemas, controles de seguridad u otros usuarios",
      ],
    },
    intellectualProperty: {
      heading: "Propiedad intelectual",
      paragraphs: [
        "La marca ART-IST.CLUB, los logotipos, el diseño, el software, la interfaz y los materiales propiedad de la plataforma están protegidos por derechos de propiedad intelectual.",
        "Los usuarios no pueden copiar, modificar, distribuir ni explotar comercialmente la marca, el diseño o el software de la plataforma sin autorización.",
        "Los derechos sobre el contenido creado por los usuarios permanecen en el usuario, según lo aplicable conforme a la ley y las páginas legales relacionadas; la plataforma únicamente recibe los permisos necesarios para operar el servicio.",
      ],
    },
    serviceChanges: {
      heading: "Cambios en el servicio",
      paragraphs: [
        "ART-IST.CLUB se reserva el derecho de actualizar, modificar, suspender temporalmente o eliminar funciones.",
        "Los cambios pueden realizarse por motivos de desarrollo del producto, seguridad, rendimiento o requisitos legales. Se procurará un aviso razonable para los cambios sustanciales, pero no se garantiza un servicio ininterrumpido o inalterado.",
      ],
    },
    liability: {
      heading: "Limitación de responsabilidad",
      paragraphs: [
        "La plataforma se proporciona «tal cual». ART-IST.CLUB no garantiza un servicio ininterrumpido, libre de errores o disponible de forma continua.",
        "La plataforma no garantiza ingresos, trabajo ni resultados relacionados con acuerdos, pagos o resultados entre artistas y clientes.",
        "En la medida permitida por la ley aplicable, la responsabilidad por daños indirectos, incidentales o consecuentes queda limitada. Este texto no asigna un tribunal o jurisdicción específica.",
      ],
    },
    termination: {
      heading: "Finalización de la cuenta",
      paragraphs: [
        "Las cuentas que infrinjan estos términos o las políticas de la plataforma podrán suspenderse o cerrarse.",
        "El acceso puede restringirse por motivos de seguridad, abuso, sospecha de fraude o requisitos legales.",
        "Si desea cerrar su cuenta, siga las indicaciones de la página de Contacto.",
      ],
    },
    updates: {
      heading: "Actualizaciones",
      paragraphs: [
        "Estos Términos de Uso pueden actualizarse con el tiempo. Una versión actualizada entra en vigor al publicarse en esta página.",
        "El uso continuado de la plataforma tras una actualización implica la aceptación de los términos revisados. Se procurará notificar a los usuarios en caso de cambios sustanciales.",
      ],
    },
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Estas páginas pueden consultarse junto con los Términos de Uso.",
      items: [
        {
          id: "privacy",
          label: "Política de privacidad",
          href: "/legal/privacy",
        },
        {
          id: "cookies",
          label: "Política de cookies",
          href: "/legal/cookies",
        },
        {
          id: "refund",
          label: "Política de reembolso",
          href: "/legal/refund",
        },
        {
          id: "subscription",
          label: "Condiciones de suscripción",
          href: "/legal/subscription",
        },
        {
          id: "contact",
          label: "Contacto",
          href: "/contact",
        },
      ],
    },
    finalCta: {
      heading: "Siga explorando la plataforma",
      description:
        "Descubra artistas, cree una cuenta o comuníquese a través de la página de Contacto.",
    },
  },
  privacy: {
    slug: "privacy",
    updatedAt: "2026-07-14",
    scope: {
      heading: "Alcance",
      paragraphs: [
        "Esta Política de privacidad explica cómo se recopilan, utilizan, almacenan y protegen los datos personales cuando utiliza la plataforma ART-IST.CLUB.",
        "Abarca la creación de cuentas, la gestión de perfiles, el descubrimiento de artistas, las solicitudes de trabajo, la mensajería y otras funciones relacionadas de la plataforma. Su objetivo es ofrecer información clara y profesional, alineada con principios de privacidad ampliamente reconocidos.",
        "Este texto no inventa datos no verificados sobre la identidad de la empresa, direcciones, números de teléfono ni un delegado de protección de datos designado. Dichos datos solo aparecerán cuando se publiquen de forma verificada en las páginas correspondientes.",
      ],
    },
    dataCollected: {
      heading: "Información que recopilamos",
      paragraphs: [
        "Información de cuenta: datos de autenticación proporcionados durante el registro y el inicio de sesión (por ejemplo, correo electrónico y tipo de cuenta).",
        "Información de perfil: nombre visible, biografía, categorías, ubicación, idiomas, imágenes, videos y datos profesionales similares que decida compartir.",
        "Datos de uso y técnicos: información técnica relacionada con sesiones, dispositivos o registros necesarios para el funcionamiento seguro de la plataforma.",
        "Contenido de comunicaciones y solicitudes: información compartida en solicitudes de trabajo, mensajes y flujos de asistencia.",
        "Los detalles sobre cookies y tecnologías similares no se repiten aquí; consulte la Política de cookies.",
      ],
    },
    dataUse: {
      heading: "Cómo utilizamos la información",
      paragraphs: [
        "Utilizamos los datos para crear y gestionar cuentas, presentar perfiles, operar el descubrimiento, permitir las solicitudes de trabajo y la mensajería, proteger la seguridad y mejorar el servicio.",
        "Los datos también pueden procesarse para el funcionamiento legítimo de la plataforma, la atención de solicitudes de los usuarios, la prevención de abusos y el cumplimiento de obligaciones legales.",
        "Dado que ART-IST.CLUB no es parte de los acuerdos comerciales entre artistas y clientes, los usuarios siguen siendo responsables de la información que comparten directamente entre sí.",
      ],
    },
    accountProfile: {
      heading: "Datos de cuenta y de perfil",
      paragraphs: [
        "Los datos de la cuenta se procesan para la autenticación y el control de acceso. Cuando hace que un perfil sea visible, los datos profesionales que elija pueden ser visibles para otros usuarios.",
        "La visibilidad del perfil depende del estado de publicación, el tipo de cuenta y la configuración de la plataforma. Evite compartir información inexacta o engañosa.",
        "Usted es responsable del contenido de su perfil y no debe publicar contenido que infrinja derechos de autor o de privacidad.",
      ],
    },
    jobsMessaging: {
      heading: "Solicitudes de trabajo y mensajería",
      paragraphs: [
        "Las solicitudes de trabajo y los mensajes se procesan para conectar a las partes correspondientes y se asocian con las cuentas relacionadas.",
        "El contenido de mensajes y solicitudes puede conservarse según sea necesario para operar el servicio y revisar cuestiones de seguridad o abuso.",
        "La plataforma no negocia acuerdos comerciales en nombre de nadie. Los usuarios siguen siendo responsables de los detalles del proyecto que comparten y de los resultados de sus acuerdos.",
      ],
    },
    security: {
      heading: "Seguridad",
      paragraphs: [
        "Se aplican autenticación, controles de acceso y medidas técnicas y organizativas adecuadas para proteger las cuentas y los datos.",
        "Ningún sistema puede garantizar seguridad absoluta. Si sospecha de un acceso no autorizado, proteja su cuenta y siga las indicaciones de la página de Contacto.",
        "Los datos procesados a través de proveedores de infraestructura se gestionan con medidas de protección adecuadas para operar el servicio de forma segura.",
      ],
    },
    userRights: {
      heading: "Sus derechos",
      paragraphs: [
        "Según la legislación aplicable, puede tener derechos como acceso, rectificación, supresión, limitación del tratamiento, oposición o portabilidad de datos.",
        "Utilice las indicaciones de la página de Contacto para presentar solicitudes relacionadas con la privacidad. Hasta que se publique un correo electrónico público verificado o un contacto de DPO, el proceso sigue las indicaciones de la plataforma.",
        "Podemos solicitar información adicional para verificar su identidad o aclarar la solicitud. El tiempo de respuesta puede variar según el tipo de solicitud y las normas aplicables.",
      ],
    },
    retention: {
      heading: "Conservación de datos",
      paragraphs: [
        "Los datos pueden conservarse durante el tiempo necesario para operar la cuenta, prestar el servicio, proteger la seguridad, gestionar disputas y cumplir las obligaciones legales de conservación.",
        "Cuando se cierra una cuenta, algunos datos pueden eliminarse o anonimizarse; se pueden conservar registros limitados durante más tiempo cuando la ley lo exija o por necesidades de seguridad legítimas.",
        "Los plazos exactos de eliminación pueden variar según el producto y los requisitos legales; esta política no se compromete a un número fijo de días.",
      ],
    },
    thirdParties: {
      heading: "Servicios de terceros",
      paragraphs: [
        "La plataforma puede depender de proveedores de infraestructura de confianza para autenticación, alojamiento, bases de datos, almacenamiento y servicios técnicos similares.",
        "Cuando se utilizan opciones de inicio de sesión mediante OAuth o similares, el proveedor de identidad correspondiente puede aplicar sus propias prácticas de privacidad. Esta política no cubre todas las prácticas de dichos proveedores.",
        "Los terceros procesan datos solo en la medida necesaria para operar el servicio. Esta sección no incluye nombres de proveedores de pago ni de socios no verificados.",
      ],
    },
    children: {
      heading: "Privacidad de los menores",
      paragraphs: [
        "ART-IST.CLUB no está diseñado como un servicio dirigido a menores. Las personas por debajo de la edad legal mínima no deben utilizar la plataforma.",
        "Cuando las normas aplicables exijan el consentimiento de padres o tutores, dichas normas serán de aplicación. Si se recopilan por error datos de menores, se prevé su eliminación adecuada una vez identificados.",
      ],
    },
    updates: {
      heading: "Actualizaciones de la política",
      paragraphs: [
        "Esta Política de privacidad puede actualizarse con el tiempo. Una versión actualizada entra en vigor al publicarse en esta página.",
        "Se procurará notificar a los usuarios en caso de cambios sustanciales. El uso continuado de la plataforma tras una actualización implica la aceptación de la política revisada.",
      ],
    },
    relatedPages: {
      heading: "Páginas relacionadas",
      intro:
        "Puede consultar estas páginas relacionadas junto con la Política de privacidad.",
      items: [
        { id: "terms", label: "Términos de Uso", href: "/legal/terms" },
        { id: "cookies", label: "Política de cookies", href: "/legal/cookies" },
        { id: "refund", label: "Política de reembolso", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Condiciones de suscripción",
          href: "/legal/subscription",
        },
        { id: "contact", label: "Contacto", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Siga explorando con confianza",
      description:
        "Descubra artistas, cree una cuenta o contáctenos para solicitudes relacionadas con la privacidad.",
    },
  },
  cookies: {
    slug: "cookies",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Finalidad de esta Política de cookies",
      paragraphs: [
        "Esta Política de cookies explica cómo ART-IST.CLUB utiliza cookies y tecnologías similares.",
        "Su finalidad es respaldar el funcionamiento seguro de la plataforma, mantener configuraciones esenciales de la experiencia como la preferencia de idioma, e informar claramente a los usuarios. Lea esta política junto con la Política de privacidad.",
        "Aquí solo se describen categorías generales acordes con el uso actual de la plataforma. No se inventan redes publicitarias, productos de análisis ni nombres de proveedores de marketing que no se utilizan.",
      ],
    },
    whatAreCookies: {
      heading: "¿Qué son las cookies?",
      paragraphs: [
        "Las cookies son pequeños archivos de texto que un sitio web coloca en su navegador. Tecnologías similares (por ejemplo, el almacenamiento local) también pueden conservar información de preferencia o de sesión en su dispositivo.",
        "Las cookies pueden respaldar funciones esenciales como la continuidad de la sesión, la seguridad y la preferencia de idioma. Algunas cookies se eliminan al cerrar el navegador; otras pueden permanecer más tiempo.",
      ],
    },
    categories: {
      heading: "Categorías de cookies en uso",
      intro:
        "Las categorías siguientes se agrupan según la finalidad tecnológica. Cada estado refleja la práctica actual de la plataforma.",
      items: [
        {
          id: "essential",
          title: "Esenciales",
          status: "Activo",
          description:
            "Cookies o tecnologías similares que pueden ser necesarias para funciones esenciales de seguridad, sesión y autenticación. Sin ellas, el inicio de sesión y la protección de la cuenta podrían no funcionar correctamente.",
        },
        {
          id: "functional",
          title: "Funcionales",
          status: "Limitado / según necesidad",
          description:
            "Tecnologías funcionales que ayudan a que determinadas funciones operen correctamente. Se utilizan solo en la medida necesaria para prestar el servicio y no constituyen una red publicitaria independiente.",
        },
        {
          id: "performance",
          title: "Rendimiento / Análisis",
          status: "Sin análisis activo de terceros",
          description:
            "ART-IST.CLUB no utiliza actualmente un proveedor de cookies de análisis o rendimiento de terceros independiente. Pueden producirse registros técnicos limitados de origen propio por motivos de seguridad y operación; eso no constituye medición publicitaria.",
        },
        {
          id: "preference",
          title: "Preferencia",
          status: "Activo",
          description:
            "Se utilizan para recordar configuraciones de la experiencia como la preferencia de idioma. Por ejemplo, la cookie de la plataforma que almacena la elección de idioma para que las páginas se carguen de forma coherente en el idioma seleccionado.",
        },
        {
          id: "marketing",
          title: "Marketing (futuro)",
          status: "No activo",
          description:
            "Las cookies para publicidad, retargeting o medición de marketing no están actualmente activas. Si esta categoría se introduce más adelante, esta política se actualizará; no se presenta como activa en la actualidad.",
        },
      ],
    },
    browserControls: {
      heading: "Gestionar las cookies en su navegador",
      paragraphs: [
        "La mayoría de los navegadores permiten ver, bloquear o eliminar cookies. Los controles varían según el navegador y suelen encontrarse en la configuración de privacidad o seguridad.",
        "Bloquear las cookies esenciales puede afectar el inicio de sesión, la coherencia del idioma u otras funciones esenciales. Eliminar las cookies de preferencia puede requerir que vuelva a establecer el idioma.",
        "Los controles del navegador afectan su experiencia en la plataforma; para derechos de privacidad y solicitudes de datos, consulte las indicaciones de la Política de privacidad y de la página de Contacto.",
      ],
    },
    thirdParties: {
      heading: "Servicios de terceros",
      paragraphs: [
        "La plataforma puede depender de proveedores técnicos para la autenticación, el alojamiento y una infraestructura similar. Dichos proveedores pueden utilizar cookies o tecnologías similares necesarias para operar el servicio.",
        "Esta política no incluye redes publicitarias, paneles de análisis ni píxeles de marketing no utilizados. Cuando se utilizan opciones de inicio de sesión mediante OAuth o similares, también pueden aplicarse las propias prácticas del proveedor de identidad correspondiente.",
        "Para conocer el marco más amplio del tratamiento de datos personales, consulte la Política de privacidad.",
      ],
    },
    updates: {
      heading: "Actualizaciones de la política",
      paragraphs: [
        "Esta Política de cookies puede actualizarse con el tiempo. Una versión actualizada entra en vigor al publicarse en esta página.",
        "Si se introducen nuevas categorías de cookies o prácticas de terceros, la política se actualizará en consecuencia.",
      ],
    },
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Puede consultar estas páginas junto con la Política de cookies.",
      items: [
        { id: "privacy", label: "Política de privacidad", href: "/legal/privacy" },
        { id: "terms", label: "Términos de Uso", href: "/legal/terms" },
        { id: "contact", label: "Contacto", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Siga adelante con información clara",
      description:
        "Descubra la plataforma, cree una cuenta o contáctenos si tiene preguntas.",
    },
  },
  refund: {
    slug: "refund",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Finalidad de esta política",
      paragraphs: [
        "Esta Política de reembolso explica el enfoque general de ART-IST.CLUB respecto de los reembolsos para servicios de membresía y suscripción de pago que puedan ofrecerse en el futuro.",
        "Su finalidad es ayudar a los usuarios a comprender cómo se tratarán las cuestiones de reembolso cuando se ofrezca un servicio de pago. Este texto no crea un derecho automático de reembolso ni una garantía dentro de un plazo fijo.",
      ],
    },
    scope: {
      heading: "Alcance",
      paragraphs: [
        "Esta política está diseñada para aplicarse a membresías de pago, suscripciones o servicios de acceso digital similares que puedan ofrecerse en la plataforma en el futuro.",
        "En esta página no se promete un flujo de pago activo en la plataforma. Cuando se lance un servicio de pago, los términos correspondientes se aclararán a través de la experiencia de compra y de la página de Condiciones de suscripción.",
        "Los pagos de proyectos entre artistas y clientes quedan fuera del alcance de esta política, ya que ART-IST.CLUB no es parte de dichos acuerdos.",
      ],
    },
    purchaseProcess: {
      heading: "Proceso de compra",
      paragraphs: [
        "Cuando se ofrezca una membresía o suscripción de pago, la práctica prevista es presentar los términos correspondientes antes de completar el pago.",
        "Los usuarios son responsables de revisar los términos mostrados en el momento de la compra. No complete el pago a menos que acepte dichos términos.",
        "Los términos presentados deben leerse junto con las Condiciones de suscripción, los Términos de Uso y esta Política de reembolso.",
      ],
    },
    evaluation: {
      heading: "Cómo se evalúan las solicitudes de reembolso",
      paragraphs: [
        "Las solicitudes de reembolso pueden revisarse según su propio contexto, en función de la naturaleza del servicio, los términos de compra y las normas aplicables.",
        "No existe el compromiso de que toda solicitud se apruebe automáticamente o se resuelva dentro de un número fijo de días. Los resultados pueden variar según las circunstancias.",
        "Las indicaciones para presentar solicitudes se aclararán a través del flujo de compra correspondiente y de la página de Contacto cuando los servicios de pago estén disponibles.",
      ],
    },
    cancellation: {
      heading: "Cancelación de la suscripción",
      paragraphs: [
        "Cancelar una suscripción no es lo mismo que recibir un reembolso. La cancelación puede detener futuras renovaciones; un reembolso se refiere a la devolución de un pago ya realizado.",
        "Incluso cuando existe una opción de cancelación, los reembolsos por periodos pasados no se generan automáticamente. Los reembolsos se evalúan en el marco de esta política y de los términos mostrados en el momento de la compra.",
        "La distinción entre cancelación y reembolso debe leerse junto con la página de Condiciones de suscripción.",
      ],
    },
    exceptions: {
      heading: "Excepciones",
      paragraphs: [
        "Algunas solicitudes pueden evaluarse de forma distinta en función de los requisitos legales y las condiciones aplicables.",
        "Esta página no enumera todos los escenarios posibles. La evaluación sigue las normas aplicables, la naturaleza del servicio y los términos presentados en el momento de la compra.",
        "Pueden aplicarse restricciones de acceso en casos de abuso, sospecha de fraude o incumplimiento de políticas, y estas situaciones pueden afectar la evaluación del reembolso.",
      ],
    },
    updates: {
      heading: "Actualizaciones de la política",
      paragraphs: [
        "Esta Política de reembolso puede actualizarse con el tiempo. Una versión actualizada entra en vigor al publicarse en esta página.",
        "A medida que se lancen servicios de pago o se aclaren los procesos, la política se actualizará en consecuencia. Se procurará notificar a los usuarios en caso de cambios sustanciales.",
      ],
    },
    relatedPages: {
      heading: "Páginas relacionadas",
      intro:
        "Puede consultar estas páginas relacionadas junto con la Política de reembolso.",
      items: [
        {
          id: "subscription",
          label: "Condiciones de suscripción",
          href: "/legal/subscription",
        },
        { id: "terms", label: "Términos de Uso", href: "/legal/terms" },
        { id: "privacy", label: "Política de privacidad", href: "/legal/privacy" },
        { id: "contact", label: "Contacto", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Siga explorando la plataforma",
      description:
        "Descubra artistas, cree una cuenta o contáctenos si tiene preguntas.",
    },
  },
  subscription: {
    slug: "subscription",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Finalidad de estas Condiciones de suscripción",
      paragraphs: [
        "Estas Condiciones de suscripción explican los principios generales de funcionamiento de los servicios de membresía y suscripción de pago que podrían ofrecerse en ART-IST.CLUB en el futuro.",
        "El objetivo es ayudar a los usuarios a comprender la selección de planes, el inicio, la renovación y la cancelación dentro de un marco claro y profesional. Esta página no incluye precios, monedas, campañas, períodos de prueba ni nombres de proveedores de pago.",
        "Cuando se lance un servicio de pago, las condiciones mostradas en el momento de la compra deberán leerse junto con los Términos de Uso, la Política de privacidad y la Política de reembolso.",
      ],
    },
    membershipPlans: {
      heading: "Planes de membresía",
      paragraphs: [
        "ART-IST.CLUB podría ofrecer en el futuro planes de membresía o suscripción con distintos niveles de funciones además del acceso básico.",
        "Los nombres, el alcance y el contenido de los planes solo son válidos cuando se publican en la plataforma. Esta página no se compromete con un paquete, precio o campaña específicos.",
        "Si existieran programas especiales como Founding Artist, sus condiciones se explicarán por separado en las páginas de campaña o membresía correspondientes.",
      ],
    },
    start: {
      heading: "Inicio de la suscripción",
      paragraphs: [
        "Cuando se ofrezca una suscripción o membresía de pago, el acceso comenzará una vez completado el proceso de compra y aceptadas las condiciones correspondientes.",
        "El momento de inicio depende del plan seleccionado, el tipo de cuenta y las condiciones mostradas en el momento de la compra. Este texto no define un intervalo de facturación fijo ni una fecha de inicio concreta.",
        "Se prevé presentar las condiciones correspondientes antes de completar el pago.",
      ],
    },
    renewal: {
      heading: "Principio de renovación",
      paragraphs: [
        "En un modelo de suscripción, el acceso puede estar diseñado para renovarse salvo que se indique lo contrario. El funcionamiento de la renovación se explicará en el proceso de compra y en las condiciones correspondientes cuando se ofrezca un plan.",
        "Esta página no publica fechas de renovación automática, intervalos de facturación ni importes de tarifas. Los detalles de la renovación siguen únicamente las condiciones actualmente publicadas en la plataforma.",
        "Los usuarios son responsables de comprobar el estado de su plan a través de la configuración de la cuenta o de la interfaz de compra antes de la renovación.",
      ],
    },
    cancellation: {
      heading: "Cancelación de la suscripción",
      paragraphs: [
        "Cuando se ofrezca una suscripción de pago, se prevé que los usuarios tengan acceso a opciones de cancelación. La cancelación puede detener futuras renovaciones.",
        "La cancelación no equivale a un reembolso. Las cuestiones de reembolso se evalúan conforme a la Política de reembolso.",
        "El momento en que la cancelación surte efecto depende de las condiciones mostradas cuando se ofrece el plan. Esta página no crea una ventana de cancelación fija ni garantiza un reembolso.",
      ],
    },
    accountResponsibility: {
      heading: "Responsabilidad de la cuenta",
      paragraphs: [
        "El acceso a la suscripción o membresía se gestiona a través de su cuenta. Usted es responsable de la exactitud y la seguridad de la información de su cuenta.",
        "Las acciones de suscripción realizadas a través de su cuenta están vinculadas a la titularidad de la cuenta. Mantenga sus credenciales confidenciales para evitar un uso no autorizado.",
        "El acceso a la suscripción puede suspenderse o finalizarse en casos de incumplimiento de las normas, abuso o riesgo de seguridad.",
      ],
    },
    serviceChanges: {
      heading: "Cambios en el servicio",
      paragraphs: [
        "ART-IST.CLUB se reserva el derecho de actualizar, modificar o eliminar funciones de membresía, estructuras de planes o experiencias de suscripción.",
        "Se prevé notificar a los usuarios en caso de cambios significativos. Los cambios pueden realizarse por motivos de desarrollo del producto, seguridad, rendimiento o requisitos legales.",
        "Estas Condiciones de suscripción pueden actualizarse con el tiempo. Una versión actualizada entra en vigor cuando se publica en esta página.",
      ],
    },
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Estas páginas pueden consultarse junto con las Condiciones de suscripción.",
      items: [
        { id: "terms", label: "Términos de Uso", href: "/legal/terms" },
        { id: "privacy", label: "Política de privacidad", href: "/legal/privacy" },
        { id: "refund", label: "Política de reembolso", href: "/legal/refund" },
        { id: "contact", label: "Contacto", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Continúe explorando la plataforma",
      description:
        "Descubra artistas, cree una cuenta o contáctenos si tiene preguntas.",
    },
  },
  company: {
    slug: "company",
    updatedAt: "2026-07-14",
    companyInformation: {
      heading: "Información de la empresa",
      paragraphs: [
        "ART-IST.CLUB opera como una plataforma digital global de descubrimiento de artistas y conexiones profesionales.",
        "Operador / responsable del tratamiento: Atilla Demirkıran.",
        "Ubicación: İzmir, Türkiye.",
        "Correo de contacto: info@art-ist.club",
        "Sitio web: art-ist.club",
        "Esta página no publica número de teléfono, dirección postal completa, NIF, documento de identidad nacional, MERSIS ni datos del registro mercantil. Solo se muestran datos verificados y autorizados para su publicación.",
      ],
    },
    legalTransparency: {
      heading: "Transparencia legal",
      paragraphs: [
        "ART-IST.CLUB tiene como objetivo compartir información oficial con los usuarios, socios y equipos de revisión de forma actual y verificada.",
        "La transparencia no significa publicar datos de identidad provisionales o inventados. Significa divulgar de forma clara los registros verificados cuando estén disponibles.",
        "El propósito de la plataforma y su funcionamiento se explican en la página Acerca de; las indicaciones de contacto están disponibles en la página de Contacto.",
      ],
    },
    corporateCompliance: {
      heading: "Cumplimiento corporativo",
      paragraphs: [
        "La plataforma está diseñada y se opera con el objetivo de cumplir con las obligaciones legales aplicables. Los Términos de Uso, la Política de privacidad y las páginas legales relacionadas forman parte de este enfoque.",
        "Un compromiso de cumplimiento no implica completar campos de identidad corporativa pendientes con datos sin verificar. Los datos oficiales de constitución aparecerán aquí cuando estén disponibles.",
        "Los marcos generales sobre pagos, suscripciones y reembolsos se encuentran en las páginas legales relacionadas; esta página no contiene información comercial de facturación ni datos registrales.",
      ],
    },
    futureUpdates: {
      heading: "Actualizaciones futuras",
      paragraphs: [
        "Esta página se actualizará conforme se finalice la información de la empresa. Una versión actualizada entra en vigor al publicarse aquí.",
        "La información publicada procederá únicamente de registros corporativos verificados. Se procurará notificar a los usuarios en caso de actualizaciones sustanciales.",
        "Esta página no incluye valores provisionales o de ejemplo para los campos de identidad oficial.",
      ],
    },
    relatedPages: {
      heading: "Páginas relacionadas",
      intro: "Puede consultar estas páginas para conocer el contexto corporativo y legal.",
      items: [
        { id: "about", label: "Acerca de", href: "/about" },
        { id: "contact", label: "Contacto", href: "/contact" },
        { id: "terms", label: "Términos de Uso", href: "/legal/terms" },
        { id: "privacy", label: "Política de privacidad", href: "/legal/privacy" },
      ],
    },
    finalCta: {
      heading: "Siga explorando la plataforma",
      description:
        "Descubra artistas, cree una cuenta o contáctenos si tiene preguntas.",
    },
  },
  ...turkeyNoticesEs,
};
