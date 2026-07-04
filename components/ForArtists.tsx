export function ForArtists() {
  return (
    <section id="artists" className="border-y border-white/10 bg-brand-panel/70 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-brand-gold">
            Sanatçılar İçin
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">
            Yeteneklerini sadece paylaşma, fırsata dönüştür.
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-soft">
            Oyuncu, müzisyen, model, dansçı, ressam, yazar veya sahne sanatçısı ol.
            ART-IST.CLUB ile profesyonel profil oluştur, keşfedil ve global projelere açık hale gel.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
          {[
            "Profesyonel sanatçı profili",
            "Video ve fotoğraf portföyü",
            "Kategori ve lokasyon bazlı keşif",
            "Gelecekte AI destekli audition sistemi"
          ].map((item) => (
            <div key={item} className="border-b border-white/10 py-5 text-brand-soft last:border-0">
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
