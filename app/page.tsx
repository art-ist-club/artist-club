const categories = [
  {
    title: "Oyunculuk",
    count: "4.250+ Sanatçı",
    icon: "🎭",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Müzik",
    count: "8.750+ Sanatçı",
    icon: "🎵",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Dans",
    count: "3.120+ Sanatçı",
    icon: "💃",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Model",
    count: "5.430+ Sanatçı",
    icon: "📸",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Influencer",
    count: "7.250+ Sanatçı",
    icon: "⭐",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fotoğraf",
    count: "2.310+ Sanatçı",
    icon: "📷",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Tiyatro",
    count: "1.230+ Sanatçı",
    icon: "🎟️",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Çizim & Resim",
    count: "2.180+ Sanatçı",
    icon: "✏️",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
  }
];

const heroArtists = [
  {
    name: "Bora Aydın",
    role: "Müzisyen",
    city: "Ankara",
    tag: "MÜZİSYEN",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Defne Arslan",
    role: "Dansçı",
    city: "İstanbul",
    tag: "DANSÇI",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Zeynep K.",
    role: "Model",
    city: "İstanbul",
    tag: "MODEL",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85"
  },
  {
    name: "Arda Eren",
    role: "Oyuncu",
    city: "İzmir",
    tag: "OYUNCU",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85"
  }
];

const benefits = [
  {
    title: "Global Görünürlük",
    text: "Profilinizi dünyaya açın, uluslararası fırsatlara erişin.",
    icon: "🌍"
  },
  {
    title: "Doğru Bağlantılar",
    text: "Yapımcılar, markalar ve ajanslarla doğrudan iletişime geçin.",
    icon: "🔗"
  },
  {
    title: "Profesyonel Sunum",
    text: "Video, fotoğraf ve portföyünüzü güçlü şekilde sergileyin.",
    icon: "🎬"
  },
  {
    title: "Kariyerini Büyüt",
    text: "Yeni projeler bulun, başvurular yapın, görünürlüğünüzü artırın.",
    icon: "📈"
  }
];

const vipFeatures = [
  "Gelişmiş arama & filtreleme",
  "Doğrulanmış ve denetlenmiş profiller",
  "Proje & cast ilanı yayınlama",
  "İstatistikler & raporlama araçları",
  "Öncelikli sektör desteği"
];

