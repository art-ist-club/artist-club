"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import SocialFollowButtons from "@/components/social/SocialFollowButtons";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function ComingSoonView() {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const brand = translate("coming-soon.brand", "ART-IST.CLUB");
  const title = translate("coming-soon.title", "Çok Yakında Buluşuyoruz");
  const description = translate(
    "coming-soon.description",
    "Dünya çapında sanatçıları, markaları ve projeleri bir araya getiren global keşif platformu son dokunuşlarını alıyor."
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03050b] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-[#f5b942]/12 blur-[140px]" />
        <div className="absolute right-0 top-32 h-[26rem] w-[26rem] rounded-full bg-white/5 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-[#f5b942]/8 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:px-8 md:pt-24">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0c101c] via-[#070912] to-[#05070e] px-6 py-14 shadow-[0_40px_120px_rgba(0,0,0,.45)] md:px-12 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,185,66,.14),transparent_42%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f5b942]">
              {translate("coming-soon.eyebrow", "Soft Launch")}
            </p>
            <p className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#f5b942] md:text-6xl">
              {brand}
            </p>
            <h1 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
              {description}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-7 text-[#f5b942]/90 md:text-[15px]">
              {translate(
                "coming-soon.nearOpen",
                "Platform açılışı çok yakın. İlk üyelikler ve keşif deneyimi kısa süre içinde aktif olacak."
              )}
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-white/10 bg-[#070912]/85 p-7 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5b942]/80">
              Artist
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white">
              {translate(
                "coming-soon.artistCard.title",
                "Sanatçılar için"
              )}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/55 md:text-[15px]">
              {translate(
                "coming-soon.artistCard.text",
                "Profesyonel profilini oluştur, portfolyonu sergile ve doğru projelerle buluş."
              )}
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-white/10 bg-[#070912]/85 p-7 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5b942]/80">
              Client
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white">
              {translate(
                "coming-soon.clientCard.title",
                "İşverenler için"
              )}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/55 md:text-[15px]">
              {translate(
                "coming-soon.clientCard.text",
                "Doğrulanan yetenekleri keşfet, taleplerini ilet ve doğru sanatçıyla doğrudan bağlantı kur."
              )}
            </p>
          </article>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-white/10 bg-[#070912]/80 px-6 py-9 text-center md:px-10">
          <h2 className="text-lg font-black tracking-tight text-white md:text-xl">
            {translate("coming-soon.followTitle", "Bizi Takip Et")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/55 md:text-[15px] md:leading-8">
            {translate(
              "coming-soon.followHint",
              "Açılışı ilk sen öğren. Bizi sosyal medyada takip et."
            )}
          </p>
          <div className="mt-7">
            <SocialFollowButtons />
          </div>
        </section>

        <section className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3.5">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#f5c451] px-6 text-sm font-black text-[#1a1200] transition hover:bg-[#ffe08a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
          >
            {translate("coming-soon.ctaHome", "Ana Sayfaya Dön")}
          </Link>
          <Link
            href="/founding"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm font-bold text-white transition hover:border-[#f5c451]/40 hover:text-[#f5c451] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
          >
            {translate(
              "coming-soon.ctaFounding",
              "Founding Artist Sayfasını İncele"
            )}
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm font-bold text-white transition hover:border-[#f5c451]/40 hover:text-[#f5c451] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c451]"
          >
            {translate("coming-soon.ctaContact", "İletişim")}
          </Link>
        </section>

        <div className="mt-16">
          <Footer variant="comingSoon" />
        </div>
      </div>
    </main>
  );
}
