const artists = [
    ["Oyuncu", "Berlin", "Drama / Commercial"],
    ["Müzisyen", "Istanbul", "Live Performance"],
    ["Model", "Paris", "Fashion / Campaign"],
    ["Dansçı", "London", "Stage / Video Clip"]
  ];
  
  export function ArtistShowcase() {
    return (
      <section id="artists" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f4c76b]">
                Sanatçılar
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Her yetenek için güçlü bir vitrin.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/55">
              Platform, sanatçıları profesyonel bir katalog gibi değil; yaşayan,
              izlenebilir ve keşfedilebilir profiller olarak sunar.
            </p>
          </div>
  
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {artists.map(([type, city, skill]) => (
              <article
                key={type}
                className="group overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04]"
              >
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-white/15 via-[#7c5cff]/15 to-[#f4c76b]/15">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,.22),transparent_24%)]" />
                  <div className="absolute bottom-0 left-1/2 h-56 w-44 -translate-x-1/2 rounded-t-full bg-white/10 transition group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{type}</h3>
                  <p className="mt-2 text-sm font-bold text-[#f4c76b]">{city}</p>
                  <p className="mt-4 text-sm text-white/50">{skill}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  