"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";

const campaignEnd = new Date("2027-06-30T23:59:59");

type FoundingMessages = {
  benefits: {
    items: { icon: string; title: string; text: string }[];
  };
  visionTimeline: {
    items: { year: string; title: string; text: string }[];
  };
  faq: {
    items: { question: string; answer: string }[];
  };
  pricing: {
    features: string[];
  };
  globalVision: {
    stats: { value: string; label: string }[];
  };
  howItWorks: {
    steps: { number: string; title: string; text: string }[];
  };
};

export default function FoundingArtistPage() {
  const router = useRouter();
  const { t, dictionary } = useLanguage();
  const hrefFor = useLaunchAwareHref();
  const founding = dictionary.founding as FoundingMessages;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  useEffect(() => {
    function updateCountdown() {
      const difference = Math.max(
        0,
        campaignEnd.getTime() - new Date().getTime()
      );

      setRemaining({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }

    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  function handleJoinNow() {
    router.push(hrefFor("/login"));
  }

  const benefits = founding.benefits.items.map((item) => ({
    icon: item.icon,
    title: item.title,
    text: item.text,
  }));

  const roadmap = founding.visionTimeline.items.map((item) => ({
    year: item.year,
    title: item.title,
    text: item.text,
  }));

  const faqs = founding.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <main className="min-h-screen overflow-hidden bg-[#020308] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.15),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(245,185,66,0.09),transparent_24%)]" />

      <div className="relative z-10">
        <nav className=" bg-black/40 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5c451]/60 text-lg text-[#f5c451]">
                ☆
              </span>
              <span className="text-sm font-black tracking-[0.08em]">
                ART-IST.CLUB
              </span>
            </button>

            <div className="hidden items-center gap-8 text-sm text-white/60 lg:flex">
              <a href="#advantages" className="transition hover:text-white">
                {translate("founding.navigation.advantages", "Avantajlar")}
              </a>
              <a href="#vision" className="transition hover:text-white">
                {translate("founding.navigation.vision", "Vizyon")}
              </a>
              <a href="#faq" className="transition hover:text-white">
                {translate("founding.navigation.faq", "SSS")}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.push(hrefFor("/login"))}
                className="hidden rounded-xl border border-white/15 px-4 py-2.5 text-sm font-bold text-white/75 transition hover:border-white/30 hover:text-white sm:block"
              >
                {translate("founding.navigation.login", "Giriş Yap")}
              </button>

              <button
                type="button"
                onClick={handleJoinNow}
                className="rounded-xl bg-gradient-to-r from-[#f2c45d] via-[#ffe29a] to-[#d9a83f] px-4 py-2.5 text-sm font-black text-black shadow-[0_0_40px_rgba(245,185,66,0.18)] transition hover:scale-[1.02]"
              >
                {translate("founding.navigation.join", "Founding Artist Ol")}
              </button>
            </div>
          </div>
        </nav>

        <section className="relative border-b border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,5,11,0.98)_0%,rgba(3,5,11,0.78)_48%,rgba(3,5,11,0.32)_100%)]" />

          <div className="relative mx-auto grid min-h-[455px] max-w-6xl items-center gap-8 px-5 py-3 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-7">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#f5c451]/30 bg-[#f5c451]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#f5c451]">
                {translate("founding.hero.badge", "Sınırlı Süre")}
              </span>

              <h1 className="mt-3 text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-5xl xl:text-[64px]">
                {translate("founding.hero.titleLine1", "FOUNDING")}
                <span className="block bg-gradient-to-r from-white via-[#f7d77c] to-[#c9942f] bg-clip-text text-transparent">
                  {translate("founding.hero.titleLine2", "ARTIST")}
                </span>
              </h1>

              <p className="mt-3 text-lg font-bold text-white/90 md:text-lg">
                {translate(
                  "founding.hero.subtitle",
                  "ART-IST.CLUB'un ilk kurucu sanatçılarından biri ol."
                )}
              </p>

              <p className="mt-4 max-w-2xl text-base leading-6 text-white/58 md:text-base">
                {translate(
                  "founding.hero.description",
                  "Dünyanın dört bir yanındaki sanatçıları, müşterileri, markaları ve fırsatları tek platformda buluşturacak yeni global sanatçı ekosisteminde yerini erkenden al."
                )}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleJoinNow}
                  className="rounded-2xl bg-gradient-to-r from-[#f2bd4f] via-[#ffe298] to-[#d7a238] px-6 py-3.5 text-base font-black text-black shadow-[0_18px_70px_rgba(245,185,66,0.20)] transition hover:-translate-y-0.5 hover:scale-[1.01]"
                >
                  {translate("founding.hero.joinCta", "Founding Artist Ol")} →
                </button>

                <a
                  href="#pricing"
                  className="rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-center text-base font-black text-white transition hover:border-white/30 hover:bg-white/[0.07]"
                >
                  {translate("founding.hero.offerCta", "Teklifi İncele")}
                </a>
              </div>

            </div>

            <div className="relative mx-auto flex w-full max-w-[360px] -translate-y-4 items-center justify-center lg:-translate-y-6">
              <div className="absolute h-[310px] w-[310px] rounded-full bg-[#f5b942]/10 blur-[95px]" />
              <div className="absolute h-[250px] w-[250px] rounded-full bg-violet-600/15 blur-[80px]" />

              <img
                src="/images/founding/founding-badge.png"
                alt={translate(
                  "founding.hero.badgeAlt",
                  "ART-IST.CLUB Founding Artist rozeti"
                )}
                className="relative z-10 h-auto w-full max-w-[360px] object-contain drop-shadow-[0_0_55px_rgba(245,185,66,0.22)]"
              />

              <div className="absolute bottom-[-18px] h-12 w-[72%] rounded-[50%] bg-[#f5b942]/14 blur-2xl" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-2 md:px-8">
          <div className="grid gap-5 rounded-[24px] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(17,12,38,0.95),rgba(7,7,18,0.95))] p-5 shadow-[0_20px_80px_rgba(76,29,149,0.10)] lg:grid-cols-[1.25fr_2fr_0.9fr] lg:items-center lg:p-6">
            <div>
              <p className="text-xl font-black">
                {translate(
                  "founding.countdown.headline",
                  "Bu özel teklif için son günler!"
                )}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/55">
                {translate(
                  "founding.countdown.description",
                  "Founding Artist kampanyası yalnızca 30 Haziran 2027 tarihine kadar geçerlidir."
                )}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              <CountdownBox
                value={remaining.days}
                label={translate("founding.countdown.days", "Gün")}
              />
              <CountdownBox
                value={remaining.hours}
                label={translate("founding.countdown.hours", "Saat")}
              />
              <CountdownBox
                value={remaining.minutes}
                label={translate("founding.countdown.minutes", "Dakika")}
              />
              <CountdownBox
                value={remaining.seconds}
                label={translate("founding.countdown.seconds", "Saniye")}
              />
            </div>

            <div className="border-white/10 lg:border-l lg:pl-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-300">
                {translate("founding.countdown.campaignEnd", "Kampanya Bitişi")}
              </p>
              <p className="mt-2 text-xl font-black">
                {translate("founding.countdown.date", "30 Haziran 2027")}
              </p>
              <p className="mt-1 text-sm text-white/45">
                {translate(
                  "founding.countdown.finalNote",
                  "Bu teklif tekrar sunulmayacak."
                )}
              </p>
            </div>
          </div>
        </section>

        <section id="vision" className="mx-auto max-w-6xl px-5 py-2 md:px-8">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.025] p-6 md:p-7">
            <div className="grid gap-7 lg:grid-cols-[0.72fr_1.5fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
                  {translate("founding.visionTimeline.eyebrow", "Neden Şimdi?")}
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                  {translate(
                    "founding.visionTimeline.title",
                    "Doğru zaman, geleceği şekillendirir."
                  )}
                </h2>
                <p className="mt-5 max-w-lg leading-6 text-white/55">
                  {translate(
                    "founding.visionTimeline.description",
                    "Platform büyümeden önce katıl. İlk avantajları sen kazan, gelecekteki yerini erkenden güvence altına al."
                  )}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                {roadmap.map((item, index) => (
                  <div key={item.year} className="relative">
                    {index < roadmap.length - 1 ? (
                      <div className="absolute left-[26px] top-[27px] hidden h-px w-[calc(100%+20px)] bg-gradient-to-r from-[#f5c451] to-violet-500/60 md:block" />
                    ) : null}

                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f5c451]/55 bg-[#0d0d12] text-sm font-black text-[#f5c451] shadow-[0_0_30px_rgba(245,185,66,0.10)]">
                        {item.year}
                      </div>
                      <h3 className="mt-5 font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/48">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="advantages" className="mx-auto max-w-6xl px-5 py-2 md:px-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
              {translate("founding.benefits.eyebrow", "Founding Avantajları")}
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              {translate(
                "founding.benefits.title",
                "Sadece Founding Artist'lere özel ayrıcalıklar."
              )}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-5 py-2 md:px-8">
          <div className="overflow-hidden rounded-[26px] border border-violet-400/20 bg-[radial-gradient(circle_at_50%_20%,rgba(109,40,217,0.19),transparent_35%),linear-gradient(135deg,#130b2d,#070711_64%)]">
            <div className="grid gap-8 p-6 md:p-7 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:items-stretch">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5c451]">
                  {translate("founding.pricing.eyebrow", "Özel Kampanya")}
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                  {translate("founding.pricing.titleLine1", "1 kez öde,")}
                  <span className="block text-[#f5c451]">
                    {translate("founding.pricing.titleLine2", "2 yıl kazan.")}
                  </span>
                </h2>

                <ul className="mt-5 space-y-3 text-sm text-white/66">
                  {founding.pricing.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <div className="mt-5 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/55">
                  <span className="flex -space-x-2">
                    {["A", "R", "T", "★"].map((letter, index) => (
                      <span
                        key={`${letter}-${index}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#120c26] bg-gradient-to-br from-[#f5c451] to-violet-600 text-xs font-black text-black"
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                  {translate(
                    "founding.pricing.socialProof",
                    "İlk kurucu sanatçılar arasında yerini al."
                  )}
                </div>
              </div>

              <div className="relative rounded-[24px] border border-violet-400/55 bg-black/45 p-6 text-center shadow-[0_0_70px_rgba(124,58,237,0.16)]">
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em]">
                  {translate("founding.pricing.bestOffer", "En İyi Teklif")}
                </span>

                <p className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
                  {translate("founding.pricing.plan", "Founding Artist")}
                </p>

                <div className="mt-5">
                  <p className="inline-block text-xl font-black text-white/35 line-through decoration-red-500 decoration-[3px]">
                    {translate("founding.pricing.originalPrice", "49.99 USD")}
                  </p>
                  <p className="mt-2 text-5xl font-black tracking-tight text-[#f5c451]">
                    {translate("founding.pricing.campaignPrice", "24.99")}
                    <span className="ml-2 text-xl">
                      {translate("founding.pricing.currency", "USD")}
                    </span>
                  </p>
                </div>

                <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                  {translate(
                    "founding.pricing.discount",
                    "%50 Erken Katılım İndirimi"
                  )}
                </div>

                <div className="mt-5 border-y border-white/10 py-5">
                  <p className="text-sm font-black text-white">
                    {translate("founding.pricing.paymentType", "Tek Ödeme")}
                  </p>
                  <p className="mt-2 text-sm font-black text-[#f5c451]">
                    {translate(
                      "founding.pricing.membershipDuration",
                      "2 Yıl Üyelik"
                    )}
                  </p>
                  <p className="mt-2 text-xs text-white/40">
                    {translate(
                      "founding.pricing.extraBenefit",
                      "+ 1 yıl ekstra üyelik avantajı"
                    )}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleJoinNow}
                  className="mt-5 w-full rounded-2xl bg-gradient-to-r from-[#efb943] via-[#ffe29b] to-[#d9a239] px-6 py-4 font-black text-black transition hover:scale-[1.015]"
                >
                  {translate("founding.pricing.joinCta", "Founding Artist Ol")} →
                </button>

                <p className="mt-4 text-xs text-white/35">
                  {translate(
                    "founding.pricing.paymentNote",
                    "🔒 Güvenli ödeme altyapısı yakında aktif olacak"
                  )}
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-black/25 p-6">
                <p className="text-base font-black">
                  {translate("founding.pricing.comparisonTitle", "Karşılaştırma")}
                </p>

                <div className="mt-5 space-y-5">
                  <ComparisonRow
                    active
                    title={translate(
                      "founding.pricing.foundingTitle",
                      "Founding Artist"
                    )}
                    price={translate(
                      "founding.pricing.foundingPrice",
                      "24.99 USD / 2 yıl"
                    )}
                    note={translate(
                      "founding.pricing.foundingNote",
                      "12.50 USD / yıl eşdeğeri"
                    )}
                  />
                  <div className="h-px bg-white/10" />
                  <ComparisonRow
                    title={translate(
                      "founding.pricing.standardTitle",
                      "Standart Üyelik"
                    )}
                    price={translate(
                      "founding.pricing.standardPrice",
                      "49.99 USD / yıl"
                    )}
                    note={translate(
                      "founding.pricing.standardNote",
                      "Founding rozeti ve özel avantajlar yok"
                    )}
                  />
                </div>

                <div className="mt-7 rounded-2xl border border-[#f5c451]/20 bg-[#f5c451]/8 p-4">
                  <p className="text-sm font-black text-[#f5c451]">
                    {translate(
                      "founding.pricing.highlightTitle",
                      "Yarı fiyat + iki kat süre"
                    )}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/48">
                    {translate(
                      "founding.pricing.highlightText",
                      "Normalde 1 yıl 49.99 USD. Şimdi 24.99 USD öde, 2 yıl üye ol."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-2 overflow-hidden border-y border-white/10 bg-[#030713]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(124,58,237,0.13),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-6xl gap-7 px-5 py-7 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="relative min-h-[280px] overflow-hidden rounded-[24px] border border-white/10 bg-[#05070d]">
              <img
                src="/images/founding/global-network.png"
                alt={translate(
                  "founding.globalVision.imageAlt",
                  "ART-IST.CLUB global artist network"
                )}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#05070d]/10 via-transparent to-[#05070d]/10" />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
                {translate("founding.globalVision.eyebrow", "Vizyonumuz")}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                {translate(
                  "founding.globalVision.title",
                  "Sınırları kaldırıyoruz."
                )}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/55">
                {translate(
                  "founding.globalVision.description",
                  "Sanatçıları ve fırsatları tek bir global platformda buluşturuyor, dünyanın en büyük sanatçı ağlarından birini kuruyoruz."
                )}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {founding.globalVision.stats.map((stat) => (
                  <Stat key={stat.value} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-2 md:px-8">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.025] p-6 md:p-7">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
              {translate("founding.howItWorks.eyebrow", "Nasıl Çalışır?")}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {founding.howItWorks.steps.map((step) => (
                <Step
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  text={step.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-5 py-2 md:px-8">
          <div className="grid gap-7 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
                {translate("founding.faq.eyebrow", "Sıkça Sorulan Sorular")}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight">
                {translate(
                  "founding.faq.title",
                  "Karar vermeden önce bilmen gerekenler."
                )}
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <button
                    key={faq.question}
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-left transition hover:border-white/20"
                  >
                    <div className="flex items-center justify-between gap-5">
                      <span className="font-black">{faq.question}</span>
                      <span className="text-xl text-[#f5c451]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>

                    {isOpen ? (
                      <p className="mt-4 max-w-3xl text-sm leading-6 text-white/52">
                        {faq.answer}
                      </p>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-4 pt-2 md:px-8">
          <div className="relative overflow-hidden rounded-[26px] border border-violet-400/25 bg-[radial-gradient(circle_at_18%_50%,rgba(245,185,66,0.18),transparent_25%),radial-gradient(circle_at_82%_50%,rgba(124,58,237,0.32),transparent_34%),linear-gradient(135deg,#160d34,#0b0718)] p-7 md:p-9">
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f5c451]">
                  {translate(
                    "founding.finalCta.eyebrow",
                    "Kurucu Sanatçılar Arasına Katıl"
                  )}
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  {translate(
                    "founding.finalCta.title",
                    "Geleceğin bir parçası ol."
                  )}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/58">
                  {translate(
                    "founding.finalCta.description",
                    "30 Haziran 2027'ye kadar kaydını tamamla, ART-IST.CLUB'un ilk Founding Artist'lerinden biri ol."
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={handleJoinNow}
                className="rounded-2xl bg-gradient-to-r from-[#f0ba47] via-[#ffe49f] to-[#d5a139] px-8 py-4 text-lg font-black text-black shadow-[0_15px_60px_rgba(245,185,66,0.18)] transition hover:scale-[1.02]"
              >
                {translate("founding.finalCta.button", "Founding Artist Ol")} →
              </button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
          <Footer />
        </div>
      </div>
    </main>
  );
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.07] px-2 py-4 text-center">
      <p className="text-xl font-black text-violet-200 sm:text-3xl">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/45">
        {label}
      </p>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group rounded-[24px] border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-[#f5c451]/30 hover:bg-white/[0.04]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5c451]/45 bg-[#f5c451]/8 text-lg font-black text-[#f5c451]">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
    </article>
  );
}

function ComparisonRow({
  active = false,
  title,
  price,
  note,
}: {
  active?: boolean;
  title: string;
  price: string;
  note: string;
}) {
  return (
    <div className="flex gap-4">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
          active
            ? "border-[#f5c451]/55 bg-[#f5c451]/10 text-[#f5c451]"
            : "border-white/15 bg-white/[0.03] text-white/45"
        }`}
      >
        {active ? "☆" : "○"}
      </div>

      <div>
        <p className={`font-black ${active ? "text-[#f5c451]" : "text-white/75"}`}>
          {title}
        </p>
        <p className="mt-1 text-sm font-black text-white">{price}</p>
        <p className="mt-1 text-xs leading-5 text-white/40">{note}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-black text-[#f5c451] md:text-4xl">{value}</p>
      <p className="mt-2 text-xs font-bold text-white/42">{label}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5c451]/40 text-sm font-black text-[#f5c451]">
        {number}
      </div>
      <h3 className="mt-5 text-xl font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/48">{text}</p>
    </div>
  );
}

