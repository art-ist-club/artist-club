const benefits = [
    { title: "Global Görünürlük", text: "Profilinizi dünyaya açın, uluslararası fırsatlara erişin.", icon: "🌍" },
    { title: "Doğru Bağlantılar", text: "Yapımcılar, markalar ve ajanslarla doğrudan iletişime geçin.", icon: "🔗" },
    { title: "Profesyonel Sunum", text: "Video, fotoğraf ve portföyünüzü güçlü şekilde sergileyin.", icon: "🎬" },
    { title: "Kariyerini Büyüt", text: "Yeni projeler bulun, başvurular yapın, görünürlüğünüzü artırın.", icon: "📈" }
  ];
  
  export default function ArtistSection() {
    return (
      <section id="sanatci" className="grid gap-6 border-b border-white/10 px-8 py-10 lg:grid-cols-2 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-[#f5b942]/20 bg-[#07101a] p-9">
          <div className="absolute bottom-0 right-8 h-[430px] w-[260px] rotate-6 rounded-[2rem] border border-white/15 bg-black/40 shadow-2xl max-md:hidden">
            <div className="h-full rounded-[2rem] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=85)" }}>
              <div className="h-full rounded-[2rem] bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
          <div className="relative max-w-[470px]">
            <p className="text-sm font-black tracking-[.2em] text-[#d35dff]">SANATÇILAR İÇİN</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Kariyerini dünyaya aç.</h2>
            <p className="mt-5 text-lg leading-8 text-white/60">Profilini oluştur, yeteneğini sergile, doğru projelere başvur ve global fırsatlara ulaş.</p>
            <ul className="mt-8 space-y-4 text-white/75">
              {["Ücretsiz profil oluştur", "Video, fotoğraf ve demo yükle", "Projeler & audisyonlara başvur", "Global görünürlük kazan"].map((item) => (
                <li key={item} className="flex gap-3"><span className="text-[#f5b942]">✓</span> {item}</li>
              ))}
            </ul>
            <button className="premium-button mt-9 rounded-xl bg-gradient-to-r from-[#f5b942] to-[#ffd980] px-8 py-4 font-black text-black">Hemen Katıl →</button>
          </div>
        </div>
        <div id="hakkimizda" className="grid gap-4 md:grid-cols-2">
          <div className="hero-card rounded-2xl border border-white/10 bg-white/[.035] p-8">
            <p className="text-sm font-black tracking-[.2em] text-[#d35dff]">NEDEN ART-IST.CLUB?</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Sanatçılar için tasarlandı, dünyaya açıldı.</h2>
            <p className="mt-5 text-white/55">Modern araçlar, global görünürlük ve doğru bağlantılarla kariyerini bir adım öne taşı.</p>
          </div>
          {benefits.map((benefit) => (
            <div key={benefit.title} className="hero-card rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/35 to-white/[.035] p-8">
              <p className="text-4xl">{benefit.icon}</p>
              <h3 className="mt-7 text-2xl font-bold">{benefit.title}</h3>
              <p className="mt-4 leading-7 text-white/55">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  