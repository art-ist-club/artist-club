"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import ClientNavbar from "@/components/client/ClientNavbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type ClientProfile = {
  id: string;
  full_name: string | null;
  username: string | null;
  avatar_url: string | null;
};

type FavoriteArtist = {
  id: string;
  full_name: string | null;
  username: string | null;
  avatar_url: string | null;
  country: string | null;
  city: string | null;
};

export default function ClientDashboardPage() {
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<ClientProfile | null>(null);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const [favoriteArtists, setFavoriteArtists] = useState<FavoriteArtist[]>([]);

  const loadDashboard = useCallback(async () => {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login?redirect=/dashboard/client");
      return;
    }

    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("id, full_name, username, avatar_url, account_type")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("Client dashboard profile error:", profileError);
    }

    if (profileData?.account_type === "artist") {
      router.replace("/dashboard/artist");
      return;
    }

    setProfile((profileData as ClientProfile | null) ?? null);

    const [favoritesResult, requestsResult, conversationsResult] =
      await Promise.all([
        supabase
          .from("favorites")
          .select("artist_id, created_at")
          .eq("client_id", user.id)
          .order("created_at", { ascending: false }),

        supabase
          .from("job_requests")
          .select("id", { count: "exact", head: true })
          .eq("client_id", user.id),

        supabase
          .from("conversations")
          .select("id")
          .eq("client_profile_id", user.id),
      ]);

    if (favoritesResult.error) {
      console.error("Client dashboard favorites error:", favoritesResult.error);
    }

    if (requestsResult.error) {
      console.error("Client dashboard requests error:", requestsResult.error);
    }

    if (conversationsResult.error) {
      console.error(
        "Client dashboard conversations error:",
        conversationsResult.error
      );
    }

    const favoriteIds = (favoritesResult.data ?? [])
      .map((row) => row.artist_id)
      .filter((id): id is string => Boolean(id));

    setFavoriteCount(favoriteIds.length);
    setRequestCount(requestsResult.count ?? 0);

    if (favoriteIds.length > 0) {
      const { data: artists, error: artistsError } = await supabase
        .from("profiles")
        .select("id, full_name, username, avatar_url, country, city")
        .in("id", favoriteIds);

      if (artistsError) {
        console.error("Client dashboard favorite artists error:", artistsError);
        setFavoriteArtists([]);
      } else {
        const artistMap = new Map(
          ((artists as FavoriteArtist[] | null) ?? []).map((artist) => [
            artist.id,
            artist,
          ])
        );

        setFavoriteArtists(
          favoriteIds
            .map((id) => artistMap.get(id))
            .filter((artist): artist is FavoriteArtist => Boolean(artist))
            .slice(0, 4)
        );
      }
    } else {
      setFavoriteArtists([]);
    }

    const conversationIds = (conversationsResult.data ?? []).map(
      (conversation) => conversation.id
    );

    if (conversationIds.length > 0) {
      const { count, error } = await supabase
        .from("messages")
        .select("id", { count: "exact", head: true })
        .in("conversation_id", conversationIds)
        .eq("sender_type", "artist")
        .or("is_read.eq.false,is_read.is.null");

      if (error) {
        console.error("Client dashboard unread messages error:", error);
      }

      setUnreadMessageCount(count ?? 0);
    } else {
      setUnreadMessageCount(0);
    }

    setLoading(false);
  }, [router]);

  useEffect(() => {
    loadDashboard();

    const channel = supabase
      .channel("client-dashboard-live")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "favorites" },
        loadDashboard
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "job_requests" },
        loadDashboard
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        loadDashboard
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadDashboard]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03050b] text-white">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-6">
          {translate("dashboard.client.loading", "Client Dashboard yükleniyor...")}
        </div>
      </main>
    );
  }

  const displayName =
    profile?.full_name?.trim() ||
    profile?.username?.trim() ||
    "Client";

  return (
    <main className="min-h-screen overflow-hidden bg-[#03050b] text-white">
      <ClientNavbar />

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#f5b942]/10 blur-[140px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-white/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-6 md:px-8">
        <header className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5b942]">
                Client Dashboard
              </p>
              <h1 className="mt-3 text-3xl font-black md:text-5xl">
                {translate("dashboard.client.welcome", "Hoş geldin")}, {displayName}
              </h1>
              <p className="mt-3 text-white/50">
                {translate(
                  "dashboard.client.subtitle",
                  "Favorilerini, taleplerini ve mesajlarını buradan yönet."
                )}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-black transition hover:border-[#f5b942]/50"
            >
              {translate("common.actions.logout", "Çıkış Yap")}
            </button>
          </div>
        </header>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardCard
            icon="❤️"
            label={translate("dashboard.client.favorites", "Favoriler")}
            value={favoriteCount}
            onClick={() => router.push("/dashboard/client/favorites")}
          />
          <DashboardCard
            icon="📨"
            label={translate("dashboard.client.myRequests", "İş Talepleri")}
            value={requestCount}
            onClick={() => router.push("/dashboard/client/my-requests")}
          />
          <DashboardCard
            icon="💬"
            label={translate("dashboard.client.unreadMessages", "Okunmamış Mesaj")}
            value={unreadMessageCount}
            highlight={unreadMessageCount > 0}
            onClick={() => router.push("/dashboard/client/conversations")}
          />
          <DashboardCard
            icon="🔎"
            label={translate("dashboard.client.discover", "Sanatçı Keşfet")}
            value={0}
            hideValue
            onClick={() => router.push("/discover")}
          />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5b942]">
                  {translate("dashboard.client.favoriteArtists", "Favori Sanatçılar")}
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  {translate(
                    "dashboard.client.recentFavorites",
                    "Son eklenen favoriler"
                  )}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => router.push("/dashboard/client/favorites")}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-black"
              >
                {translate("dashboard.client.viewAll", "Tümünü Gör →")}
              </button>
            </div>

            {favoriteArtists.length > 0 ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {favoriteArtists.map((artist) => (
                  <button
                    key={artist.id}
                    type="button"
                    onClick={() =>
                      artist.username && router.push(`/artist/${artist.username}`)
                    }
                    className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 p-4 text-left transition hover:border-[#f5b942]/40"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/5">
                      {artist.avatar_url ? (
                        <img
                          src={artist.avatar_url}
                      alt={
                        artist.full_name ||
                        artist.username ||
                        translate("dashboard.client.artist", "Sanatçı")
                      }
                      className="h-full w-full object-cover"
                    />
                  ) : (
                        <span className="text-2xl">🎭</span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-lg font-black">
                        {artist.full_name ||
                          artist.username ||
                          translate("dashboard.client.artist", "Sanatçı")}
                      </p>
                      <p className="mt-1 truncate text-sm text-white/45">
                        {[artist.city, artist.country].filter(Boolean).join(", ") ||
                          translate(
                            "dashboard.client.locationMissing",
                            "Konum belirtilmedi"
                          )}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-[1.5rem] border border-dashed border-white/10 bg-black/20 p-10 text-center">
                <p className="text-3xl">❤️</p>
                <h3 className="mt-4 text-xl font-black">
                  {translate("dashboard.client.emptyFavorites", "Henüz favorin yok")}
                </h3>
                <button
                  type="button"
                  onClick={() => router.push("/discover")}
                  className="mt-5 rounded-2xl bg-[#f5b942] px-5 py-3 text-sm font-black text-black"
                >
                  {translate("dashboard.client.discover", "Sanatçı Keşfet")}
                </button>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <section className="rounded-[2rem] border border-[#f5b942]/25 bg-[#f5b942]/10 p-6">
              <h3 className="text-xl font-black">
                {translate("dashboard.client.quickActions", "Hızlı İşlemler")}
              </h3>
              <div className="mt-5 grid gap-3">
                <ActionButton
                  label={`🔎 ${translate("dashboard.client.discover", "Sanatçı Keşfet")}`}
                  onClick={() => router.push("/discover")}
                />
                <ActionButton
                  label={`❤️ ${translate("dashboard.client.favorites", "Favorilerim")}`}
                  onClick={() => router.push("/dashboard/client/favorites")}
                />
                <ActionButton
                  label={`📨 ${translate("dashboard.client.myRequests", "Taleplerim")}`}
                  onClick={() => router.push("/dashboard/client/my-requests")}
                />
                <ActionButton
                  label={`💬 ${translate("dashboard.client.messages", "Mesajlarım")}`}
                  onClick={() => router.push("/dashboard/client/conversations")}
                />
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <h3 className="text-xl font-black">
                {translate("dashboard.client.recentSearches", "Son Aramalar")}
              </h3>
              <p className="mt-3 text-sm text-white/45">
                {translate(
                  "dashboard.client.recentSearchesHint",
                  "Discover arama geçmişi sonraki adımda bağlanacak."
                )}
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <h3 className="text-xl font-black">
                {translate("dashboard.client.recentViewed", "Son Görülen Sanatçılar")}
              </h3>
              <p className="mt-3 text-sm text-white/45">
                {translate(
                  "dashboard.client.recentViewedHint",
                  "Görüntüleme geçmişi sonraki adımda bağlanacak."
                )}
              </p>
            </section>
          </aside>
        </section>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <Footer />
      </div>
    </main>
  );
}

function DashboardCard({
  icon,
  label,
  value,
  onClick,
  highlight = false,
  hideValue = false,
}: {
  icon: string;
  label: string;
  value: number;
  onClick: () => void;
  highlight?: boolean;
  hideValue?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[1.6rem] border p-6 text-left transition hover:-translate-y-1 ${
        highlight
          ? "border-red-500/35 bg-red-500/10"
          : "border-white/10 bg-white/[0.045] hover:border-[#f5b942]/40"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-2xl">{icon}</span>
        {!hideValue && (
          <span className={`text-3xl font-black ${highlight ? "text-red-200" : "text-[#f5b942]"}`}>
            {value.toLocaleString("tr-TR")}
          </span>
        )}
      </div>
      <h2 className="mt-5 text-xl font-black">{label}</h2>
    </button>
  );
}

function ActionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-left text-sm font-black transition hover:border-[#f5b942]/50"
    >
      {label}
    </button>
  );
}
