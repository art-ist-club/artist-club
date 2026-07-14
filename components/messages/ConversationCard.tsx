"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/dictionaries";

type ConversationCardProps = {
  id: string;
  title: string;
  subtitle?: string;
  basePath?: string;
  unreadCount?: number;
  avatarUrl?: string | null;
};

export default function ConversationCard({
  id,
  title,
  subtitle,
  basePath = "/dashboard/client/conversations",
  unreadCount = 0,
  avatarUrl = null,
}: ConversationCardProps) {
  const router = useRouter();
  const { t } = useLanguage();
  const hasUnread = unreadCount > 0;

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  function openConversation() {
    if (!id || !basePath) return;
    router.push(`${basePath}/${id}`);
  }

  return (
    <button
      type="button"
      onClick={openConversation}
      className={`w-full rounded-3xl border p-5 text-left transition hover:scale-[1.01] ${
        hasUnread
          ? "border-red-500/40 bg-red-500/10 shadow-[0_0_35px_rgba(239,68,68,0.12)] hover:border-red-400/70 hover:bg-red-500/15"
          : "border-white/10 bg-white/[0.03] hover:border-[#f5b942]/60 hover:bg-white/[0.06]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full ${
              hasUnread ? "bg-red-500/20" : "bg-white/10"
            }`}
          >
            {avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatarUrl}
                alt={title}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-xl">👤</span>
            )}
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-lg font-black text-white">{title}</h3>

              {hasUnread ? (
                <span className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-black text-white">
                  {translate("messaging.newBadge", "Yeni")}
                </span>
              ) : null}
            </div>

            {subtitle ? (
              <p className="mt-1 truncate text-sm text-white/60">{subtitle}</p>
            ) : null}

            {hasUnread ? (
              <p className="mt-2 text-sm font-black text-red-200">
                🔴{" "}
                {formatMessage(
                  translate("messaging.unreadNew", "{{count}} yeni mesaj"),
                  { count: unreadCount }
                )}
              </p>
            ) : (
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/30">
                {translate("messaging.threadTitle", "Conversation")}
              </p>
            )}
          </div>
        </div>

        {hasUnread ? (
          <span className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-red-500 px-3 text-sm font-black text-white">
            {unreadCount}
          </span>
        ) : (
          <span className="shrink-0 rounded-full bg-[#f5b942] px-4 py-2 text-sm font-black text-black">
            {translate("messaging.open", "Aç")}
          </span>
        )}
      </div>
    </button>
  );
}
