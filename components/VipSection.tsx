export function VipSection() {
    return (
      <section id="vip" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] border border-[#f4c76b]/20 bg-[#f4c76b] p-8 text-black md:p-14">
            <div className="absolute right-[-10%] top-[-30%] h-96 w-96 rounded-full bg-white/35 blur-3xl" />
  
            <div className="relative grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em]">
                  VIP Marketplace
                </p>
                <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
                  Yapımcılar ve markalar için global yetenek havuzu.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
                  Netflix, Disney+, Sony Music, Universal, reklam ajansları,
                  etkinlik firmaları ve prodüksiyon şirketleri için hedefli
                  sanatçı keşfi.
                </p>
              </div>
  
              <div className="rounded-[2rem] bg-black p-7 text-white">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f4c76b]">
                  Early Access
                </p>
                <h3 className="mt-4 text-3xl font-black">Kurucu listeye katıl</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  İlk sürümde sanatçı kayıtları, profil vitrinleri ve keşif
                  altyapısı adım adım aktif edilecek.
                </p>
                <a
                  href="mailto:hello@art-ist.club"
                  className="mt-7 inline-flex rounded-full bg-white px-6 py-4 text-sm font-black text-black transition hover:scale-105"
                >
                  İletişime geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  