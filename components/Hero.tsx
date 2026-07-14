"use client";

import { useEffect, useRef, useState } from "react";
import { useLaunchAwareHref } from "@/components/launch/SoftLaunchProvider";

type MousePosition = {
  x: number;
  y: number;
};

export default function Hero() {
  const hrefFor = useLaunchAwareHref();
  const heroRef = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });

  const features = [
    { icon: "👥", title: "Gerçek insanlar", text: "Gerçek yetenekler" },
    { icon: "🔗", title: "Doğrudan bağlantı", text: "Aracı yok" },
    { icon: "🌍", title: "Global görünürlük", text: "Sınırsız fırsatlar" },
    { icon: "🛡️", title: "Güvenli profil", text: "Doğrulanmış yapı" },
  ];

  const metrics = [
    { value: "49.99 USD", label: "Founding Artist yıllık lansman fiyatı" },
    { value: "300M+", label: "Global sanatçı potansiyeli" },
    { value: "180+", label: "Ülke vizyonu" },
  ];

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    function handleMouseMove(event: MouseEvent) {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      setMouse({ x, y });
    }

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
    >
      <style>{`
        @keyframes heroFloatSlow {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(var(--rotate)); }
          50% { transform: translate3d(0, -18px, 0) rotate(var(--rotate)); }
        }

        @keyframes heroFloatMain {
          0%, 100% { transform: translate3d(-50%, 0, 0); }
          50% { transform: translate3d(-50%, -16px, 0); }
        }

        @keyframes heroGlowPulse {
          0%, 100% { opacity: .38; transform: translateX(-50%) scale(1); }
          50% { opacity: .88; transform: translateX(-50%) scale(1.1); }
        }

        @keyframes heroShine {
          0% { transform: translateX(-140%) rotate(18deg); opacity: 0; }
          18% { opacity: .75; }
          42% { opacity: 0; }
          100% { transform: translateX(220%) rotate(18deg); opacity: 0; }
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-fade-up {
          animation: heroFadeUp .9s ease both;
        }

        .hero-float-card {
          animation: heroFloatSlow 6.5s ease-in-out infinite;
        }

        .hero-main-card {
          animation: heroFloatMain 7s ease-in-out infinite;
        }

        .hero-glow-line {
          animation: heroGlowPulse 4.5s ease-in-out infinite;
        }

        .hero-shine::after {
          content: "";
          position: absolute;
          inset: -60% auto -60% -30%;
          width: 90px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
          filter: blur(10px);
          animation: heroShine 4.8s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(245,185,66,0.18),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(124,58,237,0.18),transparent_30%),linear-gradient(135deg,#03050b_0%,#070812_48%,#03050b_100%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#f5b942]/10 blur-[130px]" />
      <div
        className="pointer-events-none absolute -z-10 h-[420px] w-[420px] rounded-full bg-[#8b5cf6]/12 blur-[120px] transition-transform duration-300"
        style={{
          left: `calc(55% + ${mouse.x * 80}px)`,
          top: `calc(12% + ${mouse.y * 70}px)`,
        }}
      />

      <div className="mx-auto grid min-h-[760px] max-w-7xl grid-cols-1 items-center gap-16 px-5 pb-20 md:grid-cols-[0.96fr_1.04fr] lg:min-h-[820px]">
        <div className="hero-fade-up">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f5b942]/25 bg-black/30 px-5 py-2 shadow-[0_0_40px_rgba(245,185,66,0.12)] backdrop-blur-xl">
            <span className="text-[#f5b942]">★</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5b942] sm:text-xs">
              Founding Artist başvuruları yakında açılıyor
            </span>
          </div>

          <h1 className="max-w-3xl text-[48px] font-black leading-[0.9] tracking-[-0.075em] text-white sm:text-[72px] md:text-[80px] lg:text-[92px]">
            Sanatın geleceği{" "}
            <span className="bg-gradient-to-r from-[#f5b942] via-[#ffe0a3] to-[#8b5cf6] bg-clip-text text-transparent">
              burada başlıyor.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Oyuncular, müzisyenler, dansçılar, modeller ve tüm yaratıcı
            yetenekler; markalar, yapımcılar, ajanslar ve global fırsatlarla
            tek platformda buluşuyor. Kariyerini dünyaya aç.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/signup"
              className="hero-shine group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#f5b942] to-[#ffe19a] px-8 py-5 text-center text-sm font-black text-black shadow-[0_0_55px_rgba(245,185,66,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_85px_rgba(245,185,66,0.55)]"
            >
              <span className="relative z-10">Sanatçı Olarak Katıl →</span>
            </a>

            <a
              href="#founding"
              className="rounded-2xl border border-[#f5b942]/30 bg-black/25 px-8 py-5 text-center text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#f5b942]/10 hover:text-[#f5b942]"
            >
              Founding Artist’i Keşfet
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {metrics.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
              >
                <p className="text-xl font-black tracking-[-0.04em] text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#f5b942]/35 hover:bg-white/[0.055]"
              >
                <div className="text-2xl">{item.icon}</div>
                <p className="mt-3 text-sm font-black text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden h-[650px] w-full max-w-[720px] md:block">
          <div
            style={
              {
                "--rotate": "-8deg",
                transform: `translate3d(${mouse.x * -18}px, ${mouse.y * -12}px, 0) rotate(-8deg)`,
              } as React.CSSProperties
            }
            className="hero-float-card absolute left-6 top-36 h-[350px] w-[235px] rounded-[1.7rem] border border-[#f5b942]/35 bg-[#05070e] shadow-[0_0_55px_rgba(245,185,66,0.16)] transition duration-500 hover:z-30 hover:scale-105"
          >
            <div className="absolute left-5 top-5 z-10 rounded-lg bg-[#7c3aed] px-3 py-1 text-xs font-black text-white">
              ★ MÜZİSYEN
            </div>
            <div className="h-[225px] w-full rounded-t-[1.7rem] bg-[radial-gradient(circle_at_45%_35%,rgba(245,185,66,.32),transparent_27%),radial-gradient(circle_at_70%_20%,rgba(124,58,237,.28),transparent_25%),linear-gradient(145deg,#172033,#05070e)]" />
            <div className="p-5">
              <h3 className="text-xl font-black text-white">Bora Aydın</h3>
              <p className="mt-1 text-sm text-white/55">Müzisyen · Ankara</p>
              <p className="mt-4 text-sm text-[#f5b942]">★★★★★ 4.9</p>
            </div>
          </div>

          <div
            style={
              {
                "--rotate": "7deg",
                animationDelay: ".8s",
                transform: `translate3d(${mouse.x * 16}px, ${mouse.y * -10}px, 0) rotate(7deg)`,
              } as React.CSSProperties
            }
            className="hero-float-card absolute right-24 top-38 z-10 h-[350px] w-[235px] rounded-[1.7rem] border border-[#f5b942]/35 bg-[#05070e] shadow-[0_0_55px_rgba(245,185,66,0.16)] transition duration-500 hover:z-30 hover:scale-105"
          >
            <div className="absolute left-5 top-5 z-10 rounded-lg bg-[#7c3aed] px-3 py-1 text-xs font-black text-white">
              ★ OYUNCU
            </div>
            <div className="h-[225px] w-full rounded-t-[1.7rem] bg-[radial-gradient(circle_at_45%_32%,rgba(255,255,255,.18),transparent_22%),radial-gradient(circle_at_72%_18%,rgba(124,58,237,.32),transparent_27%),linear-gradient(145deg,#151827,#05070e)]" />
            <div className="p-5">
              <h3 className="text-xl font-black text-white">Mert Yaren 🛡️</h3>
              <p className="mt-1 text-sm text-white/55">Oyuncu · İzmir</p>
              <p className="mt-4 text-sm text-[#f5b942]">★★★★★ 4.9</p>
            </div>
          </div>

          <div
            style={
              {
                "--rotate": "11deg",
                animationDelay: "1.4s",
                transform: `translate3d(${mouse.x * 22}px, ${mouse.y * 8}px, 0) rotate(11deg)`,
              } as React.CSSProperties
            }
            className="hero-float-card absolute -right-2 top-48 z-0 h-[340px] w-[225px] rounded-[1.7rem] border border-[#f5b942]/35 bg-[#05070e] shadow-[0_0_55px_rgba(245,185,66,0.14)] transition duration-500 hover:z-30 hover:scale-105"
          >
            <div className="absolute left-5 top-5 z-10 rounded-lg bg-[#7c3aed] px-3 py-1 text-xs font-black text-white">
              ★ MODEL
            </div>
            <div className="h-[220px] w-full rounded-t-[1.7rem] bg-[radial-gradient(circle_at_65%_28%,rgba(245,185,66,.22),transparent_23%),radial-gradient(circle_at_45%_20%,rgba(124,58,237,.32),transparent_28%),linear-gradient(145deg,#121426,#05070e)]" />
            <div className="p-5">
              <h3 className="text-lg font-black text-white">Ece Kaya 🛡️</h3>
              <p className="mt-1 text-sm text-white/55">Model · İstanbul</p>
              <p className="mt-4 text-sm text-[#f5b942]">★★★★★ 4.9</p>
            </div>
          </div>

          <div
            style={
              {
                transform: `translate3d(calc(-50% + ${mouse.x * -12}px), ${mouse.y * -10}px, 0)`,
              } as React.CSSProperties
            }
            className="hero-main-card absolute left-1/2 top-4 z-20 h-[520px] w-[370px] rounded-[1.8rem] border border-[#f5b942]/45 bg-[#070812] shadow-[0_0_90px_rgba(245,185,66,0.25)] transition duration-500 hover:scale-[1.025]"
          >
            <div className="absolute left-5 top-5 z-10 rounded-lg bg-[#7c3aed] px-3 py-1 text-xs font-black text-white">
              ★ DANSÇI
            </div>
            <div className="h-[305px] w-full rounded-t-[1.8rem] bg-[radial-gradient(circle_at_50%_34%,rgba(245,185,66,.30),transparent_25%),radial-gradient(circle_at_74%_22%,rgba(124,58,237,.34),transparent_29%),linear-gradient(145deg,#161b2c,#05070e)]" />
            <div className="p-6">
              <h3 className="text-3xl font-black tracking-[-0.05em] text-white">
                Defne Arslan 🛡️
              </h3>
              <p className="mt-2 text-sm text-white/55">
                Dansçı · İstanbul, Türkiye
              </p>
              <p className="mt-5 text-sm text-[#f5b942]">★★★★★ 4.9</p>

              <div className="mt-5 grid grid-cols-3 gap-4">
                {[
                  ["42", "Proje"],
                  ["18K", "Takipçi"],
                  ["96%", "Başarı"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <p className="text-lg font-black text-white">{value}</p>
                    <p className="text-xs text-white/45">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href={hrefFor("/discover")}
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#f5b942] py-4 text-sm font-black text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(245,185,66,0.45)]"
              >
                Profili İncele →
              </a>
            </div>
          </div>

          <div className="hero-glow-line absolute bottom-10 left-1/2 h-8 w-[560px] -translate-x-1/2 rounded-full bg-[#f5b942]/35 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
