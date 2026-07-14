"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type Conversation = {
  id: string;
  job_request_id: string | null;
  artist_id: string | null;
  client_profile_id: string | null;
  created_at: string;
  updated_at?: string | null;
  job_requests?: {
    full_name: string | null;
    job_type: string | null;
    job_date: string | null;
    country: string | null;
    city: string | null;
    message: string | null;
    phone: string | null;
    email: string | null;
  } | null;
};

type Message = {
  id: string;
  conversation_id: string;
  sender_profile_id: string | null;
  sender_type: "artist" | "client";
  message: string;
  is_read: boolean | null;
  created_at: string;
};

export default function ArtistConversationPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const conversationId = String(params.id || "");

  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    if (!conversationId) return;

    loadConversation();

    const channel = supabase
      .channel(`artist-conversation-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        () => {
          loadConversation(false);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  async function markClientMessagesAsRead() {
    if (!conversationId) return;

    const { error } = await supabase
      .from("messages")
      .update({ is_read: true })
      .eq("conversation_id", conversationId)
      .eq("sender_type", "client")
      .or("is_read.eq.false,is_read.is.null");

    if (error) {
      console.error("Artist mark messages read error:", error);
    }
  }

  async function loadMessages() {
    const { data: messageData, error: messageError } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });

    if (messageError) {
      console.error("Messages load error:", messageError);
      setErrorMessage(translate("messaging.loadError", "Mesajlar yüklenemedi."));
      return;
    }

    setMessages((messageData as Message[] | null) ?? []);
  }

  async function loadConversation(showLoading = true) {
    if (showLoading) {
      setLoading(true);
    }

    setErrorMessage("");

    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      router.push("/login");
      return;
    }

    setCurrentUserId(userData.user.id);

    const { data: conversationData, error: conversationError } = await supabase
      .from("conversations")
      .select(
        `
        id,
        job_request_id,
        artist_id,
        client_profile_id,
        created_at,
        updated_at,
        job_requests (
          full_name,
          job_type,
          job_date,
          country,
          city,
          message,
          phone,
          email
        )
      `
      )
      .eq("id", conversationId)
      .maybeSingle();

    if (conversationError) {
      console.error("Conversation load error:", conversationError);
      setErrorMessage(translate("messaging.threadLoadError", "Conversation yüklenemedi."));
      setLoading(false);
      return;
    }

    if (!conversationData) {
      setErrorMessage(translate("messaging.threadNotFound", "Conversation bulunamadı."));
      setLoading(false);
      return;
    }

    const normalizedConversation = {
      ...conversationData,
      job_requests: Array.isArray(conversationData.job_requests)
        ? conversationData.job_requests[0] ?? null
        : conversationData.job_requests,
    } as Conversation;

    setConversation(normalizedConversation);

    await markClientMessagesAsRead();
    await loadMessages();

    setLoading(false);
  }

  async function sendMessage() {
    const cleanMessage = messageText.trim();

    if (!cleanMessage || !conversationId || !currentUserId || sending) return;

    setSending(true);
    setErrorMessage("");

    const { error: insertError } = await supabase.from("messages").insert({
      conversation_id: conversationId,
      sender_profile_id: currentUserId,
      sender_type: "artist",
      message: cleanMessage,
      is_read: false,
    });

    if (insertError) {
      console.error("Message send error:", insertError);
      setErrorMessage(translate("messaging.sendError", "Mesaj gönderilemedi."));
      setSending(false);
      return;
    }

    const { error: updateError } = await supabase
      .from("conversations")
      .update({ updated_at: new Date().toISOString() })
      .eq("id", conversationId);

    if (updateError) {
      console.error("Conversation update error:", updateError);
    }

    setMessageText("");
    setSending(false);
    await loadConversation(false);
  }

  const jobRequest = conversation?.job_requests;

  const title = useMemo(() => {
    return jobRequest?.full_name || "Client";
  }, [jobRequest]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03050b] text-white">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-6">
          {translate("messaging.threadLoading", "Conversation yükleniyor...")}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#03050b] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="mb-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => router.push("/dashboard/artist/conversations")}
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60 transition hover:border-[#f5b942] hover:text-white"
            >
              {translate("messaging.backConversations", "← Conversations")}
            </button>

            <button
              type="button"
              onClick={() => router.push("/dashboard/artist")}
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60 transition hover:border-[#f5b942] hover:text-white"
            >
              Dashboard
            </button>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f5b942]">
            ART-IST.CLUB Conversation
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            💬 {title}
          </h1>

          <div className="mt-5 grid gap-3 text-sm text-white/65 md:grid-cols-3">
            <Info
              label={translate("messaging.jobType", "İş Türü")}
              value={jobRequest?.job_type || "-"}
            />
            <Info
              label={translate("messaging.date", "Tarih")}
              value={
                jobRequest?.job_date
                  ? new Date(jobRequest.job_date).toLocaleDateString("tr-TR")
                  : "-"
              }
            />
            <Info
              label={translate("messaging.location", "Konum")}
              value={
                [jobRequest?.country, jobRequest?.city]
                  .filter(Boolean)
                  .join(" / ") || "-"
              }
            />
          </div>
        </header>

        {errorMessage && (
          <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-bold text-red-200">
            {errorMessage}
          </div>
        )}

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="mb-6 rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-white/35">
              {translate("messaging.firstRequest", "İlk Talep Mesajı")}
            </p>
            <p className="whitespace-pre-line leading-7 text-white/70">
              {jobRequest?.message || "-"}
            </p>
          </div>

          <div className="mb-6 min-h-[320px] space-y-4 rounded-2xl border border-white/10 bg-black/20 p-5">
            {messages.length === 0 ? (
              <div className="flex min-h-[260px] items-center justify-center text-center">
                <div>
                  <p className="text-4xl">💬</p>
                  <p className="mt-3 text-lg font-black">
                    {translate("messaging.emptyThread", "Henüz mesaj yok.")}
                  </p>
                  <p className="mt-2 text-sm text-white/45">
                    {translate(
                      "messaging.startHint",
                      "İlk mesajı göndererek konuşmayı başlat."
                    )}
                  </p>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isMine={message.sender_profile_id === currentUserId}
                />
              ))
            )}
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <textarea
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
              placeholder={translate("messaging.placeholder", "Mesajını yaz...")}
              rows={3}
              className="resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]"
            />

            <button
              type="button"
              onClick={sendMessage}
              disabled={sending || !messageText.trim()}
              className="rounded-2xl bg-[#f5b942] px-8 py-4 font-black text-black transition hover:scale-[1.02] hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sending ? translate("messaging.sending", "Gönderiliyor...") : translate("messaging.send", "Gönder")}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

function MessageBubble({
  message,
  isMine,
}: {
  message: Message;
  isMine: boolean;
}) {
  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 ${
          isMine
            ? "bg-[#f5b942] text-black"
            : "border border-white/10 bg-white/[0.06] text-white"
        }`}
      >
        <p className="text-xs font-black uppercase tracking-[0.18em] opacity-60">
          {message.sender_type === "artist" ? "Artist" : "Client"}
        </p>
        <p className="mt-2 whitespace-pre-line leading-7">{message.message}</p>
        <p className="mt-3 text-xs opacity-50">
          {new Date(message.created_at).toLocaleString("tr-TR")}
        </p>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-2 break-words font-bold text-white/75">{value}</p>
    </div>
  );
}
