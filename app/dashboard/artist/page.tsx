"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/dictionaries";

type Profile = {
  id: string;
  full_name: string | null;
  username: string | null;
  country: string | null;
  city: string | null;
  district: string | null;
  language: string | null;
  avatar_url: string | null;
  video_url: string | null;
  tagline: string | null;
  bio: string | null;
  work_countries: string | null;
  work_cities: string | null;
  is_published: boolean | null;
  published_at: string | null;
};

type ProfileCategory = {
  category_id: number;
};

type ArtistConversation = {
  id: string;
  client_profile_id: string | null;
};

type ClientProfile = {
  id: string;
  full_name: string | null;
  username: string | null;
  avatar_url: string | null;
};

type UnreadMessage = {
  id: string;
  conversation_id: string;
};

type MessageNotification = {
  conversation_id: string;
  client_profile_id: string | null;
  client_name: string;
  client_avatar_url: string | null;
  unread_count: number;
};

type ArtistDashboardStats = {
  profile_id: string;
  profile_views: number | null;
  favorite_count: number | null;
  job_request_count: number | null;
};

export default function ArtistDashboardPage() {
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [categoryCount, setCategoryCount] = useState(0);
  const [profileViewCount, setProfileViewCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [jobRequestCount, setJobRequestCount] = useState(0);
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const [messageNotifications, setMessageNotifications] = useState<MessageNotification[]>([]);

  const loadDashboard = useCallback(
    async (showLoading = true) => {
      if (showLoading) {
        setLoading(true);
      }

      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        router.push("/login");
        return;
      }

      const { data: roleProfile } = await supabase
        .from("profiles")
        .select("account_type")
        .eq("id", userData.user.id)
        .maybeSingle();

      if (roleProfile?.account_type !== "artist") {
        router.replace("/dashboard/client");
        return;
      }

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select(
          "id, full_name, username, country, city, district, language, avatar_url, video_url, tagline, bio, work_countries, work_cities, is_published, published_at"
        )
        .eq("id", userData.user.id)
        .maybeSingle();

      if (profileError) {
        console.error("Dashboard profile load error:", profileError);
      }

      if (!profileData) {
        router.push("/profile/setup");
        return;
      }

      setProfile(profileData);

      const { data: profileCategories, error: categoryError } = await supabase
        .from("profile_categories")
        .select("category_id")
        .eq("profile_id", userData.user.id);

      if (categoryError) {
        console.error("Dashboard category load error:", categoryError);
      }

      setCategoryCount((profileCategories as ProfileCategory[] | null)?.length ?? 0);

      const { data: statsData, error: statsError } = await supabase
        .from("artist_dashboard_stats")
        .select("profile_id, profile_views, favorite_count, job_request_count")
        .eq("profile_id", userData.user.id)
        .maybeSingle();

      if (statsError) {
        console.error("Dashboard live stats load error:", statsError);
      }

      const liveStats = statsData as ArtistDashboardStats | null;

      setProfileViewCount(Number(liveStats?.profile_views ?? 0));
      setFavoriteCount(Number(liveStats?.favorite_count ?? 0));
      setJobRequestCount(Number(liveStats?.job_request_count ?? 0));

      const { data: artistData, error: artistError } = await supabase
        .from("artists")
        .select("id")
        .eq("profile_id", userData.user.id)
        .maybeSingle();

      if (artistError) {
        console.error("Dashboard artist load error:", artistError);
      }

      if (!artistData?.id) {
        setJobRequestCount(0);
        setUnreadMessageCount(0);
        setMessageNotifications([]);
        setLoading(false);
        return;
      }

      const { data: conversationData, error: conversationError } = await supabase
        .from("conversations")
        .select("id, client_profile_id")
        .eq("artist_id", artistData.id);

      if (conversationError) {
        console.error("Dashboard conversation load error:", conversationError);
      }

      const conversations = (conversationData as ArtistConversation[] | null) ?? [];
      const conversationIds = conversations.map((conversation) => conversation.id);

      if (conversationIds.length === 0) {
        setUnreadMessageCount(0);
        setMessageNotifications([]);
        setLoading(false);
        return;
      }

      const { data: unreadMessagesData, error: unreadError } = await supabase
        .from("messages")
        .select("id, conversation_id")
        .in("conversation_id", conversationIds)
        .eq("sender_type", "client")
        .or("is_read.eq.false,is_read.is.null");

      if (unreadError) {
        console.error("Dashboard unread message load error:", unreadError);
      }

      const unreadMessages = (unreadMessagesData as UnreadMessage[] | null) ?? [];
      setUnreadMessageCount(unreadMessages.length);

      const unreadByConversation = unreadMessages.reduce<Record<string, number>>(
        (acc, message) => {
          acc[message.conversation_id] = (acc[message.conversation_id] ?? 0) + 1;
          return acc;
        },
        {}
      );

      const clientProfileIds = Array.from(
        new Set(
          conversations
            .map((conversation) => conversation.client_profile_id)
            .filter((id): id is string => Boolean(id))
        )
      );

      let clientProfiles: ClientProfile[] = [];

      if (clientProfileIds.length > 0) {
        const { data: clientProfilesData, error: clientProfilesError } = await supabase
          .from("profiles")
          .select("id, full_name, username, avatar_url")
          .in("id", clientProfileIds);

        if (clientProfilesError) {
          console.error("Dashboard client profile load error:", clientProfilesError);
        }

        clientProfiles = (clientProfilesData as ClientProfile[] | null) ?? [];
      }

      const notifications = conversations
        .map((conversation) => {
          const unreadCount = unreadByConversation[conversation.id] ?? 0;

          if (unreadCount <= 0) return null;

          const clientProfile = clientProfiles.find(
            (client) => client.id === conversation.client_profile_id
          );

          return {
            conversation_id: conversation.id,
            client_profile_id: conversation.client_profile_id,
            client_name:
              clientProfile?.full_name ||
              (clientProfile?.username ? `@${clientProfile.username}` : "Client"),
            client_avatar_url: clientProfile?.avatar_url ?? null,
            unread_count: unreadCount,
          };
        })
        .filter((notification): notification is MessageNotification => Boolean(notification))
        .sort((a, b) => b.unread_count - a.unread_count);

      setMessageNotifications(notifications);
      setLoading(false);
    },
    [router]
  );

  useEffect(() => {
    loadDashboard(true);

    const channel = supabase
      .channel("artist-dashboard-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
        },
        () => {
          loadDashboard(false);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "conversations",
        },
        () => {
          loadDashboard(false);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "favorites",
        },
        () => {
          loadDashboard(false);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "job_requests",
        },
        () => {
          loadDashboard(false);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "profiles",
        },
        () => {
          loadDashboard(false);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadDashboard]);

  const completionItems = useMemo(() => {
    return [
      {
        label: translate("dashboard.artist.checklist.basic", "Temel bilgiler"),
        done: Boolean(profile?.full_name?.trim() || profile?.username?.trim()),
      },
      {
        label: translate("dashboard.artist.checklist.location", "Konum bilgisi"),
        done: Boolean(
          profile?.country?.trim() &&
            profile?.city?.trim() &&
            profile?.district?.trim()
        ),
      },
      {
        label: translate("dashboard.artist.checklist.language", "Dil bilgisi"),
        done: Boolean(profile?.language?.trim()),
      },
      {
        label: translate("dashboard.artist.checklist.categories", "Kategori"),
        done: categoryCount > 0,
      },
      {
        label: translate("dashboard.artist.checklist.photo", "Profil fotoğrafı"),
        done: Boolean(profile?.avatar_url?.trim()),
      },
      {
        label: translate("dashboard.artist.checklist.tagline", "Profil sloganı"),
        done: Boolean(profile?.tagline?.trim()),
      },
      {
        label: translate("dashboard.artist.checklist.bio", "Biyografi"),
        done: Boolean(profile?.bio?.trim() && profile.bio.trim().length >= 40),
      },
      {
        label: translate("dashboard.artist.checklist.workArea", "Çalışma alanı"),
        done: Boolean(profile?.work_countries?.trim() || profile?.work_cities?.trim()),
      },
      {
        label: translate("dashboard.artist.checklist.video", "Video"),
        done: Boolean(profile?.video_url?.trim()),
      },
    ];
  }, [profile, categoryCount, t]);

  const completionPercent = useMemo(() => {
    if (completionItems.length === 0) return 0;

    const doneCount = completionItems.filter((item) => item.done).length;
    return Math.round((doneCount / completionItems.length) * 100);
  }, [completionItems]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  function handleEditProfile() {
    router.push("/profile/setup");
  }

  function handleViewPublicProfile() {
    if (!profile?.username) {
      router.push("/profile/setup");
      return;
    }

    router.push(`/artist/${profile.username}`);
  }

  function handleJobRequests() {
    router.push("/dashboard/artist/job-requests");
  }

  function handleMessages() {
    router.push("/dashboard/artist/conversations");
  }

  function handleConversation(conversationId: string) {
    router.push(`/dashboard/artist/conversations/${conversationId}`);
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03050b] text-white">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-6">
          {translate("dashboard.artist.loading", "Dashboard yükleniyor...")}
        </div>
      </main>
    );
  }

  const displayName =
    profile?.full_name ||
    profile?.username ||
    translate("dashboard.artist.artistFallback", "Sanatçı");
  const username = profile?.username
    ? `@${profile.username}`
    : translate("dashboard.artist.usernameMissing", "@belirtilmedi");
  const isPublished = Boolean(profile?.is_published);

  return (
    <main className="min-h-screen bg-[#03050b] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f5b942]">
              ART-IST.CLUB Dashboard
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              {translate("dashboard.artist.welcome", "Hoş geldin")}, {displayName}{" "}
              👋
            </h1>

            <p className="mt-3 text-white/55">
              {translate(
                "dashboard.artist.subtitle",
                "Profil durumunu, görünürlüğünü ve sanatçı hesabını buradan yönet."
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-2xl border border-white/10 px-6 py-4 text-sm font-black text-white transition hover:border-[#f5b942] hover:bg-white/5"
          >
            {translate("dashboard.logout", "Çıkış Yap")}
          </button>
        </header>

        {messageNotifications.length > 0 && (
          <section className="mb-8 rounded-[1.5rem] border border-red-500/30 bg-red-500/10 p-5">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-red-200">
                  🔴 {translate("dashboard.artist.newMessages", "Yeni Mesajlar")}
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  {formatMessage(
                    translate(
                      "dashboard.artist.unreadCount",
                      "{{count}} okunmamış mesajın var."
                    ),
                    { count: unreadMessageCount }
                  )}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleMessages}
                className="w-fit rounded-full bg-red-500 px-5 py-3 text-sm font-black text-white transition hover:bg-red-400"
              >
                {translate("dashboard.artist.goToMessages", "Tüm Mesajlara Git →")}
              </button>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {messageNotifications.map((notification) => (
                <button
                  key={notification.conversation_id}
                  type="button"
                  onClick={() => handleConversation(notification.conversation_id)}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-left transition hover:border-red-300/40 hover:bg-black/35"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10">
                      {notification.client_avatar_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={notification.client_avatar_url}
                          alt={notification.client_name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-lg">👤</span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-base font-black text-white">
                        {notification.client_name}
                      </p>
                      <p className="mt-1 text-sm text-white/50">
                        {formatMessage(
                          translate("messaging.unreadNew", "{{count}} yeni mesaj"),
                          { count: notification.unread_count }
                        )}
                      </p>
                    </div>
                  </div>

                  <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-red-500 px-2 text-sm font-black text-white">
                    {notification.unread_count}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <button
            type="button"
            onClick={handleEditProfile}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-[#f5b942] hover:bg-white/[0.07]"
          >
            <p className="text-2xl">🎭</p>
            <h2 className="mt-3 text-xl font-black">
              {translate("dashboard.artist.editProfile", "Profilimi Düzenle")}
            </h2>
            <p className="mt-2 text-sm text-white/50">
              {translate(
                "dashboard.artist.editProfileHint",
                "Artist profil bilgilerini güncelle."
              )}
            </p>
          </button>

          <button
            type="button"
            onClick={handleJobRequests}
            className="relative rounded-[1.5rem] border border-[#f5b942]/30 bg-[#f5b942]/10 p-6 text-left transition hover:border-[#f5b942] hover:bg-[#f5b942]/15"
          >
            {unreadMessageCount > 0 && (
              <span className="absolute right-5 top-5 rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white">
                {unreadMessageCount} NEW
              </span>
            )}

            <p className="text-2xl">📨</p>
            <h2 className="mt-3 text-xl font-black">
              {translate("dashboard.artist.jobRequests", "Job Requests")}
            </h2>
            <p className="mt-2 text-sm text-white/60">
              {translate(
                "dashboard.artist.jobRequestsHint",
                "Gelen iş taleplerini ve mesajları yönet."
              )}
            </p>
            <p className="mt-4 text-3xl font-black text-[#f5b942]">
              {jobRequestCount}
            </p>

            {unreadMessageCount > 0 && (
              <p className="mt-3 text-sm font-black text-red-200">
                🔴{" "}
                {formatMessage(
                  translate("messaging.unread", "{{count}} okunmamış mesaj"),
                  { count: unreadMessageCount }
                )}
              </p>
            )}
          </button>

          <button
            type="button"
            onClick={handleViewPublicProfile}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-[#f5b942] hover:bg-white/[0.07]"
          >
            <p className="text-2xl">🌍</p>
            <h2 className="mt-3 text-xl font-black">
              {translate("dashboard.artist.publicProfile", "Public Profil")}
            </h2>
            <p className="mt-2 text-sm text-white/50">
              {translate(
                "dashboard.artist.publicProfileHint",
                "Yayındaki profilini görüntüle."
              )}
            </p>
          </button>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#f5b942]">
                  {translate("dashboard.artist.profileStatus", "Profil Durumu")}
                </p>

                <h2 className="text-4xl font-black tracking-tight">
                  {isPublished
                    ? translate("dashboard.artist.published", "Profilin yayında.")
                    : translate(
                        "dashboard.artist.unpublished",
                        "Sanatçı profilini tamamlayalım."
                      )}
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-white/60">
                  {isPublished
                    ? translate(
                        "dashboard.artist.publishedHint",
                        "Profilin artık keşif sistemi için hazır. Gelen iş taleplerini Job Requests alanından takip edebilirsin."
                      )
                    : translate(
                        "dashboard.artist.unpublishedHint",
                        "Profilini tamamladığında yapımcılar, markalar, ajanslar ve VIP şirketler seni daha kolay keşfedebilir."
                      )}
                </p>
              </div>

              <span
                className={`w-fit rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${
                  isPublished ? "bg-[#f5b942] text-black" : "bg-white/10 text-white/70"
                }`}
              >
                {isPublished
                  ? translate("dashboard.artist.liveBadge", "Yayında")
                  : translate("dashboard.artist.draftBadge", "Taslak")}
              </span>
            </div>

            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm text-white/60">
                <span>
                  {translate(
                    "dashboard.artist.completion",
                    "Profil tamamlanma"
                  )}
                </span>
                <span className="font-black text-[#f5b942]">%{completionPercent}</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#f5b942] transition-all duration-500"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {completionItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4"
                >
                  <p className="text-sm font-black text-white">
                    {item.done ? "✅" : "⬜"} {item.label}
                  </p>
                  <p className="mt-2 text-xs text-white/45">
                    {item.done
                      ? translate("dashboard.artist.completed", "Tamamlandı")
                      : translate("dashboard.artist.incomplete", "Eksik")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[2rem] border border-[#f5b942]/25 bg-[#f5b942]/10 p-8">
              <h3 className="text-2xl font-black">
                {translate("dashboard.artist.accountInfo", "Hesap Bilgileri")}
              </h3>

              <div className="mt-6 space-y-4 text-sm text-white/70">
                <p>
                  <span className="font-black text-white">
                    {translate("dashboard.artist.fullName", "Ad Soyad")}:
                  </span>{" "}
                  {profile?.full_name || "-"}
                </p>

                <p>
                  <span className="font-black text-white">
                    {translate("dashboard.artist.username", "Kullanıcı adı")}:
                  </span>{" "}
                  {username}
                </p>

                <p>
                  <span className="font-black text-white">
                    {translate("dashboard.artist.location", "Konum")}:
                  </span>{" "}
                  {[profile?.district, profile?.city, profile?.country]
                    .filter(Boolean)
                    .join(" / ") || "-"}
                </p>

                <p>
                  <span className="font-black text-white">
                    {translate("dashboard.artist.publishedAt", "Yayın tarihi")}:
                  </span>{" "}
                  {profile?.published_at
                    ? new Date(profile.published_at).toLocaleDateString("tr-TR")
                    : "-"}
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {isPublished && (
                  <button
                    type="button"
                    onClick={handleViewPublicProfile}
                    className="w-full rounded-2xl bg-[#f5b942] px-5 py-4 font-black text-black transition hover:scale-[1.02] hover:bg-[#ffd36a]"
                  >
                    {translate(
                      "dashboard.artist.viewPublic",
                      "Public Profili Gör →"
                    )}
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleJobRequests}
                  className="relative w-full rounded-2xl border border-[#f5b942]/30 bg-[#f5b942]/10 px-5 py-4 font-black text-white transition hover:border-[#f5b942] hover:bg-[#f5b942]/15"
                >
                  📨 {translate("dashboard.artist.jobRequests", "Job Requests")}
                  {unreadMessageCount > 0 && (
                    <span className="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                      {unreadMessageCount}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleMessages}
                  className="relative w-full rounded-2xl border border-white/10 px-5 py-4 font-black text-white transition hover:border-[#f5b942] hover:bg-white/5"
                >
                  💬 {translate("dashboard.artist.messages", "Mesajlar")}
                  {unreadMessageCount > 0 && (
                    <span className="ml-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                      {unreadMessageCount}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleEditProfile}
                  className="w-full rounded-2xl border border-white/10 px-5 py-4 font-black text-white transition hover:border-[#f5b942] hover:bg-white/5"
                >
                  {translate("dashboard.artist.editProfileShort", "Profili Düzenle")}
                </button>
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <StatCard
                label={translate(
                  "dashboard.artist.statViews",
                  "Profil görüntülenme"
                )}
                value={profileViewCount.toLocaleString("tr-TR")}
                liveLabel={translate("dashboard.artist.liveData", "Canlı veri")}
              />
              <StatCard
                label={translate(
                  "dashboard.artist.statFavorites",
                  "Favorilere eklenme"
                )}
                value={favoriteCount.toLocaleString("tr-TR")}
                liveLabel={translate("dashboard.artist.liveData", "Canlı veri")}
              />
              <StatCard
                label={translate(
                  "dashboard.artist.statJobOffers",
                  "İş teklifleri"
                )}
                value={jobRequestCount.toLocaleString("tr-TR")}
                liveLabel={translate("dashboard.artist.liveData", "Canlı veri")}
              />
              <StatCard
                label={translate(
                  "dashboard.artist.statUnread",
                  "Okunmamış mesaj"
                )}
                value={unreadMessageCount.toLocaleString("tr-TR")}
                highlight={unreadMessageCount > 0}
                liveLabel={translate("dashboard.artist.liveData", "Canlı veri")}
              />
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  highlight = false,
  liveLabel = "Canlı veri",
}: {
  label: string;
  value: string;
  highlight?: boolean;
  liveLabel?: string;
}) {
  return (
    <div
      className={`rounded-[1.5rem] border p-6 ${
        highlight
          ? "border-red-500/30 bg-red-500/10"
          : "border-white/10 bg-white/[0.035]"
      }`}
    >
      <p className="text-sm text-white/50">{label}</p>
      <p className={`mt-2 text-3xl font-black ${highlight ? "text-red-200" : "text-white"}`}>
        {value}
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/35">
        {liveLabel}
      </p>
    </div>
  );
}
