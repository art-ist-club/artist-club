"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

type Profile = {
  id: string;
  full_name: string | null;
  username: string | null;
  country: string | null;
  city: string | null;
  language: string | null;
  avatar_url: string | null;
  tagline: string | null;
  is_published: boolean | null;
  works_online: boolean | null;
  works_on_site: boolean | null;
  can_travel: boolean | null;
  profile_views?: number | null;
  published_at?: string | null;
  created_at?: string | null;
};

type TopArtistsProps = {
  artists: Profile[];
  onOpenProfile: (profile: Profile) => void | Promise<void>;
};

export default function TopArtists({
  artists,
  onOpenProfile,
}: TopArtistsProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  if (artists.length === 0) return null;

  return (
    <section className="mb-8 grid gap-4 lg:grid-cols-3">
      {artists.map((profile, index) => {
        const profileName =
          profile.full_name ||
          profile.username ||
          translate("discover.topArtists.artist", "Sanatçı");

        return (
          <button
            key={profile.id}
            type="button"
            onClick={() => onOpenProfile(profile)}
            className="group flex items-center gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-4 text-left transition hover:border-[#f5b942]/50 hover:bg-white/[0.06]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f5b942]/25 bg-[#f5b942]/10 text-lg font-black text-[#f5b942]">
              #{index + 1}
            </div>

            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {profile.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={profileName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl">
                  🎭
                </div>
              )}
            </div>

            <div className="min-w-0">
              <p className="truncate font-black text-white group-hover:text-[#f5b942]">
                {profileName}
              </p>

              <p className="mt-1 text-xs font-semibold text-white/45">
                {(profile.profile_views ?? 0).toLocaleString("tr-TR")}{" "}
                {translate("discover.topArtists.views", "görüntülenme")}
              </p>

              <p className="mt-1 text-xs text-white/35">
                {profile.city || profile.country || "Global Artist"}
              </p>
            </div>
          </button>
        );
      })}
    </section>
  );
}