const stats = [
  ["300M+", "Global sanatçı potansiyeli"],
  ["180+", "Ülke vizyonu"],
  ["AI", "Akıllı keşif teknolojisi"],
  ["98%", "Match Quality"],
  ["24/7", "Destek"]
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03050b] text-white">
      <div className="mx-auto max-w-[1540px] p-4">
        <div className="rounded-2xl border border-white/10 bg-[#05070e] shadow-[0_0_80px_rgba(0,0,0,.65)]">
          <Header />
          <Hero />
          <Categories />
          <ArtistSection />
          <VipB2B />
          <BottomPanels />
          <Stats />
          <Footer />
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070e]/82 backdrop-blur-2xl">
      <div className="flex h-24 items-center justify-between px-8 lg:px-12">
        <a className="group flex items-center gap-4" href="#">
          <div className="text-5xl font-black tracking-[-0.14em] text-[#f5b942] transition duration-300 group-hover:scale-105">
            AC
          </div>
          <div>
            <div className="text-2xl font-black tracking-tight">Art-Ist.Club</div>
            <div className="text-sm text-white/45">Sanatın Yeni Dünyası</div>
          </div>
        </a>

        <nav className="hidden items-center gap-3 text-base font-semibold text-white/78 lg:flex">
          {["Keşfet", "Sanatçı Ol", "VIP (B2B)", "Hakkımızda", "İletişim"].map(
            (item) => (
              <a
                key={item}
                className="rounded-full px-5 py-3 transition hover:bg-white/[.06] hover:text-[#f5b942]"
                href={
                  item === "Keşfet"
                    ? "#kesfet"
                    : item === "Sanatçı Ol"
                    ? "#sanatci"
                    : item === "VIP (B2B)"
                    ? "#vip"
                    : item === "Hakkımızda"
                    ? "#hakkimizda"
                    : "#iletisim"
                }
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl border border-white/10 bg-white/[.025] px-5 py-3 text-sm font-bold text-white/85 hover:border-[#f5b942]/35 hover:text-[#f5b942]">
            🌐 TR
          </button>
          <button className="rounded-xl border border-[#f5b942]/30 bg-black/25 px-5 py-3 text-sm font-bold text-white hover:border-[#f5b942]/70">
            Giriş Yap
          </button>
          <button className="rounded-xl bg-gradient-to-r from-[#f5b942] to-[#ffd980] px-6 py-3 text-sm font-black text-black shadow-[0_0_35px_rgba(245,185,66,.22)] hover:shadow-[0_0_55px_rgba(245,185,66,.36)]">
            👤 Üye Ol
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-8 pt-28 pb-16 lg:px-12 lg:pt-32 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(160,64,255,.18),transparent_36%),radial-gradient(circle_at_92%_20%,rgba(245,185,66,.12),transparent_24%)]" />
      <div className="relative grid min-h-[620px] items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#f5b942]/25 bg-[#f5b942]/5 px-4 py-2 text-sm font-black tracking-[.18em] text-[#f5b942]">
            ★ GLOBAL SANAT PLATFORMU
          </div>

          <h1 className="max-w-[680px] text-6xl font-black leading-[1.02] tracking-[-.055em] md:text-7xl">
            Sanatın geleceği burada{" "}
            <span className="bg-gradient-to-r from-[#f5b942] to-[#8f4dff] bg-clip-text text-transparent">
              başlıyor.
            </span>
          </h1>

          <p className="mt-7 max-w-[610px] text-xl leading-9 text-white/68">
            Oyuncular, müzisyenler, dansçılar, modeller ve tüm yaratıcı
            yetenekler; markalar, yapımcılar ve ajanslarla buluşuyor.
            Kariyerini dünyaya aç.
          </p>

          <div className="mt-9 flex flex-wrap gap-5">
            <a
              href="#sanatci"
              className="rounded-xl bg-gradient-to-r from-[#f5b942] to-[#ffd980] px-8 py-5 text-base font-black text-black shadow-[0_0_35px_rgba(245,185,66,.25)]"
            >
              Sanatçı Olarak Katıl →
            </a>
            <a
              href="#kesfet"
              className="rounded-xl border border-[#f5b942]/25 bg-black/25 px-8 py-5 text-base font-black text-white hover:border-[#f5b942]/60"
            >
              Sanatçı Keşfet 🔍
            </a>
          </div>

          <div className="mt-12 grid max-w-[720px] grid-cols-2 gap-6 text-sm text-white/60 md:grid-cols-4">
            <MiniBenefit icon="👥" title="Gerçek insanlar" text="Gerçek yetenekler" />
            <MiniBenefit icon="🔗" title="Doğrudan bağlantı" text="Aracı yok" />
            <MiniBenefit icon="🌍" title="Global görünürlük" text="Sınırsız fırsatlar" />
            <MiniBenefit icon="🛡️" title="Güvenli" text="Doğrulanmış profiller" />
          </div>
        </div>

        <div className="relative min-h-[650px]">
          <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(143,77,255,.24),transparent_45%)] blur-xl" />
          <div className="relative flex h-full items-center justify-center">
            {heroArtists.map((artist, index) => (
              <ArtistCard
                key={artist.name}
                artist={artist}
                main={index === 1}
                className={
                  index === 0
                    ? "absolute left-[2%] top-[20%] hidden rotate-[-5deg] lg:block hero-float-1"
                    : index === 1
                    ? "relative z-20 hero-float-2"
                    : index === 2
                    ? "absolute right-[15%] top-[18%] hidden rotate-[4deg] xl:block hero-float-3"
                    : "absolute right-[1%] top-[26%] hidden rotate-[5deg] lg:block hero-float-4"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniBenefit({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl text-[#f5b942]">{icon}</span>
      <div>
        <p className="font-bold text-white/80">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ArtistCard({
  artist,
  main,
  className
}: {
  artist: { name: string; role: string; city: string; tag: string; image: string };
  main?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${className} ${
        main ? "w-[360px] md:w-[420px]" : "w-[210px]"
      } overflow-hidden rounded-2xl border border-[#f5b942]/35 bg-[#080b14] shadow-[0_25px_80px_rgba(0,0,0,.6)]`}
    >
      <div
        className={`${main ? "h-[350px]" : "h-[300px]"} relative bg-cover bg-center`}
        style={{ backgroundImage: `url(${artist.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />
        <div className="absolute left-4 top-4 rounded-lg bg-purple-700/80 px-3 py-1 text-xs font-black">
          ★ {artist.tag}
        </div>
      </div>
      <div className={main ? "p-6" : "p-4"}>
        <h3 className={`${main ? "text-3xl" : "text-xl"} font-bold`}>
          {artist.name} 🛡️
        </h3>
        <p className="mt-1 text-white/55">
          {artist.role} · {artist.city}, Türkiye
        </p>
        <p className="mt-4 text-[#f5b942]">★★★★★ <span className="text-white/65">4.9</span></p>

        {main && (
          <>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <CardStat value="42" label="Proje" />
              <CardStat value="18K" label="Takipçi" />
              <CardStat value="96%" label="Başarı Oranı" />
            </div>
            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#f5b942] to-[#ffd980] px-6 py-4 font-black text-black">
              Profili İncele →
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function CardStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl font-black">{value}</p>
      <p className="text-sm text-white/55">{label}</p>
    </div>
  );
}

function Categories() {
  return (
    <section id="kesfet" className="border-b border-white/10 px-8 py-16 lg:px-12">
      <SectionTitle title="TÜM SANAT DALLARI" />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] shadow-[0_18px_60px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-2 hover:border-[#f5b942]/50 hover:shadow-[0_25px_90px_rgba(245,185,66,.12)]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${category.image})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#03050b] via-[#03050b]/72 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-purple-950/45" />

            <div className="relative flex h-full min-h-[360px] flex-col justify-end p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/45 text-2xl backdrop-blur">
                {category.icon}
              </div>

              <h3 className="text-3xl font-black tracking-tight">
                {category.title}
              </h3>

              <p className="mt-2 text-base text-white/65">{category.count}</p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm font-bold text-[#f5b942]">
                  Profilleri keşfet
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5b942] text-black transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArtistSection() {
  return (
    <section id="sanatci" className="grid gap-6 border-b border-white/10 px-8 py-10 lg:grid-cols-2 lg:px-12">
      <div className="relative overflow-hidden rounded-2xl border border-[#f5b942]/20 bg-[#07101a] p-9">
        <div className="absolute bottom-0 right-8 h-[430px] w-[260px] rotate-6 rounded-[2rem] border border-white/15 bg-black/40 shadow-2xl max-md:hidden">
          <div
            className="h-full rounded-[2rem] bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=85)"
            }}
          >
            <div className="h-full rounded-[2rem] bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        <div className="relative max-w-[470px]">
          <p className="text-sm font-black tracking-[.2em] text-[#d35dff]">
            SANATÇILAR İÇİN
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Kariyerini dünyaya aç.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Profilini oluştur, yeteneğini sergile, doğru projelere başvur ve
            global fırsatlara ulaş.
          </p>

          <ul className="mt-8 space-y-4 text-white/75">
            {[
              "Ücretsiz profil oluştur",
              "Video, fotoğraf ve demo yükle",
              "Projeler & audisyonlara başvur",
              "Global görünürlük kazan"
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#f5b942]">✓</span> {item}
              </li>
            ))}
          </ul>

          <button className="mt-9 rounded-xl bg-gradient-to-r from-[#f5b942] to-[#ffd980] px-8 py-4 font-black text-black">
            Hemen Katıl →
          </button>
        </div>
      </div>

      <div id="hakkimizda" className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[.035] p-8">
          <p className="text-sm font-black tracking-[.2em] text-[#d35dff]">
            NEDEN ART-IST.CLUB?
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Sanatçılar için tasarlandı, dünyaya açıldı.
          </h2>
          <p className="mt-5 text-white/55">
            Modern araçlar, global görünürlük ve doğru bağlantılarla kariyerini
            bir adım öne taşı.
          </p>
        </div>

        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/35 to-white/[.035] p-8"
          >
            <p className="text-4xl">{benefit.icon}</p>
            <h3 className="mt-7 text-2xl font-bold">{benefit.title}</h3>
            <p className="mt-4 leading-7 text-white/55">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VipB2B() {
  return (
    <section id="vip" className="border-b border-white/10 px-8 py-10 lg:px-12">
      <div className="grid overflow-hidden rounded-2xl border border-[#f5b942]/25 bg-[#080b12] lg:grid-cols-[1fr_.95fr]">
        <div className="p-9 lg:p-12">
          <p className="text-sm font-black tracking-[.2em] text-[#f5b942]">
            VIP (B2B) · YALNIZCA SEKTÖREL ÜYELİK
          </p>
          <h2 className="mt-5 max-w-[620px] text-5xl font-black tracking-tight">
            Doğru yeteneğe direkt erişin.
          </h2>
          <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/60">
            Reklam şirketleri, yapımcılar, casting direktörleri, menajerler ve
            ajanslar için özel arama, proje yayınlama ve yetenek keşif araçları.
          </p>

          <ul className="mt-8 grid gap-4 text-white/75 md:grid-cols-2">
            {vipFeatures.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#f5b942]">✓</span> {item}
              </li>
            ))}
          </ul>

          <button className="mt-9 rounded-xl border border-[#f5b942]/45 px-8 py-4 font-black text-[#f5b942]">
            👑 VIP Üyelik (B2B) Hakkında →
          </button>
        </div>

        <div className="relative min-h-[430px] bg-[radial-gradient(circle_at_50%_40%,rgba(245,185,66,.24),transparent_35%),linear-gradient(135deg,#111,#02040a)] p-8">
          <div className="absolute right-10 top-10 rounded-full border border-[#f5b942]/30 bg-[#f5b942]/10 p-5 text-2xl">
            🔒
          </div>
          <div className="ml-auto mt-20 max-w-[430px] rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur">
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-4 text-sm text-white/55">
              Oyuncu · Kadın · 20-35 · İstanbul
            </div>
            <div className="mt-5 space-y-3">
              {["Elif Demir", "Bora Aydın", "Defne Arslan", "Arda Eren"].map(
                (name, index) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[.035] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-12 w-12 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${heroArtists[index].image})`
                        }}
                      />
                      <div>
                        <p className="font-bold">{name}</p>
                        <p className="text-sm text-white/45">
                          {heroArtists[index].role} · Türkiye
                        </p>
                      </div>
                    </div>
                    <p className="text-[#f5b942]">★★★★★ 4.9</p>
                  </div>
                )
              )}
            </div>
            <button className="mt-5 w-full rounded-xl bg-white/[.06] py-4 font-bold">
              Tüm Sonuçları Gör
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomPanels() {
  return (
    <section className="grid gap-6 border-b border-white/10 px-8 py-10 lg:grid-cols-2 lg:px-12">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#08101b,#16071f)] p-9">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative">
          <p className="text-sm font-black tracking-[.2em] text-[#f5b942]">
            ETKİNLİKLER & CANLI YAYINLAR
          </p>
          <h3 className="mt-5 text-4xl font-black">
            Sanat dünyasının nabzını tutun.
          </h3>
          <p className="mt-4 max-w-[500px] text-white/65">
            Canlı yayınlara katılın, etkinlikleri kaçırmayın, yeni fırsatları
            keşfedin.
          </p>
          <button className="mt-8 rounded-xl border border-[#f5b942]/35 px-7 py-4 font-black text-[#f5b942]">
            Etkinlikleri Keşfet →
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0810] p-9">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative">
          <p className="text-sm font-black tracking-[.2em] text-[#f5b942]">
            ÖNE ÇIKAN PROJELER
          </p>
          <h3 className="mt-5 text-4xl font-black">
            Yeni projeleri keşfet, başvur ve yeteneğini göster.
          </h3>
          <button className="mt-8 rounded-xl border border-[#f5b942]/35 px-7 py-4 font-black text-[#f5b942]">
            Projeleri Keşfet →
          </button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-white/10 px-8 py-8 lg:px-12">
      <div className="grid gap-4 md:grid-cols-5">
        {stats.map(([value, label]) => (
          <div
            key={value}
            className="rounded-2xl border border-white/10 bg-white/[.035] p-6 text-center"
          >
            <p className="text-4xl font-black">{value}</p>
            <p className="mt-2 text-white/45">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="iletisim" className="px-8 py-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-4xl font-black tracking-[-.14em] text-[#f5b942]">
              AC
            </div>
            <div>
              <p className="text-2xl font-black">Art-Ist.Club</p>
              <p className="text-white/45">Sanatın yeni dünyası.</p>
            </div>
          </div>
          <p className="mt-5 max-w-[360px] leading-7 text-white/50">
            Yeteneklerini keşfedin, bağlantılar kurun, kariyerinizi birlikte
            büyütelim.
          </p>
        </div>

        <FooterCol title="KEŞFET" items={["Sanatçılar", "Kategoriler", "Etkinlikler", "Blog"]} />
        <FooterCol title="PLATFORM" items={["Sanatçı Ol", "Nasıl Çalışır?", "Özellikler", "Güvenlik"]} />
        <FooterCol title="VIP (B2B)" items={["VIP Üyelik", "Kurumsal Çözümler", "Başarı Hikayeleri", "SSS"]} />
        <FooterCol title="YARDIM" items={["Destek Merkezi", "İletişim", "Gizlilik Politikası", "Kullanım Şartları"]} />
      </div>

      <div className="mt-10 border-t border-white/10 pt-7 text-sm text-white/40">
        © 2026 Art-Ist.Club. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-black tracking-[.2em] text-white/70">{title}</p>
      <ul className="mt-5 space-y-3 text-white/45">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d35dff]" />
      <h2 className="text-center text-xl font-black tracking-[.32em]">{title}</h2>
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d35dff]" />
    </div>
  );
}
