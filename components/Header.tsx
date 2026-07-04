const navItems = [
  { label: "Vizyon", href: "#vision" },
  { label: "Özellikler", href: "#features" },
  { label: "Sanatçılar", href: "#artists" },
  { label: "VIP", href: "#vip" }
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-brand-dark/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gold text-sm font-black text-brand-dark">
            AC
          </span>
          <span className="text-lg font-black tracking-tight">ART-IST.CLUB</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-brand-soft md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-full bg-brand-gold px-5 py-3 font-bold text-brand-dark"
          >
            Erken Erişim
          </a>
        </div>
      </nav>
    </header>
  );
}
