"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import ClientNavbar from "@/components/client/ClientNavbar";
import JobRequestModal from "@/components/job-request/JobRequestModal";

type Profile = {
  id: string;
  full_name: string | null;
  username: string | null;
  profile_slug: string | null;
  country: string | null;
  city: string | null;
  district: string | null;
  language: string | null;
  avatar_url: string | null;
  video_url: string | null;
  tagline: string | null;
  experience_years: number | null;
  bio: string | null;
  achievements: string | null;
  work_countries: string | null;
  work_cities: string | null;
  can_travel: boolean | null;
  works_on_site: boolean | null;
  works_online: boolean | null;
  event_types: string[] | null;
  website_url: string | null;
  instagram_url: string | null;
  tiktok_url: string | null;
  youtube_url: string | null;
  facebook_url: string | null;
  x_url: string | null;
  linkedin_url: string | null;
  whatsapp_number: string | null;
  is_published: boolean | null;
  artist_type: "normal" | "signature" | "elite" | null;
  visibility: "public" | "b2b_only" | null;
  is_featured: boolean | null;
  discovery_score: number | null;
  profile_views: number | null;
  last_seen_at: string | null;
};

type ArtistCategory = {
  id: number;
  name: string;
};

type ArtistMetrics = {
  profileViews: number;
  favoriteCount: number;
  jobRequestCount: number;
  reviewCount: number;
};

function cleanUrl(url: string | null) {
  if (!url) return "";
  const value = url.trim();
  if (!value) return "";
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `https://${value}`;
}

