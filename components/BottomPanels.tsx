export default function BottomPanels() {
    return (
      <section className="grid gap-6 border-b border-white/10 px-8 py-10 lg:grid-cols-2 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#08101b,#16071f)] p-9">
          <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80)", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="relative">
            <p className="text-sm font-black tracking-[.2em] text-[#f5b942]">ETKİNLİKLER & CANLI YAYINLAR</p>
            <h3 className="mt-5 text-4xl font-black">Sanat dünyasının nabzını tutun.</h3>
            <p className="mt-4 max-w-[500px] text-white/65">Canlı yayınlara katılın, etkinlikleri kaçırmayın, yeni fırsatları keşfedin.</p>
            <button className="premium-button mt-8 rounded-xl border border-[#f5b942]/35 px-7 py-4 font-black text-[#f5b942]">Etkinlikleri Keşfet →</button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0810] p-9">
          <div className="absolute inset-0 opacity-45" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80)", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="relative">
            <p className="text-sm font-black tracking-[.2em] text-[#f5b942]">ÖNE ÇIKAN PROJELER</p>
            <h3 className="mt-5 text-4xl font-black">Yeni projeleri keşfet, başvur ve yeteneğini göster.</h3>
            <button className="premium-button mt-8 rounded-xl border border-[#f5b942]/35 px-7 py-4 font-black text-[#f5b942]">Projeleri Keşfet →</button>
          </div>
        </div>
      </section>
    );
  }
  