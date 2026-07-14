"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { supabase } from "@/lib/supabase";

type StepWorkAreaProps = {
  workCountries: string;
  setWorkCountries: (value: string) => void;
  workCities: string;
  setWorkCities: (value: string) => void;
  canTravel: boolean;
  setCanTravel: (value: boolean) => void;
  worksOnSite: boolean;
  setWorksOnSite: (value: boolean) => void;
  worksOnline: boolean;
  setWorksOnline: (value: boolean) => void;
  eventTypes: string[];
  setEventTypes: (value: string[]) => void;
};

type Country = {
  id: number;
  name: string;
};

type State = {
  id: number;
  name: string;
};

type City = {
  id: number;
  name: string;
};

type WorkLocation = {
  id: string;
  country_id: number;
  state_id: number | null;
  city_id: number | null;
  scope: "country" | "state" | "city";
  countryName: string;
  stateName: string;
  cityName: string;
};

const eventOptions = [
  "Kurumsal Etkinlik",
  "Düğün",
  "Festival",
  "Film / Dizi",
  "Reklam",
  "Konser",
  "Özel Organizasyon",
  "Sahne Performansı",
  "Marka İş Birliği",
  "Fotoğraf / Video Çekimi",
];

export default function StepWorkArea({
  setWorkCountries,
  setWorkCities,
  canTravel,
  setCanTravel,
  worksOnSite,
  setWorksOnSite,
  worksOnline,
  setWorksOnline,
  eventTypes,
  setEventTypes,
}: StepWorkAreaProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [userId, setUserId] = useState("");

  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [workLocations, setWorkLocations] = useState<WorkLocation[]>([]);

  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(null);
  const [selectedStateId, setSelectedStateId] = useState<number | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);

  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingLocations, setLoadingLocations] = useState(false);
  const [savingLocation, setSavingLocation] = useState(false);
  const [error, setError] = useState("");

  const selectedCountry = useMemo(
    () => countries.find((country) => country.id === selectedCountryId),
    [countries, selectedCountryId]
  );

  const selectedState = useMemo(
    () => states.find((state) => state.id === selectedStateId),
    [states, selectedStateId]
  );

  const selectedCity = useMemo(
    () => cities.find((city) => city.id === selectedCityId),
    [cities, selectedCityId]
  );

  useEffect(() => {
    async function init() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      setUserId(user.id);
      await loadWorkLocations(user.id);
    }

    init();
  }, []);

  useEffect(() => {
    async function loadCountries() {
      setLoadingCountries(true);

      const { data, error } = await supabase
        .from("countries")
        .select("id, name")
        .order("name", { ascending: true });

      if (!error && data) {
        setCountries(data);
      }

      setLoadingCountries(false);
    }

    loadCountries();
  }, []);

  useEffect(() => {
    async function loadStates() {
      setStates([]);
      setCities([]);
      setSelectedStateId(null);
      setSelectedCityId(null);

      if (!selectedCountryId) return;

      setLoadingStates(true);

      const { data, error } = await supabase
        .from("states")
        .select("id, name")
        .eq("country_id", selectedCountryId)
        .order("name", { ascending: true });

      if (!error && data) {
        setStates(data);
      }

      setLoadingStates(false);
    }

    loadStates();
  }, [selectedCountryId]);

  useEffect(() => {
    async function loadCities() {
      setCities([]);
      setSelectedCityId(null);

      if (!selectedStateId) return;

      setLoadingCities(true);

      const { data, error } = await supabase
        .from("cities")
        .select("id, name")
        .eq("state_id", selectedStateId)
        .order("name", { ascending: true });

      if (!error && data) {
        setCities(data);
      }

      setLoadingCities(false);
    }

    loadCities();
  }, [selectedStateId]);

  useEffect(() => {
    syncLegacySummary(workLocations);
  }, [workLocations]);

  async function loadWorkLocations(profileId: string) {
    setLoadingLocations(true);

    const { data, error } = await supabase
      .from("artist_work_locations")
      .select(
        `
        id,
        country_id,
        state_id,
        city_id,
        scope,
        countries(name),
        states(name),
        cities(name)
      `
      )
      .eq("profile_id", profileId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Work locations load error:", error);
      setError("Çalışma alanları yüklenirken hata oluştu.");
      setLoadingLocations(false);
      return;
    }

    const mappedLocations: WorkLocation[] = (data ?? []).map((item: any) => ({
      id: item.id,
      country_id: item.country_id,
      state_id: item.state_id,
      city_id: item.city_id,
      scope: item.scope,
      countryName: item.countries?.name ?? "",
      stateName: item.states?.name ?? "",
      cityName: item.cities?.name ?? "",
    }));

    setWorkLocations(mappedLocations);
    setLoadingLocations(false);
  }

  function syncLegacySummary(locations: WorkLocation[]) {
    const countrySummary = Array.from(
      new Set(locations.map((location) => location.countryName).filter(Boolean))
    ).join(", ");

    const citySummary = locations
      .map((location) => {
        if (location.scope === "country") {
          return `${location.countryName} geneli`;
        }

        if (location.scope === "state") {
          return `${location.stateName} geneli`;
        }

        return location.cityName;
      })
      .filter(Boolean)
      .join(", ");

    setWorkCountries(countrySummary);
    setWorkCities(citySummary);
  }

  function toggleEventType(eventType: string) {
    if (eventTypes.includes(eventType)) {
      setEventTypes(eventTypes.filter((item) => item !== eventType));
      return;
    }

    setEventTypes([...eventTypes, eventType]);
  }

  async function addWorkLocation() {
    setError("");

    if (!userId) {
      setError("Kullanıcı bilgisi alınamadı. Sayfayı yenileyip tekrar dene.");
      return;
    }

    if (!selectedCountryId || !selectedCountry) {
      setError(
        translate(
          "profile.stepsUi.workArea.selectCountryFirst",
          "Önce ülke seçmelisin."
        )
      );
      return;
    }

    let scope: "country" | "state" | "city" = "country";

    if (selectedCityId) {
      scope = "city";
    } else if (selectedStateId) {
      scope = "state";
    }

    const alreadyExists = workLocations.some((location) => {
      return (
        location.country_id === selectedCountryId &&
        location.state_id === selectedStateId &&
        location.city_id === selectedCityId &&
        location.scope === scope
      );
    });

    if (alreadyExists) {
      setError("Bu çalışma alanı zaten eklenmiş.");
      return;
    }

    setSavingLocation(true);

    const { error } = await supabase.from("artist_work_locations").insert({
      profile_id: userId,
      country_id: selectedCountryId,
      state_id: selectedStateId,
      city_id: selectedCityId,
      scope,
    });

    if (error) {
      console.error("Work location insert error:", error);
      setError(
        `Çalışma alanı eklenirken hata oluştu: ${
          error.message || "Bilinmeyen hata"
        }`
      );
      setSavingLocation(false);
      return;
    }

    await loadWorkLocations(userId);

    setSelectedCountryId(null);
    setSelectedStateId(null);
    setSelectedCityId(null);
    setStates([]);
    setCities([]);
    setSavingLocation(false);
  }

  async function deleteWorkLocation(locationId: string) {
    if (!userId) return;

    setError("");

    const { error } = await supabase
      .from("artist_work_locations")
      .delete()
      .eq("id", locationId)
      .eq("profile_id", userId);

    if (error) {
      console.error("Work location delete error:", error);
      setError("Çalışma alanı silinirken hata oluştu.");
      return;
    }

    await loadWorkLocations(userId);
  }

  function formatLocation(location: WorkLocation) {
    if (location.scope === "country") {
      return `${location.countryName} / Tüm bölgeler / Tüm şehirler`;
    }

    if (location.scope === "state") {
      return `${location.countryName} / ${location.stateName} / Tüm şehirler`;
    }

    return `${location.countryName} / ${location.stateName} / ${location.cityName}`;
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-white/60">
          Nerelerde ve hangi iş türlerinde çalışabileceğini belirt. Bu bilgiler
          public profilde gösterilmez; sadece ART-IST.CLUB arama ve eşleştirme
          motorunda kullanılır.
        </p>

        <p className="mt-3 text-sm text-white/40">
          Her çalışma alanını ayrı ayrı ekle. Örneğin: Türkiye / İzmir / Tüm
          şehirler veya İsviçre / Thurgau / Kreuzlingen.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="mb-5">
          <h3 className="text-lg font-black text-white">
            {translate("profile.stepsUi.workArea.title", "Çalışma Alanı")}
          </h3>
          <p className="mt-2 text-sm text-white/45">
            Ülke seçmek zorunlu. Bölge ve şehir seçmezsen sistem bunu ülke
            geneli olarak kabul eder.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <label className="block">
            <span className="mb-2 block text-sm font-black text-white">
              {translate("profile.stepsUi.basic.country", "Ülke")}
            </span>

            <select
              value={selectedCountryId ?? ""}
              onChange={(event) =>
                setSelectedCountryId(
                  event.target.value ? Number(event.target.value) : null
                )
              }
              className="w-full rounded-2xl border border-white/10 bg-[#070a12] px-4 py-3 text-white outline-none transition focus:border-[#f5b942]/70"
            >
              <option value="">
                {loadingCountries
                  ? translate("common.status.loading", "Yükleniyor...")
                  : translate("profile.stepsUi.basic.selectCountry", "Ülke seç")}
              </option>

              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-white">
              {translate("profile.stepsUi.basic.state", "Eyalet / Bölge")}
            </span>

            <select
              value={selectedStateId ?? ""}
              onChange={(event) =>
                setSelectedStateId(
                  event.target.value ? Number(event.target.value) : null
                )
              }
              disabled={!selectedCountryId || loadingStates}
              className="w-full rounded-2xl border border-white/10 bg-[#070a12] px-4 py-3 text-white outline-none transition disabled:cursor-not-allowed disabled:opacity-50 focus:border-[#f5b942]/70"
            >
              <option value="">
                {!selectedCountryId
                  ? translate(
                      "profile.stepsUi.workArea.selectCountryFirst",
                      "Önce ülke seçmelisin."
                    )
                  : loadingStates
                    ? translate("common.status.loading", "Yükleniyor...")
                    : "Tüm bölgeler"}
              </option>

              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-black text-white">
              {translate("profile.stepsUi.basic.city", "Şehir")}
            </span>

            <select
              value={selectedCityId ?? ""}
              onChange={(event) =>
                setSelectedCityId(
                  event.target.value ? Number(event.target.value) : null
                )
              }
              disabled={!selectedStateId || loadingCities}
              className="w-full rounded-2xl border border-white/10 bg-[#070a12] px-4 py-3 text-white outline-none transition disabled:cursor-not-allowed disabled:opacity-50 focus:border-[#f5b942]/70"
            >
              <option value="">
                {!selectedStateId
                  ? "Tüm şehirler"
                  : loadingCities
                    ? translate("common.status.loading", "Yükleniyor...")
                    : "Tüm şehirler"}
              </option>

              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">
            Seçim:{" "}
            <span className="font-bold text-white/75">
              {selectedCountry
                ? [
                    selectedCountry.name,
                    selectedState?.name || "Tüm bölgeler",
                    selectedCity?.name || "Tüm şehirler",
                  ].join(" / ")
                : "Henüz seçim yapılmadı"}
            </span>
          </p>

          <button
            type="button"
            onClick={addWorkLocation}
            disabled={!selectedCountryId || savingLocation}
            className="rounded-2xl bg-[#f5b942] px-7 py-4 text-sm font-black text-black transition hover:bg-[#ffd36a] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {savingLocation ? "Ekleniyor..." : "+ Çalışma Alanı Ekle"}
          </button>
        </div>

        {error && (
          <p className="mt-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </p>
        )}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-lg font-black text-white">
              Eklenen Çalışma Alanları
            </h3>
            <p className="mt-2 text-sm text-white/45">
              Bu liste müşteri tarafından görünmez; sadece arama eşleşmesi için
              kullanılır.
            </p>
          </div>

          <span className="text-sm font-black text-[#f5b942]">
            {workLocations.length} alan
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {loadingLocations ? (
            <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/55">
              Çalışma alanları yükleniyor...
            </p>
          ) : workLocations.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/55">
              {translate(
                "profile.public.emptyWorkArea",
                "Çalışma alanı belirtilmedi"
              )}
            </p>
          ) : (
            workLocations.map((location) => (
              <div
                key={location.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/25 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-black text-white">
                    {formatLocation(location)}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/35">
                    {location.scope === "country"
                      ? "Ülke geneli"
                      : location.scope === "state"
                        ? "Bölge geneli"
                        : "Şehir"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => deleteWorkLocation(location.id)}
                  className="rounded-2xl border border-red-400/20 px-4 py-3 text-sm font-black text-red-200 transition hover:bg-red-500/10"
                >
                  Sil
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <button
          type="button"
          onClick={() => setCanTravel(!canTravel)}
          className={`rounded-3xl border p-5 text-left transition ${
            canTravel
              ? "border-[#f5b942] bg-[#f5b942] text-black"
              : "border-white/10 bg-white/[0.03] text-white hover:border-[#f5b942]/40 hover:bg-[#f5b942]/5"
          }`}
        >
          <span className="block text-lg font-black">
            {translate("profile.stepsUi.workArea.travel", "Seyahat ederim")}
          </span>
          <span
            className={`mt-2 block text-sm leading-6 ${
              canTravel ? "text-black/70" : "text-white/45"
            }`}
          >
            Farklı şehir ve ülkelere gidebilir.
          </span>
        </button>

        <button
          type="button"
          onClick={() => setWorksOnSite(!worksOnSite)}
          className={`rounded-3xl border p-5 text-left transition ${
            worksOnSite
              ? "border-[#f5b942] bg-[#f5b942] text-black"
              : "border-white/10 bg-white/[0.03] text-white hover:border-[#f5b942]/40 hover:bg-[#f5b942]/5"
          }`}
        >
          <span className="block text-lg font-black">
            {translate("profile.stepsUi.workArea.onsite", "Yerinde çalışırım")}
          </span>
          <span
            className={`mt-2 block text-sm leading-6 ${
              worksOnSite ? "text-black/70" : "text-white/45"
            }`}
          >
            Sahne, set, etkinlik ve mekanda çalışabilir.
          </span>
        </button>

        <button
          type="button"
          onClick={() => setWorksOnline(!worksOnline)}
          className={`rounded-3xl border p-5 text-left transition ${
            worksOnline
              ? "border-[#f5b942] bg-[#f5b942] text-black"
              : "border-white/10 bg-white/[0.03] text-white hover:border-[#f5b942]/40 hover:bg-[#f5b942]/5"
          }`}
        >
          <span className="block text-lg font-black">
            {translate("profile.stepsUi.workArea.online", "Online çalışırım")}
          </span>
          <span
            className={`mt-2 block text-sm leading-6 ${
              worksOnline ? "text-black/70" : "text-white/45"
            }`}
          >
            Uzaktan kayıt, görüşme veya dijital iş yapabilir.
          </span>
        </button>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div>
          <h3 className="text-lg font-black text-white">
            Uygun Olduğun İş / Etkinlik Türleri
          </h3>
          <p className="mt-2 text-sm text-white/45">
            Birden fazla seçenek işaretleyebilirsin.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {eventOptions.map((eventType) => {
            const selected = eventTypes.includes(eventType);

            return (
              <button
                key={eventType}
                type="button"
                onClick={() => toggleEventType(eventType)}
                className={`rounded-2xl border px-5 py-4 text-left text-sm font-bold transition ${
                  selected
                    ? "border-[#f5b942] bg-[#f5b942] text-black"
                    : "border-white/10 bg-black/30 text-white/75 hover:border-[#f5b942]/40 hover:text-[#f5b942]"
                }`}
              >
                {eventType}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-[#f5b942]/15 bg-[#f5b942]/5 p-5">
        <h4 className="font-bold text-[#f5b942]">Çalışma Alanı Notu</h4>
        <p className="mt-2 text-sm leading-6 text-white/55">
          Bu bilgiler profilinde gösterilmez. Sistem yalnızca müşterinin arama
          kriteriyle eşleşen sanatçıları bulmak için kullanır.
        </p>
      </div>
    </div>
  );
}