function formatLastSeen(value: string | null, noInfo: string) {
  if (!value) return noInfo;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return noInfo;

  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function getBadge(profile: Profile) {
  if (profile.artist_type === "elite") {
    return {
      label: "Elite Artist",
      icon: "♛",
      className: "border-[#f5b942]/40 bg-[#f5b942]/15 text-[#f5b942]",
    };
  }

  if (profile.artist_type === "signature") {
    return {
      label: "Signature Artist",
      icon: "✦",
      className: "border-[#f5b942]/40 bg-[#f5b942]/15 text-[#f5b942]",
    };
  }

  return {
    label: "Artist",
    icon: "●",
    className: "border-white/15 bg-white/10 text-white/75",
  };
}

export default function ArtistPublicProfilePage() {
  const router = useRouter();
  const params = useParams();
  const { t } = useLanguage();
  const username = String(params?.username ?? "").replace("@", "");

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [categories, setCategories] = useState<ArtistCategory[]>([]);
  const [artistId, setArtistId] = useState("");
  const [metrics, setMetrics] = useState<ArtistMetrics>({
    profileViews: 0,
    favoriteCount: 0,
    jobRequestCount: 0,
    reviewCount: 0,
  });
  const [openJobModal, setOpenJobModal] = useState(false);

  useEffect(() => {
    async function loadArtist() {
      if (!username) return;

      setLoading(true);

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .or(`username.eq.${username},profile_slug.eq.${username}`)
        .maybeSingle();

      if (profileError) {
        console.error("Artist profile load error:", profileError);
        setProfile(null);
        setArtistId("");
        setLoading(false);
        return;
      }

      if (!profileData) {
        setProfile(null);
        setArtistId("");
        setLoading(false);
        return;
      }

      let currentProfile = profileData as Profile;
      let currentViewCount = Number(currentProfile.profile_views ?? 0);

      const storageKey = `artist-profile-viewed-${currentProfile.id}`;
      const alreadyCounted =
        typeof window !== "undefined" && localStorage.getItem(storageKey);

      if (!alreadyCounted) {
        const nextViewCount = currentViewCount + 1;

        const { error: viewUpdateError } = await supabase
          .from("profiles")
          .update({ profile_views: nextViewCount })
          .eq("id", currentProfile.id);

        if (viewUpdateError) {
          console.error("Artist profile view update error:", viewUpdateError);
        } else {
          currentViewCount = nextViewCount;
          currentProfile = {
            ...currentProfile,
            profile_views: nextViewCount,
          };

          if (typeof window !== "undefined") {
            localStorage.setItem(storageKey, "true");
          }
        }
      }

      setProfile(currentProfile);

      const { data: artistRow, error: artistError } = await supabase
        .from("artists")
        .select("id")
        .eq("profile_id", currentProfile.id)
        .maybeSingle();

      const resolvedArtistId = artistError ? "" : artistRow?.id ?? "";

      if (artistError) {
        console.error("Artist row load error:", artistError);
      }

      setArtistId(resolvedArtistId);

      const categoryPromise = supabase
        .from("profile_categories")
        .select("artist_categories(id, name)")
        .eq("profile_id", currentProfile.id);

      const favoriteCountPromise = supabase
        .from("favorites")
        .select("*", { count: "exact", head: true })
        .eq("artist_id", currentProfile.id);

      const jobRequestCountPromise = resolvedArtistId
        ? supabase
            .from("job_requests")
            .select("*", { count: "exact", head: true })
            .eq("artist_id", resolvedArtistId)
        : Promise.resolve({ count: 0, error: null });

      const reviewCountPromise = resolvedArtistId
        ? supabase
            .from("reviews")
            .select("*", { count: "exact", head: true })
            .eq("artist_id", resolvedArtistId)
        : Promise.resolve({ count: 0, error: null });

      const [
        categoryResult,
        favoriteCountResult,
        jobRequestCountResult,
        reviewCountResult,
      ] = await Promise.all([
        categoryPromise,
        favoriteCountPromise,
        jobRequestCountPromise,
        reviewCountPromise,
      ]);

      if (categoryResult.error) {
        console.error("Artist categories load error:", categoryResult.error);
        setCategories([]);
      } else {
        const mapped =
          categoryResult.data
            ?.map((row: any) => row.artist_categories)
            .filter(Boolean) ?? [];

        setCategories(mapped);
      }

      if (favoriteCountResult.error) {
        console.error(
          "Artist favorite count load error:",
          favoriteCountResult.error
        );
      }

      if (jobRequestCountResult.error) {
        console.error(
          "Artist job request count load error:",
          jobRequestCountResult.error
        );
      }

      if (reviewCountResult.error) {
        console.error(
          "Artist review count load error:",
          reviewCountResult.error
        );
      }

      setMetrics({
        profileViews: currentViewCount,
        favoriteCount: favoriteCountResult.count ?? 0,
        jobRequestCount: jobRequestCountResult.count ?? 0,
        reviewCount: reviewCountResult.count ?? 0,
      });

      setLoading(false);
    }

    loadArtist();
  }, [username]);

  const badge = useMemo(() => (profile ? getBadge(profile) : null), [profile]);

  const displayName =
    profile?.full_name?.trim() ||
    profile?.username?.trim() ||
    "ART-IST.CLUB Artist";

  const locationText = [profile?.city, profile?.district, profile?.country]
    .filter(Boolean)
    .join(", ");

  const notSpecified = translate("profile.public.notSpecified", "Belirtilmedi");
  const noInfo = translate("profile.public.noInfo", "Henüz bilgi yok");

  const socialLinks = [
    { label: "Website", url: cleanUrl(profile?.website_url ?? null) },
    { label: "Instagram", url: cleanUrl(profile?.instagram_url ?? null) },
    { label: "TikTok", url: cleanUrl(profile?.tiktok_url ?? null) },
    { label: "YouTube", url: cleanUrl(profile?.youtube_url ?? null) },
    { label: "Facebook", url: cleanUrl(profile?.facebook_url ?? null) },
    { label: "X", url: cleanUrl(profile?.x_url ?? null) },
    { label: "LinkedIn", url: cleanUrl(profile?.linkedin_url ?? null) },
  ].filter((item) => item.url);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#05060a] px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            {translate("profile.public.loading", "Sanatçı profili yükleniyor...")}
          </p>
        </div>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="min-h-screen bg-[#05060a] px-6 py-10 text-white">
        <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#f5b942]">
              ART-IST.CLUB
            </p>
            <h1 className="mt-5 text-4xl font-black">
              {translate("profile.public.notFound", "Profil bulunamadı")}
            </h1>
            <p className="mt-4 text-white/60">
              {translate(
                "profile.public.notFoundDesc",
                "Bu kullanıcı adına ait yayınlanmış bir sanatçı profili bulunamadı."
              )}
            </p>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="mt-8 rounded-2xl bg-[#f5b942] px-7 py-4 text-sm font-black text-black transition hover:bg-[#ffd36a]"
            >
              {translate("profile.public.backHome", "Ana Sayfaya Dön")}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <ClientNavbar />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,185,66,0.22),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#05060a_0%,#101114_50%,#05060a_100%)]" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 md:pb-20 md:pt-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-[#f5b942] bg-black/50 shadow-2xl shadow-[#f5b942]/10">
                  {profile.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt={displayName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-center text-sm font-black text-white/45">
                      {translate("profile.setup.steps.photo", "Profil Fotoğrafı")}
                    </span>
                  )}
                </div>

                <div>
                  {badge && (
                    <div
                      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.22em] ${badge.className}`}
                    >
                      <span>{badge.icon}</span>
                      <span>{badge.label}</span>
                    </div>
                  )}

                  <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
                    {displayName}
                  </h1>

                  <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
                    {profile.tagline || "Global artist profile on ART-IST.CLUB."}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <span
                          key={category.id}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/75"
                        >
                          {category.name}
                        </span>
                      ))
                    ) : (
                      <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/60">
                        {translate(
                          "profile.public.noCategory",
                          "Kategori belirtilmedi"
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#f5b942]/20 bg-black/35 p-6 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5b942]">
                Quick Contact
              </p>
              <p className="mt-4 text-sm leading-6 text-white/65">
                {translate(
                  "profile.public.quickContactDesc",
                  "Yapımcılar, markalar ve organizatörler için profesyonel sanatçı profili."
                )}
              </p>

              <div className="mt-6 grid gap-3">
                <button
                  type="button"
                  className="rounded-2xl bg-[#f5b942] px-6 py-4 text-sm font-black text-black transition hover:bg-[#ffd36a]"
                >
                  {translate("profile.public.contact", "İletişime Geç")}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!artistId) {
                      alert(
                        translate(
                          "profile.public.artistMissing",
                          "Sanatçı kayıt bilgisi bulunamadı. Lütfen daha sonra tekrar deneyin."
                        )
                      );
                      return;
                    }

                    setOpenJobModal(true);
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:bg-white/10"
                >
                  {translate(
                    "profile.public.sendJobRequest",
                    "📨 İş Talebi Gönder"
                  )}
                </button>
                <button
                  type="button"
                  className="rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-sm font-black text-white/75 transition hover:text-white"
                >
                  {translate("profile.public.shareProfile", "Profili Paylaş")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5b942]">
                  Live Profile
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  {translate(
                    "profile.public.liveStats",
                    "Canlı Profil İstatistikleri"
                  )}
                </h2>
              </div>

              <p className="text-sm text-white/45">
                {translate("profile.public.lastSeen", "Son görülme")}:{" "}
                {formatLastSeen(profile.last_seen_at, noInfo)}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                label={translate("profile.public.views", "Görüntülenme")}
                value={metrics.profileViews}
                icon="👁️"
              />
              <MetricCard
                label={translate("profile.public.favorites", "Favori")}
                value={metrics.favoriteCount}
                icon="❤️"
              />
              <MetricCard
                label={translate("profile.public.jobRequests", "İş Talebi")}
                value={metrics.jobRequestCount}
                icon="📨"
              />
              <MetricCard
                label={translate("profile.public.reviews", "Değerlendirme")}
                value={metrics.reviewCount}
                icon="⭐"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm text-white/55">
                {translate("profile.public.experience", "Deneyim")}
              </p>
              <p className="mt-3 text-3xl font-black">
                {profile.experience_years ? `${profile.experience_years}+` : "—"}
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm text-white/55">
                {translate("profile.public.location", "Konum")}
              </p>
              <p className="mt-3 text-lg font-black">
                {locationText || notSpecified}
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm text-white/55">
                {translate("profile.public.language", "Dil")}
              </p>
              <p className="mt-3 text-lg font-black">
                {profile.language || notSpecified}
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5b942]">
              About
            </p>
            <h2 className="mt-4 text-3xl font-black">
              {translate("profile.public.about", "Sanatçı Hakkında")}
            </h2>
            <p className="mt-6 whitespace-pre-line text-base leading-8 text-white/70">
              {profile.bio ||
                translate(
                  "profile.public.noBio",
                  "Bu sanatçı henüz biyografi alanını doldurmadı."
                )}
            </p>
          </div>

          {profile.achievements && (
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5b942]">
                Highlights
              </p>
              <h2 className="mt-4 text-3xl font-black">
                {translate("profile.public.achievements", "Başarılar")}
              </h2>
              <p className="mt-6 whitespace-pre-line text-base leading-8 text-white/70">
                {profile.achievements}
              </p>
            </div>
          )}

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5b942]">
              Featured Video
            </p>
            <h2 className="mt-4 text-3xl font-black">
              {translate("profile.setup.steps.video", "Video")}
            </h2>

            {profile.video_url ? (
              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#f5b942]/20 bg-black">
                <video
                  src={profile.video_url}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full bg-black"
                />
              </div>
            ) : (
              <div className="mt-6 flex min-h-[220px] items-center justify-center rounded-[1.5rem] border border-dashed border-white/15 bg-black/30 p-8 text-center text-white/45">
                {translate("profile.public.noVideo", "Video henüz eklenmedi.")}
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-2xl font-black">
              {translate("profile.public.workArea", "Çalışma Alanı")}
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-black text-white">
                  {translate("profile.public.countries", "Ülkeler")}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {profile.work_countries || notSpecified}
                </p>
              </div>

              <div>
                <p className="text-sm font-black text-white">
                  {translate("profile.public.cities", "Şehirler")}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {profile.work_cities || notSpecified}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {profile.can_travel && (
                  <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white/70">
                    {translate("profile.public.canTravel", "Seyahat edebilir")}
                  </span>
                )}
                {profile.works_on_site && (
                  <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white/70">
                    {translate("profile.public.worksOnsite", "Yerinde çalışır")}
                  </span>
                )}
                {profile.works_online && (
                  <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white/70">
                    {translate("profile.public.worksOnline", "Online çalışır")}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-2xl font-black">Available For</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {profile.event_types && profile.event_types.length > 0 ? (
                profile.event_types.map((eventType) => (
                  <span
                    key={eventType}
                    className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm font-bold text-white/70"
                  >
                    {eventType}
                  </span>
                ))
              ) : (
                <p className="text-sm text-white/55">
                  {translate(
                    "profile.public.noEventTypes",
                    "Çalışma türleri henüz belirtilmedi."
                  )}
                </p>
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-2xl font-black">Social</h3>

            <div className="mt-5 grid gap-3">
              {socialLinks.length > 0 ? (
                socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-black text-white/75 transition hover:border-[#f5b942]/40 hover:text-[#f5b942]"
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <p className="text-sm text-white/55">
                  {translate(
                    "profile.public.noSocial",
                    "Sosyal medya bağlantısı eklenmedi."
                  )}
                </p>
              )}

              {profile.whatsapp_number && (
                <a
                  href={`https://wa.me/${profile.whatsapp_number.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[#f5b942]/25 bg-[#f5b942]/10 px-4 py-3 text-sm font-black text-[#f5b942]"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </aside>
      </section>

      <JobRequestModal
        artistId={artistId}
        open={openJobModal}
        onClose={() => setOpenJobModal(false)}
      />
    </main>
  );
}

function MetricCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
      <div className="flex items-center gap-2">
        <span className="text-base shrink-0">{icon}</span>
        <p className="min-w-0 text-xs font-black uppercase tracking-[0.22em] text-white/40">
          {label}
        </p>
      </div>

      <p className="mt-4 text-4xl font-black text-[#f5b942]">
        {value.toLocaleString("tr-TR")}
      </p>

      <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/25">
        Live
      </p>
    </div>
  );
}
