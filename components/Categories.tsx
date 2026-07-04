const categories = [
    { title: "Oyunculuk", count: "4.250+ Sanatçı", icon: "🎭", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
    { title: "Müzik", count: "8.750+ Sanatçı", icon: "🎵", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80" },
    { title: "Dans", count: "3.120+ Sanatçı", icon: "💃", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80" },
    { title: "Model", count: "5.430+ Sanatçı", icon: "📸", image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=600&q=80" },
    { title: "Influencer", count: "7.250+ Sanatçı", icon: "⭐", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80" },
    { title: "Fotoğraf", count: "2.310+ Sanatçı", icon: "📷", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80" },
    { title: "Tiyatro", count: "1.230+ Sanatçı", icon: "🎟️", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=600&q=80" },
    { title: "Çizim & Resim", count: "2.180+ Sanatçı", icon: "✏️", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" }
  ];
  
  export default function Categories() {
    return (
      <section id="kesfet" className="border-b border-white/10 px-8 py-16 lg:px-12">
        <SectionTitle title="TÜM SANAT DALLARI" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="hero-card group relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] shadow-[0_18px_60px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-2 hover:border-[#f5b942]/50 hover:shadow-[0_25px_90px_rgba(245,185,66,.12)]">
              <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${category.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03050b] via-[#03050b]/72 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-purple-950/45" />
              <div className="relative flex h-full min-h-[360px] flex-col justify-end p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-black/45 text-2xl backdrop-blur">{category.icon}</div>
                <h3 className="text-3xl font-black tracking-tight">{category.title}</h3>
                <p className="mt-2 text-base text-white/65">{category.count}</p>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm font-bold text-[#f5b942]">Profilleri keşfet</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5b942] text-black transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
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
  