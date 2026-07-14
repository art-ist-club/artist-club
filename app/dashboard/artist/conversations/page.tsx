"use client";

import { useRouter } from "next/navigation";
import { useConversations } from "@/hooks/useConversations";
import ConversationCard from "@/components/messages/ConversationCard";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/dictionaries";

export default function ArtistConversationsPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const { items, loading } = useConversations("artist");

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const totalUnread = items.reduce((total, item) => total + item.unread_count, 0);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03050b] p-8 text-white">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-6">
          {translate("messaging.loading", "Mesajlar yükleniyor...")}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#03050b] p-8 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => router.push("/dashboard/artist")}
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-bold text-white/70 transition hover:border-[#f5b942] hover:bg-white/10 hover:text-white"
            >
              ← Dashboard
            </button>

            <div className="text-right">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b942]">
                Artist
              </p>
              <h1 className="text-3xl font-black">
                {translate("messaging.title", "Mesajlarım")}
              </h1>
              {totalUnread > 0 ? (
                <p className="mt-2 text-sm font-black text-red-200">
                  🔴{" "}
                  {formatMessage(
                    translate("messaging.unread", "{{count}} okunmamış mesaj"),
                    { count: totalUnread }
                  )}
                </p>
              ) : (
                <p className="mt-2 text-sm font-bold text-white/45">
                  {translate("messaging.noUnread", "Okunmamış mesaj yok")}
                </p>
              )}
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-8 text-center">
            <h2 className="text-xl font-black">
              {translate("messaging.empty", "Henüz conversation yok")}
            </h2>
            <p className="mt-3 text-white/50">
              {translate(
                "messaging.emptyArtistHint",
                "Clientlardan gelen konuşmalar burada listelenecek."
              )}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {items.map((item) => (
              <ConversationCard
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                basePath="/dashboard/artist/conversations"
                unreadCount={item.unread_count}
                avatarUrl={item.avatar_url}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
