const navItems = [
    { label: "Vizyon", href: "#vision" },
    { label: "Özellikler", href: "#features" },
    { label: "Sanatçılar", href: "#artists" },
    { label: "VIP", href: "#vip" }
  ];
  
  export function Navbar() {
    return (
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#" className="group flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#f4c76b]/40 bg-[#f4c76b]/10 text-sm font-black tracking-tight text-[#f4c76b] shadow-[0_0_40px_rgba(244,199,107,.18)]">
              AC
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-white">
                ART-IST.CLUB
              </p>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
                Global Stage
              </p>
            </div>
          </a>
  
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/65 transition hover:text-[#f4c76b]"
              >
                {item.label}
              </a>
            ))}
          </nav>
  
          <a
            href="#vip"
            className="rounded-full border border-[#f4c76b]/40 bg-[#f4c76b] px-5 py-3 text-sm font-black text-black shadow-[0_0_36px_rgba(244,199,107,.28)] transition hover:scale-105"
          >
            Erken Erişim
          </a>
        </div>
      </header>
    );
  }
  