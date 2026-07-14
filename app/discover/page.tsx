"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { formatMessage } from "@/lib/dictionaries";

import ArtistCard from "@/components/discover/ArtistCard";
import DiscoverFilters from "@/components/discover/Filters";
import DiscoverHero from "@/components/discover/Hero";
import DiscoverStats from "@/components/discover/Stats";
import useFavorites from "@/hooks/useFavorites";
import ClientNavbar from "@/components/client/ClientNavbar";
import Footer from "@/components/Footer";

type ArtistCategory = {
  id: number;
  name: string;
};

type Profile = {
  id: string;
  full_name: string | null;
  username: string | null;
  country: string | null;
  city: string | null;
  language: string | null;
  avatar_url: string | null;
  tagline: string | null;
  is_published: boolean | null;
  works_online: boolean | null;
  works_on_site: boolean | null;
  can_travel: boolean | null;
  profile_views?: number | null;
  published_at?: string | null;
  created_at?: string | null;
};

type ProfileCategory = {
  profile_id: string;
  category_id: number;
};

type WorkModeFilter = "all" | "online" | "on_site" | "travel";

const COUNTRY_CITY_MAP: Record<string, string[]> = {
  Türkiye: [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Aksaray",
    "Amasya",
    "Ankara",
    "Antalya",
    "Ardahan",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bartın",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Düzce",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Iğdır",
    "Isparta",
    "İstanbul",
    "İzmir",
    "Kahramanmaraş",
    "Karabük",
    "Karaman",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırıkkale",
    "Kırklareli",
    "Kırşehir",
    "Kilis",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Şanlıurfa",
    "Şırnak",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Uşak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
  ],
  Germany: [
    "Berlin",
    "Hamburg",
    "Munich",
    "Cologne",
    "Frankfurt",
    "Stuttgart",
    "Düsseldorf",
    "Dortmund",
    "Essen",
    "Leipzig",
    "Bremen",
    "Dresden",
    "Hanover",
    "Nuremberg",
  ],
  Switzerland: [
    "Zurich",
    "Geneva",
    "Basel",
    "Bern",
    "Lausanne",
    "Lucerne",
    "St. Gallen",
    "Lugano",
    "Winterthur",
  ],
  Austria: [
    "Vienna",
    "Graz",
    "Linz",
    "Salzburg",
    "Innsbruck",
    "Klagenfurt",
  ],
  France: ["Paris", "Lyon", "Marseille", "Nice", "Toulouse", "Bordeaux", "Lille"],
  Italy: ["Rome", "Milan", "Naples", "Turin", "Florence", "Venice", "Bologna"],
  Spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga", "Bilbao"],
  "United Kingdom": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Glasgow"],
  "United States": [
    "New York",
    "Los Angeles",
    "Chicago",
    "Miami",
    "San Francisco",
    "Las Vegas",
    "Austin",
    "Atlanta",
  ],
  Netherlands: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
  Belgium: ["Brussels", "Antwerp", "Ghent", "Bruges"],
  Albania: ["Tirana", "Durrës", "Vlorë", "Shkodër"],
  "Bosnia and Herzegovina": ["Sarajevo", "Banja Luka", "Mostar", "Tuzla"],
  Greece: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
  Bulgaria: ["Sofia", "Plovdiv", "Varna", "Burgas"],
  Romania: ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași"],
  Croatia: ["Zagreb", "Split", "Rijeka", "Dubrovnik"],
  Serbia: ["Belgrade", "Novi Sad", "Niš"],
  Poland: ["Warsaw", "Kraków", "Wrocław", "Gdańsk"],
  Portugal: ["Lisbon", "Porto", "Braga", "Faro"],
  Canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah"],
};

const FALLBACK_COUNTRIES = Object.keys(COUNTRY_CITY_MAP);

const FALLBACK_LANGUAGES = [
  "Türkçe",
  "English",
  "Deutsch",
  "Français",
  "Italiano",
  "Español",
  "Shqip",
  "Bosanski",
  "Русский",
  "العربية",
];

