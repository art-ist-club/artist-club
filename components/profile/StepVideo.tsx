"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { supabase } from "@/lib/supabase";

type StepVideoProps = {
  videoUrl: string;
  setVideoUrl: (value: string) => void;
};

const MAX_VIDEO_SIZE = 100 * 1024 * 1024;

export default function StepVideo({ videoUrl, setVideoUrl }: StepVideoProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleVideoUpload(file: File) {
    setError("");

    if (!file.type.startsWith("video/")) {
      setError("Lütfen sadece video dosyası yükle.");
      return;
    }

    if (file.size > MAX_VIDEO_SIZE) {
      setError("Video en fazla 100 MB olabilir.");
      return;
    }

    setUploading(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError("Video yüklemek için giriş yapmalısın.");
        return;
      }

      const fileExt = file.name.split(".").pop()?.toLowerCase() || "mp4";
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("artist-videos")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from("artist-videos")
        .getPublicUrl(filePath);

      setVideoUrl(data.publicUrl);
    } catch {
      setError("Video yüklenirken hata oluştu. Lütfen tekrar dene.");
    } finally {
      setUploading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  function handleRemoveVideo() {
    setError("");
    setVideoUrl("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-white/60">
          Kısa ve güçlü bir tanıtım videosu ekle. Bu alan sanatçının sahne
          enerjisini, yeteneğini ve profesyonel duruşunu göstermek için
          kullanılacak.
        </p>

        <p className="mt-3 text-sm text-white/40">
          MP4, MOV veya WEBM formatında video yükleyebilirsin. Maksimum dosya
          boyutu 100 MB.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        {error && (
          <p className="mb-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        {videoUrl ? (
          <div className="space-y-5">
            <div className="overflow-hidden rounded-3xl border border-[#f5b942]/20 bg-black">
              <video
                src={videoUrl}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-black object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={uploading}
                className="rounded-full border border-[#f5b942]/40 px-5 py-3 text-sm font-semibold text-[#f5b942] transition hover:bg-[#f5b942]/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploading
                  ? translate("common.status.loading", "Yükleniyor...")
                  : translate("profile.stepsUi.photo.change", "Değiştir")}
              </button>

              <button
                type="button"
                onClick={handleRemoveVideo}
                disabled={uploading}
                className="rounded-full border border-red-500/40 px-5 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Videoyu Sil
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="flex min-h-[280px] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-black/20 p-8 text-center transition hover:border-[#f5b942]/50 hover:bg-[#f5b942]/5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#f5b942]/40 bg-[#f5b942]/10 text-3xl text-[#f5b942]">
              ▶
            </span>

            <span className="text-lg font-bold text-white">
              {uploading
                ? translate("common.status.loading", "Yükleniyor...")
                : translate("profile.stepsUi.video.upload", "Video yükle")}
            </span>

            <span className="mt-2 max-w-md text-sm leading-6 text-white/50">
              Sanatçının performansını, sahne enerjisini veya tanıtım videosunu
              buraya ekle.
            </span>
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="video/mp4,video/quicktime,video/webm"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;

            handleVideoUpload(file);
          }}
        />
      </div>
    </div>
  );
}