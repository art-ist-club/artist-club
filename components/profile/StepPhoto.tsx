"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { supabase } from "@/lib/supabase";

type StepPhotoProps = {
  avatarUrl: string;
  setAvatarUrl: (value: string) => void;
  userId: string;
};

export default function StepPhoto({
  avatarUrl,
  setAvatarUrl,
  userId,
}: StepPhotoProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleUpload(file: File) {
    setError("");

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Lütfen sadece görsel dosyası yükle.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Fotoğraf en fazla 5 MB olabilir.");
      return;
    }

    setUploading(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}-${Date.now()}.${fileExt}`;
    const filePath = `${userId}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      setError("Fotoğraf yüklenemedi. Lütfen tekrar dene.");
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);

    setAvatarUrl(data.publicUrl);
    setUploading(false);
  }

  return (
    <div className="space-y-8">
      <p className="text-white/60">
        İlk izlenim önemlidir. Profesyonel ve net bir profil fotoğrafı
        kullanman önerilir.
      </p>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-black/20 p-8">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Profil"
              className="h-48 w-48 rounded-full border-4 border-[#f5b942] object-cover"
            />
          ) : (
            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-dashed border-white/20 bg-white/5 text-center text-sm text-white/40">
              Fotoğraf yok
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">
            {translate("profile.stepsUi.photo.title", "Profil Fotoğrafı")}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/55">
            JPG, PNG veya WEBP formatında net bir yüz fotoğrafı yükle. Bu
            fotoğraf sanatçı profilinde güven veren ilk alanlardan biri olacak.
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) handleUpload(file);
            }}
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="rounded-full bg-[#f5b942] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {uploading
                ? translate("common.status.loading", "Yükleniyor...")
                : avatarUrl
                  ? translate("profile.stepsUi.photo.change", "Değiştir")
                  : translate("profile.stepsUi.photo.upload", "Fotoğraf yükle")}
            </button>

            {avatarUrl && (
              <button
                type="button"
                onClick={() => setAvatarUrl("")}
                disabled={uploading}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Fotoğrafı Kaldır
              </button>
            )}
          </div>

          {error && (
            <p className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}