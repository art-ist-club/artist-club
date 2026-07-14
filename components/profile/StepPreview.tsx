"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

type ArtistCategory = {
  id: number;
  name: string;
};

type GalleryImage = {
  url: string;
  path: string;
};

type StepPreviewProps = {
  displayName: string;
  stageName: string;
  country: string;
  city: string;
  district: string;
  language: string;
  avatarUrl: string;
  videoUrl: string;
  tagline: string;
  experienceYears: string;
  bio: string;
  achievements: string;
  workCountries: string;
  workCities: string;
  canTravel: boolean;
  worksOnSite: boolean;
  worksOnline: boolean;
  eventTypes: string[];
  websiteUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  youtubeUrl: string;
  facebookUrl: string;
  xUrl: string;
  linkedinUrl: string;
  whatsappNumber: string;
  categories: ArtistCategory[];
  selectedCategoryIds: number[];
  galleryImages: GalleryImage[];
};

function cleanUrl(url: string) {
  const value = url.trim();

  if (!value) return "";
  if (value.startsWith("http://") || value.startsWith("https://")) return value;

  return `https://${value}`;
}

export default function StepPreview({
  displayName,
  stageName,
  country,
  city,
  district,
  language,
  avatarUrl,
  videoUrl,
  tagline,
  experienceYears,
  bio,
  achievements,
  workCountries,
  workCities,
  canTravel,
  worksOnSite,
  worksOnline,
  eventTypes,
  websiteUrl,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
  facebookUrl,
  xUrl,
  linkedinUrl,
  whatsappNumber,
  categories,
  selectedCategoryIds,
  galleryImages,
}: StepPreviewProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const selectedCategories = categories.filter((category) =>
    selectedCategoryIds.includes(category.id)
  );

  const artistName =
    stageName ||
    displayName ||
    translate("profile.preview.artistName", "Sanatçı adı");
  const notSpecified = translate("profile.public.notSpecified", "Belirtilmedi");
  const location = [city, district, country].filter(Boolean).join(", ");

  const socialLinks = [
    { label: "Website", icon: "🌐", value: websiteUrl, href: cleanUrl(websiteUrl) },
    { label: "Instagram", icon: "📸", value: instagramUrl, href: cleanUrl(instagramUrl) },
    { label: "TikTok", icon: "🎵", value: tiktokUrl, href: cleanUrl(tiktokUrl) },
    { label: "YouTube", icon: "▶️", value: youtubeUrl, href: cleanUrl(youtubeUrl) },
    { label: "Facebook", icon: "f", value: facebookUrl, href: cleanUrl(facebookUrl) },
    { label: "X", icon: "𝕏", value: xUrl, href: cleanUrl(xUrl) },
    { label: "LinkedIn", icon: "💼", value: linkedinUrl, href: cleanUrl(linkedinUrl) },
  ].filter((item) => item.value.trim().length > 0);

  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
    : "";

  const mainGalleryImage = galleryImages[0];
  const sideGalleryImages = galleryImages.slice(1, 5);
  const remainingGalleryCount = galleryImages.length - 5;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-white/60">
          {translate(
            "profile.preview.intro",
            "Profilin yayına alınmadan önce dışarıdan nasıl görüneceğini burada kontrol et. Eksik veya yanlış gördüğün alan varsa sol menüden ilgili adıma dönebilirsin."
          )}
        </p>

        <p className="mt-3 text-sm text-white/40">
          {translate(
            "profile.preview.modeHint",
            "Bu ekran yayınlanacak sanatçı profilinin önizlemesidir."
          )}
        </p>
      </div>

      <div className="overflow-hidden rounded-[2.2rem] border border-[#f5b942]/20 bg-[#05060a] shadow-2xl shadow-black/40">
        <section className="relative border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,185,66,0.24),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.1),transparent_30%),linear-gradient(135deg,#05060a_0%,#101114_50%,#05060a_100%)]" />
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative p-6 md:p-10">
            <div className="mb-10 inline-flex rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/65">
              {translate("profile.preview.previewMode", "Önizleme Modu")}
            </div>

            <div className="grid items-end gap-8 lg:grid-cols-[1fr_320px]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-[#f5b942] bg-black/50 text-center text-xs font-black text-white/45 shadow-2xl shadow-[#f5b942]/10 md:h-36 md:w-36">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={artistName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    translate("profile.setup.steps.photo", "Profil Fotoğrafı")
                  )}
                </div>

                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/75">
                    <span>●</span>
                    <span>Artist</span>
                  </div>

                  <h3 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
                    {artistName}
                  </h3>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
                    {tagline || "Global artist profile on ART-IST.CLUB."}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {selectedCategories.length > 0 ? (
                      selectedCategories.map((category) => (
                        <span
                          key={category.id}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/75"
                        >
                          {category.name}
                        </span>
                      ))
                    ) : (
                      <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/60">
                        {translate(
                          "profile.public.noCategory",
                          "Kategori belirtilmedi"
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#f5b942]/20 bg-black/35 p-6 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5b942]">
                  Quick Contact
                </p>
                <p className="mt-4 text-sm leading-6 text-white/65">
                  {translate(
                    "profile.public.quickContactDesc",
                    "Yapımcılar, markalar ve organizatörler için profesyonel sanatçı profili."
                  )}
                </p>

                <div className="mt-6 grid gap-3">
                  <button
                    type="button"
                    className="rounded-2xl bg-[#f5b942] px-6 py-4 text-sm font-black text-black"
                  >
                    {translate("profile.public.contact", "İletişime Geç")}
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-black text-white"
                  >
                    {translate(
                      "profile.preview.bookingRequest",
                      "Rezervasyon Talebi"
                    )}
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-black/20 px-6 py-4 text-sm font-black text-white/75"
                  >
                    {translate("profile.public.shareProfile", "Profili Paylaş")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard
                label={translate("profile.public.experience", "Deneyim")}
                value={experienceYears ? `${experienceYears}+` : "—"}
              />
              <InfoCard
                label={translate("profile.public.location", "Konum")}
                value={location || notSpecified}
              />
              <InfoCard
                label={translate("profile.public.language", "Dil")}
                value={language || notSpecified}
              />
            </div>

            <ContentCard
              eyebrow="About"
              title={translate("profile.public.about", "Sanatçı Hakkında")}
            >
              <p className="whitespace-pre-line text-base leading-8 text-white/70">
                {bio ||
                  translate(
                    "profile.public.noBio",
                    "Bu sanatçı henüz biyografi alanını doldurmadı."
                  )}
              </p>
            </ContentCard>

            {achievements && (
              <ContentCard
                eyebrow="Highlights"
                title={translate("profile.public.achievements", "Başarılar")}
              >
                <p className="whitespace-pre-line text-base leading-8 text-white/70">
                  {achievements}
                </p>
              </ContentCard>
            )}

            {galleryImages.length > 0 && (
              <ContentCard
                eyebrow="Gallery"
                title={translate("profile.setup.steps.gallery", "Galeri")}
              >
                <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                  {mainGalleryImage && (
                    <img
                      src={mainGalleryImage.url}
                      alt="Galeri kapak görseli"
                      className="aspect-[4/5] h-full w-full rounded-3xl border border-[#f5b942]/20 object-cover"
                    />
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {sideGalleryImages.map((image, index) => (
                      <div key={image.path || image.url} className="relative">
                        <img
                          src={image.url}
                          alt={`Galeri görseli ${index + 2}`}
                          className="aspect-square w-full rounded-2xl border border-white/10 object-cover"
                        />

                        {index === sideGalleryImages.length - 1 &&
                          remainingGalleryCount > 0 && (
                            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/60 text-2xl font-black text-white">
                              +{remainingGalleryCount}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              </ContentCard>
            )}

            {videoUrl && (
              <ContentCard
                eyebrow="Featured Video"
                title={translate("profile.setup.steps.video", "Video")}
              >                <div className="overflow-hidden rounded-[1.5rem] border border-[#f5b942]/20 bg-black">
                  <video
                    src={videoUrl}
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full bg-black"
                  />
                </div>
              </ContentCard>
            )}
          </div>

          <aside className="space-y-8">
            <SideCard title={translate("profile.public.workArea", "Çalışma Alanı")}>
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-black text-white">
                    {translate("profile.public.countries", "Ülkeler")}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {workCountries || notSpecified}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-black text-white">
                    {translate("profile.public.cities", "Şehirler")}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {workCities || notSpecified}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {canTravel && (
                    <Badge
                      label={translate(
                        "profile.public.canTravel",
                        "Seyahat edebilir"
                      )}
                    />
                  )}
                  {worksOnSite && (
                    <Badge
                      label={translate(
                        "profile.public.worksOnsite",
                        "Yerinde çalışır"
                      )}
                    />
                  )}
                  {worksOnline && (
                    <Badge
                      label={translate(
                        "profile.public.worksOnline",
                        "Online çalışır"
                      )}
                    />
                  )}
                </div>
              </div>
            </SideCard>

            <SideCard title="Available For">
              {eventTypes.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {eventTypes.map((eventType) => (
                    <Badge key={eventType} label={eventType} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-white/55">
                  {translate(
                    "profile.public.noEventTypes",
                    "Çalışma türleri henüz belirtilmedi."
                  )}
                </p>
              )}
            </SideCard>

            <SideCard title="Social">
              <div className="grid gap-3">
                {socialLinks.length > 0 ? (
                  socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-black text-white/75 transition hover:border-[#f5b942]/40 hover:text-[#f5b942]"
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  ))
                ) : (
                  <p className="text-sm text-white/55">
                    {translate(
                      "profile.public.noSocial",
                      "Sosyal medya bağlantısı eklenmedi."
                    )}
                  </p>
                )}

                {whatsappNumber && (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-[#f5b942]/25 bg-[#f5b942]/10 px-4 py-3 text-sm font-black text-[#f5b942]"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </SideCard>
          </aside>
        </section>
      </div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
      <p className="text-sm text-white/55">{label}</p>
      <p className="mt-3 text-lg font-black text-white">{value}</p>
    </div>
  );
}

function ContentCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f5b942]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black text-white">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function SideCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold text-white/70">
      {label}
    </span>
  );
}
