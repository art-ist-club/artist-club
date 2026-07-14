import type { LegalNoticePageContent } from "@/content/types";

const CONTACT = "info@art-ist.club";
const OPERATOR = "Atilla Demirkıran";
const LOCATION = "İzmir, Türkiye";
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

export const turkeyNoticesTr: TurkeyNotices = {
  kvkk: {
    slug: "kvkk",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "controller",
        heading: "Veri sorumlusunun kimliği",
        paragraphs: [
          `${BRAND} platformunda kişisel verilerinizin veri sorumlusu ${OPERATOR}’dır. Marka adı: ${BRAND}. Konum: ${LOCATION}. Web sitesi: ${SITE}.`,
          `Başvuru ve iletişim için e-posta: ${CONTACT}. Bu metinde telefon numarası, açık adres, vergi numarası, kimlik numarası, MERSİS veya ticaret sicil bilgisi yayınlanmamaktadır.`,
        ],
      },
      {
        id: "categories",
        heading: "İşlenen kişisel veri kategorileri",
        paragraphs: [
          "Kimlik ve hesap verileri: ad/görünen ad, e-posta, hesap tipi ve kimlik doğrulama ile ilişkili kayıtlar.",
          "Profil ve içerik verileri: biyografi, kategori, dil, konum tercihleri, fotoğraf, video, galeri ve benzeri profesyonel içerikler.",
          "İşlem ve iletişim verileri: iş talepleri, mesajlaşma içerikleri, favoriler ve platform içi etkileşim kayıtları.",
          "Teknik ve güvenlik verileri: oturum, cihaz/tarayıcı bilgileri, log kayıtları ve güvenlik incelemelerine ilişkin teknik veriler.",
          "Ücretli hizmetler sunulduğunda: abonelik/işlem durumu ve faturalandırmaya ilişkin zorunlu işlem kayıtları. Ödeme sağlayıcısı kart verilerini kendi altyapısında işleyebilir; kart numarası gibi hassas ödeme verileri platformda tutulmaz.",
        ],
      },
      {
        id: "purposes",
        heading: "İşleme amaçları",
        paragraphs: [
          "Hesap oluşturma ve yönetimi, kimlik doğrulama, profil ve keşif deneyiminin sunulması.",
          "İş talebi ve mesajlaşma altyapısının işletilmesi, favori ve benzeri kullanıcı özelliklerinin sağlanması.",
          "Güvenlik, kötüye kullanımın önlenmesi, hata giderme ve hizmetin geliştirilmesi.",
          "Yasal yükümlülüklerin yerine getirilmesi; ücretli hizmet sunulduğunda abonelik/işlem kayıtlarının tutulması.",
          "Açık rızaya dayalı işlemler yalnızca ayrı rıza alındığında ve rıza kapsamıyla sınırlı olarak yürütülür.",
        ],
      },
      {
        id: "legal-bases",
        heading: "Hukuki sebepler",
        paragraphs: [
          "KVKK m.5 kapsamında; sözleşmenin kurulması veya ifası, hukuki yükümlülük, meşru menfaat (güvenlik, hizmet işletimi) ve gerektiğinde açık rıza hukuki sebepleri değerlendirilir.",
          "Aydınlatma metni onay metni değildir. Hesap açmak için “aydınlatmayı onaylıyorum” şeklinde bir zorunluluk kurgulanmaz; metin kullanıcının bilgilendirilmesi içindir.",
        ],
      },
      {
        id: "recipients",
        heading: "Aktarım yapılan alıcı grupları",
        paragraphs: [
          "Hizmetin işletilmesi için gerekli ölçüde barındırma, kimlik doğrulama, veri tabanı, depolama ve benzeri altyapı sağlayıcıları.",
          "Ücretli hizmetlerde ödeme ve faturalandırma süreçlerine katılan yetkili iş ortakları; yalnızca gerekli ölçüde.",
          "Kanunen yetkili kamu kurum ve kuruluşları (zorunlu hallerde).",
          "Yurt dışına aktarım söz konusu olursa, yürürlükteki KVKK kurallarına uygun güvenceler değerlendirilir. Bu metin özel bir ülke/sunucu adresi uydurmaz.",
        ],
      },
      {
        id: "collection",
        heading: "Toplama yöntemi",
        paragraphs: [
          "Veriler; kayıt/giriş formları, profil kurulum adımları, iş talebi ve mesajlaşma arayüzleri, favori işlemleri ve teknik loglar aracılığıyla elektronik ortamda toplanır.",
          "OAuth veya benzeri giriş kullanıldığında, kimlik sağlayıcısından hizmetin çalışması için gerekli bilgiler alınabilir.",
        ],
      },
      {
        id: "retention",
        heading: "Saklama yaklaşımı",
        paragraphs: [
          "Veriler; hesabın aktifliği, hizmetin sunulması, güvenlik, uyuşmazlık ve yasal saklama yükümlülükleri için gerekli süre boyunca tutulabilir.",
          "Hesap kapatıldığında bazı veriler silinebilir veya anonimleştirilebilir; zorunlu kayıtlar daha uzun süre saklanabilir. Bu metin sabit bir gün sayısı taahhüt etmez.",
        ],
      },
      {
        id: "rights",
        heading: "İlgili kişi hakları",
        paragraphs: [
          "KVKK m.11 kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme/yok etme, işlemeyi kısıtlama, itiraz etme ve kanundaki diğer haklarınızı kullanabilirsiniz.",
          "Hak talepleriniz için e-posta kanalını kullanın: " + CONTACT,
        ],
      },
      {
        id: "application",
        heading: "Başvuru yöntemi",
        paragraphs: [
          `Başvurularınızı ${CONTACT} adresine iletebilirsiniz. Kimlik doğrulama ve talebin netleştirilmesi için ek bilgi istenebilir.`,
          "Yanıt süresi, yürürlükteki kurallara ve talebin niteliğine göre değişebilir. Bu metin sabit bir süre garantisi vermez.",
        ],
      },
    ],
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro: "Aydınlatma metniyle birlikte inceleyebileceğiniz sayfalar:",
      items: [
        { id: "privacy", label: "Gizlilik Politikası", href: "/legal/privacy" },
        { id: "terms", label: "Kullanım Koşulları", href: "/legal/terms" },
        {
          id: "explicit",
          label: "Açık Rıza Metni",
          href: "/legal/explicit-consent",
        },
        { id: "contact", label: "İletişim", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Platformu kullanmaya devam edin",
      description:
        "Sanatçıları keşfedin, üye olun veya gizlilik talepleriniz için yazın.",
    },
  },

  explicitConsent: {
    slug: "explicit-consent",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "scope",
        heading: "Kapsam",
        paragraphs: [
          "Bu metin, KVKK kapsamında açık rıza gerektiren işlemler için hazırlanmıştır. Aydınlatma metninin tekrarı değildir ve hesap açmanın zorunlu koşulu olarak kurgulanmaz.",
          "Açık rıza; özgür iradeye dayalı, belirli bir konuya ilişkin, bilgilendirmeye dayanan ve isteğe bağlı olmalıdır. Varsayılan işaretli onay kullanılmaz.",
        ],
      },
      {
        id: "when-needed",
        heading: "Ne zaman gerekebilir?",
        paragraphs: [
          "Platformun temel hizmetlerini (hesap, profil, keşif, iş talebi, mesajlaşma) sunmak için her işlemde açık rıza şart değildir; ilgili hukuki sebepler aydınlatma metninde açıklanır.",
          "Özellikle özel nitelikli kişisel veri işleme, isteğe bağlı profil görünürlük paylaşımı veya zorunlu hizmet kapsamı dışında kalan işleme senaryolarında ayrı açık rıza alınabilir.",
          "Pazarlama / ticari elektronik ileti izni bu metnin konusu değildir; o izin ayrı bir opsiyonel onay sürecine tabidir.",
        ],
      },
      {
        id: "granular",
        heading: "Granüler ve geri alınabilir rıza",
        paragraphs: [
          "Açık rıza isteniyorsa konu bazında sunulur. Kullanıcı istediği öğeleri seçebilir; seçmediği işlemler için rıza varmış sayılmaz.",
          "Rıza daha sonra geri alınabilir. Rızanın geri alınması, rıza dayanaklı işlemenin ileriye dönük olarak durdurulmasını hedefler; yasal saklama yükümlülüklerini ortadan kaldırmaz.",
        ],
      },
      {
        id: "evidence",
        heading: "Kayıt ve kanıt",
        paragraphs: [
          "Açık rıza alındığında; zaman damgası, metin sürümü ve seçilen izin kapsamı teknik olarak kaydedilebilir. Bu kayıtlar yalnızca uyumluluk ve denetim amaçlıdır.",
          `Sorularınız için: ${CONTACT}`,
        ],
      },
    ],
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro: "Açık rıza ile birlikte okunması önerilen metinler:",
      items: [
        { id: "kvkk", label: "KVKK Aydınlatma Metni", href: "/legal/kvkk" },
        { id: "privacy", label: "Gizlilik Politikası", href: "/legal/privacy" },
        {
          id: "email",
          label: "Ticari Elektronik İleti",
          href: "/legal/electronic-communications",
        },
        { id: "contact", label: "İletişim", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Kontrol sizde",
      description:
        "Platformu kullanırken yalnızca istediğiniz isteğe bağlı izinleri verin.",
    },
  },

  electronicCommunications: {
    slug: "electronic-communications",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "purpose",
        heading: "Amaç",
        paragraphs: [
          "Bu metin; kampanya, fırsat, duyuru ve benzeri ticari içerikli e-posta iletişimi için isteğe bağlı izin bilgilendirmesidir.",
          "Hesap açmak veya platformu kullanmak için zorunlu değildir. Varsayılan olarak kapalıdır. SMS veya telefon araması kanalı şu anda kullanılmamaktadır.",
        ],
      },
      {
        id: "channel",
        heading: "Kanal",
        paragraphs: [
          `İletişim kanalı yalnızca e-posta olabilir. İzin verdiğinizde ${BRAND} markası adına ${CONTACT} veya platformun yetkili e-posta altyapısı üzerinden bilgilendirme gönderilebilir.`,
        ],
      },
      {
        id: "withdrawal",
        heading: "İznin geri alınması",
        paragraphs: [
          "İzni dilediğiniz zaman geri çekebilirsiniz. Geri çekme; e-posta içindeki vazgeç bağlantısı, hesap ayarları (sunulduğunda) veya " +
            CONTACT +
            " üzerinden iletilir.",
          "İYS ve yürürlükteki elektronik ticaret mevzuatına uygun kayıt ve ret süreçleri, sistemler hazır olduğunda uygulanır. Bu metin sahte İYS numarası veya kurum bilgisi içermez.",
        ],
      },
      {
        id: "no-condition",
        heading: "Zorunluluk yasağı",
        paragraphs: [
          "Ticari elektronik ileti izni; kayıt, giriş veya temel hizmet kullanımı için ön koşul değildir. İzin vermezseniz platformun temel işlevlerini kullanabilirsiniz.",
        ],
      },
    ],
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro: "İlgili gizlilik metinleri:",
      items: [
        { id: "kvkk", label: "KVKK Aydınlatma Metni", href: "/legal/kvkk" },
        {
          id: "consent",
          label: "Açık Rıza Metni",
          href: "/legal/explicit-consent",
        },
        { id: "privacy", label: "Gizlilik Politikası", href: "/legal/privacy" },
        { id: "contact", label: "İletişim", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "İletişim tercihlerinizi yönetin",
      description:
        "Kampanya e-postası istemiyorsanız izin vermeniz gerekmez.",
    },
  },

  distanceSalesPreliminary: {
    slug: "distance-sales-preliminary",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "provider",
        heading: "Hizmet sağlayıcı bilgileri",
        paragraphs: [
          `Hizmet markası: ${BRAND}. Hizmet sağlayıcı / işletmeci: ${OPERATOR}. Konum: ${LOCATION}. Web: ${SITE}. E-posta: ${CONTACT}.`,
          "Telefon, açık adres, vergi numarası, MERSİS ve ticaret sicil bilgileri bu aşamada yayınlanmamaktadır. Bu alanlar kesinleşince ilgili sayfalarda güncellenir.",
        ],
      },
      {
        id: "service",
        heading: "Hizmetin temel nitelikleri",
        paragraphs: [
          `${BRAND}; sanatçı keşfi, profesyonel profil, iş talebi ve mesajlaşma altyapısı sunan dijital bir platformdur.`,
          "Ücretli üyelik/abonelik hizmetleri sunulduğunda, bu hizmetler dijital erişim niteliğindedir. Ödeme henüz aktif olmayabilir; checkout açıldığında nihai kapsam ödeme ekranında gösterilir.",
        ],
      },
      {
        id: "price",
        heading: "Fiyat ve para birimi",
        paragraphs: [
          "Ücretli hizmet sunulduğunda fiyat, vergiler ve varsa ek bedeller ödeme/checkout ekranında açıkça gösterilir.",
          "Para birimi USD olarak planlanmıştır. Bu metin sabit bir fiyat tutarı yayınlamaz.",
        ],
      },
      {
        id: "payment",
        heading: "Ödeme yöntemi",
        paragraphs: [
          "Ödeme yöntemi ve ödeme sağlayıcısı bilgisi, ödeme ekranında gösterilir. Bu metinde ödeme sağlayıcı marka adı uydurulmaz.",
          "Kart verileri gibi hassas ödeme bilgileri, ilgili ödeme altyapısı tarafından işlenebilir.",
        ],
      },
      {
        id: "duration-renewal",
        heading: "Süre ve yenileme",
        paragraphs: [
          "Abonelik süresi ve yenileme biçimi, sunulan plana ve checkout’ta gösterilen koşullara bağlıdır.",
          "Otomatik yenileme prensibi uygulanabilir; yenilemenin nasıl işleyeceği satın alma anında açıklanır. Bu sayfa sabit faturalandırma aralığı veya yenileme tarihi yayınlamaz.",
        ],
      },
      {
        id: "cancel-withdraw",
        heading: "İptal ve cayma",
        paragraphs: [
          "İptal ve cayma süreçleri; İptal ve Cayma Süreci sayfası ile İade Politikası’nda açıklanır.",
          "14 günlük cayma hakkı prensibi, uygulanabilir mevzuat ve dijital hizmet istisnalarına bağlıdır. Cayma her durumda otomatik iade anlamına gelmez.",
        ],
      },
      {
        id: "performance",
        heading: "Dijital hizmetin ifası",
        paragraphs: [
          "Dijital abonelik/üyelik erişimi, satın alma tamamlandıktan sonra hesap üzerinden sağlanır.",
          "Kullanıcıya; ifanın ne zaman başlayacağı ve cayma hakkına etkisi checkout ve sözleşme metinlerinde bildirilir.",
        ],
      },
      {
        id: "complaints",
        heading: "Şikâyet ve başvuru",
        paragraphs: [
          `Şikâyet ve başvurular için: ${CONTACT}. Ayrıca İletişim sayfasındaki yönlendirmeler kullanılabilir.`,
          "Uyuşmazlık çözümüne ilişkin süreçler, yürürlükteki mevzuata tabidir. Bu metin kesinleşmemiş mahkeme, parasal sınır veya kurum bilgisi eklemez.",
        ],
      },
    ],
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro: "Ön bilgilendirme ile birlikte:",
      items: [
        {
          id: "agreement",
          label: "Mesafeli Sözleşme",
          href: "/legal/distance-sales-agreement",
        },
        {
          id: "cancel",
          label: "İptal ve Cayma",
          href: "/legal/cancellation",
        },
        { id: "refund", label: "İade Politikası", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Abonelik Koşulları",
          href: "/legal/subscription",
        },
      ],
    },
    finalCta: {
      heading: "Ödeme açıldığında net koşullar gösterilir",
      description:
        "Checkout yayınlandığında fiyat, süre ve ödeme detayları ekranda yer alır.",
    },
  },

  distanceSalesAgreement: {
    slug: "distance-sales-agreement",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "parties",
        heading: "Taraflar",
        paragraphs: [
          `Bu sözleşme; ${BRAND} ücretli dijital üyelik/abonelik hizmetinin sağlayıcısı ${OPERATOR} ile hizmeti satın alan kullanıcı arasında kurulacak mesafeli hizmet ilişkisine ilişkin genel çerçeveyi tanımlar.`,
          `İletişim: ${CONTACT}. Konum: ${LOCATION}.`,
        ],
      },
      {
        id: "subject",
        heading: "Konu",
        paragraphs: [
          "Sözleşme konusu; platform üzerinden sunulabilecek ücretli dijital erişim, üyelik veya abonelik hizmetidir.",
          "Bu metin checkout’a bağlı değildir. Ödeme aktif olduğunda nihai koşullar ödeme ekranı ve bu sözleşme ile birlikte geçerlilik kazanır.",
        ],
      },
      {
        id: "consistency",
        heading: "Diğer politikalarla uyum",
        paragraphs: [
          "Bu sözleşme; Kullanım Koşulları, Abonelik Koşulları, İade Politikası, İptal ve Cayma Süreci ve Gizlilik/KVKK metinleriyle birlikte okunur.",
          "Çelişki halinde; ücretli hizmete özgü olarak checkout’ta gösterilen güncel koşullar ile mesafeli satış metinleri öncelikli değerlendirmeye alınır.",
        ],
      },
      {
        id: "user-obligations",
        heading: "Kullanıcı yükümlülükleri",
        paragraphs: [
          "Kullanıcı doğru hesap bilgisi vermek, erişim bilgilerini korumak ve hizmeti hukuka uygun kullanmakla yükümlüdür.",
          "Hizmetin üçüncü kişilere izinsiz devri veya kötüye kullanımı yasaktır.",
        ],
      },
      {
        id: "provider-obligations",
        heading: "Sağlayıcı yükümlülükleri",
        paragraphs: [
          "Sağlayıcı; satın alınan dijital erişimi makul özenle sunmayı hedefler. Kesintisiz hizmet garantisi verilmez.",
          "Önemli hizmet değişikliklerinde bilgilendirme hedeflenir.",
        ],
      },
      {
        id: "price-payment",
        heading: "Bedel ve ödeme",
        paragraphs: [
          "Bedel ve vergiler checkout’ta gösterilir. Para birimi USD olarak planlanmıştır. Ödeme sağlayıcısı checkout’ta belirtilir.",
          "Bu sözleşme sabit fiyat veya sağlayıcı markası yayınlamaz.",
        ],
      },
      {
        id: "term",
        heading: "Süre, yenileme, sona erme",
        paragraphs: [
          "Süre ve yenileme; seçilen plan ile checkout koşullarına tabidir. İptal ve cayma kuralları ilgili politikalarda yer alır.",
        ],
      },
      {
        id: "liability",
        heading: "Sorumluluk",
        paragraphs: [
          "Platform “olduğu gibi” sunulur. Yürürlükteki hukukun izin verdiği ölçüde dolaylı zararlardan sorumluluk sınırlıdır. Bu metin yargı yeri ataması yapmaz.",
        ],
      },
    ],
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro: "Sözleşme ile birlikte okuyun:",
      items: [
        {
          id: "prelim",
          label: "Ön Bilgilendirme",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "terms", label: "Kullanım Koşulları", href: "/legal/terms" },
        {
          id: "subscription",
          label: "Abonelik Koşulları",
          href: "/legal/subscription",
        },
        { id: "refund", label: "İade Politikası", href: "/legal/refund" },
      ],
    },
    finalCta: {
      heading: "Satın alma öncesi bilgilendirinin",
      description:
        "Ödeme ekranı açıldığında koşulları dikkatle inceleyin.",
    },
  },

  cancellation: {
    slug: "cancellation",
    updatedAt: "2026-07-14",
    sections: [
      {
        id: "withdrawal",
        heading: "14 günlük cayma hakkı prensibi",
        paragraphs: [
          "Tüketici mevzuatı kapsamında, mesafeli sözleşmelerde 14 günlük cayma hakkı prensibi uygulanabilir.",
          "Dijital hizmetler için mevzuattaki istisnalar ve ifanın başlaması cayma hakkını etkileyebilir. Cayma her durumda otomatik ve koşulsuz iade anlamına gelmez.",
        ],
      },
      {
        id: "cancel-vs-refund",
        heading: "İptal ile iade farkı",
        paragraphs: [
          "Abonelik iptali; gelecekteki yenilemelerin durdurulmasını ifade edebilir. İade ise tamamlanmış bir ödemenin geri verilmesine ilişkindir.",
          "İptal hakkı olsa bile geçmiş dönem ücretlerinin iadesi otomatik doğmaz. İade değerlendirmesi İade Politikası kapsamındadır.",
        ],
      },
      {
        id: "how-to-cancel",
        heading: "İptalin genel adımları",
        paragraphs: [
          "1) Hesabınıza giriş yapın.",
          "2) Ücretli hizmetler yayına alındığında sunulacak abonelik/plan yönetim alanından iptal seçeneğini kullanın.",
          "3) Bu alan henüz yoksa talebinizi " +
            CONTACT +
            " adresine iletin; kimlik doğrulama istenebilir.",
          "4) İptalin ne zaman etkili olacağı, plan koşullarına bağlıdır. Bu sayfa 30 gün önceden iptal zorunluluğu getirmez.",
        ],
      },
      {
        id: "auto-renewal",
        heading: "Otomatik yenilemenin durdurulması",
        paragraphs: [
          "Otomatik yenileme varsa; iptal ile bir sonraki dönemde yenileme durdurulabilir. Kesin etki anı checkout ve abonelik koşullarında belirtilir.",
        ],
      },
      {
        id: "contact",
        heading: "Destek",
        paragraphs: [
          `İptal/cayma talepleri için: ${CONTACT}. Ayrıca İletişim sayfasını kullanabilirsiniz.`,
        ],
      },
    ],
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro: "İptal ve cayma ile ilişkili metinler:",
      items: [
        { id: "refund", label: "İade Politikası", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Abonelik Koşulları",
          href: "/legal/subscription",
        },
        {
          id: "prelim",
          label: "Ön Bilgilendirme",
          href: "/legal/distance-sales-preliminary",
        },
        { id: "contact", label: "İletişim", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Şeffaf iptal süreci hedeflenir",
      description:
        "Ücretli hizmet açıldığında yönetim adımları hesap içinde netleştirilir.",
    },
  },
};
