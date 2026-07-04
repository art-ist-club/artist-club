const features = [
  {
    title: "Sanatçı Profilleri",
    text: "Video, fotoğraf, biyografi, kategori, lokasyon ve performans geçmişi tek yerde."
  },
  {
    title: "Akıllı Arama",
    text: "Oyuncu, müzisyen, model, dansçı veya etkinlik sanatçısı için hızlı filtreleme."
  },
  {
    title: "VIP Marketplace",
    text: "Yapımcılar, markalar ve organizasyonlar için profesyonel keşif alanı."
  },
  {
    title: "AI Audition",
    text: "Uzun vadede AI destekli seçme, eşleşme ve değerlendirme altyapısı."
  }
];

export function Features() {
  return (
    <section id="features" className="relative px-6 py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_40%,rgba(124,92,255,.18),transparent_35%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f4c76b]">
            Özellikler
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Sadece landing page değil, platform temeli.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card group rounded-[2rem] p-7 transition hover:-translate-y-2"
            >
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-white text-lg font-black text-black">
                {index + 1}
              </div>
              <h3 className="text-2xl font-black tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