export default function DiscoverPage() {
  const router = useRouter();
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [categories, setCategories] = useState<ArtistCategory[]>([]);
  const [profileCategories, setProfileCategories] = useState<ProfileCategory[]>([]);

  const [countryRows, setCountryRows] = useState<any[]>([]);
  const [cityRows, setCityRows] = useState<any[]>([]);
  const [languageRows, setLanguageRows] = useState<any[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("");
  const [workMode, setWorkMode] = useState<WorkModeFilter>("all");
  const [onlyWithPhoto, setOnlyWithPhoto] = useState(false);

  const { favoriteIds, toggleFavorite } = useFavorites();

  const fallbackFeaturedArtists = [
    {
      type: "ai" as const,
      name: "Sofia Laurent",
      role: "Dansçı · Model · Performer",
      location: "Paris · Global",
      rating: "5.0",
      searchKeyword: "Dansçı",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=90",
    },
    {
      type: "ai" as const,
      name: "Emma Carter",
      role: "Oyuncu · Creator",
      location: "London · Global",
      rating: "5.0",
      searchKeyword: "Oyuncu",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=90",
    },
    {
      type: "ai" as const,
      name: "Lucas Vega",
      role: "Müzisyen · DJ",
      location: "Berlin · Global",
      rating: "5.0",
      searchKeyword: "DJ",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=90",
    },
    {
      type: "ai" as const,
      name: "Maya Stone",
      role: "Model · Performer",
      location: "New York · Global",
      rating: "5.0",
      searchKeyword: "Model",
      image:
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=90",
    },
  ];

  useEffect(() => {
    async function loadDiscoverData() {
      setLoading(true);

      const [
        publishedProfileResult,
        categoryResult,
        profileCategoryResult,
        countryResult,
        cityResult,
        languageResult,
      ] = await Promise.all([
        supabase
          .from("profiles")
          .select("*")
          .eq("is_published", true)
          .order("published_at", { ascending: false, nullsFirst: false }),

        supabase.from("artist_categories").select("*").order("name"),

        supabase.from("profile_categories").select("*"),

        supabase.from("countries").select("*"),

        supabase.from("cities").select("*"),

        supabase.from("languages").select("*"),
      ]);

      if (publishedProfileResult.error) {
        console.error("Discover published profiles load error:", publishedProfileResult.error);
      }

      if (categoryResult.error) {
        console.error("Discover categories load error:", categoryResult.error);
      }

      if (profileCategoryResult.error) {
        console.error("Discover profile categories load error:", profileCategoryResult.error);
      }

      if (countryResult.error) {
        console.error("Discover countries load error:", countryResult.error);
      }

      if (cityResult.error) {
        console.error("Discover cities load error:", cityResult.error);
      }

      if (languageResult.error) {
        console.error("Discover languages load error:", languageResult.error);
      }

      const loadedProfiles =
        (publishedProfileResult.data as Profile[] | null) ?? [];

      setProfiles(loadedProfiles);
      setCategories(normalizeCategories(categoryResult.data ?? []));
      setProfileCategories(normalizeProfileCategories(profileCategoryResult.data ?? []));
      setCountryRows((countryResult.data as any[] | null) ?? []);
      setCityRows((cityResult.data as any[] | null) ?? []);
      setLanguageRows((languageResult.data as any[] | null) ?? []);

      setLoading(false);
    }

    loadDiscoverData();
  }, []);

  const countryOptions = useMemo(() => {
    const fromRows = extractNames(countryRows);
    const fromProfiles = profiles.map((profile) => profile.country);

    return uniqueCleanValues([
      ...fromRows,
      ...fromProfiles,
      ...FALLBACK_COUNTRIES,
    ]);
  }, [countryRows, profiles]);

  const cityOptions = useMemo(() => {
    const selectedCountryName = findCountryKey(country);

    if (selectedCountryName) {
      const mappedCities = COUNTRY_CITY_MAP[selectedCountryName] ?? [];

      const profileCitiesByCountry = profiles
        .filter((profile) => {
          return normalizeText(profile.country) === normalizeText(selectedCountryName);
        })
        .map((profile) => profile.city);

      return uniqueCleanValues([...mappedCities, ...profileCitiesByCountry]);
    }

    const fromRows = extractNames(cityRows);
    const fromProfiles = profiles.map((profile) => profile.city);
    const allMappedCities = Object.values(COUNTRY_CITY_MAP).flat();

    return uniqueCleanValues([...fromRows, ...fromProfiles, ...allMappedCities]);
  }, [cityRows, profiles, country]);

  const languageOptions = useMemo(() => {
    const fromRows = extractNames(languageRows);
    const fromProfiles = profiles.map((profile) => profile.language);

    return uniqueCleanValues([
      ...fromRows,
      ...fromProfiles,
      ...FALLBACK_LANGUAGES,
    ]);
  }, [languageRows, profiles]);

  const categoryCountMap = useMemo(() => {
    const countMap = new Map<number, number>();

    profileCategories.forEach((item) => {
      const profileExists = profiles.some((profile) => {
        return profile.id === item.profile_id;
      });

      if (!profileExists) return;

      countMap.set(item.category_id, (countMap.get(item.category_id) ?? 0) + 1);
    });

    return countMap;
  }, [profiles, profileCategories]);

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const profileCategoryIds = profileCategories
        .filter((item) => item.profile_id === profile.id)
        .map((item) => item.category_id);

      const categoryMatches = selectedCategoryId
        ? profileCategoryIds.includes(Number(selectedCategoryId))
        : true;

      const searchText = [
        profile.full_name,
        profile.username,
        profile.country,
        profile.city,
        profile.language,
        profile.tagline,
        getProfileCategoryNames(profile.id),
      ]
        .filter(Boolean)
        .join(" ");

      const searchMatches = searchTerm.trim()
        ? normalizeText(searchText).includes(normalizeText(searchTerm))
        : true;

      const countryMatches = country.trim()
        ? normalizeText(profile.country).includes(normalizeText(country))
        : true;

      const cityMatches = city.trim()
        ? normalizeText(profile.city).includes(normalizeText(city))
        : true;

      const languageMatches = language.trim()
        ? normalizeText(profile.language).includes(normalizeText(language))
        : true;

      const workModeMatches =
        workMode === "online"
          ? profile.works_online
          : workMode === "on_site"
          ? profile.works_on_site
          : workMode === "travel"
          ? profile.can_travel
          : true;

      const photoMatches = onlyWithPhoto ? Boolean(profile.avatar_url) : true;

      return (
        categoryMatches &&
        searchMatches &&
        countryMatches &&
        cityMatches &&
        languageMatches &&
        workModeMatches &&
        photoMatches
      );
    });
  }, [
    profiles,
    profileCategories,
    selectedCategoryId,
    searchTerm,
    country,
    city,
    language,
    workMode,
    onlyWithPhoto,
  ]);

  const activeFilterCount = useMemo(() => {
    let count = 0;

    if (searchTerm.trim()) count += 1;
    if (selectedCategoryId) count += 1;
    if (country.trim()) count += 1;
    if (city.trim()) count += 1;
    if (language.trim()) count += 1;
    if (workMode !== "all") count += 1;
    if (onlyWithPhoto) count += 1;

    return count;
  }, [
    searchTerm,
    selectedCategoryId,
    country,
    city,
    language,
    workMode,
    onlyWithPhoto,
  ]);

  const trendKeywords = useMemo(() => {
    const dynamicTrends = categories
      .map((category) => ({
        name: category.name,
        count: categoryCountMap.get(category.id) ?? 0,
      }))
      .filter((item) => item.count > 0)
      .sort((first, second) => second.count - first.count)
      .map((item) => item.name)
      .slice(0, 6);

    const fallbackTrends = ["Oyuncu", "DJ", "Model", "Dansçı", "Influencer", "Sunucu"];

    return dynamicTrends.length > 0 ? dynamicTrends : fallbackTrends;
  }, [categories, categoryCountMap]);

  const featuredArtist = useMemo(() => {
    const realFeaturedArtists = profiles
      .filter((profile) => {
        return Boolean(profile.username) && Boolean(profile.avatar_url);
      })
      .map((profile) => {
        const categoryNames = getProfileCategoryNames(profile.id);

        return {
          type: "real" as const,
          profile,
          name:
            profile.full_name ||
            profile.username ||
            translate("discover.fallbacks.artist", "Sanatçı"),
          role: categoryNames || translate("discover.fallbacks.artist", "Sanatçı"),
          location:
            [profile.city, profile.country].filter(Boolean).join(" · ") ||
            "Global",
          rating: "5.0",
          searchKeyword:
            categoryNames.split(" • ")[0] ||
            translate("discover.fallbacks.artist", "Sanatçı"),
          image: profile.avatar_url || "",
        };
      });

    const aiFeaturedArtists = fallbackFeaturedArtists.map((artist) => ({
      ...artist,
      profile: null,
    }));

    const shouldUseAiPreview = profiles.length < 20;

    const featuredPool = shouldUseAiPreview
      ? [...realFeaturedArtists, ...aiFeaturedArtists]
      : realFeaturedArtists;

    const safeFeaturedPool =
      featuredPool.length > 0 ? featuredPool : aiFeaturedArtists;

    return safeFeaturedPool[
      Math.floor(Math.random() * safeFeaturedPool.length)
    ];
  }, [profiles, profileCategories, categories, t]);

  function getProfileCategoryNames(profileId: string) {
    const categoryIds = profileCategories
      .filter((item) => item.profile_id === profileId)
      .map((item) => item.category_id);

    return categories
      .filter((category) => categoryIds.includes(category.id))
      .map((category) => category.name)
      .slice(0, 4)
      .join(" • ");
  }

  function clearFilters() {
    setSearchTerm("");
    setSelectedCategoryId("");
    setCountry("");
    setCity("");
    setLanguage("");
    setWorkMode("all");
    setOnlyWithPhoto(false);
  }

  async function openArtistProfile(profile: Profile) {
    if (!profile.username) return;

    const targetPath = `/artist/${profile.username}`;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push(`/login?redirect=${encodeURIComponent(targetPath)}`);
      return;
    }

    const storageKey = `artist-profile-viewed-${profile.id}`;
    const alreadyCounted =
      typeof window !== "undefined" && localStorage.getItem(storageKey);

    if (!alreadyCounted) {
      const nextViewCount = (profile.profile_views ?? 0) + 1;

      setProfiles((currentProfiles) => {
        return currentProfiles.map((currentProfile) => {
          if (currentProfile.id !== profile.id) return currentProfile;

          return {
            ...currentProfile,
            profile_views: nextViewCount,
          };
        });
      });

      await supabase
        .from("profiles")
        .update({
          profile_views: nextViewCount,
        })
        .eq("id", profile.id);

      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, "true");
      }
    }

    router.push(targetPath);
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#03050b] px-6 text-white">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f5b942]/20 blur-[120px]" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] px-8 py-7 text-center shadow-2xl shadow-black/40">
          <div className="mx-auto mb-5 h-12 w-12 animate-pulse rounded-2xl border border-[#f5b942]/40 bg-[#f5b942]/15" />
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f5b942]">
            ART-IST.CLUB
          </p>
          <h1 className="mt-3 text-2xl font-black">
            {translate("discover.loading.title", "Sanatçılar yükleniyor...")}
          </h1>
          <p className="mt-3 text-sm text-white/50">
            {translate(
              "discover.loading.subtitle",
              "Discovery alanı hazırlanıyor."
            )}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#03050b] text-white">
      <ClientNavbar />

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#f5b942]/10 blur-[140px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#f5b942]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-8 md:px-8 md:pb-10">
        <section className="mb-6 overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 md:p-6">
          <div className="grid gap-6 xl:grid-cols-[1fr_380px] xl:items-stretch">
            <div className="flex flex-col gap-5">
              <DiscoverHero
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                activeFilterCount={activeFilterCount}
                clearFilters={clearFilters}
                trendKeywords={trendKeywords}
              />

              <DiscoverStats
                totalProfiles={profiles.length}
                filteredProfiles={filteredProfiles.length}
                favoriteCount={favoriteIds.length}
              />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-2xl shadow-black/20">
              <img
                src={featuredArtist.image}
                alt={featuredArtist.name}
                className="h-[315px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <div className="rounded-full border border-[#f5b942]/30 bg-black/35 px-3 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#f5b942] backdrop-blur-xl">
                  {featuredArtist.type === "real"
                    ? translate("discover.featured.badge", "Featured Artist")
                    : translate("discover.featured.aiPreview", "AI Preview")}
                </div>

                <div className="rounded-full border border-white/15 bg-black/35 px-3 py-2 text-xs font-black text-white backdrop-blur-xl">
                  ★ {featuredArtist.rating}
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-3xl font-black tracking-[-0.06em] text-white">
                  {featuredArtist.name}
                </h3>

                <p className="mt-2 text-sm font-bold text-[#f5b942]">
                  {featuredArtist.role}
                </p>

                <p className="mt-2 text-sm text-white/60">
                  {featuredArtist.location}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    if (featuredArtist.type === "real" && featuredArtist.profile) {
                      openArtistProfile(featuredArtist.profile);
                      return;
                    }

                    setSearchTerm(featuredArtist.searchKeyword);
                  }}
                  className="mt-4 w-full rounded-2xl bg-gradient-to-r from-[#f5b942] to-[#ffe08a] px-5 py-3.5 text-sm font-black text-black transition hover:scale-[1.01]"
                >
                  {featuredArtist.type === "real"
                    ? translate(
                        "discover.featured.viewProfile",
                        "Profili İncele →"
                      )
                    : translate(
                        "discover.featured.similarArtists",
                        "Benzer Sanatçıları Keşfet →"
                      )}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[340px_1fr]">
          <DiscoverFilters
            profilesCount={profiles.length}
            categories={categories}
            categoryCountMap={categoryCountMap}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            language={language}
            setLanguage={setLanguage}
            workMode={workMode}
            setWorkMode={setWorkMode}
            onlyWithPhoto={onlyWithPhoto}
            setOnlyWithPhoto={setOnlyWithPhoto}
            countryOptions={countryOptions}
            cityOptions={cityOptions}
            languageOptions={languageOptions}
            activeFilterCount={activeFilterCount}
            clearFilters={clearFilters}
          />

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 md:p-6">
            <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#f5b942]">
                  {translate("discover.results.title", "Arama Sonuçları")}
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  {formatMessage(
                    translate(
                      "discover.results.listingCount",
                      "{{count}} sanatçı listeleniyor"
                    ),
                    { count: filteredProfiles.length }
                  )}
                </h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-semibold text-white/50">
                {translate(
                  "discover.results.subtitle",
                  "En yeni yayınlanan profiller önce gösterilir."
                )}
              </div>
            </div>

            {filteredProfiles.length === 0 ? (
              <div className="rounded-[1.8rem] border border-white/10 bg-black/25 p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-[#f5b942]/25 bg-[#f5b942]/10 text-3xl">
                  🔎
                </div>

                <h3 className="mt-5 text-2xl font-black">
                  {translate("discover.results.emptyTitle", "Sonuç bulunamadı")}
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-white/55">
                  {translate(
                    "discover.results.emptyText",
                    "Yayında olan profil bulunamadı veya seçili filtrelerle eşleşen sanatçı yok. Filtreleri temizleyerek tekrar deneyebilirsin."
                  )}
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-2xl bg-[#f5b942] px-6 py-4 text-sm font-black text-black transition hover:scale-[1.02] hover:bg-[#ffd36a]"
                >
                  {translate("discover.hero.clearFilters", "Filtreleri Temizle")}
                </button>
              </div>
            ) : (
              <div className="grid gap-5 xl:grid-cols-2">
                {filteredProfiles.map((profile) => (
                  <ArtistCard
                    key={profile.id}
                    profile={profile}
                    categoryNames={getProfileCategoryNames(profile.id)}
                    isFavorite={favoriteIds.includes(profile.id)}
                    onToggleFavorite={toggleFavorite}
                    onOpenProfile={openArtistProfile}
                  />
                ))}
              </div>
            )}
          </section>
        </section>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <Footer />
      </div>
    </main>
  );
}

