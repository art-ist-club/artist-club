"use client";

import { useRouter } from "next/navigation";
import { useConversations } from "@/hooks/useConversations";
import ConversationCard from "@/components/messages/ConversationCard";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/dictionaries";

export default function ClientConversationsPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const { items, loading } = useConversations("client");

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const totalUnread = items.reduce((t, i) => t + i.unread_count, 0);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0b0b0f] p-8 text-white">
        {translate("common.status.loading", "Yükleniyor...")}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0f] p-8 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => router.push("/dashboard/client")}
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 hover:bg-white/10"
          >
            ← Dashboard
          </button>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-[#f5b942]">Client</p>
            <h1 className="text-3xl font-semibold">
              {translate("messaging.title", "Mesajlarım")}
            </h1>
            {totalUnread > 0 && (
              <p className="mt-2 text-sm font-bold text-red-300">
                🔴{" "}
                {formatMessage(
                  translate("messaging.unread", "{{count}} okunmamış mesaj"),
                  { count: totalUnread }
                )}
              </p>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-8 text-center">
            <h2 className="text-xl font-semibold">
              {translate("messaging.empty", "Henüz conversation yok")}
            </h2>
            <p className="mt-3 text-white/50">
              {translate(
                "messaging.emptyClientHint",
                "Artistlerle başlayan konuşmalar burada listelenecek."
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
                unreadCount={item.unread_count}
                avatarUrl={item.avatar_url}
                basePath="/dashboard/client/conversations"
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
