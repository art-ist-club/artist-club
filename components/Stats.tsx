const stats = [
    ["300M+", "Global sanatçı potansiyeli"],
    ["180+", "Ülke vizyonu"],
    ["AI", "Akıllı keşif teknolojisi"],
    ["98%", "Match Quality"],
    ["24/7", "Destek"]
  ];
  
  export default function Stats() {
    return (
      <section className="border-b border-white/10 px-8 py-8 lg:px-12">
        <div className="grid gap-4 md:grid-cols-5">
          {stats.map(([value, label]) => (
            <div key={value} className="hero-card rounded-2xl border border-white/10 bg-white/[.035] p-6 text-center">
              <p className="text-4xl font-black">{value}</p>
              <p className="mt-2 text-white/45">{label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  