export default function Hero() {
  const features = [
    { icon: "👥", title: "Gerçek insanlar", text: "Gerçek yetenekler" },
    { icon: "🔗", title: "Doğrudan bağlantı", text: "Aracı yok" },
    { icon: "🌍", title: "Global görünürlük", text: "Sınırsız fırsatlar" },
    { icon: "🛡️", title: "Güvenli", text: "Doğrulanmış profiller" }
  ];

  return (
    <section className="relative isolate overflow-hidden pt-32">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(var(--rotate)); }
          50% { transform: translateY(-16px) rotate(var(--rotate)); }
        }

        @keyframes floatMain {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-14px); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: .45; transform: translateX(-50%) scale(1); }
          50% { opacity: .9; transform: translateX(-50%) scale(1.08); }
        }

        .artist-card-float {
          animation: floatSlow 5.5s ease-in-out infinite;
        }

        .artist-card-main {
          animation: floatMain 6s ease-in-out infinite;
        }

        .hero-glow-line {
          animation: glowPulse 4s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(245,185,66,0.18),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(124,58,237,0.16),transparent_26%),linear-gradient(135deg,#03050b_0%,#070812_48%,#03050b_100%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#f5b942]/10 blur-[130px]" />

      <div className="mx-auto grid min-h-[780px] max-w-7xl grid-cols-1 items-center gap-16 px-5 pb-24 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f5b942]/25 bg-black/30 px-5 py-2 shadow-[0_0_40px_rgba(245,185,66,0.12)] backdrop-blur-xl">
            <span className="text-[#f5b942]">★</span>
            <span className="text-xs font-black uppercase tracking-[0.32em] text-[#f5b942]">
              Global Sanat Platformu
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-white md:text-7xl">
            Sanatın geleceği burada{" "}
            <span className="bg-gradient-to-r from-[#f5b942] via-[#ffe0a3] to-[#8b5cf6] bg-clip-text text-transparent">
              başlıyor.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
            Oyuncular, müzisyenler, dansçılar, modeller ve tüm yaratıcı
            yetenekler; markalar, yapımcılar ve ajanslarla buluşuyor.
            Kariyerini dünyaya aç.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#artists"
              className="group relative overflow-hidden rounded-xl bg-[#f5b942] px-8 py-5 text-sm font-black text-black shadow-[0_0_55px_rgba(245,185,66,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_85px_rgba(245,185,66,0.55)]"
            >
              <span className="relative z-10">Sanatçı Olarak Katıl →</span>
              <span className="absolute inset-y-0 -left-16 w-12 rotate-12 bg-white/60 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </a>

            <a
              href="#artists"
              className="rounded-xl border border-[#f5b942]/30 bg-black/25 px-8 py-5 text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#f5b942]/10 hover:text-[#f5b942]"
            >
              Sanatçı Keşfet 🔍
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {features.map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <p className="text-sm font-black text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-5 text-white/55">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden h-[640px] w-full max-w-[720px] md:block">
          <div
            style={{ "--rotate": "-8deg" } as React.CSSProperties}
            className="artist-card-float absolute left-6 top-36 h-[350px] w-[235px] rounded-[1.7rem] border border-[#f5b942]/35 bg-black shadow-[0_0_55px_rgba(245,185,66,0.16)] transition duration-500 hover:z-30 hover:scale-105"
          >
            <div className="absolute left-5 top-5 z-10 rounded-lg bg-[#7c3aed] px-3 py-1 text-xs font-black text-white">
              ★ MÜZİSYEN
            </div>
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=90"
              alt="Müzisyen"
              className="h-[225px] w-full rounded-t-[1.7rem] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-black text-white">Bora Aydın</h3>
              <p className="mt-1 text-sm text-white/55">Müzisyen · Ankara</p>
              <p className="mt-4 text-sm text-[#f5b942]">★★★★★ 4.9</p>
            </div>
          </div>

          <div
            style={{ "--rotate": "7deg", animationDelay: ".8s" } as React.CSSProperties}
            className="artist-card-float absolute right-24 top-38 z-10 h-[350px] w-[235px] rounded-[1.7rem] border border-[#f5b942]/35 bg-black shadow-[0_0_55px_rgba(245,185,66,0.16)] transition duration-500 hover:z-30 hover:scale-105"
          >
            <div className="absolute left-5 top-5 z-10 rounded-lg bg-[#7c3aed] px-3 py-1 text-xs font-black text-white">
              ★ OYUNCU
            </div>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=90"
              alt="Oyuncu"
              className="h-[225px] w-full rounded-t-[1.7rem] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-black text-white">Mert Yaren 🛡️</h3>
              <p className="mt-1 text-sm text-white/55">Oyuncu · İzmir</p>
              <p className="mt-4 text-sm text-[#f5b942]">★★★★★ 4.9</p>
            </div>
          </div>

          <div
            style={{ "--rotate": "11deg", animationDelay: "1.4s" } as React.CSSProperties}
            className="artist-card-float absolute -right-2 top-48 z-0 h-[340px] w-[225px] rounded-[1.7rem] border border-[#f5b942]/35 bg-black shadow-[0_0_55px_rgba(245,185,66,0.14)] transition duration-500 hover:z-30 hover:scale-105"
          >
            <div className="absolute left-5 top-5 z-10 rounded-lg bg-[#7c3aed] px-3 py-1 text-xs font-black text-white">
              ★ MODEL
            </div>
            <img
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=700&q=90"
              alt="Model"
              className="h-[220px] w-full rounded-t-[1.7rem] object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-black text-white">Ece Kaya 🛡️</h3>
              <p className="mt-1 text-sm text-white/55">Model · İstanbul</p>
              <p className="mt-4 text-sm text-[#f5b942]">★★★★★ 4.9</p>
            </div>
          </div>

          <div className="artist-card-main absolute left-1/2 top-4 z-20 h-[515px] w-[370px] rounded-[1.8rem] border border-[#f5b942]/45 bg-[#070812] shadow-[0_0_90px_rgba(245,185,66,0.25)] transition duration-500 hover:scale-[1.025]">
            <div className="absolute left-5 top-5 z-10 rounded-lg bg-[#7c3aed] px-3 py-1 text-xs font-black text-white">
              ★ DANSÇI
            </div>
            <img
              src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=90"
              alt="Dansçı"
              className="h-[305px] w-full rounded-t-[1.8rem] object-cover"
            />
            <div className="p-6">
              <h3 className="text-3xl font-black text-white">Defne Arslan 🛡️</h3>
              <p className="mt-2 text-sm text-white/55">
                Dansçı · İstanbul, Türkiye
              </p>
              <p className="mt-5 text-sm text-[#f5b942]">★★★★★ 4.9</p>

              <div className="mt-5 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-lg font-black text-white">42</p>
                  <p className="text-xs text-white/45">Proje</p>
                </div>
                <div>
                  <p className="text-lg font-black text-white">18K</p>
                  <p className="text-xs text-white/45">Takipçi</p>
                </div>
                <div>
                  <p className="text-lg font-black text-white">96%</p>
                  <p className="text-xs text-white/45">Başarı</p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-[#f5b942] py-4 text-sm font-black text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(245,185,66,0.45)]">
                Profili İncele →
              </button>
            </div>
          </div>

          <div className="hero-glow-line absolute bottom-10 left-1/2 h-8 w-[560px] -translate-x-1/2 rounded-full bg-[#f5b942]/35 blur-2xl" />
        </div>
      </div>
    </section>
  );
}