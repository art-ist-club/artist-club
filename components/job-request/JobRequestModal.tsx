"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";

type JobRequestModalProps = {
  artistId: string;
  open: boolean;
  onClose: () => void;
};

export default function JobRequestModal({
  artistId,
  open,
  onClose,
}: JobRequestModalProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [jobType, setJobType] = useState("");
  const [jobDate, setJobDate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  function resetForm() {
    setJobType("");
    setJobDate("");
    setCountry("");
    setCity("");
    setMessage("");
    setFullName("");
    setPhone("");
    setEmail("");
    setSuccessMessage("");
    setErrorMessage("");
  }

  function handleClose() {
    if (loading) return;
    resetForm();
    onClose();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!artistId) {
      setErrorMessage(
        translate(
          "job-requests.modal.errors.artistMissing",
          "Sanatçı bilgisi bulunamadı. Lütfen sayfayı yenileyip tekrar deneyin."
        )
      );
      return;
    }

    if (!jobType.trim()) {
      setErrorMessage(
        translate("job-requests.modal.errors.jobType", "Lütfen iş türünü yazın.")
      );
      return;
    }

    if (!country.trim()) {
      setErrorMessage(
        translate(
          "job-requests.modal.errors.country",
          "Lütfen ülke bilgisini yazın."
        )
      );
      return;
    }

    if (!city.trim()) {
      setErrorMessage(
        translate(
          "job-requests.modal.errors.city",
          "Lütfen şehir bilgisini yazın."
        )
      );
      return;
    }

    if (!fullName.trim()) {
      setErrorMessage(
        translate(
          "job-requests.modal.errors.name",
          "Lütfen ad soyad bilgisini yazın."
        )
      );
      return;
    }

    if (!phone.trim()) {
      setErrorMessage(
        translate(
          "job-requests.modal.errors.phone",
          "Lütfen telefon bilgisini yazın."
        )
      );
      return;
    }

    if (!email.trim()) {
      setErrorMessage(
        translate(
          "job-requests.modal.errors.email",
          "Lütfen e-mail bilgisini yazın."
        )
      );
      return;
    }

    setLoading(true);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("Job request user error:", userError);
    }

    if (!user) {
      setLoading(false);
      setErrorMessage(
        translate(
          "job-requests.modal.errors.loginRequired",
          "İş talebi göndermek için giriş yapmalısınız."
        )
      );
      return;
    }

    const { error } = await supabase.from("job_requests").insert({
      artist_id: artistId,
      client_id: user.id,
      job_type: jobType.trim(),
      job_date: jobDate || null,
      country: country.trim(),
      city: city.trim(),
      message: message.trim() || null,
      full_name: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      status: "new",
    });

    setLoading(false);

    if (error) {
      console.error("Job request insert error:", error);
      setErrorMessage(
        translate(
          "job-requests.modal.errors.sendFailed",
          "İş talebi gönderilemedi. Lütfen tekrar deneyin."
        )
      );
      return;
    }

    setSuccessMessage(
      translate(
        "job-requests.modal.success",
        "İş talebiniz başarıyla gönderildi."
      )
    );
    resetForm();

    setTimeout(() => {
      onClose();
    }, 900);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-[#f5b942]/25 bg-[#08090d] p-6 shadow-2xl shadow-black/50 md:p-8">
        <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5b942]">
              ART-IST.CLUB
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              {translate("job-requests.modal.title", "📨 İş Talebi Gönder")}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              {translate(
                "job-requests.modal.subtitle",
                "Sanatçıya ulaşmak için iş detaylarını ve iletişim bilgilerinizi gönderin."
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={loading}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-lg font-black text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={translate("job-requests.modal.closeAria", "Kapat")}
          >
            ✕
          </button>
        </div>

        {errorMessage && (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-bold text-red-200">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-bold text-emerald-200">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-7 space-y-7">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-black text-white">
              {translate("job-requests.modal.jobDetails", "İş Detayları")}
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-white/70">
                  İş Türü *
                </label>
                <input
                  required
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  placeholder="Örn: Düğün, konser, reklam filmi, etkinlik"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Tarih
                </label>
                <input
                  type="date"
                  value={jobDate}
                  onChange={(e) => setJobDate(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition focus:border-[#f5b942]/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Ülke *
                </label>
                <input
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Örn: Türkiye"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Şehir *
                </label>
                <input
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Örn: İstanbul"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Mesaj
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="İşin detaylarını yazın..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg font-black text-white">
              {translate("job-requests.modal.contactInfo", "İletişim Bilgileri")}
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Ad Soyad *
                </label>
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Adınız ve soyadınız"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  Telefon *
                </label>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+90..."
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/70">
                  E-mail *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@mail.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {translate("job-requests.modal.cancel", "Vazgeç")}
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-[#f5b942] px-7 py-4 text-sm font-black text-black transition hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? translate("job-requests.modal.sending", "Gönderiliyor...")
                : translate("job-requests.modal.send", "İş Talebini Gönder")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
