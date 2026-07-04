const vipFeatures = [
  "Gelişmiş arama & filtreleme",
  "Doğrulanmış ve denetlenmiş profiller",
  "Proje & cast ilanı yayınlama",
  "İstatistikler & raporlama araçları",
  "Öncelikli sektör desteği"
];

const searchResults = [
  { name: "Elif Demir", role: "Oyuncu", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85" },
  { name: "Bora Aydın", role: "Müzisyen", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=700&q=85" },
  { name: "Defne Arslan", role: "Dansçı", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=85" },
  { name: "Arda Eren", role: "Oyuncu", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85" }
];

export default function VipSection() {
  return (
    <section id="vip" className="border-b border-white/10 px-8 py-10 lg:px-12">
      <div className="grid overflow-hidden rounded-2xl border border-[#f5b942]/25 bg-[#080b12] lg:grid-cols-[1fr_.95fr]">
        <div className="p-9 lg:p-12">
          <p className="text-sm font-black tracking-[.2em] text-[#f5b942]">VIP (B2B) · YALNIZCA SEKTÖREL ÜYELİK</p>
          <h2 className="mt-5 max-w-[620px] text-5xl font-black tracking-tight">Doğru yeteneğe direkt erişin.</h2>
          <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/60">Reklam şirketleri, yapımcılar, casting direktörleri, menajerler ve ajanslar için özel arama, proje yayınlama ve yetenek keşif araçları.</p>
          <ul className="mt-8 grid gap-4 text-white/75 md:grid-cols-2">
            {vipFeatures.map((item) => (<li key={item} className="flex gap-3"><span className="text-[#f5b942]">✓</span> {item}</li>))}
          </ul>
          <button className="premium-button mt-9 rounded-xl border border-[#f5b942]/45 px-8 py-4 font-black text-[#f5b942]">👑 VIP Üyelik (B2B) Hakkında →</button>
        </div>
        <div className="relative min-h-[430px] bg-[radial-gradient(circle_at_50%_40%,rgba(245,185,66,.24),transparent_35%),linear-gradient(135deg,#111,#02040a)] p-8">
          <div className="absolute right-10 top-10 rounded-full border border-[#f5b942]/30 bg-[#f5b942]/10 p-5 text-2xl">🔒</div>
          <div className="ml-auto mt-20 max-w-[430px] rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur">
            <div className="rounded-xl border border-white/10 bg-white/[.04] p-4 text-sm text-white/55">Oyuncu · Kadın · 20-35 · İstanbul</div>
            <div className="mt-5 space-y-3">
              {searchResults.map((person) => (
                <div key={person.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[.035] p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${person.image})` }} />
                    <div>
                      <p className="font-bold">{person.name}</p>
                      <p className="text-sm text-white/45">{person.role} · Türkiye</p>
                    </div>
                  </div>
                  <p className="text-[#f5b942]">★★★★★ 4.9</p>
                </div>
              ))}
            </div>
            <button className="premium-button mt-5 w-full rounded-xl bg-white/[.06] py-4 font-bold">Tüm Sonuçları Gör</button>
          </div>
        </div>
      </div>
    </section>
  );
}
