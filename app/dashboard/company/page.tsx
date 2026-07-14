"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function CompanyDashboardPage() {
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  const modules = [
    "🎯 Talent Discovery",
    "📋 Shortlists",
    "📨 Casting Requests",
    "🏢 Team Management",
    "📊 Reports",
    "⭐ VIP Discovery (Yakında)",
  ];

  return (
    <main className="min-h-screen bg-[#03050b] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex items-center justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f5b942]">
              COMPANY DASHBOARD
            </p>
            <h1 className="mt-3 text-4xl font-black">
              {translate("dashboard.company.title", "Kurumsal Kontrol Paneli")}
            </h1>
            <p className="mt-3 text-white/60">
              {translate(
                "dashboard.company.subtitle",
                "Marka, ajans ve yapım şirketleri için merkezi yönetim ekranı."
              )}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-2xl border border-white/10 px-6 py-4 font-black hover:border-[#f5b942]"
          >
            {translate("dashboard.logout", "Çıkış Yap")}
          </button>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
            >
              <h2 className="text-xl font-black">{item}</h2>
              <p className="mt-4 text-sm leading-6 text-white/55">
                {translate(
                  "dashboard.company.comingSoon",
                  "Bu modül MVP sonrasında aktif olacak."
                )}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-[2rem] border border-[#f5b942]/20 bg-[#f5b942]/10 p-8">
          <h2 className="text-2xl font-black">Enterprise Roadmap</h2>
          <ul className="mt-5 space-y-3 text-white/70">
            <li>• Netflix / Disney / Amazon panelleri</li>
            <li>• VIP Talent Discovery</li>
            <li>• Talent Manager Accounts</li>
            <li>• Invite Only Artists</li>
            <li>• AI Casting Assistant</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
