"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/dictionaries";

type ArtistCategory = {
  id: number;
  name: string;
};

type WorkModeFilter = "all" | "online" | "on_site" | "travel";

type DiscoverFiltersProps = {
  profilesCount: number;
  categories: ArtistCategory[];
  categoryCountMap: Map<number, number>;

  selectedCategoryId: string;
  setSelectedCategoryId: (value: string) => void;

  country: string;
  setCountry: (value: string) => void;

  city: string;
  setCity: (value: string) => void;

  language: string;
  setLanguage: (value: string) => void;

  workMode: WorkModeFilter;
  setWorkMode: (value: WorkModeFilter) => void;

  onlyWithPhoto: boolean;
  setOnlyWithPhoto: (value: boolean) => void;

  countryOptions: string[];
  cityOptions: string[];
  languageOptions: string[];

  activeFilterCount: number;
  clearFilters: () => void;
};

export default function DiscoverFilters({
  profilesCount,
  categories,
  categoryCountMap,
  selectedCategoryId,
  setSelectedCategoryId,
  country,
  setCountry,
  city,
  setCity,
  language,
  setLanguage,
  workMode,
  setWorkMode,
  onlyWithPhoto,
  setOnlyWithPhoto,
  countryOptions,
  cityOptions,
  languageOptions,
  activeFilterCount,
  clearFilters,
}: DiscoverFiltersProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  return (
    <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 md:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f5b942]">
            {translate("discover.filters.title", "Filtreler")}
          </p>
          <h2 className="mt-2 text-2xl font-black">
            {translate("discover.filters.smartSearch", "Akıllı Arama")}
          </h2>
        </div>

        {activeFilterCount > 0 && (
          <div className="rounded-full border border-[#f5b942]/25 bg-[#f5b942]/10 px-3 py-1 text-xs font-black text-[#f5b942]">
            {formatMessage(
              translate("discover.hero.activeCount", "{{count}} aktif"),
              { count: activeFilterCount }
            )}
          </div>
        )}
      </div>

      <div className="mt-6 space-y-6">
        <FilterSelect
          label={translate("discover.filters.category", "Kategori")}
          value={selectedCategoryId}
          onChange={setSelectedCategoryId}
          placeholder={`${translate("discover.filters.allCategories", "Tüm kategoriler")} (${profilesCount})`}
          options={categories.map((category) => ({
            value: String(category.id),
            label: `${category.name} (${categoryCountMap.get(category.id) ?? 0})`,
          }))}
        />

        <FilterSelect
          label={translate("discover.filters.country", "Ülke")}
          value={country}
          onChange={(nextCountry) => {
            setCountry(nextCountry);
            setCity("");
          }}
          placeholder={translate("discover.filters.allCountries", "Tüm ülkeler")}
          options={countryOptions.map((option) => ({
            value: option,
            label: option,
          }))}
        />

        <FilterSelect
          label={translate("discover.filters.city", "Şehir")}
          value={city}
          onChange={setCity}
          placeholder={translate("discover.filters.allCities", "Tüm şehirler")}
          options={cityOptions.map((option) => ({
            value: option,
            label: option,
          }))}
        />

        <FilterSelect
          label={translate("discover.filters.language", "Dil")}
          value={language}
          onChange={setLanguage}
          placeholder={translate("discover.filters.allLanguages", "Tüm diller")}
          options={languageOptions.map((option) => ({
            value: option,
            label: option,
          }))}
        />

        <div>
          <FilterTitle
            title={translate("discover.filters.workMode", "Çalışma Modeli")}
          />

          <div className="mt-3 grid grid-cols-2 gap-2">
            <WorkModeButton
              active={workMode === "all"}
              label={translate("discover.filters.all", "Tümü")}
              onClick={() => setWorkMode("all")}
            />
            <WorkModeButton
              active={workMode === "online"}
              label={translate("discover.filters.online", "Online")}
              onClick={() => setWorkMode("online")}
            />
            <WorkModeButton
              active={workMode === "on_site"}
              label={translate("discover.filters.onsite", "Sahada")}
              onClick={() => setWorkMode("on_site")}
            />
            <WorkModeButton
              active={workMode === "travel"}
              label={translate("discover.filters.travel", "Seyahat")}
              onClick={() => setWorkMode("travel")}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOnlyWithPhoto(!onlyWithPhoto)}
          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-sm font-black transition ${
            onlyWithPhoto
              ? "border-[#f5b942]/60 bg-[#f5b942]/10 text-[#f5b942]"
              : "border-white/10 bg-black/25 text-white hover:border-white/20"
          }`}
        >
          <span>
            {translate(
              "discover.filters.photoOnly",
              "Sadece fotoğraflı profiller"
            )}
          </span>
          <span>
            {onlyWithPhoto
              ? translate("discover.filters.active", "Aktif")
              : translate("discover.filters.inactive", "Kapalı")}
          </span>
        </button>

        <button
          type="button"
          onClick={clearFilters}
          className="w-full rounded-2xl border border-white/10 px-5 py-4 text-sm font-black text-white transition hover:border-[#f5b942] hover:bg-white/5"
        >
          {translate("discover.filters.resetAll", "Tüm Filtreleri Sıfırla")}
        </button>
      </div>
    </aside>
  );
}

function FilterTitle({ title }: { title: string }) {
  return <p className="text-sm font-black text-white">{title}</p>;
}

function FilterSelect({
  label,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <div>
      <FilterTitle title={label} />

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm font-semibold text-white outline-none transition focus:border-[#f5b942]"
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function WorkModeButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-sm font-black transition ${
        active
          ? "border-[#f5b942]/70 bg-[#f5b942] text-black"
          : "border-white/10 bg-black/25 text-white/65 hover:border-[#f5b942]/40 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
