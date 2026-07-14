"use client";

import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const navItems = [
  {
    labelKey: "common.actions.discover",
    labelFallback: "Discover",
    href: "/discover",
    icon: "🔎",
    activeMatch: "exact",
  },
  {
    labelKey: "navigation.dashboard.favorites",
    labelFallback: "Favoriler",
    href: "/dashboard/client/favorites",
    icon: "❤️",
    activeMatch: "startsWith",
  },
  {
    labelKey: "navigation.dashboard.client",
    labelFallback: "Dashboard",
    href: "/dashboard/client",
    icon: "👤",
    activeMatch: "exact",
  },
];

export default function ClientNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <header className="relative z-20 mx-auto mb-8 max-w-7xl px-5 pt-6 md:px-8">
      <div className="flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-4 text-white shadow-2xl shadow-black/25 backdrop-blur md:flex-row md:items-center md:justify-between">
        <button
          type="button"
          onClick={() => router.push("/discover")}
          className="text-left"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f5b942]">
            ART-IST.CLUB
          </p>
          <p className="mt-1 text-sm text-white/45">
            {translate("navigation.dashboard.clientArea", "Client Area")}
          </p>
        </button>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive =
              item.activeMatch === "exact"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => router.push(item.href)}
                className={`rounded-2xl border px-4 py-3 text-sm font-black transition ${
                  isActive
                    ? "border-[#f5b942]/50 bg-[#f5b942] text-black"
                    : "border-white/10 bg-black/20 text-white/70 hover:border-[#f5b942]/50 hover:text-[#f5b942]"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {translate(item.labelKey, item.labelFallback)}
              </button>
            );
          })}

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-black text-white/70 transition hover:border-red-400/50 hover:text-red-300"
          >
            🚪 {translate("navigation.dashboard.logout", "Çıkış")}
          </button>
        </nav>
      </div>
    </header>
  );
}
