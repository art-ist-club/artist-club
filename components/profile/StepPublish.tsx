"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

type ArtistCategory = {
  id: number;
  name: string;
};

type StepPublishProps = {
  displayName: string;
  stageName: string;

  countryId: number | null;
  stateId: number | null;
  cityId: number | null;

  countryName: string;
  stateName: string;
  cityName: string;

  language: string;
  avatarUrl: string;
  videoUrl: string;
  tagline: string;
  bio: string;
  workCountries: string;
  workCities: string;
  selectedCategoryIds: number[];
  categories: ArtistCategory[];
  publishing: boolean;
  onPublish: () => void;
};

type Requirement = {
  label: string;
  valid: boolean;
  required: boolean;
};

export default function StepPublish({
  displayName,
  stageName,
  countryId,
  stateId,
  cityId,
  countryName,
  stateName,
  cityName,
  language,
  avatarUrl,
  videoUrl,
  tagline,
  bio,
  workCountries,
  workCities,
  selectedCategoryIds,
  categories,
  publishing,
  onPublish,
}: StepPublishProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const requirements: Requirement[] = [
    {
      label: translate(
        "profile.publish.req.name",
        "Ad Soyad veya sahne adı girildi"
      ),
      valid: Boolean(displayName.trim() || stageName.trim()),
      required: true,
    },
    {
      label: translate(
        "profile.publish.req.location",
        "Ülke, bölge ve şehir bilgisi seçildi"
      ),
      valid: Boolean(countryId && stateId && cityId),
      required: true,
    },
    {
      label: translate("profile.publish.req.language", "Dil bilgisi girildi"),
      valid: Boolean(language.trim()),
      required: true,
    },
    {
      label: translate(
        "profile.publish.req.categories",
        "En az bir sanat kategorisi seçildi"
      ),
      valid: selectedCategoryIds.length > 0,
      required: true,
    },
    {
      label: translate(
        "profile.publish.req.photo",
        "Profil fotoğrafı yüklendi"
      ),
      valid: Boolean(avatarUrl.trim()),
      required: true,
    },
    {
      label: translate(
        "profile.publish.req.tagline",
        "Kısa profil sloganı girildi"
      ),
      valid: Boolean(tagline.trim()),
      required: true,
    },
    {
      label: translate("profile.publish.req.bio", "Biyografi girildi"),
      valid: Boolean(bio.trim() && bio.trim().length >= 40),
      required: true,
    },
    {
      label: translate(
        "profile.publish.req.workArea",
        "Çalışabileceği ülke veya şehir bilgisi girildi"
      ),
      valid: Boolean(workCountries.trim() || workCities.trim()),
      required: true,
    },
    {
      label: translate(
        "profile.publish.req.video",
        "Video bağlantısı eklendi"
      ),
      valid: Boolean(videoUrl.trim()),
      required: false,
    },
  ];

  const missingRequired = requirements.filter(
    (item) => item.required && !item.valid
  );

  const selectedCategories = categories.filter((category) =>
    selectedCategoryIds.includes(category.id)
  );

  const isReady = missingRequired.length === 0;

  return (
    <div className="space-y-8">
      <p className="text-white/60">
        {translate(
          "profile.publish.description",
          "Profilini kontrol ettin. Yayınladığında Discovery alanında görünür olursun."
        )}
      </p>

      <div
        className={`rounded-[2rem] border p-7 ${
          isReady
            ? "border-[#f5b942]/30 bg-[#f5b942]/10"
            : "border-red-400/30 bg-red-500/10"
        }`}
      >
        <p
          className={`text-sm font-black uppercase tracking-[0.3em] ${
            isReady ? "text-[#f5b942]" : "text-red-300"
          }`}
        >
          {translate("profile.publish.status", "Yayın Durumu")}
        </p>

        <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
          {isReady
            ? translate("profile.publish.ready", "Profil yayına hazır")
            : translate("profile.publish.missing", "Eksik alanlar var")}
        </h3>

        <p className="mt-4 max-w-3xl leading-7 text-white/65">
          {isReady
            ? translate(
                "profile.publish.readyHint",
                "Tüm zorunlu alanlar tamamlandı. Yayınla butonuna bastığında profil is_published olarak işaretlenecek ve published_at tarihi kaydedilecek."
              )
            : translate(
                "profile.publish.missingHint",
                "Profilin yayına alınması için aşağıdaki zorunlu alanları tamamlamalısın. Sol menüden ilgili adıma dönüp eksikleri düzeltebilirsin."
              )}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section className="rounded-[2rem] border border-white/10 bg-black/20 p-6">
          <h4 className="text-xl font-black text-white">
            {translate(
              "profile.publish.checklistTitle",
              "Yayın öncesi kontrol"
            )}
          </h4>

          <div className="mt-5 space-y-3">
            {requirements.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4"
              >
                <div>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-white/45">
                    {item.required
                      ? translate("profile.publish.required", "Zorunlu")
                      : translate("profile.publish.optional", "Opsiyonel")}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-black ${
                    item.valid
                      ? "bg-[#f5b942] text-black"
                      : item.required
                        ? "bg-red-500/20 text-red-200"
                        : "bg-white/10 text-white/50"
                  }`}
                >
                  {item.valid
                    ? translate("profile.publish.done", "Tamam")
                    : translate("profile.publish.incomplete", "Eksik")}
                </span>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
            <h4 className="text-xl font-black text-white">
              {translate("profile.publish.summary", "Profil Özeti")}
            </h4>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <Summary
                label={translate("profile.publish.displayName", "Görünen ad")}
                value={stageName || displayName}
                empty={translate("profile.public.notSpecified", "Belirtilmedi")}
              />
              <Summary
                label={translate("profile.public.location", "Konum")}
                value={[cityName, stateName, countryName]
                  .filter(Boolean)
                  .join(" / ")}
                empty={translate("profile.public.notSpecified", "Belirtilmedi")}
              />
              <Summary
                label={translate("profile.public.language", "Dil")}
                value={language}
                empty={translate("profile.public.notSpecified", "Belirtilmedi")}
              />
              <Summary
                label={translate("profile.setup.steps.categories", "Kategoriler")}
                value={
                  selectedCategories.length > 0
                    ? selectedCategories.map((item) => item.name).join(", ")
                    : ""
                }
                empty={translate("profile.public.notSpecified", "Belirtilmedi")}
              />
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#f5b942]/20 bg-black/30 p-6">
            <h4 className="text-xl font-black text-white">
              {translate("profile.publish.title", "Yayınla")}
            </h4>
            <p className="mt-3 text-sm leading-6 text-white/55">
              {translate(
                "profile.publish.note",
                "İstediğin zaman düzenleyebilirsin."
              )}
            </p>

            <button
              type="button"
              onClick={onPublish}
              disabled={!isReady || publishing}
              className="mt-6 w-full rounded-2xl bg-[#f5b942] px-7 py-4 text-sm font-black text-black transition hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {publishing
                ? translate("profile.setup.publishing", "Yayınlanıyor...")
                : translate("profile.publish.confirm", "Profilimi yayınla")}
            </button>

            {!isReady && (
              <p className="mt-4 text-xs leading-5 text-red-200/80">
                {translate(
                  "profile.publish.blockedHint",
                  "Yayınlamak için zorunlu eksikleri tamamla."
                )}
              </p>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}

function Summary({
  label,
  value,
  empty = "Belirtilmedi",
}: {
  label: string;
  value: string;
  empty?: string;
}) {
  return (
    <div>
      <p className="font-black text-white">{label}</p>
      <p className="mt-1">{value || empty}</p>
    </div>
  );
}
