const stats = [
  ["300M+", "Global sanatçı potansiyeli"],
  ["180+", "Ülke vizyonu"],
  ["AI", "Akıllı keşif katmanı"]
];

const tags = ["Oyuncu", "Müzisyen", "Model", "Dansçı"];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 md:pt-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(244,199,107,0.20),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(124,92,255,0.28),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(85,214,255,0.12),transparent_36%),linear-gradient(135deg,#05050b_0%,#10111f_44%,#05050b_100%)]" />
      <div className="soft-grid absolute inset-0 -z-10 opacity-35" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.04fr_.96fr]">
        <div>
          <div className="mb-7 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#f4c76b]">
            Global Artist Discovery Platform
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Yeteneğin
            <span className="block bg-gradient-to-r from-[#f4c76b] via-white to-[#7c5cff] bg-clip-text text-transparent">
              global sahnesi.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            ART-IST.CLUB; oyuncuları, müzisyenleri, modelleri, dansçıları ve
            tüm yaratıcı yetenekleri yapımcılar, markalar ve fırsatlarla
            buluşturan yeni nesil keşif platformudur.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#artists"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-black transition hover:scale-105"
            >
              Sanatçı olarak katıl
            </a>
            <a
              href="#vip"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-black text-white transition hover:border-[#f4c76b]/50 hover:text-[#f4c76b]"
            >
              VIP keşif başlat
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map(([value, label]) => (
              <div key={value} className="glass-card rounded-3xl p-5">
                <p className="text-2xl font-black text-[#f4c76b]">{value}</p>
                <p className="mt-2 text-xs leading-5 text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[620px]">
          <div className="absolute left-8 top-10 h-[480px] w-[72%] rounded-[3.5rem] bg-gradient-to-br from-[#f4c76b] via-[#7c5cff] to-[#55d6ff] opacity-30 blur-3xl" />

          <div className="glass-card absolute right-0 top-0 w-[82%] overflow-hidden rounded-[3rem] p-4">
            <div className="relative h-[430px] overflow-hidden rounded-[2.35rem] bg-[linear-gradient(145deg,#191a2a,#05050b)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(244,199,107,.28),transparent_28%),radial-gradient(circle_at_50%_70%,rgba(124,92,255,.26),transparent_42%)]" />
              <div className="absolute left-1/2 top-16 h-72 w-44 -translate-x-1/2 rounded-full bg-white/10 blur-sm" />
              <div className="absolute bottom-0 left-1/2 h-72 w-64 -translate-x-1/2 rounded-t-[8rem] bg-gradient-to-b from-white/25 to-white/5" />
              <div className="absolute bottom-10 left-1/2 h-28 w-80 -translate-x-1/2 rounded-full border border-[#f4c76b]/30 bg-[#f4c76b]/10 blur-xl" />
              <p className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-bold text-white/65">
                Featured Artist
              </p>
            </div>
          </div>

          <div className="glass-card absolute bottom-16 left-0 w-[68%] rounded-[2rem] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4c76b]">
              Live Discovery
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight">
              Tek profil. Global fırsatlar.
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card absolute bottom-0 right-8 rounded-[2rem] p-5">
            <p className="text-4xl font-black text-[#55d6ff]">98%</p>
            <p className="mt-1 text-xs font-bold text-white/55">
              Match Quality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
