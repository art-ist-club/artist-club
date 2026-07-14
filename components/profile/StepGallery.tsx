"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { supabase } from "@/lib/supabase";

type GalleryImage = {
  url: string;
  path: string;
};

type StepGalleryProps = {
  userId: string;
  galleryImages: GalleryImage[];
  setGalleryImages: (value: GalleryImage[]) => void;
};

const MAX_GALLERY_IMAGES = 8;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

export default function StepGallery({
  userId,
  galleryImages,
  setGalleryImages,
}: StepGalleryProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFiles(files: FileList | null) {
    setError("");

    if (!files || files.length === 0) return;

    if (!userId) {
      setError("Kullanıcı bilgisi bulunamadı. Lütfen sayfayı yenileyip tekrar dene.");
      return;
    }

    const fileArray = Array.from(files);
    const remainingSlots = MAX_GALLERY_IMAGES - galleryImages.length;

    if (remainingSlots <= 0) {
      setError(`En fazla ${MAX_GALLERY_IMAGES} fotoğraf yükleyebilirsin.`);
      return;
    }

    const selectedFiles = fileArray.slice(0, remainingSlots);

    const invalidFile = selectedFiles.find(
      (file) => !file.type.startsWith("image/")
    );

    if (invalidFile) {
      setError("Lütfen sadece görsel dosyaları yükle.");
      return;
    }

    const oversizedFile = selectedFiles.find((file) => file.size > MAX_FILE_SIZE);

    if (oversizedFile) {
      setError("Her fotoğraf en fazla 10 MB olabilir.");
      return;
    }

    setUploading(true);

    try {
      const uploadedImages: GalleryImage[] = [];

      for (const file of selectedFiles) {
        const fileExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const filePath = `${userId}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("artist-gallery")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          throw uploadError;
        }

        const { data } = supabase.storage
          .from("artist-gallery")
          .getPublicUrl(filePath);

        uploadedImages.push({
          url: data.publicUrl,
          path: filePath,
        });
      }

      setGalleryImages([...galleryImages, ...uploadedImages]);
    } catch {
      setError("Bazı fotoğraflar yüklenemedi. Lütfen tekrar dene.");
    } finally {
      setUploading(false);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  async function removeImage(image: GalleryImage) {
    setError("");

    const filteredImages = galleryImages.filter(
      (item) => item.path !== image.path
    );

    setGalleryImages(filteredImages);

    const { error: removeError } = await supabase.storage
      .from("artist-gallery")
      .remove([image.path]);

    if (removeError) {
      setError("Fotoğraf silinirken bir sorun oluştu.");
    }
  }

  function moveImage(index: number, direction: "left" | "right") {
    const newImages = [...galleryImages];
    const targetIndex = direction === "left" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newImages.length) return;

    [newImages[index], newImages[targetIndex]] = [
      newImages[targetIndex],
      newImages[index],
    ];

    setGalleryImages(newImages);
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-white/60">
          Sanatçı profilinde kullanılacak en güçlü görsellerini yükle. Galeri
          fotoğrafları aynı boyutta gösterilir ve profil sayfasında düzenli
          görünür.
        </p>

        <p className="mt-3 text-sm text-white/40">
          En fazla {MAX_GALLERY_IMAGES} fotoğraf yükleyebilirsin.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">
              {translate("profile.stepsUi.gallery.title", "Galeri")}
            </h3>
            <p className="mt-2 text-sm text-white/45">
              {galleryImages.length} / {MAX_GALLERY_IMAGES} fotoğraf yüklendi
            </p>
          </div>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading || galleryImages.length >= MAX_GALLERY_IMAGES}
            className="rounded-full bg-[#f5b942] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {uploading
              ? translate("common.status.loading", "Yükleniyor...")
              : translate("profile.stepsUi.gallery.upload", "Görsel yükle")}
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(event) => handleFiles(event.target.files)}
          />
        </div>

        {error && (
          <p className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        {galleryImages.length === 0 ? (
          <div className="mt-6 flex min-h-[260px] items-center justify-center rounded-3xl border border-dashed border-white/15 bg-black/20 p-8 text-center">
            <div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f5b942]/10 text-2xl">
                🖼️
              </div>
              <h4 className="text-lg font-bold text-white">
                {translate("profile.stepsUi.gallery.empty", "Henüz görsel yok")}
              </h4>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/45">
                Sanatçının sahne, portre, çalışma veya performans fotoğraflarını
                buraya ekleyebilirsin.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.path}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30"
              >
                <div className="aspect-square overflow-hidden bg-black">
                  <img
                    src={image.url}
                    alt={`Galeri fotoğrafı ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-3 p-3">
                  <div className="flex items-center justify-between text-xs text-white/45">
                    <span>Fotoğraf {index + 1}</span>

                    {index === 0 && (
                      <span className="rounded-full bg-[#f5b942]/15 px-2 py-1 text-[#f5b942]">
                        Kapak
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => moveImage(index, "left")}
                      disabled={index === 0}
                      className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={() => moveImage(index, "right")}
                      disabled={index === galleryImages.length - 1}
                      className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      →
                    </button>

                    <button
                      type="button"
                      onClick={() => removeImage(image)}
                      className="rounded-xl border border-red-500/20 px-3 py-2 text-sm text-red-300 transition hover:bg-red-500/10"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-[#f5b942]/15 bg-[#f5b942]/5 p-5">
        <h4 className="font-bold text-[#f5b942]">Galeri Notu</h4>
        <p className="mt-2 text-sm leading-6 text-white/55">
          İlk fotoğraf otomatik olarak galeri kapak fotoğrafı kabul edilir.
          Ok tuşlarıyla sıralamayı değiştirebilirsin.
        </p>
      </div>
    </div>
  );
}