"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";
import { localeConfig, supportedLocales, type Locale } from "@/lib/i18n";

export default function Home() {
  const { locale, changeLocale, t } = useLanguage();
  const hrefFor = useLaunchAwareHref();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ended: false,
  });

  useEffect(() => {
    const targetDate = new Date(2027, 5, 30, 0, 0, 0);

    function updateCountdown() {
      const distance = targetDate.getTime() - Date.now();

      if (distance <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          ended: true,
        });
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
        ended: false,
      });
    }

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const categories = [
    {
      icon: "🎭",
      title: translate("landing.categories.acting.title", "Oyunculuk"),
      desc: translate("landing.categories.acting.description", "Oyuncu & Performans"),
      image: "/images/landing/categories/acting-01.png",
    },
    {
      icon: "🎙️",
      title: translate("landing.categories.music.title", "Müzik"),
      desc: translate("landing.categories.music.description", "Şarkıcı & Müzisyen"),
      image: "/images/landing/categories/music-01.png",
    },
    {
      icon: "💃",
      title: translate("landing.categories.dance.title", "Dans"),
      desc: translate("landing.categories.dance.description", "Dansçı & Koreograf"),
      image: "/images/landing/categories/dance-01.png",
    },
    {
      icon: "👠",
      title: translate("landing.categories.model.title", "Model"),
      desc: translate("landing.categories.model.description", "Model & Yüz"),
      image: "/images/landing/categories/model-01.png",
    },
    {
      icon: "📸",
      title: translate("landing.categories.photography.title", "Fotoğraf"),
      desc: translate("landing.categories.photography.description", "Fotoğrafçı & Kreatif Ekip"),
      image: "/images/landing/categories/photography-01.png",
    },
    {
      icon: "📱",
      title: translate("landing.categories.influencer.title", "Influencer"),
      desc: translate("landing.categories.influencer.description", "İçerik Üretici"),
      image: "/images/landing/categories/influencer-01.png",
    },
    {
      icon: "🎬",
      title: translate("landing.categories.filmProduction.title", "Film & Yapım"),
      desc: translate("landing.categories.filmProduction.description", "Yönetmen & Prodüksiyon"),
      image: "/images/landing/categories/film-production-01.png",
    },
    {
      icon: "✨",
      title: translate("landing.categories.all.title", "Tüm Kategoriler"),
      desc: translate("landing.categories.all.description", "20+ Sanat Dalını Keşfet"),
      image: "/images/landing/categories/all-categories-01.png",
    },
  ];

  const artists = [
    {
      name: "Defne Arslan",
      category: translate("landing.artists.actor", "Oyuncu"),
      location: translate("landing.artists.locations.istanbulTurkey", "İstanbul, Türkiye"),
      image: "/images/landing/hero-artists/artist-01.png",
      objectPosition: "50% 48%",
    },
    {
      name: "Bora Akın",
      category: translate("landing.artists.singer", "Şarkıcı"),
      location: translate("landing.artists.locations.berlinGermany", "Berlin, Almanya"),
      image: "/images/landing/hero-artists/artist-02.png",
      objectPosition: "50% 42%",
    },
    {
      name: "Luca Moretti",
      category: "DJ",
      location: translate("landing.artists.locations.milanItaly", "Milano, İtalya"),
      image: "/images/landing/hero-artists/artist-03.png",
      objectPosition: "50% 46%",
    },
    {
      name: "Sofia Marin",
      category: translate("landing.artists.dancer", "Dansçı"),
      location: translate("landing.artists.locations.madridSpain", "Madrid, İspanya"),
      image: "/images/landing/hero-artists/artist-04.png",
      objectPosition: "50% 44%",
    },
    {
      name: "Nora Vale",
      category: translate("landing.artists.photographer", "Fotoğrafçı"),
      location: translate("landing.artists.locations.parisFrance", "Paris, Fransa"),
      image: "/images/landing/hero-artists/artist-05.png",
      objectPosition: "52% 42%",
    },
  ];

  const trustItems = [
    ["🔎", translate("landing.trust.discover.title", "Sanatçı Keşfet"), translate("landing.trust.discover.description", "Kategori ve konuma göre ara")],
    ["🤝", translate("landing.trust.directContact.title", "Doğrudan İletişim"), translate("landing.trust.directContact.description", "Aracı olmadan bağlantı kur")],
    ["🏅", translate("landing.trust.founding.title", "Founding Artist"), translate("landing.trust.founding.description", "İlk toplulukta yerini al")],
    ["🛡️", translate("landing.trust.safe.title", "Güvenli Platform"), translate("landing.trust.safe.description", "Kontrollü ve şeffaf yapı")],
  ];

  return (
    <main className="min-h-screen bg-[#03050b] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(255,194,71,.13),transparent_30%),radial-gradient(circle_at_85%_8%,rgba(130,78,255,.18),transparent_34%),linear-gradient(180deg,#03050b_0%,#070813_45%,#03050b_100%)]" />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-5 sm:pt-3">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between rounded-2xl border border-white/10 bg-[#070912]/82 px-4 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,.42)] backdrop-blur-2xl sm:px-5">
          <a href="/" className="flex items-center gap-3">
            <div className="text-2xl font-black tracking-[-0.08em] text-[#ffc247] sm:text-3xl">AC</div>
            <div>
              <div className="text-sm font-black tracking-[-0.04em] sm:text-base">Art-ist.Club</div>
              <div className="text-[9px] text-white/48 sm:text-[10px]">{translate("common.brand.tagline", "Sanatın Yeni Dünyası")}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] font-bold text-white/74 lg:flex">
            <a href={hrefFor("/discover")} className="transition hover:text-[#ffc247]">{translate("navigation.main.discover", "Keşfet")}</a>
            <a href="/founding" className="text-[#ffd36a] transition hover:text-white">{translate("navigation.main.foundingArtist", "Founding Artist")}</a>
            <a href="#vip" className="transition hover:text-[#ffc247]">{translate("navigation.main.vipB2b", "VIP / B2B")}</a>
            <a href="#hakkimizda" className="transition hover:text-[#ffc247]">{translate("navigation.main.about", "Hakkımızda")}</a>
            <a href="#iletisim" className="transition hover:text-[#ffc247]">{translate("navigation.main.contact", "İletişim")}</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <label className="hidden sm:block">
              <span className="sr-only">
                {translate("landing.languageSelector.label", "Dil seç")}
              </span>
              <select
                value={locale}
                onChange={(event) =>
                  changeLocale(event.target.value as Locale)
                }
                className="cursor-pointer rounded-xl border border-white/10 bg-[#0b0d17] px-3.5 py-2.5 text-xs font-bold text-white/80 outline-none transition hover:border-[#ffc247]/35"
                aria-label={translate(
                  "landing.languageSelector.label",
                  "Dil seç"
                )}
              >
                {supportedLocales.map((supportedLocale) => (
                  <option
                    key={supportedLocale}
                    value={supportedLocale}
                    className="bg-[#0b0d17] text-white"
                  >
                    {localeConfig[supportedLocale].nativeName}
                  </option>
                ))}
              </select>
            </label>
            <a href={hrefFor("/login")} className="hidden rounded-xl border border-[#ffc247]/35 px-4 py-2.5 text-xs font-black transition hover:bg-[#ffc247]/10 md:block">{translate("common.actions.login", "Giriş Yap")}</a>
            <a href={hrefFor("/register")} className="rounded-xl bg-gradient-to-r from-[#ffbd3d] to-[#ffe08a] px-4 py-2.5 text-xs font-black text-black shadow-[0_10px_34px_rgba(255,194,71,.20)] transition hover:scale-[1.02] sm:px-4.5">👤 {translate("common.actions.join", "Üye Ol")}</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1320px] px-3 pb-6 pt-20 sm:px-5 sm:pt-22">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#060814]/92 shadow-[0_0_90px_rgba(0,0,0,.68)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(255,194,71,.16),transparent_30%),radial-gradient(circle_at_79%_20%,rgba(151,91,255,.24),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.03),transparent_48%)]" />

          <div className="relative grid min-h-[520px] items-center gap-8 px-6 py-7 md:px-10 lg:grid-cols-[.92fr_1.08fr] lg:px-12 lg:py-10 xl:px-14">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ffc247]/25 bg-[#ffc247]/8 px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.24em] text-[#ffd36a]">
                <span>★</span>
                {translate("landing.hero.eyebrow", "Global Sanat Platformu")}
              </div>

              <h1 className="max-w-[620px] text-[36px] font-black leading-[1.02] tracking-[-0.035em] sm:text-[50px] lg:text-[54px] xl:text-[58px]">
                {translate("landing.hero.titleStart", "Sanatın geleceği")}{" "}
                <span className="bg-gradient-to-r from-[#ffc247] via-[#ffe3a0] to-[#a56bff] bg-clip-text text-transparent">{translate("landing.hero.titleHighlight", "burada başlıyor.")}</span>
              </h1>

              <p className="mt-5 max-w-[560px] text-sm leading-6 text-white/64 sm:text-[15px]">
                {translate("landing.hero.description", "Oyuncular, müzisyenler, dansçılar, modeller ve yaratıcı yetenekler; müşteriler, markalar, yapımcılar ve ajanslarla tek platformda buluşuyor.")}
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a href={hrefFor("/discover")} className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#ffb72f] to-[#ffe08a] px-6 py-3.5 text-sm font-black text-black shadow-[0_14px_42px_rgba(255,194,71,.20)] transition hover:scale-[1.02]">
                  {translate("landing.hero.discoverCta", "Sanatçı Keşfet")}
                  <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </a>
                <a href="/founding" className="inline-flex items-center justify-center rounded-xl border border-[#ffc247]/30 bg-black/20 px-6 py-3.5 text-sm font-black transition hover:bg-[#ffc247]/10">{translate("landing.hero.foundingCta", "Founding Artist Ol")} 🏅</a>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {trustItems.map(([icon, title, text]) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-3">
                    <div className="text-xl">{icon}</div>
                    <div className="mt-2 text-[13px] font-black">{title}</div>
                    <div className="mt-1 text-[11px] leading-4 text-white/48">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto hidden h-[500px] w-full max-w-[700px] lg:block">
              <div className="pointer-events-none absolute inset-x-6 top-8 h-[420px] rounded-[44px] bg-[radial-gradient(circle_at_50%_34%,rgba(126,76,255,.24),transparent_34%),radial-gradient(circle_at_82%_58%,rgba(43,209,205,.12),transparent_28%),radial-gradient(circle_at_18%_62%,rgba(255,194,71,.10),transparent_26%)] blur-[6px]" />
              {artists.map((artist, index) => {
                const positions = [
                  "-left-2 top-24 rotate-[-10deg] z-10",
                  "left-20 top-12 rotate-[-5deg] z-20",
                  "left-1/2 top-0 -translate-x-1/2 z-40",
                  "right-20 top-12 rotate-[5deg] z-30",
                  "-right-2 top-24 rotate-[10deg] z-10",
                ];

                return (
                  <a
                    key={artist.name}
                    href={hrefFor("/discover")}
                    className={`absolute ${positions[index]} w-[290px] rounded-[28px] border border-white/12 bg-[#080a14]/96 p-4 shadow-[0_38px_90px_rgba(0,0,0,.55)] transition duration-500 hover:z-50 hover:rotate-0 hover:scale-[1.035]`}
                  >
                    <div className="relative h-[300px] overflow-hidden rounded-[22px] bg-[#080a14]">
                      <Image
                        src={artist.image}
                        alt={`${artist.name} - ${artist.category}`}
                        fill
                        priority={index === 2}
                        sizes="290px"
                        className="object-cover transition duration-700 group-hover:scale-[1.04] group-hover:shadow-[0_18px_50px_rgba(255,194,71,.38)]"
                        style={{ objectPosition: artist.objectPosition }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-black/8" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/55 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] backdrop-blur-md">
                        {artist.category}
                      </div>
                      {index === 2 && (
                        <div className="absolute bottom-4 right-4 rounded-full border border-[#ffc247]/30 bg-black/55 px-3 py-1 text-[10px] font-black text-[#ffd36a] backdrop-blur-md">
                          🏅 FOUNDING
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <div className="text-lg font-black tracking-[-0.04em]">{artist.name}</div>
                      <div className="mt-1 text-xs text-white/48">
                        {artist.category} · {artist.location}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="lg:hidden">
              <a href={hrefFor("/discover")} className="block rounded-[32px] border border-white/12 bg-[#070914] p-4 shadow-[0_40px_120px_rgba(0,0,0,.55)]">
                <div className="relative h-[300px] overflow-hidden rounded-[24px] border border-white/10 bg-[#080a14]">
                  <Image
                    src={artists[2].image}
                    alt={`${artists[2].name} - ${artists[2].category}`}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 0px"
                    className="object-cover"
                    style={{ objectPosition: artists[2].objectPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/55 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] backdrop-blur-md">
                    {artists[2].category}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full border border-[#ffc247]/30 bg-black/55 px-3 py-1 text-[10px] font-black text-[#ffd36a] backdrop-blur-md">
                    🏅 FOUNDING
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-black tracking-[-0.05em]">{artists[2].name}</h2>
                  <p className="mt-2 text-sm text-white/50">
                    {artists[2].category} · {artists[2].location}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-3 pb-8 sm:px-5">
        <a
          href="/founding"
          className="group relative block overflow-hidden rounded-[28px] border border-[#d9a52e]/50 bg-[#060710] shadow-[0_24px_80px_rgba(0,0,0,.58),0_0_34px_rgba(255,194,71,.07)] transition duration-500 hover:-translate-y-0.5 hover:border-[#ffd66f]/80"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(140,69,255,.32),transparent_27%),radial-gradient(circle_at_92%_54%,rgba(78,37,155,.18),transparent_32%),radial-gradient(circle_at_12%_50%,rgba(255,194,71,.09),transparent_22%),linear-gradient(110deg,#080912_0%,#090a16_48%,#150d31_100%)]" />
          <div className="pointer-events-none absolute -right-24 -top-52 h-[430px] w-[430px] rounded-full border border-[#b98cff]/12 bg-[radial-gradient(circle_at_34%_40%,rgba(255,255,255,.20),rgba(151,91,255,.18)_11%,rgba(73,32,138,.18)_35%,rgba(8,9,18,0)_68%)] shadow-[0_0_90px_rgba(143,77,255,.26)]" />
          <div className="pointer-events-none absolute right-[16%] top-[16%] h-2 w-2 rounded-full bg-white shadow-[0_0_16px_6px_rgba(181,128,255,.88)]" />

          <div className="relative grid items-center gap-6 px-6 py-7 sm:px-8 lg:grid-cols-[235px_1fr_330px] lg:gap-8 lg:px-10 lg:py-8 xl:px-12">
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-[225px] w-[225px] transition duration-500 group-hover:scale-[1.035] sm:h-[245px] sm:w-[245px]">
                <div className="absolute inset-2 rounded-full bg-[#ffc247]/25 blur-[60px]" />
                <Image
                  src="/images/founding/founding-badge.png"
                  alt={translate("landing.founding.badgeAlt", "Art-ist.Club Founding Artist rozeti")}
                  fill
                  sizes="215px"
                  className="relative object-contain drop-shadow-[0_16px_34px_rgba(0,0,0,.58)]"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center rounded-md border border-[#a56bff]/30 bg-[#6f35ba]/32 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-[#eadcff]">
                {translate("landing.founding.limitedPeriod", "Sınırlı dönem")}
              </div>

              <h2 className="mt-3 text-3xl font-black leading-none tracking-[-0.05em] text-[#ffc247] sm:text-4xl lg:text-[44px]">
                FOUNDING ARTIST
              </h2>

              <p className="mt-2 text-base font-black tracking-[-0.025em] text-white sm:text-lg">
                {translate("landing.founding.title", "Platform büyümeden önce yerini al.")}
              </p>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/56 lg:mx-0">
                {translate("landing.founding.description", "İlk topluluğun parçası ol, kalıcı Founding Artist rozetini kazan ve özel avantajların tümünü keşfet.")}
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                {[
                  translate("landing.founding.benefits.permanentBadge", "Kalıcı özel rozet"),
                  translate("landing.founding.benefits.priorityVisibility", "Öncelikli görünürlük"),
                  translate("landing.founding.benefits.foundingCommunity", "Kurucu topluluk"),
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[11px] font-bold text-white/62 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-stretch">
              <div className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9c7ff]/70 lg:text-left">
                {translate("landing.founding.discoverBenefits", "Tüm ayrıcalıkları keşfet")}
              </div>

              <div className="mt-3 inline-flex w-full min-w-[220px] items-center justify-center rounded-xl bg-gradient-to-r from-[#e7a81f] via-[#ffc247] to-[#ffe08a] px-6 py-4 text-sm font-black text-black shadow-[0_14px_40px_rgba(255,194,71,.22)] transition duration-300 group-hover:scale-[1.04] group-hover:shadow-[0_18px_50px_rgba(255,194,71,.38)]">
                {translate("landing.founding.detailsCta", "Detayları İncele")}
                <span className="ml-3 transition duration-300 group-hover:translate-x-2">→</span>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="text-center text-[10px] font-black uppercase tracking-[0.18em] text-white/48 lg:text-left">
                  {translate("landing.founding.countdown.title", "Kampanyanın bitmesine")}
                </div>

                {countdown.ended ? (
                  <div className="mt-3 rounded-xl border border-[#ffc247]/30 bg-black/28 px-4 py-4 text-center text-sm font-black text-[#ffd36a]">
                    {translate("landing.founding.countdown.ended", "Kampanya sona erdi")}
                  </div>
                ) : (
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {[
                      [countdown.days, translate("landing.founding.countdown.days", "Gün")],
                      [countdown.hours, translate("landing.founding.countdown.hours", "Saat")],
                      [countdown.minutes, translate("landing.founding.countdown.minutes", "Dakika")],
                      [countdown.seconds, translate("landing.founding.countdown.seconds", "Saniye")],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-black/28 px-3 py-4 text-center backdrop-blur-sm"
                      >
                        <div className="text-2xl font-black tabular-nums text-white sm:text-xl">
                          {String(value).padStart(2, "0")}
                        </div>
                        <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white/42 sm:text-[9px]">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-3 text-center text-[9px] leading-4 text-white/32 lg:text-left">
                  {translate("landing.founding.countdown.deadline", "Son katılım: 30.06.2027 · 00:00")}
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>

      <section id="kesfet" className="mx-auto max-w-[1380px] px-3 pb-8 sm:px-5">
        <div className="rounded-[28px] border border-white/10 bg-[#060814]/78 p-6 sm:p-8">
          <div className="mx-auto mb-8 flex max-w-[520px] items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a56bff]" />
            <h2 className="text-center text-lg font-black uppercase tracking-[0.32em] sm:text-xl">{translate("landing.categories.sectionTitle", "Tüm Sanat Dalları")}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#a56bff] to-transparent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category.title}
                href={hrefFor("/discover")}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#ffc247]/40 hover:shadow-[0_22px_52px_rgba(0,0,0,.32)]"
              >
                <div className="relative h-[172px] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_72%_25%,rgba(165,107,255,.22),transparent_30%),linear-gradient(145deg,#111827,#05070e)]">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.06] group-hover:brightness-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(165,107,255,.22),transparent_26%),linear-gradient(145deg,#111827,#05070e)]" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                  <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/45 text-lg backdrop-blur-md">
                    {category.icon}
                  </div>

                  <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[#ffc247]/30 bg-[#ffc247] text-sm font-black text-black shadow-[0_8px_24px_rgba(255,194,71,.22)] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </div>
                </div>

                <h3 className="mt-4 text-2xl font-black tracking-[-0.05em] transition group-hover:text-[#ffd36a]">
                  {category.title}
                </h3>

                <p className="mt-2 text-xs font-bold text-[#ffc247]">
                  {category.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="vip" className="mx-auto max-w-[1380px] px-3 pb-8 sm:px-5">
        <div className="rounded-[28px] border border-[#ffc247]/25 bg-[linear-gradient(90deg,rgba(255,194,71,.08),rgba(8,10,20,.88))] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.28em] text-[#ffc247]">{translate("navigation.main.vipB2b", "VIP / B2B")}</div>
              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[0.96] tracking-[-0.06em] md:text-6xl">{translate("landing.vip.title", "Doğru yeteneğe direkt erişin.")}</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">{translate("landing.vip.description", "Projenize uygun sanatçıları kategori ve konuma göre keşfedin.")}</p>
              <a href={hrefFor("/discover")} className="mt-8 inline-flex rounded-2xl border border-[#ffc247]/35 px-7 py-4 text-sm font-black transition hover:bg-[#ffc247]/10">{translate("landing.vip.cta", "Sanatçı Keşfet")} →</a>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
              {[
                translate("landing.vip.examples.actorIstanbul", "Oyuncu · İstanbul"),
                translate("landing.vip.examples.musicianBerlin", "Müzisyen · Berlin"),
                translate("landing.vip.examples.dancerIzmir", "Dansçı · İzmir"),
                translate("landing.vip.examples.modelParis", "Model · Paris"),
              ].map((item, index) => (
                <div key={item} className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 last:mb-0">
                  <div className="text-sm font-black">{item}</div>
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#ffc247] text-xs font-black text-black">{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="mx-auto max-w-[1380px] px-3 pb-8 sm:px-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["250+", translate("landing.stats.countries", "Ülke ve bölge altyapısı")],
            ["150K+", translate("landing.stats.cities", "Şehir verisi")],
            ["24/7", translate("landing.stats.access", "Platform erişimi")],
            ["2", translate("landing.stats.panels", "Sanatçı ve müşteri paneli")],
          ].map(([value, label]) => (
            <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center">
              <div className="text-3xl font-black tracking-[-0.05em]">{value}</div>
              <div className="mt-2 text-xs text-white/48">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div id="iletisim" className="mx-auto max-w-[1380px] px-3 pb-10 sm:px-5">
        <Footer />
      </div>
    </main>
  );
}
