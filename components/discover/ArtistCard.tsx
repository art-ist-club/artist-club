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

type ArtistCardProps = {
  profile: Profile;
  categoryNames: string;
  isFavorite: boolean;
  onToggleFavorite: (profileId: string) => void | Promise<void>;
  onOpenProfile: (profile: Profile) => void | Promise<void>;
};

export default function ArtistCard({
  profile,
  categoryNames,
  isFavorite,
  onToggleFavorite,
  onOpenProfile,
}: ArtistCardProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const profileName =
    profile.full_name ||
    profile.username ||
    translate("discover.card.artistFallback", "Sanatçı");
  const location = [profile.city, profile.country].filter(Boolean).join(", ");

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070912] shadow-[0_24px_70px_rgba(0,0,0,.36)] transition duration-300 hover:-translate-y-1 hover:border-[#f5b942]/45 hover:shadow-[0_30px_90px_rgba(245,185,66,.12)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(245,185,66,.16),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(124,58,237,.14),transparent_34%)] opacity-80" />

      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#151827] via-[#070912] to-[#0b0d18]">
        {profile.avatar_url ? (
          <img
            src={profile.avatar_url}
            alt={profileName}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(245,185,66,.18),transparent_28%),radial-gradient(circle_at_68%_20%,rgba(124,58,237,.22),transparent_30%),linear-gradient(145deg,#151827,#05070e)] text-6xl">
            🎭
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#070912] via-[#070912]/45 to-transparent" />

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(profile.id);
          }}
          className={`absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border text-lg shadow-2xl transition ${
            isFavorite
              ? "border-[#f5b942]/80 bg-[#f5b942] text-black"
              : "border-white/15 bg-black/45 text-white backdrop-blur-xl hover:border-[#f5b942]/60 hover:bg-[#f5b942]/15"
          }`}
          aria-label={
            isFavorite
              ? translate("discover.card.removeFavorite", "Favorilerden çıkar")
              : translate("discover.card.addFavorite", "Favoriye ekle")
          }
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="mb-3 inline-flex rounded-full border border-[#f5b942]/25 bg-black/35 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-[#f5b942] backdrop-blur-xl">
            {profile.city || profile.country || "Global Artist"}
          </div>

          <h3 className="line-clamp-1 text-3xl font-black tracking-[-0.055em] text-white">
            {profileName}
          </h3>

          {location && (
            <p className="mt-1 text-sm font-semibold text-white/58">
              {location}
            </p>
          )}
        </div>
      </div>

      <div className="relative p-5">
        <p className="line-clamp-1 text-sm font-black text-[#f5b942]">
          {categoryNames || translate("discover.card.artistFallback", "Sanatçı")}
        </p>

        {profile.tagline ? (
          <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-white/58">
            “{profile.tagline}”
          </p>
        ) : (
          <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-white/35">
            {translate(
              "discover.card.emptyBio",
              "Bu sanatçı henüz kısa tanıtım metni eklemedi."
            )}
          </p>
        )}

        <div className="mt-5 grid grid-cols-2 gap-2">
          <InfoPill
            label={translate("discover.card.country", "Ülke")}
            value={profile.country}
          />
          <InfoPill
            label={translate("discover.card.city", "Şehir")}
            value={profile.city}
          />
          <InfoPill
            label={translate("discover.filters.language", "Dil")}
            value={profile.language}
          />
          <InfoPill
            label={translate("discover.card.views", "Görüntülenme")}
            value={(profile.profile_views ?? 0).toLocaleString("tr-TR")}
          />
        </div>

        <div className="mt-5 flex min-h-[34px] flex-wrap gap-2">
          {profile.works_online && (
            <Badge
              label={translate("discover.card.worksOnline", "Online çalışır")}
            />
          )}
          {profile.works_on_site && (
            <Badge label={translate("discover.filters.onsite", "Sahada")} />
          )}
          {profile.can_travel && (
            <Badge
              label={translate("discover.card.canTravel", "Seyahat eder")}
            />
          )}
          {!profile.works_online &&
            !profile.works_on_site &&
            !profile.can_travel && (
              <Badge
                label={translate(
                  "discover.card.workModelSoon",
                  "Çalışma modeli yakında"
                )}
                muted
              />
            )}
        </div>

        <button
          type="button"
          onClick={() => onOpenProfile(profile)}
          disabled={!profile.username}
          className="mt-5 w-full rounded-2xl bg-gradient-to-r from-[#f5b942] to-[#ffe08a] px-6 py-4 text-sm font-black text-black shadow-[0_16px_45px_rgba(245,185,66,.18)] transition hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(245,185,66,.26)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {translate("discover.card.discoverCta", "Sanatçıyı Keşfet →")}
        </button>
      </div>
    </article>
  );
}

function InfoPill({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition group-hover:border-white/15">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>

      <p className="mt-1 truncate text-sm font-bold text-white/78">
        {value || "-"}
      </p>
    </div>
  );
}

function Badge({ label, muted = false }: { label: string; muted?: boolean }) {
  return (
    <span
      className={`rounded-full border px-3 py-2 text-xs font-black ${
        muted
          ? "border-white/10 bg-white/[0.035] text-white/42"
          : "border-[#f5b942]/22 bg-[#f5b942]/10 text-[#f5b942]"
      }`}
    >
      {label}
    </span>
  );
}
