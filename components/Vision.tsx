export function Vision() {
    return (
      <section id="vision" className="relative px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f4c76b]">
                Vizyon
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">
                Sanatçıların kaybolmadığı bir dünya.
              </h2>
            </div>
  
            <div className="glass-card rounded-[2.5rem] p-8 md:p-10">
              <p className="text-xl leading-9 text-white/70">
                Bugün milyonlarca yetenek sosyal medyada görünür olmaya çalışıyor,
                fakat yapımcıların, markaların ve organizatörlerin doğru kişiye
                ulaşması hâlâ zor. ART-IST.CLUB bu boşluğu kapatır: sanatçı için
                profesyonel vitrin, sektör için güçlü keşif motoru.
              </p>
  
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {["Keşfet", "Bağlan", "Büyüt"].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-black/25 p-5"
                  >
                    <p className="text-2xl font-black text-white">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-white/50">
                      Global ölçekte yetenek ve fırsat eşleşmesi.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  