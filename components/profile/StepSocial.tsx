"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

type StepSocialProps = {
  websiteUrl: string;
  setWebsiteUrl: (value: string) => void;
  instagramUrl: string;
  setInstagramUrl: (value: string) => void;
  tiktokUrl: string;
  setTiktokUrl: (value: string) => void;
  youtubeUrl: string;
  setYoutubeUrl: (value: string) => void;
  facebookUrl: string;
  setFacebookUrl: (value: string) => void;
  xUrl: string;
  setXUrl: (value: string) => void;
  linkedinUrl: string;
  setLinkedinUrl: (value: string) => void;
  whatsappNumber: string;
  setWhatsappNumber: (value: string) => void;
};

export default function StepSocial({
  websiteUrl,
  setWebsiteUrl,
  instagramUrl,
  setInstagramUrl,
  tiktokUrl,
  setTiktokUrl,
  youtubeUrl,
  setYoutubeUrl,
  facebookUrl,
  setFacebookUrl,
  xUrl,
  setXUrl,
  linkedinUrl,
  setLinkedinUrl,
  whatsappNumber,
  setWhatsappNumber,
}: StepSocialProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const socialFields = [
    {
      label: translate("profile.stepsUi.social.website", "Website"),
      placeholder: "https://www.ornek.com",
      helper: "Kişisel site, portfolyo veya resmi web adresi.",
    },
    {
      label: translate("profile.stepsUi.social.instagram", "Instagram"),
      placeholder: "https://instagram.com/kullaniciadi",
      helper: "Fotoğraf, reels ve güncel içeriklerin için.",
    },
    {
      label: translate("profile.stepsUi.social.tiktok", "TikTok"),
      placeholder: "https://tiktok.com/@kullaniciadi",
      helper: "Kısa video, performans ve viral içerikler için.",
    },
    {
      label: translate("profile.stepsUi.social.youtube", "YouTube"),
      placeholder: "https://youtube.com/@kanaladi",
      helper: "Uzun video, sahne kayıtları veya showreel için.",
    },
    {
      label: translate("profile.stepsUi.social.facebook", "Facebook"),
      placeholder: "https://facebook.com/sayfaadi",
      helper: "Sayfa veya topluluk bağlantısı.",
    },
    {
      label: translate("profile.stepsUi.social.x", "X"),
      placeholder: "https://x.com/kullaniciadi",
      helper: "Duyuru, haber ve profesyonel görünürlük için.",
    },
    {
      label: translate("profile.stepsUi.social.linkedin", "LinkedIn"),
      placeholder: "https://linkedin.com/in/kullaniciadi",
      helper: "Profesyonel iş ağı ve kariyer geçmişi için.",
    },
    {
      label: "WhatsApp",
      placeholder: "+90 5xx xxx xx xx",
      helper:
        "İletişim için telefon numarası. Profilde WhatsApp butonu olarak görünür.",
    },
  ];

  const values = [
    websiteUrl,
    instagramUrl,
    tiktokUrl,
    youtubeUrl,
    facebookUrl,
    xUrl,
    linkedinUrl,
    whatsappNumber,
  ];

  const setters = [
    setWebsiteUrl,
    setInstagramUrl,
    setTiktokUrl,
    setYoutubeUrl,
    setFacebookUrl,
    setXUrl,
    setLinkedinUrl,
    setWhatsappNumber,
  ];

  const completedCount = values.filter((value) => value.trim()).length;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-white/60">
          Sosyal medya ve iletişim bağlantılarını ekle. Bu bilgiler profilinde
          güven oluşturur ve yapımcıların, organizatörlerin veya markaların seni
          daha iyi tanımasını sağlar.
        </p>

        <p className="mt-3 text-sm text-white/40">
          Zorunlu değil, ama aktif ve doğru bağlantılar profil güvenini artırır.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-black text-white">
              {translate("profile.stepsUi.social.title", "Sosyal Medya")}
            </h3>
            <p className="mt-2 text-sm text-white/45">
              {completedCount} / {socialFields.length} bağlantı eklendi
            </p>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 sm:w-56">
            <div
              className="h-full rounded-full bg-[#f5b942] transition-all"
              style={{
                width: `${(completedCount / socialFields.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {socialFields.map((field, index) => (
          <label
            key={field.label}
            className="block rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          >
            <span className="mb-2 block text-sm font-black text-white">
              {field.label}
            </span>

            <input
              value={values[index]}
              onChange={(event) =>
                setters[index](event.target.value.slice(0, 250))
              }
              placeholder={field.placeholder}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/70"
            />

            <span className="mt-2 block text-xs leading-5 text-white/40">
              {field.helper}
            </span>
          </label>
        ))}
      </div>

      <div className="rounded-3xl border border-[#f5b942]/15 bg-[#f5b942]/5 p-5">
        <h4 className="font-bold text-[#f5b942]">Sosyal Medya Notu</h4>
        <p className="mt-2 text-sm leading-6 text-white/55">
          Bağlantılar boş bırakılabilir. Ancak Instagram, TikTok, YouTube veya
          web sitesi gibi aktif kanallar profilini daha güvenilir ve güçlü
          gösterir.
        </p>
      </div>
    </div>
  );
}
