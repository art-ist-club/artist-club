"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/dictionaries";
import StepBasic from "@/components/profile/StepBasic";
import StepCategories from "@/components/profile/StepCategories";
import StepPhoto from "@/components/profile/StepPhoto";
import StepGallery from "@/components/profile/StepGallery";
import StepVideo from "@/components/profile/StepVideo";
import StepBio from "@/components/profile/StepBio";
import StepWorkArea from "@/components/profile/StepWorkArea";
import StepSocial from "@/components/profile/StepSocial";
import StepPreview from "@/components/profile/StepPreview";
import StepPublish from "@/components/profile/StepPublish";

type ArtistCategory = {
  id: number;
  name: string;
};

type GalleryImage = {
  url: string;
  path: string;
};

const STEP_KEYS = [
  "basic",
  "categories",
  "photo",
  "gallery",
  "video",
  "bio",
  "workArea",
  "social",
  "preview",
  "publish",
] as const;

const STEP_FALLBACKS = [
  "Temel Bilgiler",
  "Sanat Kategorileri",
  "Profil Fotoğrafı",
  "Fotoğraf Galerisi",
  "Video",
  "Biyografi",
  "Çalışma Alanı",
  "Sosyal Medya",
  "Önizleme",
  "Yayınla",
];

export default function ProfileSetupPage() {
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const steps = STEP_KEYS.map((key, index) =>
    translate(`profile.setup.steps.${key}`, STEP_FALLBACKS[index])
  );

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const [userId, setUserId] = useState("");
  const [profileId, setProfileId] = useState<string | null>(null);

  const [displayName, setDisplayName] = useState("");
  const [stageName, setStageName] = useState("");

  const [countryId, setCountryId] = useState<number | null>(null);
  const [stateId, setStateId] = useState<number | null>(null);
  const [cityId, setCityId] = useState<number | null>(null);

  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");

  const [language, setLanguage] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const [tagline, setTagline] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [bio, setBio] = useState("");
  const [achievements, setAchievements] = useState("");

  const [workCountries, setWorkCountries] = useState("");
  const [workCities, setWorkCities] = useState("");
  const [canTravel, setCanTravel] = useState(false);
  const [worksOnSite, setWorksOnSite] = useState(true);
  const [worksOnline, setWorksOnline] = useState(false);
  const [eventTypes, setEventTypes] = useState<string[]>([]);

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [xUrl, setXUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const [categories, setCategories] = useState<ArtistCategory[]>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  const progress = useMemo(() => {
    return Math.round(((currentStep + 1) / STEP_KEYS.length) * 100);
  }, [currentStep]);

  useEffect(() => {
    async function init() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUserId(user.id);

      const { data: categoryData } = await supabase
        .from("artist_categories")
        .select("id, name")
        .order("name", { ascending: true });

      if (categoryData) {
        setCategories(categoryData);
      }

      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

      if (existingProfile) {
        setProfileId(existingProfile.id);
        setDisplayName(existingProfile.full_name ?? "");
        setStageName(existingProfile.username ?? "");

        setCountryId(existingProfile.country_id ?? null);
        setStateId(existingProfile.state_id ?? null);
        setCityId(existingProfile.city_id ?? null);

        setLanguage(existingProfile.language ?? "");
        setAvatarUrl(existingProfile.avatar_url ?? "");
        setVideoUrl(existingProfile.video_url ?? "");
        setTagline(existingProfile.tagline ?? "");
        setExperienceYears(
          existingProfile.experience_years !== null &&
            existingProfile.experience_years !== undefined
            ? String(existingProfile.experience_years)
            : ""
        );
        setBio(existingProfile.bio ?? "");
        setAchievements(existingProfile.achievements ?? "");
        setWorkCountries(existingProfile.work_countries ?? "");
        setWorkCities(existingProfile.work_cities ?? "");
        setCanTravel(Boolean(existingProfile.can_travel));
        setWorksOnSite(existingProfile.works_on_site ?? true);
        setWorksOnline(Boolean(existingProfile.works_online));
        setEventTypes(existingProfile.event_types ?? []);
        setWebsiteUrl(existingProfile.website_url ?? "");
        setInstagramUrl(existingProfile.instagram_url ?? "");
        setTiktokUrl(existingProfile.tiktok_url ?? "");
        setYoutubeUrl(existingProfile.youtube_url ?? "");
        setFacebookUrl(existingProfile.facebook_url ?? "");
        setXUrl(existingProfile.x_url ?? "");
        setLinkedinUrl(existingProfile.linkedin_url ?? "");
        setWhatsappNumber(existingProfile.whatsapp_number ?? "");

        const { data: profileCategories } = await supabase
          .from("profile_categories")
          .select("category_id")
          .eq("profile_id", existingProfile.id);

        if (profileCategories) {
          setSelectedCategoryIds(
            profileCategories.map((item) => item.category_id)
          );
        }
      } else {
        setProfileId(user.id);
      }

      setLoading(false);
    }

    init();
  }, [router]);

  useEffect(() => {
    async function loadCountryName() {
      setCountryName("");

      if (!countryId) return;

      const { data } = await supabase
        .from("countries")
        .select("name")
        .eq("id", countryId)
        .maybeSingle();

      setCountryName(data?.name ?? "");
    }

    loadCountryName();
  }, [countryId]);

  useEffect(() => {
    async function loadStateName() {
      setStateName("");

      if (!stateId) return;

      const { data } = await supabase
        .from("states")
        .select("name")
        .eq("id", stateId)
        .maybeSingle();

      setStateName(data?.name ?? "");
    }

    loadStateName();
  }, [stateId]);

  useEffect(() => {
    async function loadCityName() {
      setCityName("");

      if (!cityId) return;

      const { data } = await supabase
        .from("cities")
        .select("name")
        .eq("id", cityId)
        .maybeSingle();

      setCityName(data?.name ?? "");
    }

    loadCityName();
  }, [cityId]);

  async function saveProfile() {
    if (!userId) return false;

    setSaving(true);

    const cleanUsername = stageName.trim().toLowerCase().replace(/^@/, "");

    if (cleanUsername && !/^[a-z0-9._-]{3,30}$/.test(cleanUsername)) {
      setSaving(false);
      alert(
        translate(
          "profile.setup.alerts.usernameFormat",
          "Kullanıcı adı 3-30 karakter olmalı. Sadece küçük harf, rakam, nokta, tire ve alt çizgi kullanabilirsin."
        )
      );
      return false;
    }

    if (cleanUsername) {
      const { data: usernameOwner, error: usernameCheckError } = await supabase
        .from("profiles")
        .select("id")
        .eq("username", cleanUsername)
        .neq("id", userId)
        .maybeSingle();

      if (usernameCheckError) {
        console.error("Username check error:", usernameCheckError);
        setSaving(false);
        alert(
          `${translate(
            "profile.setup.alerts.usernameCheckError",
            "Kullanıcı adı kontrol edilirken hata oluştu"
          )}: ${usernameCheckError.message || translate("common.status.error", "Bilinmeyen hata")}`
        );
        return false;
      }

      if (usernameOwner) {
        setSaving(false);
        alert(
          translate(
            "profile.setup.alerts.usernameTaken",
            "Bu kullanıcı adı alınmış. Lütfen farklı bir kullanıcı adı seç."
          )
        );
        return false;
      }
    }

    const payload = {
      id: userId,
      full_name: displayName.trim(),
      username: cleanUsername || null,

      country_id: countryId,
      state_id: stateId,
      city_id: cityId,

      language: language.trim(),
      avatar_url: avatarUrl,
      video_url: videoUrl,
      tagline: tagline.trim(),
      experience_years: experienceYears ? Number(experienceYears) : null,
      bio: bio.trim(),
      achievements: achievements.trim(),
      work_countries: workCountries.trim(),
      work_cities: workCities.trim(),
      can_travel: canTravel,
      works_on_site: worksOnSite,
      works_online: worksOnline,
      event_types: eventTypes,
      website_url: websiteUrl.trim(),
      instagram_url: instagramUrl.trim(),
      tiktok_url: tiktokUrl.trim(),
      youtube_url: youtubeUrl.trim(),
      facebook_url: facebookUrl.trim(),
      x_url: xUrl.trim(),
      linkedin_url: linkedinUrl.trim(),
      whatsapp_number: whatsappNumber.trim(),
      updated_at: new Date().toISOString(),
    };

    const { error: profileError } = await supabase
      .from("profiles")
      .upsert(payload, { onConflict: "id" });

    if (profileError) {
      console.error("Profile save error:", profileError);
      setSaving(false);
      alert(
        `${translate(
          "profile.setup.alerts.saveError",
          "Profil kaydedilirken hata oluştu"
        )}: ${
          profileError.message ||
          JSON.stringify(profileError) ||
          translate("common.status.error", "Bilinmeyen hata")
        }`
      );
      return false;
    }

    const { error: deleteCategoryError } = await supabase
      .from("profile_categories")
      .delete()
      .eq("profile_id", userId);

    if (deleteCategoryError) {
      console.error("Profile category delete error:", deleteCategoryError);
      setSaving(false);
      alert(
        `${translate(
          "profile.setup.alerts.categoryUpdateError",
          "Kategori kayıtları güncellenirken hata oluştu"
        )}: ${deleteCategoryError.message}`
      );
      return false;
    }

    if (selectedCategoryIds.length > 0) {
      const { error: insertCategoryError } = await supabase
        .from("profile_categories")
        .insert(
          selectedCategoryIds.map((categoryId) => ({
            profile_id: userId,
            category_id: categoryId,
          }))
        );

      if (insertCategoryError) {
        console.error("Profile category insert error:", insertCategoryError);
        setSaving(false);
        alert(
          `${translate(
            "profile.setup.alerts.categorySaveError",
            "Kategori kayıtları kaydedilirken hata oluştu"
          )}: ${insertCategoryError.message}`
        );
        return false;
      }
    }

    setProfileId(userId);
    setSaving(false);
    return true;
  }

  async function publishProfile() {
    const saved = await saveProfile();

    if (!saved || !userId) return;

    setPublishing(true);

    const { error } = await supabase
      .from("profiles")
      .update({
        is_published: true,
        published_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);

    setPublishing(false);

    if (error) {
      console.error("Profile publish error:", error);
      alert(
        `${translate(
          "profile.setup.alerts.publishError",
          "Profil yayınlanırken hata oluştu"
        )}: ${
          error.message ||
          JSON.stringify(error) ||
          translate("common.status.error", "Bilinmeyen hata")
        }`
      );
      return;
    }

    alert(
      translate(
        "profile.setup.alerts.publishSuccess",
        "🎉 Tebrikler!\n\nProfilin artık ART-IST.CLUB'da yayında.\nŞimdi Dashboard'a yönlendiriliyorsun."
      )
    );

    router.push("/dashboard");
  }

  async function goNext() {
    const saved = await saveProfile();

    if (!saved) return;

    if (currentStep < STEP_KEYS.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  }

  async function goBack() {
    const saved = await saveProfile();

    if (!saved) return;

    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#05060a] px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            {translate("profile.setup.loading", "Profil hazırlanıyor...")}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-[#f5b942]">
            ART-IST.CLUB
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            {translate("profile.setup.title", "Sanatçı Profilini Oluştur")}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white/65">
            {translate(
              "profile.setup.subtitle",
              "Profesyonel profilini adım adım tamamla. Bu bilgiler seni doğru yapımcılar, organizatörler ve fırsatlarla eşleştirmek için kullanılacak."
            )}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <aside className="h-fit rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-6">
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-white/65">
                  {translate("profile.setup.progress", "Profil ilerlemesi")}
                </span>
                <span className="text-sm font-black text-[#f5b942]">
                  {progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#f5b942] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <button
                  key={STEP_KEYS[index]}
                  type="button"
                  onClick={async () => {
                    const saved = await saveProfile();

                    if (!saved) return;

                    setCurrentStep(index);
                  }}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                    currentStep === index
                      ? "border-[#f5b942] bg-[#f5b942] text-black"
                      : "border-white/10 bg-black/20 text-white/75 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`font-black ${
                      currentStep === index ? "text-black" : "text-white/80"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </button>
              ))}
            </div>
          </aside>

          <section className="rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-6 md:p-10">
            <div className="mb-8">
              <p className="text-sm font-black text-[#f5b942]">
                {formatMessage(
                  translate("profile.setup.stepOf", "Adım {{current}} / {{total}}"),
                  {
                    current: currentStep + 1,
                    total: STEP_KEYS.length,
                  }
                )}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                {steps[currentStep]}
              </h2>
            </div>

            {currentStep === 0 && (
              <StepBasic
                fullName={displayName}
                setFullName={setDisplayName}
                username={stageName}
                setUsername={setStageName}
                countryId={countryId}
                setCountryId={setCountryId}
                stateId={stateId}
                setStateId={setStateId}
                cityId={cityId}
                setCityId={setCityId}
                language={language}
                setLanguage={setLanguage}
              />
            )}

            {currentStep === 1 && (
              <StepCategories
                categories={categories}
                selectedCategoryIds={selectedCategoryIds}
                setSelectedCategoryIds={setSelectedCategoryIds}
              />
            )}

            {currentStep === 2 && (
              <StepPhoto
                avatarUrl={avatarUrl}
                setAvatarUrl={setAvatarUrl}
                userId={userId}
              />
            )}

            {currentStep === 3 && (
              <StepGallery
                userId={userId}
                galleryImages={galleryImages}
                setGalleryImages={setGalleryImages}
              />
            )}

            {currentStep === 4 && (
              <StepVideo videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
            )}

            {currentStep === 5 && (
              <StepBio
                tagline={tagline}
                setTagline={setTagline}
                experienceYears={experienceYears}
                setExperienceYears={setExperienceYears}
                bio={bio}
                setBio={setBio}
                achievements={achievements}
                setAchievements={setAchievements}
              />
            )}

            {currentStep === 6 && (
              <StepWorkArea
                workCountries={workCountries}
                setWorkCountries={setWorkCountries}
                workCities={workCities}
                setWorkCities={setWorkCities}
                canTravel={canTravel}
                setCanTravel={setCanTravel}
                worksOnSite={worksOnSite}
                setWorksOnSite={setWorksOnSite}
                worksOnline={worksOnline}
                setWorksOnline={setWorksOnline}
                eventTypes={eventTypes}
                setEventTypes={setEventTypes}
              />
            )}

            {currentStep === 7 && (
              <StepSocial
                websiteUrl={websiteUrl}
                setWebsiteUrl={setWebsiteUrl}
                instagramUrl={instagramUrl}
                setInstagramUrl={setInstagramUrl}
                tiktokUrl={tiktokUrl}
                setTiktokUrl={setTiktokUrl}
                youtubeUrl={youtubeUrl}
                setYoutubeUrl={setYoutubeUrl}
                facebookUrl={facebookUrl}
                setFacebookUrl={setFacebookUrl}
                xUrl={xUrl}
                setXUrl={setXUrl}
                linkedinUrl={linkedinUrl}
                setLinkedinUrl={setLinkedinUrl}
                whatsappNumber={whatsappNumber}
                setWhatsappNumber={setWhatsappNumber}
              />
            )}

            {currentStep === 8 && (
              <StepPreview
                displayName={displayName}
                stageName={stageName}
                country={countryName}
                city={stateName}
                district={cityName}
                language={language}
                avatarUrl={avatarUrl}
                videoUrl={videoUrl}
                tagline={tagline}
                experienceYears={experienceYears}
                bio={bio}
                achievements={achievements}
                workCountries={workCountries}
                workCities={workCities}
                canTravel={canTravel}
                worksOnSite={worksOnSite}
                worksOnline={worksOnline}
                eventTypes={eventTypes}
                websiteUrl={websiteUrl}
                instagramUrl={instagramUrl}
                tiktokUrl={tiktokUrl}
                youtubeUrl={youtubeUrl}
                facebookUrl={facebookUrl}
                xUrl={xUrl}
                linkedinUrl={linkedinUrl}
                whatsappNumber={whatsappNumber}
                categories={categories}
                selectedCategoryIds={selectedCategoryIds}
                galleryImages={galleryImages}
              />
            )}

            {currentStep === 9 && (
              <StepPublish
                displayName={displayName}
                stageName={stageName}
                countryId={countryId}
                stateId={stateId}
                cityId={cityId}
                countryName={countryName}
                stateName={stateName}
                cityName={cityName}
                language={language}
                avatarUrl={avatarUrl}
                videoUrl={videoUrl}
                tagline={tagline}
                bio={bio}
                workCountries={workCountries}
                workCities={workCities}
                selectedCategoryIds={selectedCategoryIds}
                categories={categories}
                publishing={publishing}
                onPublish={publishProfile}
              />
            )}

            <div className="mt-10 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={currentStep === 0 || saving || publishing}
                className="rounded-2xl border border-white/10 px-7 py-4 text-sm font-black text-white/80 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {translate("profile.setup.back", "Geri")}
              </button>

              {currentStep < STEP_KEYS.length - 1 ? (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={saving || publishing}
                  className="rounded-2xl bg-[#f5b942] px-9 py-4 text-sm font-black text-black transition hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving
                    ? translate("profile.setup.saving", "Kaydediliyor...")
                    : translate("profile.setup.continue", "Devam Et")}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={publishProfile}
                  disabled={saving || publishing}
                  className="rounded-2xl bg-[#f5b942] px-9 py-4 text-sm font-black text-black transition hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {publishing
                    ? translate("profile.setup.publishing", "Yayınlanıyor...")
                    : translate("profile.setup.finish", "Bitir")}
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
