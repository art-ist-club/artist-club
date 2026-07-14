"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/dictionaries";

type DiscoverHeroProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  activeFilterCount: number;
  clearFilters: () => void;
  trendKeywords?: string[];
};

export default function DiscoverHero({
  searchTerm,
  setSearchTerm,
  activeFilterCount,
  clearFilters,
  trendKeywords = ["Oyuncu", "DJ", "Model", "Dansçı", "Influencer", "Sunucu"],
}: DiscoverHeroProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  return (
    <header className="rounded-[2rem] border border-white/10 bg-[#080a12] p-5 shadow-2xl shadow-black/30">
      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="relative">
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/35">
              🔎
            </span>

            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={translate(
                "discover.hero.searchPlaceholder",
                "Sanatçı, kategori, şehir veya kullanıcı ara..."
              )}
              className="w-full rounded-2xl border border-white/10 bg-black/35 py-4 pl-12 pr-5 text-sm font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["300M+", translate("discover.hero.labels.artist", "Artist")],
              ["180+", translate("discover.hero.labels.country", "Country")],
              ["25+", translate("discover.hero.labels.category", "Kategori")],
              ["AI", translate("discover.hero.labels.matching", "Matching")],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <div className="text-xl font-black text-white">{value}</div>
                <div className="mt-1 text-[11px] text-white/45">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f5b942]">
              {translate("discover.hero.trendSearches", "Trend Aramalar")}
            </p>

            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full border border-[#f5b942]/30 bg-[#f5b942]/10 px-3 py-1 text-xs font-black text-[#f5b942] transition hover:bg-[#f5b942]/15"
              >
                {formatMessage(
                  translate("discover.hero.activeCount", "{{count}} aktif"),
                  { count: activeFilterCount }
                )}
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {trendKeywords.slice(0, 6).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSearchTerm(item)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white transition hover:border-[#f5b942] hover:text-[#f5b942]"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 w-full rounded-2xl bg-[#f5b942] py-3 text-sm font-black text-black transition hover:bg-[#ffd36a]"
          >
            {translate("discover.hero.clearFilters", "Filtreleri Temizle")}
          </button>
        </div>
      </div>
    </header>
  );
}
