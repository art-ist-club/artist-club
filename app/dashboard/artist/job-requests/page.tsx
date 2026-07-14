"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type JobRequest = {
  id: string;
  artist_id: string;
  full_name: string | null;
  job_type: string | null;
  job_date: string | null;
  country: string | null;
  city: string | null;
  message: string | null;
  phone: string | null;
  email: string | null;
  created_at: string;
};

type ConversationRow = {
  id: string;
  job_request_id: string | null;
};

export default function ArtistJobRequestsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<JobRequest[]>([]);
  const [conversationByJobRequestId, setConversationByJobRequestId] = useState<
    Record<string, string>
  >({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    loadJobRequests();
  }, []);

  async function loadJobRequests() {
    setLoading(true);
    setErrorMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { data: artistData, error: artistError } = await supabase
      .from("artists")
      .select("id")
      .eq("profile_id", user.id)
      .maybeSingle();

    if (artistError) {
      console.error("Artist profile load error:", artistError);
      setErrorMessage(translate("job-requests.list.artistLoadError", "Artist profili yüklenemedi."));
      setLoading(false);
      return;
    }

    if (!artistData?.id) {
      setRequests([]);
      setLoading(false);
      return;
    }

    const { data: jobRequestsData, error: jobRequestsError } = await supabase
      .from("job_requests")
      .select("*")
      .eq("artist_id", artistData.id)
      .order("created_at", { ascending: false });

    if (jobRequestsError) {
      console.error("Job requests load error:", jobRequestsError);
      setErrorMessage(translate("job-requests.list.loadError", "İş talepleri yüklenemedi."));
      setLoading(false);
      return;
    }

    const loadedRequests = (jobRequestsData as JobRequest[] | null) ?? [];
    setRequests(loadedRequests);

    const jobRequestIds = loadedRequests.map((request) => request.id);

    if (jobRequestIds.length > 0) {
      const { data: conversationData, error: conversationError } = await supabase
        .from("conversations")
        .select("id, job_request_id")
        .in("job_request_id", jobRequestIds);

      if (conversationError) {
        console.error("Job request conversations load error:", conversationError);
      }

      const map: Record<string, string> = {};

      ((conversationData as ConversationRow[] | null) ?? []).forEach((conversation) => {
        if (conversation.job_request_id) {
          map[conversation.job_request_id] = conversation.id;
        }
      });

      setConversationByJobRequestId(map);
    } else {
      setConversationByJobRequestId({});
    }

    setLoading(false);
  }

  function openConversation(requestId: string) {
    const conversationId = conversationByJobRequestId[requestId];

    if (!conversationId) return;

    router.push(`/dashboard/artist/conversations/${conversationId}`);
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#03050b] text-white">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-6">
          {translate("job-requests.list.loading", "İş talepleri yükleniyor...")}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#03050b] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <button
            type="button"
            onClick={() => router.push("/dashboard/artist")}
            className="mb-5 rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60 transition hover:border-[#f5b942] hover:text-white"
          >
            ← Dashboard
          </button>

          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f5b942]">
            ART-IST.CLUB
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            {translate("dashboard.artist.jobRequests", "Job Requests")}
          </h1>
        </header>

        {errorMessage && (
          <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-bold text-red-200">
            {errorMessage}
          </div>
        )}

        {requests.length === 0 ? (
          <section className="rounded-[2rem] border border-dashed border-white/10 bg-white/[0.03] p-10 text-center">
            <h2 className="text-2xl font-black">
              {translate("job-requests.list.empty", "Henüz iş talebi yok.")}
            </h2>
            <p className="mt-3 text-white/50">
              {translate(
                "job-requests.list.emptyHint",
                "Clientlardan gelen talepler burada listelenecek."
              )}
            </p>
          </section>
        ) : (
          <section className="grid gap-5">
            {requests.map((request) => {
              const conversationId = conversationByJobRequestId[request.id];

              return (
                <article
                  key={request.id}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b942]">
                        {request.job_type || translate("profile.public.jobRequests", "İş Talebi")}
                      </p>

                      <h2 className="mt-3 text-2xl font-black">
                        {request.full_name || "Client"}
                      </h2>

                      <p className="mt-3 text-sm text-white/55">
                        {[request.country, request.city].filter(Boolean).join(" / ") || "-"}
                      </p>

                      <p className="mt-2 text-sm text-white/55">
                        {request.job_date
                          ? new Date(request.job_date).toLocaleDateString("tr-TR")
                          : translate("job-requests.list.noDate", "Tarih belirtilmedi")}
                      </p>
                    </div>

                    {conversationId ? (
                      <button
                        type="button"
                        onClick={() => openConversation(request.id)}
                        className="rounded-2xl bg-[#f5b942] px-6 py-4 text-sm font-black text-black transition hover:scale-[1.02] hover:bg-[#ffd36a]"
                      >
                        {translate("job-requests.list.openChat", "Mesajlaşmayı Aç →")}
                      </button>
                    ) : (
                      <span className="rounded-2xl border border-white/10 px-6 py-4 text-sm font-black text-white/50">
                        {translate("job-requests.list.noConversation", "Conversation yok")}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/35">
                      {translate("job-requests.list.message", "Talep Mesajı")}
                    </p>
                    <p className="mt-3 whitespace-pre-line leading-7 text-white/70">
                      {request.message || "-"}
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm text-white/55 md:grid-cols-2">
                    <Info label={translate("job-requests.list.phone", "Telefon")} value={request.phone || "-"} />
                    <Info label={translate("job-requests.list.email", "E-Mail")} value={request.email || "-"} />
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </div>
    </main>
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
