"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import ClientNavbar from "@/components/client/ClientNavbar";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type FavoriteArtist = {
  id: string;
  full_name: string | null;
  username: string | null;
  profile_slug: string | null;
  city: string | null;
  country: string | null;
  avatar_url: string | null;
  bio: string | null;
};

export default function ClientFavoritesPage() {
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [favoriteArtists, setFavoriteArtists] = useState<FavoriteArtist[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { data: favorites, error: favoritesError } = await supabase
      .from("favorites")
      .select("artist_id")
      .eq("client_id", user.id);

    if (favoritesError) {
      console.error("Favorites Load Error:", favoritesError);
      setFavoriteArtists([]);
      setLoading(false);
      return;
    }

    const artistIds = favorites?.map((favorite) => favorite.artist_id) || [];

    if (artistIds.length === 0) {
      setFavoriteArtists([]);
      setLoading(false);
      return;
    }

    const { data: artists, error: artistsError } = await supabase
      .from("profiles")
      .select("id, full_name, username, profile_slug, city, country, avatar_url, bio")
      .in("id", artistIds);

    if (artistsError) {
      console.error("Favorite Artists Load Error:", artistsError);
      setFavoriteArtists([]);
      setLoading(false);
      return;
    }

    setFavoriteArtists(artists || []);
    setLoading(false);
  }

  async function removeFavorite(artistId: string) {
    setRemovingId(artistId);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { error } = await supabase
      .from("favorites")
      .delete()
      .eq("client_id", user.id)
      .eq("artist_id", artistId);

    if (error) {
      console.error("Favorite Remove Error:", error);
      setRemovingId(null);
      return;
    }

    setFavoriteArtists((currentArtists) =>
      currentArtists.filter((artist) => artist.id !== artistId),
    );

    setRemovingId(null);
  }

  function openArtistProfile(artist: FavoriteArtist) {
    const artistPath = artist.username || artist.profile_slug;

    if (!artistPath) {
      console.error("Artist profile path missing:", artist);
      return;
    }

    router.push(`/artist/${artistPath}`);
  }

  const filteredArtists = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return favoriteArtists;

    return favoriteArtists.filter((artist) => {
      const name = artist.full_name?.toLowerCase() || "";
      const username = artist.username?.toLowerCase() || "";
      const city = artist.city?.toLowerCase() || "";
      const country = artist.country?.toLowerCase() || "";

      return (
        name.includes(query) ||
        username.includes(query) ||
        city.includes(query) ||
        country.includes(query)
      );
    });
  }, [favoriteArtists, search]);

  return (
    <main className="min-h-screen bg-[#03050b] text-white">
      <ClientNavbar />

      <div className="mx-auto max-w-7xl px-6 pb-10">
        <header className="mb-8 flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <button
              onClick={() => router.push("/dashboard/client")}
              className="mb-5 text-sm font-semibold text-white/50 transition hover:text-[#f5b942]"
            >
              {translate("dashboard.client.backDashboard", "← Dashboard'a Dön")}
            </button>

            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f5b942]">
              {translate("dashboard.client.favorites", "FAVORİLER")}
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-5xl">
              {translate("dashboard.client.favoritesTitle", "Favori Artistlerim ❤️")}
            </h1>

            <p className="mt-3 max-w-2xl text-white/60">
              {translate(
                "dashboard.client.favoritesSubtitle",
                "Beğendiğin artistleri buradan görüntüleyebilir, profillerini açabilir ve favorilerinden çıkarabilirsin."
              )}
            </p>
          </div>

          <button
            onClick={() => router.push("/discover")}
            className="rounded-2xl bg-[#f5b942] px-6 py-4 font-black text-black transition hover:bg-[#ffd36a]"
          >
            {translate("dashboard.client.discoverNew", "Yeni Artist Keşfet →")}
          </button>
        </header>

        <section className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-white/50">
                {translate("dashboard.client.totalFavorites", "Toplam Favori")}
              </p>
              <p className="mt-1 text-3xl font-black text-[#f5b942]">
                {favoriteArtists.length}
              </p>
            </div>

            <div className="w-full md:max-w-md">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={translate(
                  "dashboard.client.searchPlaceholder",
                  "Sanatçı ara..."
                )}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#f5b942]/70"
              />
            </div>
          </div>
        </section>

        {loading ? (
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center">
            <p className="text-white/60">
              {translate(
                "dashboard.client.favoritesLoading",
                "Favoriler yükleniyor..."
              )}
            </p>
          </section>
        ) : favoriteArtists.length === 0 ? (
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f5b942]/10 text-4xl">
              ❤️
            </div>

            <h2 className="mt-6 text-2xl font-black">
              {translate(
                "dashboard.client.emptyFavorites",
                "Henüz favori artistin yok"
              )}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-white/60">
              {translate(
                "dashboard.client.emptyFavoritesHint",
                "Discover sayfasından artistleri inceleyip kalp ikonuna basarak favorilerine ekleyebilirsin."
              )}
            </p>

            <button
              onClick={() => router.push("/discover")}
              className="mt-7 rounded-2xl bg-[#f5b942] px-7 py-4 font-black text-black transition hover:bg-[#ffd36a]"
            >
              {translate("dashboard.client.discover", "Artist Keşfet →")}
            </button>
          </section>
        ) : filteredArtists.length === 0 ? (
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center">
            <h2 className="text-2xl font-black">
              {translate("dashboard.client.noResults", "Sonuç bulunamadı")}
            </h2>

            <p className="mt-3 text-white/60">
              {translate(
                "dashboard.client.noResultsHint",
                "Aradığın isim veya şehir favorilerin içinde bulunamadı."
              )}
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-7 rounded-2xl border border-white/10 px-7 py-4 font-black transition hover:border-[#f5b942] hover:text-[#f5b942]"
            >
              {translate("dashboard.client.clearSearch", "Aramayı Temizle")}
            </button>
          </section>
        ) : (
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredArtists.map((artist) => (
              <article
                key={artist.id}
                onClick={() => openArtistProfile(artist)}
                className="group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-[#f5b942]/70 hover:bg-white/[0.06]"
              >
                <div className="relative h-72 bg-black/40">
                  {artist.avatar_url ? (
                    <img
                      src={artist.avatar_url}
                      alt={artist.full_name || "Artist"}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-7xl">
                      🎭
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      removeFavorite(artist.id);
                    }}
                    disabled={removingId === artist.id}
                    className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/60 text-xl backdrop-blur transition hover:scale-105 hover:border-red-400/70 disabled:cursor-not-allowed disabled:opacity-50"
                    title={translate(
                      "dashboard.client.removeFavorite",
                      "Favoriden çıkar"
                    )}
                  >
                    {removingId === artist.id ? "…" : "❤️"}
                  </button>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h2 className="text-2xl font-black">
                      {artist.full_name ||
                        translate(
                          "dashboard.client.unnamedArtist",
                          "İsimsiz Artist"
                        )}
                    </h2>

                    <p className="mt-1 text-sm text-white/60">
                      @{artist.username || "username-yok"}
                    </p>
                  </div>
                </div>

                <div className="space-y-5 p-5">
                  <div className="flex flex-wrap gap-2">
                    {artist.city && (
                      <span className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-semibold text-white/70">
                        📍 {artist.city}
                      </span>
                    )}

                    {artist.country && (
                      <span className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-semibold text-white/70">
                        🌍 {artist.country}
                      </span>
                    )}
                  </div>

                  <p className="line-clamp-3 min-h-[72px] text-sm leading-6 text-white/55">
                    {artist.bio ||
                      translate(
                        "dashboard.client.noBio",
                        "Bu artist henüz biyografi bilgisini tamamlamadı."
                      )}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm font-black text-[#f5b942]">
                      {translate("dashboard.client.viewProfile", "Profili Gör →")}
                    </span>

                    <span className="text-xs text-white/35">
                      {translate(
                        "dashboard.client.savedInFavorites",
                        "Favorilerinde kayıtlı"
                      )}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
