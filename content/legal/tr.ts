import type { LegalContentBundle } from "@/content/types";
import { turkeyNoticesTr } from "@/content/legal/notices/tr";

export const legalContent: LegalContentBundle = {
  terms: {
    slug: "terms",
    updatedAt: "2026-07-14",
    acceptance: {
      heading: "Genel Kabul",
      paragraphs: [
        "ART-IST.CLUB’a erişerek veya platformu kullanarak bu Kullanım Koşulları’nı okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz.",
        "Koşulları kabul etmiyorsanız platformu kullanmamalısınız. Hesap oluşturma, giriş yapma, profil yayınlama, iş talebi gönderme veya mesajlaşma gibi eylemler kabul anlamına gelir.",
      ],
    },
    purpose: {
      heading: "Platformun Amacı",
      paragraphs: [
        "ART-IST.CLUB; sanatçı keşfi, profesyonel profil oluşturma, iletişim ve iş talebi altyapısı sunan global bir dijital platformdur.",
        "Platform bir ajans, menajerlik şirketi veya işveren değildir. ART-IST.CLUB; sanatçı ile müşteri arasındaki sözleşmenin tarafı olmaz, işi yönetmez ve gelir, proje veya sonuç garantisi vermez.",
        "Amacımız; tarafların birbirini keşfetmesini ve doğrudan bağlantı kurmasını kolaylaştırmaktır.",
      ],
    },
    accounts: {
      heading: "Hesaplar",
      paragraphs: [
        "Hesap oluştururken doğru, güncel ve eksiksiz bilgi vermekle yükümlüsünüz. Yanıltıcı veya başkasına ait bilgilerin kullanılması yasaktır.",
        "Hesap güvenliğinizden siz sorumlusunuz. Giriş bilgilerinizi gizli tutmalı ve yetkisiz erişimi derhal bildirmelisiniz.",
        "Hesabınız üzerinden gerçekleştirilen faaliyetlerden hesabın sahibi olarak sorumlusunuz. Kuralların ihlali halinde hesap askıya alınabilir veya kapatılabilir.",
      ],
    },
    artistContent: {
      heading: "Sanatçı İçerikleri",
      paragraphs: [
        "Profillerinizde, galerilerinizde ve diğer alanlarda paylaştığınız içeriklerden siz sorumlusunuz. Yayınladığınız içeriklerin yasal haklarına sahip olduğunuzu veya gerekli izinleri aldığınızı taahhüt edersiniz.",
        "Telif hakkı ihlali, marka ihlali, hukuka aykırı, nefret içeren, müstehcen veya zararlı içerik yayınlamak yasaktır.",
        "Platform, kurallara aykırı içerikleri kaldırma veya erişimi kısıtlama hakkını saklı tutar.",
      ],
    },
    jobRequests: {
      heading: "İş Talepleri",
      paragraphs: [
        "İş talebi ve mesajlaşma özellikleri, sanatçılar ile müşteriler arasında bağlantı kurulmasını kolaylaştırmak içindir.",
        "Anlaşma, kapsam, ücret, zamanlama ve diğer ticari şartlar doğrudan taraflar arasında belirlenir. ART-IST.CLUB bu anlaşmaların tarafı değildir ve taraflar adına sözleşme yapmaz.",
        "Platform; ödeme tahsilatı, sözleşme yönetimi veya iş sonucu garantisi sunmaz.",
      ],
    },
    prohibited: {
      heading: "Yasak Davranışlar",
      intro:
        "Aşağıdaki davranışlar dahil ancak bunlarla sınırlı olmamak üzere platformun kötüye kullanımı yasaktır:",
      items: [
        "Sahte, yanıltıcı veya yetkisiz hesap oluşturmak",
        "Dolandırıcılık, kimlik hırsızlığı veya mali manipülasyon",
        "Spam, istenmeyen toplu iletişim veya rahatsız edici mesajlar",
        "Taciz, tehdit, ayrımcılık veya nefret içeren davranışlar",
        "Yasadışı içerik yayınlamak veya yasadışı faaliyetleri teşvik etmek",
        "Başka bir kişiyi veya kuruluşu izinsiz taklit etmek",
        "Sistemi, güvenlik önlemlerini veya diğer kullanıcıları hedef alan teknik kötüye kullanım",
      ],
    },
    intellectualProperty: {
      heading: "Fikri Mülkiyet",
      paragraphs: [
        "ART-IST.CLUB markası, logo, tasarım, yazılım, arayüz ve platform içeriğinin platforma ait olan kısımları fikri mülkiyet koruması altındadır.",
        "Kullanıcılar, platformun markasını, tasarımını veya yazılımını izinsiz kopyalayamaz, değiştiremez, dağıtamaz veya ticari olarak kullanamaz.",
        "Kullanıcıların kendi oluşturduğu içeriklerin hakları, yürürlükteki hukuka ve ilgili yasal sayfalara uygun biçimde kullanıcıda kalır; platforma yalnızca hizmetin çalışması için gerekli kullanım izinleri sağlanır.",
      ],
    },
    serviceChanges: {
      heading: "Hizmet Değişiklikleri",
      paragraphs: [
        "ART-IST.CLUB; özellikleri güncelleme, değiştirme, geçici olarak durdurma veya kaldırma hakkını saklı tutar.",
        "Hizmetlerdeki değişiklikler ürün geliştirme, güvenlik, performans veya yasal gereklilikler nedeniyle yapılabilir. Önemli değişikliklerde makul bilgilendirme hedeflenir; ancak kesintisiz veya değişmeyen hizmet taahhüt edilmez.",
      ],
    },
    liability: {
      heading: "Sorumluluğun Sınırlandırılması",
      paragraphs: [
        "Platform “olduğu gibi” sunulur. ART-IST.CLUB; kesintisiz, hatasız veya kesintisiz erişilebilir hizmet garantisi vermez.",
        "Sanatçı ile müşteri arasındaki anlaşmalar, ödemeler, sonuçlar veya zararlar konusunda platform gelir, iş veya sonuç garantisi vermez.",
        "Yürürlükteki hukukun izin verdiği ölçüde, platformun dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumluluğu sınırlıdır. Bu metin belirli bir yargı yetkisi veya mahkeme ataması içermez.",
      ],
    },
    termination: {
      heading: "Hesabın Sonlandırılması",
      paragraphs: [
        "Bu koşulları veya platform politikalarını ihlal eden hesaplar askıya alınabilir veya kapatılabilir.",
        "Güvenlik, kötüye kullanım, dolandırıcılık şüphesi veya yasal gereklilikler nedeniyle erişim kısıtlanabilir.",
        "Hesabınızı kapatmak istiyorsanız İletişim sayfasındaki yönlendirmeleri kullanabilirsiniz.",
      ],
    },
    updates: {
      heading: "Güncellemeler",
      paragraphs: [
        "Bu Kullanım Koşulları zaman içinde güncellenebilir. Güncellenmiş sürüm bu sayfada yayınlandığında geçerlilik kazanır.",
        "Platformu güncellemeden sonra kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir. Önemli değişikliklerde kullanıcı bilgilendirmesi hedeflenir.",
      ],
    },
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro:
        "Aşağıdaki sayfalar Kullanım Koşulları ile birlikte incelenebilir.",
      items: [
        {
          id: "privacy",
          label: "Gizlilik Politikası",
          href: "/legal/privacy",
        },
        {
          id: "cookies",
          label: "Çerez Politikası",
          href: "/legal/cookies",
        },
        {
          id: "refund",
          label: "İade Politikası",
          href: "/legal/refund",
        },
        {
          id: "subscription",
          label: "Abonelik Koşulları",
          href: "/legal/subscription",
        },
        {
          id: "contact",
          label: "İletişim",
          href: "/contact",
        },
      ],
    },
    finalCta: {
      heading: "Platformu keşfetmeye devam edin",
      description:
        "Sanatçıları keşfedin, üye olun veya sorularınız için iletişime geçin.",
    },
  },
  privacy: {
    slug: "privacy",
    updatedAt: "2026-07-14",
    scope: {
      heading: "Kapsam",
      paragraphs: [
        "Bu Gizlilik Politikası, ART-IST.CLUB platformunu kullanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklar.",
        "Politika; hesap oluşturma, profil yönetimi, sanatçı keşfi, iş talepleri, mesajlaşma ve ilgili platform özelliklerini kapsar. Yürürlükteki gizlilik düzenlemeleriyle uyumlu, genel ve profesyonel bir bilgilendirme sunmayı amaçlar.",
        "Bu metin kesinleşmemiş şirket kimliği, adres, telefon veya özel bir veri koruma yetkilisi bilgisi içermez. Bu tür bilgiler yalnızca doğrulanmış biçimde yayınlandığında ilgili sayfalarda yer alır.",
      ],
    },
    dataCollected: {
      heading: "Toplanan Bilgiler",
      paragraphs: [
        "Hesap bilgileri: kayıt ve giriş sırasında sağlanan kimlik doğrulama verileri (örneğin e-posta ve hesap tipi).",
        "Profil bilgileri: sanatçı veya kullanıcı profilinde paylaştığınız ad/görünen ad, biyografi, kategori, konum, dil, görseller, videolar ve benzeri profesyonel bilgiler.",
        "Kullanım ve teknik veriler: platformun güvenli çalışması için gerekli oturum, cihaz veya günlük kayıtlarına ilişkin teknik bilgiler.",
        "İletişim ve talep içerikleri: iş talepleri, mesajlar ve destek yönlendirmeleri kapsamında paylaştığınız bilgiler.",
        "Çerezler ve benzeri teknolojiler hakkındaki ayrıntılar bu sayfada tekrarlanmaz; Çerez Politikası sayfasına bakın.",
      ],
    },
    dataUse: {
      heading: "Bilgilerin Kullanımı",
      paragraphs: [
        "Verileriniz; hesabınızı oluşturmak ve yönetmek, profilinizi sunmak, keşif deneyimini işletmek, iş talebi ve mesajlaşmayı mümkün kılmak, güvenliği sağlamak ve hizmeti geliştirmek için kullanılır.",
        "Veriler, platformun meşru işletimi, kullanıcı taleplerinin yerine getirilmesi, güvenlik ve kötüye kullanımın önlenmesi ile yasal yükümlülüklerin yerine getirilmesi amacıyla işlenebilir.",
        "Sanatçı ve müşteri arasındaki ticari anlaşmalar platformun tarafı olmadığı için, tarafların kendi aralarında paylaştığı bilgilerin içeriğinden kullanıcılar sorumludur.",
      ],
    },
    accountProfile: {
      heading: "Hesap ve Profil Verileri",
      paragraphs: [
        "Hesap verileri kimlik doğrulama ve erişim kontrolü için işlenir. Profilinizi keşfe açtığınızda, seçtiğiniz profesyonel bilgiler diğer kullanıcılar tarafından görüntülenebilir.",
        "Profil görünürlüğü; yayın durumu, hesap tipi ve platform ayarlarına bağlıdır. Yanlış veya yanıltıcı bilgi paylaşmaktan kaçınmalısınız.",
        "Profil içeriğinizden siz sorumlusunuz. Telif hakkı veya gizlilik ihlali oluşturan içerik yayınlamamalısınız.",
      ],
    },
    jobsMessaging: {
      heading: "İş Talepleri ve Mesajlaşma",
      paragraphs: [
        "İş talepleri ve mesajlar, ilgili taraflar arasında bağlantı kurmak amacıyla işlenir ve ilgili hesaplarla ilişkilendirilir.",
        "Mesaj ve talep içerikleri, hizmetin yürütülmesi, güvenlik ve kötüye kullanım incelemesi için gerekli olduğu ölçüde saklanabilir.",
        "Platform, taraflar adına ticari müzakere yürütmez. Paylaşılan proje ayrıntılarından ve anlaşmaların sonucundan kullanıcılar sorumludur.",
      ],
    },
    security: {
      heading: "Güvenlik",
      paragraphs: [
        "Hesap ve veri güvenliği için kimlik doğrulama, erişim kontrolü ve uygun teknik-idari önlemler uygulanır.",
        "Hiçbir sistem mutlak güvenlik garantisi vermez. Yetkisiz erişim şüphesinde hesabınızı güvenceye alın ve İletişim sayfasındaki yönlendirmeleri kullanın.",
        "Altyapı sağlayıcıları üzerinden işlenen veriler, hizmetin güvenli işletimi için uygun koruma hedefleriyle yönetilir.",
      ],
    },
    userRights: {
      heading: "Kullanıcı Hakları",
      paragraphs: [
        "Yürürlükteki hukuka bağlı olarak; erişim, düzeltme, silme, işlemeyi kısıtlama, itiraz etme veya veri taşınabilirliği gibi haklarınız bulunabilir.",
        "Hak talepleriniz için İletişim sayfasındaki yönlendirmeleri kullanın. Doğrulanmış genel e-posta veya DPO bilgisi yayınlanmadığı sürece süreç platform yönlendirmeleri üzerinden ilerler.",
        "Kimliğinizi doğrulamak veya talebin kapsamını netleştirmek için ek bilgi istenebilir. Yanıt süresi, talebin niteliğine ve yürürlükteki kurallara göre değişebilir.",
      ],
    },
    retention: {
      heading: "Veri Saklama",
      paragraphs: [
        "Veriler, hesabın aktifliği, hizmetin sunulması, güvenlik, uyuşmazlık çözümleme ve yasal saklama yükümlülükleri için gerekli olduğu süre boyunca tutulabilir.",
        "Hesap kapatıldığında bazı veriler silinebilir veya anonimleştirilebilir; yasal zorunluluklar veya meşru güvenlik gerekçeleri nedeniyle sınırlı kayıtlar daha uzun süre saklanabilir.",
        "Kesin silme süreleri ürün ve yasal gerekliliklere göre değişebilir; bu politika sabit bir gün sayısı taahhüt etmez.",
      ],
    },
    thirdParties: {
      heading: "Üçüncü Taraf Hizmetleri",
      paragraphs: [
        "Platform; kimlik doğrulama, barındırma, veri tabanı, depolama ve benzeri teknik hizmetler için güvenilir altyapı sağlayıcılarından yararlanabilir.",
        "OAuth veya benzeri giriş seçenekleri kullanıldığında, ilgili kimlik sağlayıcısı kendi gizlilik uygulamalarına tabi olabilir. Bu politika o sağlayıcıların tüm uygulamalarını kapsamaz.",
        "Üçüncü taraflar yalnızca hizmetin işletilmesi için gerekli ölçüde veri işler. Bu bölüm ödeme sağlayıcısı adı veya doğrulanmamış ortak listesi içermez.",
      ],
    },
    children: {
      heading: "Çocukların Gizliliği",
      paragraphs: [
        "ART-IST.CLUB çocuklara yönelik bir hizmet olarak tasarlanmamıştır. Yasal olarak gerekli yaşın altındaki kişiler platformu kullanmamalıdır.",
        "Ebeveyn veya yasal vasi onayı gerektiren durumlarda, yürürlükteki kurallar esas alınır. Yanlışlıkla toplanan çocuk verileri fark edilirse uygun şekilde silinmesi hedeflenir.",
      ],
    },
    updates: {
      heading: "Politika Güncellemeleri",
      paragraphs: [
        "Bu Gizlilik Politikası zaman içinde güncellenebilir. Güncellenmiş sürüm bu sayfada yayınlandığında geçerlilik kazanır.",
        "Önemli değişikliklerde kullanıcı bilgilendirmesi hedeflenir. Platformu güncellemeden sonra kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.",
      ],
    },
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro:
        "Gizlilik ile ilişkili diğer sayfaları birlikte inceleyebilirsiniz.",
      items: [
        { id: "terms", label: "Kullanım Koşulları", href: "/legal/terms" },
        { id: "cookies", label: "Çerez Politikası", href: "/legal/cookies" },
        { id: "refund", label: "İade Politikası", href: "/legal/refund" },
        {
          id: "subscription",
          label: "Abonelik Koşulları",
          href: "/legal/subscription",
        },
        { id: "contact", label: "İletişim", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Güvenle keşfetmeye devam edin",
      description:
        "Sanatçıları keşfedin, üye olun veya gizlilik talepleriniz için iletişime geçin.",
    },
  },
  cookies: {
    slug: "cookies",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Çerez Politikasının Amacı",
      paragraphs: [
        "Bu Çerez Politikası, ART-IST.CLUB’ın çerezleri ve benzeri teknolojileri nasıl kullandığını açıklar.",
        "Amaç; platformun güvenli çalışması, dil tercihi gibi temel deneyimlerin sürdürülmesi ve kullanıcıların şeffaf biçimde bilgilendirilmesidir. Bu politika Gizlilik Politikası ile birlikte okunmalıdır.",
        "Burada yalnızca platformun mevcut kullanımıyla uyumlu genel kategoriler açıklanır. Kullanılmayan reklam ağı, analiz veya pazarlama sağlayıcı adı uydurulmaz.",
      ],
    },
    whatAreCookies: {
      heading: "Çerez nedir?",
      paragraphs: [
        "Çerezler; bir web sitesinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır. Benzer teknolojiler (örneğin yerel depolama) de tercih veya oturum bilgisini cihazda tutabilir.",
        "Çerezler, oturumun sürdürülmesi, güvenlik, dil tercihi gibi temel işlevleri destekleyebilir. Bazı çerezler tarayıcı kapanınca silinir; bazıları daha uzun süre kalabilir.",
      ],
    },
    categories: {
      heading: "Kullanılan çerez kategorileri",
      intro:
        "Aşağıdaki kategoriler teknolojiye göre gruplanmıştır. Her kategorinin güncel durumu platformun mevcut uygulamasına göredir.",
      items: [
        {
          id: "essential",
          title: "Zorunlu (Essential)",
          status: "Aktif",
          description:
            "Platformun temel güvenlik, oturum ve kimlik doğrulama işlevleri için gerekli olabilecek çerezler veya benzeri teknolojiler. Bunlar olmadan giriş ve hesap koruması düzgün çalışmayabilir.",
        },
        {
          id: "functional",
          title: "İşlevsel (Functional)",
          status: "Sınırlı / gerektiğinde",
          description:
            "Belirli özelliklerin düzgün çalışmasına yardımcı olan işlevsel teknolojiler. Yalnızca hizmetin işletimi için gerekli olduğunda kullanılır; ayrı bir reklam amaçlı ağ değildir.",
        },
        {
          id: "performance",
          title: "Performans / Analitik",
          status: "Aktif üçüncü taraf analitik yok",
          description:
            "Şu anda ART-IST.CLUB’ta ayrı bir üçüncü taraf performans veya analitik çerez sağlayıcısı kullanılmamaktadır. Temel teknik günlükler güvenlik ve işletim için sınırlı ölçüde oluşabilir; bu durum reklam ölçümü anlamına gelmez.",
        },
        {
          id: "preference",
          title: "Tercih (Preference)",
          status: "Aktif",
          description:
            "Dil tercihi gibi deneyim ayarlarını hatırlamak için kullanılır. Örnek: dil seçimini tutan platform çerezi. Bu tercih, sayfanın tutarlı biçimde doğru dilde yüklenmesine yardımcı olur.",
        },
        {
          id: "marketing",
          title: "Pazarlama (gelecek)",
          status: "Aktif değil",
          description:
            "Reklam, yeniden hedefleme veya pazarlama ölçümü amaçlı çerezler şu anda aktif olarak kullanılmamaktadır. Böyle bir kategori ileride devreye alınırsa bu politika güncellenir; aktifmiş gibi sunulmaz.",
        },
      ],
    },
    browserControls: {
      heading: "Tarayıcı ayarlarıyla çerez yönetimi",
      paragraphs: [
        "Çoğu tarayıcı çerezleri görüntüleme, engelleme veya silme seçenekleri sunar. Ayarlar tarayıcıya göre değişir; kontrol paneli genellikle Gizlilik veya Güvenlik bölümündedir.",
        "Zorunlu çerezleri engellerseniz giriş, dil tutarlılığı veya bazı temel özellikler bozulabilir. Tercih çerezlerini temizlerseniz dil seçiminizi yeniden ayarlamanız gerekebilir.",
        "Tarayıcı yönetimi, platform üzerindeki deneyimi etkiler; yasal haklar ve veri talepleri için Gizlilik Politikası ile İletişim sayfasındaki yönlendirmeleri kullanın.",
      ],
    },
    thirdParties: {
      heading: "Üçüncü taraf servisler",
      paragraphs: [
        "Platform; kimlik doğrulama, barındırma ve benzeri altyapı için teknik sağlayıcılardan yararlanabilir. Bu sağlayıcılar hizmetin çalışması için gerekli çerez veya benzeri teknolojileri kullanabilir.",
        "Bu politika; kullanılmayan reklam ağı, analitik paneli veya pazarlama pikselinin adını listelemez. OAuth veya benzeri giriş kullanıldığında ilgili kimlik sağlayıcısının kendi uygulamaları geçerli olabilir.",
        "Kişisel verilerin işlenmesi genel çerçevesi için Gizlilik Politikası’na bakın.",
      ],
    },
    updates: {
      heading: "Politika güncellemeleri",
      paragraphs: [
        "Bu Çerez Politikası zaman içinde güncellenebilir. Güncellenmiş sürüm bu sayfada yayınlandığında geçerlilik kazanır.",
        "Özellikle yeni çerez kategorileri veya üçüncü taraf uygulamaları eklenirse politika buna göre güncellenir.",
      ],
    },
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro: "Çerez Politikası ile birlikte şu sayfaları inceleyebilirsiniz.",
      items: [
        { id: "privacy", label: "Gizlilik Politikası", href: "/legal/privacy" },
        { id: "terms", label: "Kullanım Koşulları", href: "/legal/terms" },
        { id: "contact", label: "İletişim", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Bilgilendirilmiş şekilde devam edin",
      description:
        "Platformu keşfedin, üye olun veya sorularınız için iletişime geçin.",
    },
  },
  refund: {
    slug: "refund",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Politikanın Amacı",
      paragraphs: [
        "Bu İade Politikası, ART-IST.CLUB’ta gelecekte sunulabilecek ücretli üyelik ve abonelik hizmetlerine ilişkin genel yaklaşımı açıklar.",
        "Amaç; kullanıcıların, ücretli bir hizmet sunulduğunda iade konusunun nasıl ele alınacağını önceden anlamasına yardımcı olmaktır. Bu metin otomatik iade veya sabit süre garantisi oluşturmaz.",
      ],
    },
    scope: {
      heading: "Kapsam",
      paragraphs: [
        "Bu politika; platformda ileride sunulabilecek ücretli üyelik, abonelik veya benzeri dijital erişim hizmetleri için geçerli olacak şekilde hazırlanmıştır.",
        "Şu anda aktif bir platform ödeme akışı bu sayfada taahhüt edilmez. Ücretli bir hizmet yayına alındığında, ilgili koşullar satın alma deneyimi ve Abonelik Koşulları sayfası üzerinden netleştirilir.",
        "Sanatçı ile müşteri arasındaki proje ödemeleri platformun tarafı olmadığı için bu politikanın kapsamı dışındadır.",
      ],
    },
    purchaseProcess: {
      heading: "Satın Alma Süreci",
      paragraphs: [
        "Ücretli bir üyelik veya abonelik sunulduğunda, ödeme tamamlanmadan önce ilgili koşulların kullanıcıya sunulması hedeflenir.",
        "Kullanıcı, satın alma adımında gösterilen koşulları incelemekten sorumludur. Koşulları kabul etmeden ödemeyi tamamlamamalısınız.",
        "Sunulan şartlar; Abonelik Koşulları, Kullanım Koşulları ve bu İade Politikası ile birlikte değerlendirilmelidir.",
      ],
    },
    evaluation: {
      heading: "İade Taleplerinin Değerlendirilmesi",
      paragraphs: [
        "İade talepleri, sunulan hizmetin niteliği, satın alma koşulları ve yürürlükteki kurallar çerçevesinde kendi bağlamında incelenebilir.",
        "Her talebin otomatik olarak onaylanacağı veya belirli bir günde sonuçlanacağı taahhüt edilmez. Değerlendirme sonucu, olayın koşullarına göre değişebilir.",
        "Talep sürecine ilişkin yönlendirmeler, ücretli hizmet yayına alındığında ilgili satın alma akışı ve İletişim sayfası üzerinden netleştirilir.",
      ],
    },
    cancellation: {
      heading: "Abonelik İptali",
      paragraphs: [
        "Abonelik iptali ile ücret iadesi aynı şey değildir. İptal, gelecekteki yenilemelerin durdurulması anlamına gelebilir; iade ise tamamlanmış bir ödemenin geri verilmesini ifade eder.",
        "İptal hakkı mevcut olsa bile, geçmiş dönemlere ait ücretlerin iadesi otomatik olarak doğmaz. İade, bu politikada ve satın alma sırasında sunulan koşullarda belirtilen çerçevede değerlendirilir.",
        "İptal ve iade ayrımları, Abonelik Koşulları sayfasıyla birlikte okunmalıdır.",
      ],
    },
    exceptions: {
      heading: "İstisnalar",
      paragraphs: [
        "Yasal zorunluluklar ve uygulanabilir koşullar doğrultusunda bazı talepler farklı değerlendirilebilir.",
        "Bu sayfa, her olası senaryoyu tek tek listelemez. Değerlendirme; yürürlükteki kurallar, hizmetin niteliği ve satın alma anında sunulan şartlara göre yapılır.",
        "Kullanıcıya kötüye kullanım, dolandırıcılık şüphesi veya politika ihlali durumunda erişim kısıtlamaları uygulanabilir; bu durumlar iade değerlendirmesini etkileyebilir.",
      ],
    },
    updates: {
      heading: "Politika Güncellemeleri",
      paragraphs: [
        "Bu İade Politikası zaman içinde güncellenebilir. Güncellenmiş sürüm bu sayfada yayınlandığında geçerlilik kazanır.",
        "Ücretli hizmetler yayına alındığında veya süreçler netleştikçe politika buna göre güncellenir. Önemli değişikliklerde kullanıcı bilgilendirmesi hedeflenir.",
      ],
    },
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro:
        "İade konusuyla ilişkili sayfaları birlikte inceleyebilirsiniz.",
      items: [
        {
          id: "subscription",
          label: "Abonelik Koşulları",
          href: "/legal/subscription",
        },
        { id: "terms", label: "Kullanım Koşulları", href: "/legal/terms" },
        { id: "privacy", label: "Gizlilik Politikası", href: "/legal/privacy" },
        { id: "contact", label: "İletişim", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Platformu keşfetmeye devam edin",
      description:
        "Sanatçıları keşfedin, üye olun veya sorularınız için iletişime geçin.",
    },
  },
  subscription: {
    slug: "subscription",
    updatedAt: "2026-07-14",
    purpose: {
      heading: "Abonelik Koşullarının Amacı",
      paragraphs: [
        "Bu Abonelik Koşulları, ART-IST.CLUB’ta gelecekte sunulabilecek ücretli üyelik ve abonelik hizmetlerinin genel çalışma prensiplerini açıklar.",
        "Amaç; kullanıcıların plan seçimi, başlangıç, yenileme ve iptal konularını profesyonel ve şeffaf bir çerçevede anlamasına yardımcı olmaktır. Bu sayfa fiyat, para birimi, kampanya, deneme süresi veya ödeme sağlayıcı adı içermez.",
        "Ücretli bir hizmet yayına alındığında, satın alma anında gösterilen koşullar ile Kullanım Koşulları, Gizlilik Politikası ve İade Politikası birlikte değerlendirilmelidir.",
      ],
    },
    membershipPlans: {
      heading: "Üyelik Planları",
      paragraphs: [
        "ART-IST.CLUB; temel erişim ile birlikte, ileride farklı özellik seviyeleri sunan üyelik veya abonelik planları sunabilir.",
        "Planların adı, kapsamı ve içeriği yalnızca platformda yayınlandığında geçerlidir. Bu sayfa belirli bir paket, fiyat veya kampanya taahhüdü oluşturmaz.",
        "Founding Artist veya benzeri özel programlar varsa, bu programlara ilişkin koşullar ilgili kampanya veya üyelik sayfalarında ayrıca açıklanır.",
      ],
    },
    start: {
      heading: "Abonelik Başlangıcı",
      paragraphs: [
        "Ücretli bir abonelik veya üyelik sunulduğunda, erişim satın alma adımının tamamlanması ve ilgili koşulların kabulüyle başlar.",
        "Başlangıç anı; seçilen plan, hesap tipi ve satın alma sırasında gösterilen şartlara bağlıdır. Bu metin sabit bir faturalandırma aralığı veya kesin başlangıç tarihi tanımlamaz.",
        "Ödeme tamamlanmadan önce ilgili koşulların kullanıcıya sunulması hedeflenir.",
      ],
    },
    renewal: {
      heading: "Yenileme Prensibi",
      paragraphs: [
        "Abonelik modelinde erişim, aksi belirtilmedikçe yenilenebilir bir yapıda tasarlanabilir. Yenilemenin nasıl işleyeceği, plan sunulduğunda satın alma deneyiminde ve ilgili koşullarda açıklanır.",
        "Bu sayfa otomatik yenileme tarihleri, faturalandırma aralıkları veya ücret tutarları yayınlamaz. Yenileme detayları yalnızca platformda yayınlanan güncel koşullara göredir.",
        "Kullanıcılar, yenileme öncesinde plan durumunu hesap ayarları veya satın alma arayüzü üzerinden takip etmekten sorumludur.",
      ],
    },
    cancellation: {
      heading: "Abonelik İptali",
      paragraphs: [
        "Ücretli bir abonelik sunulduğunda, kullanıcıların iptal seçeneklerine erişmesi hedeflenir. İptal; gelecekteki yenilemelerin durdurulması anlamına gelebilir.",
        "İptal ile ücret iadesi aynı şey değildir. İade konuları İade Politikası kapsamında değerlendirilir.",
        "İptalin ne zaman etkili olacağı, plan sunulduğunda gösterilen koşullara bağlıdır. Bu sayfa sabit bir iptal süresi veya garanti edilmiş iade yaratmaz.",
      ],
    },
    accountResponsibility: {
      heading: "Hesap Sorumluluğu",
      paragraphs: [
        "Abonelik veya üyelik erişimi, hesabınız üzerinden yönetilir. Hesap bilgilerinizin doğruluğu ve güvenliğinden siz sorumlusunuz.",
        "Hesabınız üzerinden yapılan abonelik işlemleri hesabın sahipliğine bağlıdır. Yetkisiz kullanımı önlemek için giriş bilgilerinizi gizli tutun.",
        "Kuralların ihlali, kötüye kullanım veya güvenlik riski durumunda abonelik erişimi askıya alınabilir veya sonlandırılabilir.",
      ],
    },
    serviceChanges: {
      heading: "Hizmet Değişiklikleri",
      paragraphs: [
        "ART-IST.CLUB; üyelik özelliklerini, plan yapılarını veya abonelik deneyimini güncelleme, değiştirme veya kaldırma hakkını saklı tutar.",
        "Önemli değişikliklerde kullanıcı bilgilendirmesi hedeflenir. Değişiklikler, ürün geliştirme, güvenlik, performans veya yasal gereklilikler nedeniyle yapılabilir.",
        "Bu Abonelik Koşulları zaman içinde güncellenebilir. Güncellenmiş sürüm bu sayfada yayınlandığında geçerlilik kazanır.",
      ],
    },
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro:
        "Abonelik konusuyla ilişkili sayfaları birlikte inceleyebilirsiniz.",
      items: [
        { id: "terms", label: "Kullanım Koşulları", href: "/legal/terms" },
        { id: "privacy", label: "Gizlilik Politikası", href: "/legal/privacy" },
        { id: "refund", label: "İade Politikası", href: "/legal/refund" },
        { id: "contact", label: "İletişim", href: "/contact" },
      ],
    },
    finalCta: {
      heading: "Platformu keşfetmeye devam edin",
      description:
        "Sanatçıları keşfedin, üye olun veya sorularınız için iletişime geçin.",
    },
  },
  company: {
    slug: "company",
    updatedAt: "2026-07-14",
    companyInformation: {
      heading: "Şirket Bilgileri",
      paragraphs: [
        "ART-IST.CLUB, sanatçıların keşfedilmesi ve profesyonel bağlantılar için küresel bir dijital platform olarak faaliyet gösterir.",
        "İşletme sahibi / veri sorumlusu: Atilla Demirkıran.",
        "Konum: İzmir, Türkiye.",
        "İletişim e-postası: info@art-ist.club",
        "Web sitesi: art-ist.club",
        "Bu sayfada telefon numarası, tam adres, vergi kimlik numarası, T.C. kimlik numarası, MERSİS veya ticaret sicil bilgisi yayınlanmamaktadır. Yalnızca doğrulanmış ve paylaşılması uygun bulunan bilgiler yer alır.",
      ],
    },
    legalTransparency: {
      heading: "Kurumsal Şeffaflık",
      paragraphs: [
        "ART-IST.CLUB; kullanıcılar, iş ortakları ve inceleme ekipleri için resmi bilgileri güncel ve doğrulanmış biçimde paylaşma yaklaşımını benimser.",
        "Şeffaflık; uydurma veya geçici kimlik bilgisi yayınlamak değil, doğrulanmış kayıtların hazır olduğunda açıkça paylaşılması anlamına gelir.",
        "Platformun amacı, vizyonu ve nasıl çalıştığı Hakkımızda sayfasında; iletişim yönlendirmeleri İletişim sayfasında yer alır.",
      ],
    },
    corporateCompliance: {
      heading: "Kurumsal Uyum",
      paragraphs: [
        "Platform; yürürlükteki yasal yükümlülüklere uyum hedefiyle tasarlanır ve işletilir. Kullanım Koşulları, Gizlilik Politikası ve ilgili yasal sayfalar bu yaklaşımın parçasıdır.",
        "Uyumluluk taahhüdü; henüz kesinleşmemiş şirket kimlik alanlarını doldurmak anlamına gelmez. Resmi kuruluş bilgileri hazır olduğunda bu sayfada yayınlanır.",
        "Ödeme, abonelik ve iade konularına ilişkin genel çerçeve ilgili yasal sayfalarda yer alır; bu sayfa ticari faturalandırma veya sicil bilgisi içermez.",
      ],
    },
    futureUpdates: {
      heading: "Gelecek Güncellemeler",
      paragraphs: [
        "Şirket bilgileri kesinleştikçe bu sayfa güncellenir. Güncellenmiş sürüm bu sayfada yayınlandığında geçerlilik kazanır.",
        "Yayınlanacak bilgiler yalnızca doğrulanmış kurumsal kayıtlardan oluşur. Kullanıcı bilgilendirmesi, önemli güncellemelerde hedeflenir.",
        "Bu sayfa; resmi kimlik alanları için geçici veya örnek değerler içermez.",
      ],
    },
    relatedPages: {
      heading: "İlgili Sayfalar",
      intro:
        "Kurumsal ve yasal bağlam için şu sayfaları inceleyebilirsiniz.",
      items: [
        { id: "about", label: "Hakkımızda", href: "/about" },
        { id: "contact", label: "İletişim", href: "/contact" },
        { id: "terms", label: "Kullanım Koşulları", href: "/legal/terms" },
        { id: "privacy", label: "Gizlilik Politikası", href: "/legal/privacy" },
      ],
    },
    finalCta: {
      heading: "Platformu keşfetmeye devam edin",
      description:
        "Sanatçıları keşfedin, üye olun veya sorularınız için iletişime geçin.",
    },
  },
  ...turkeyNoticesTr,
};