function normalizeCategories(rows: any[]) {
  return rows
    .map((row) => ({
      id: Number(row.id),
      name: String(row.name ?? row.title ?? row.label ?? "Kategori"),
    }))
    .filter((row) => Number.isFinite(row.id));
}

function normalizeProfileCategories(rows: any[]) {
  return rows
    .map((row) => ({
      profile_id: String(row.profile_id ?? ""),
      category_id: Number(row.category_id),
    }))
    .filter((row) => row.profile_id && Number.isFinite(row.category_id));
}

function extractNames(rows: any[]) {
  return rows
    .map((row) => {
      return (
        row.name ??
        row.name_tr ??
        row.name_en ??
        row.title ??
        row.label ??
        row.city ??
        row.country ??
        row.language ??
        null
      );
    })
    .filter(Boolean);
}

function findCountryKey(value: string) {
  if (!value.trim()) return "";

  return (
    Object.keys(COUNTRY_CITY_MAP).find((countryName) => {
      return normalizeText(countryName) === normalizeText(value);
    }) ?? ""
  );
}

function uniqueCleanValues(values: Array<string | null | undefined>) {
  return Array.from(
    new Set(
      values
        .map((value) => value?.trim())
        .filter((value): value is string => Boolean(value))
    )
  ).sort((first, second) => first.localeCompare(second, "tr"));
}

function normalizeText(value: string | null | undefined) {
  return (value ?? "")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
