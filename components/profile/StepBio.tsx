"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

type StepBioProps = {
  bio: string;
  setBio: (value: string) => void;
  tagline: string;
  setTagline: (value: string) => void;
  experienceYears: string;
  setExperienceYears: (value: string) => void;
  achievements: string;
  setAchievements: (value: string) => void;
};

const EXPERIENCE_OPTIONS = ["0", "1", "3", "5", "10", "20"];

export default function StepBio({
  bio,
  setBio,
  tagline,
  setTagline,
  experienceYears,
  setExperienceYears,
  achievements,
  setAchievements,
}: StepBioProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const bioLength = bio.length;
  const taglineLength = tagline.length;
  const achievementsLength = achievements.length;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-white/60">
          Kendini profesyonel ama samimi bir dille anlat. Bu bölüm,
          yapımcıların, organizatörlerin ve markaların seni daha doğru
          tanımasını sağlar.
        </p>

        <p className="mt-3 text-sm text-white/40">
          Kısa, gerçek ve güven veren bir anlatım profili çok daha güçlü
          gösterir.
        </p>
      </div>

      <div className="grid gap-6">
        <label className="block rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <span className="mb-2 block text-sm font-black text-white">
            {translate("profile.stepsUi.basic.tagline", "Kısa slogan")}
          </span>

          <input
            value={tagline}
            onChange={(event) => setTagline(event.target.value.slice(0, 120))}
            placeholder="Örn: Sahne, kamera ve marka projeleri için profesyonel oyuncu."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/70"
          />

          <div className="mt-2 flex justify-between gap-4 text-xs text-white/40">
            <span>Profil kartlarında kısa açıklama olarak kullanılacak.</span>
            <span>{taglineLength}/120</span>
          </div>
        </label>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <span className="mb-4 block text-sm font-black text-white">
            Deneyim Yılı
          </span>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {EXPERIENCE_OPTIONS.map((year) => {
              const active = experienceYears === year;

              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setExperienceYears(year)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-black transition ${
                    active
                      ? "border-[#f5b942] bg-[#f5b942] text-black"
                      : "border-white/10 bg-black/30 text-white/70 hover:border-[#f5b942]/50 hover:text-[#f5b942]"
                  }`}
                >
                  {year === "0" ? "Yeni" : `${year}+`}
                </button>
              );
            })}
          </div>
        </div>

        <label className="block rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <span className="mb-2 block text-sm font-black text-white">
            {translate("profile.stepsUi.bio.title", "Biyografi")}
          </span>

          <textarea
            value={bio}
            onChange={(event) => setBio(event.target.value.slice(0, 1200))}
            placeholder={translate(
              "profile.stepsUi.bio.placeholder",
              "Kendini anlat..."
            )}
            rows={8}
            className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/70"
          />

          <div className="mt-2 flex justify-between gap-4 text-xs text-white/40">
            <span>Net, gerçek ve profesyonel bir anlatım önerilir.</span>
            <span>{bioLength}/1200</span>
          </div>
        </label>

        <label className="block rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <span className="mb-2 block text-sm font-black text-white">
            Öne Çıkan Başarılar
          </span>

          <textarea
            value={achievements}
            onChange={(event) =>
              setAchievements(event.target.value.slice(0, 800))
            }
            placeholder="Örn: Yer aldığın projeler, sahne deneyimleri, ödüller, eğitimler veya önemli iş birlikleri."
            rows={5}
            className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/70"
          />

          <div className="mt-2 flex justify-between gap-4 text-xs text-white/40">
            <span>Her başarıyı kısa ve anlaşılır yaz.</span>
            <span>{achievementsLength}/800</span>
          </div>
        </label>
      </div>

      <div className="rounded-3xl border border-[#f5b942]/15 bg-[#f5b942]/5 p-5">
        <h4 className="font-bold text-[#f5b942]">Biyografi Notu</h4>
        <p className="mt-2 text-sm leading-6 text-white/55">
          Bu alan profil sayfanda “Sanatçı Hakkında” ve “Başarılar” bölümü
          olarak görünecek. Güçlü ama abartısız yazman daha profesyonel durur.
        </p>
      </div>
    </div>
  );
}