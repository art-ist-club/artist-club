"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useConversation } from "@/hooks/useConversation";
import MessageBubble from "@/components/messages/MessageBubble";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function ClientConversationPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const conversationId = String(params.id);

  const { messages, loading, reload } = useConversation(conversationId);

  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!conversationId) return;

    markArtistMessagesAsRead();

    const channel = supabase
      .channel(`client-conversation-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        async () => {
          await markArtistMessagesAsRead();
          await reload();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  async function markArtistMessagesAsRead() {
    if (!conversationId) return;

    const { error } = await supabase
      .from("messages")
      .update({ is_read: true })
      .eq("conversation_id", conversationId)
      .eq("sender_type", "artist")
      .eq("is_read", false);

    if (error) {
      console.error("Client mark artist messages read error:", error);
    }
  }

  async function sendMessage() {
    const text = newMessage.trim();

    if (!text || sending) return;

    setSending(true);
    setErrorMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setSending(false);
      setErrorMessage(translate("messaging.loginRequired", "Mesaj göndermek için giriş yapmalısın."));
      return;
    }

    const { error } = await supabase.from("messages").insert({
      conversation_id: conversationId,
      sender_profile_id: user.id,
      sender_type: "client",
      message: text,
      is_read: false,
    });

    if (error) {
      console.error("Client message insert error:", error);
      setErrorMessage(translate("messaging.sendErrorRetry", "Mesaj gönderilemedi. Lütfen tekrar dene."));
      setSending(false);
      return;
    }

    setNewMessage("");
    await reload();
    setSending(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0b0b0f] px-6 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-white/60">
            {translate("messaging.threadLoading", "Conversation yükleniyor...")}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0f] px-6 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col">
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            onClick={() => router.push("/dashboard/client/conversations")}
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 hover:bg-white/10"
          >
            {translate("messaging.back", "← Mesajlarım")}
          </button>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-[#f5b942]">
              Client Conversation
            </p>
            <h1 className="text-xl font-semibold">
              {translate("messaging.threadTitle", "Mesajlaşma")}
            </h1>
          </div>
        </div>

        <section className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {messages.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/10 p-6 text-center text-white/50">
                {translate("messaging.emptyThread", "Henüz mesaj yok.")}
              </div>
            ) : (
              messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isMine={message.sender_type === "client"}
                />
              ))
            )}
          </div>

          {errorMessage ? (
            <p className="border-t border-red-500/20 px-4 pt-4 text-sm text-red-300">
              {errorMessage}
            </p>
          ) : null}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
            className="border-t border-white/10 p-4"
          >
            <div className="flex gap-3">
              <input
                value={newMessage}
                onChange={(event) => setNewMessage(event.target.value)}
                placeholder={translate("messaging.placeholderAlt", "Mesaj yaz...")}
                className="flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#f5b942]"
              />

              <button
                type="submit"
                disabled={sending || newMessage.trim().length === 0}
                className="rounded-2xl bg-[#f5b942] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sending ? translate("messaging.sending", "Gönderiliyor...") : translate("messaging.send", "Gönder")}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
