"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

type DiscoverStatsProps = {
  totalProfiles: number;
  filteredProfiles: number;
  favoriteCount: number;
};

export default function DiscoverStats({
  totalProfiles,
  filteredProfiles,
  favoriteCount,
}: DiscoverStatsProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  return (
    <div className="grid w-full grid-cols-3 gap-4">
      <StatCard
        label={translate("discover.stats.published", "Yayında")}
        value={totalProfiles}
      />
      <StatCard
        label={translate("discover.stats.results", "Sonuç")}
        value={filteredProfiles}
      />
      <StatCard
        label={translate("discover.stats.favorites", "Favori")}
        value={favoriteCount}
      />
    </div>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="group rounded-[1.4rem] border border-white/10 bg-gradient-to-b from-white/[0.045] to-black/30 px-5 py-4 transition hover:border-[#f5b942]/40 hover:bg-white/[0.06]">
      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/35">
        {label}
      </p>

      <div className="mt-3 flex items-end justify-between gap-3">
        <span className="text-4xl font-black leading-none text-[#f5b942]">
          {value.toLocaleString("tr-TR")}
        </span>

        <span className="pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
          Live
        </span>
      </div>
    </div>
  );
}
