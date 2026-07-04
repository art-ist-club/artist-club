export default function Header() {
  const navItems = [
    { label: "Keşfet", href: "#kesfet" },
    { label: "Sanatçı Ol", href: "#sanatci" },
    { label: "VIP (B2B)", href: "#vip" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "İletişim", href: "#iletisim" }
  ];

  return (
    <header className="fixed left-1/2 top-4 z-[9999] w-[calc(100%-32px)] max-w-[1540px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#05070e]/90 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,.55)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f5b942]/10 via-transparent to-[#f5b942]/10 opacity-40" />
      <div className="pointer-events-none absolute left-10 top-0 h-px w-56 bg-gradient-to-r from-transparent via-[#f5b942]/70 to-transparent" />

      <div className="relative flex h-24 items-center justify-between px-6 lg:px-10">
        <a className="group flex items-center gap-4" href="#">
          <div className="text-5xl font-black tracking-[-0.14em] text-[#f5b942] transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(245,185,66,.65)]">
            AC
          </div>

          <div>
            <div className="text-2xl font-black tracking-tight text-white transition duration-300 group-hover:text-[#f5b942]">
              Art-Ist.Club
            </div>
            <div className="text-sm text-white/45">Sanatın Yeni Dünyası</div>
          </div>
        </a>

        <nav className="hidden items-center gap-3 text-base font-semibold text-white/78 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="group relative rounded-full px-5 py-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[.06] hover:text-[#f5b942]"
              href={item.href}
            >
              <span>{item.label}</span>
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#f5b942] shadow-[0_0_18px_rgba(245,185,66,.9)] transition-all duration-300 group-hover:w-8" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl border border-white/10 bg-white/[.025] px-5 py-3 text-sm font-bold text-white/85 transition duration-300 hover:-translate-y-0.5 hover:border-[#f5b942]/35 hover:bg-[#f5b942]/10 hover:text-[#f5b942]">
            🌐 TR
          </button>

          <button className="rounded-xl border border-[#f5b942]/30 bg-black/25 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#f5b942]/70 hover:bg-[#f5b942]/10 hover:text-[#f5b942]">
            Giriş Yap
          </button>

          <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#f5b942] to-[#ffd980] px-6 py-3 text-sm font-black text-black shadow-[0_0_35px_rgba(245,185,66,.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(245,185,66,.45)]">
            <span className="relative z-10">👤 Üye Ol</span>
            <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/70 blur-md transition-all duration-700 group-hover:left-[120%]" />
          </button>
        </div>
      </div>
    </header>
  );
}