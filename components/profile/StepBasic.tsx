"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { supabase } from "@/lib/supabase";

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

type StepBasicProps = {
  fullName: string;
  username: string;
  language: string;

  countryId: number | null;
  stateId: number | null;
  cityId: number | null;

  setFullName: (value: string) => void;
  setUsername: (value: string) => void;
  setLanguage: (value: string) => void;

  setCountryId: (value: number | null) => void;
  setStateId: (value: number | null) => void;
  setCityId: (value: number | null) => void;
};

export default function StepBasic({
  fullName,
  username,
  language,
  countryId,
  stateId,
  cityId,
  setFullName,
  setUsername,
  setLanguage,
  setCountryId,
  setStateId,
  setCityId,
}: StepBasicProps) {
  const { t } = useLanguage();

  function translate(key: string, fallback: string) {
    const value = t(key);
    return value === key ? fallback : value;
  }

  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const loadingLabel = translate("common.status.loading", "Yükleniyor...");

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

      if (!countryId) return;

      setLoadingStates(true);

      const { data, error } = await supabase
        .from("states")
        .select("id, name")
        .eq("country_id", countryId)
        .order("name", { ascending: true });

      if (!error && data) {
        setStates(data);
      }

      setLoadingStates(false);
    }

    loadStates();
  }, [countryId]);

  useEffect(() => {
    async function loadCities() {
      setCities([]);

      if (!stateId) return;

      setLoadingCities(true);

      const { data, error } = await supabase
        .from("cities")
        .select("id, name")
        .eq("state_id", stateId)
        .order("name", { ascending: true });

      if (!error && data) {
        setCities(data);
      }

      setLoadingCities(false);
    }

    loadCities();
  }, [stateId]);

  function handleCountryChange(value: string) {
    const nextCountryId = value ? Number(value) : null;

    setCountryId(nextCountryId);
    setStateId(null);
    setCityId(null);
  }

  function handleStateChange(value: string) {
    const nextStateId = value ? Number(value) : null;

    setStateId(nextStateId);
    setCityId(null);
  }

  function handleCityChange(value: string) {
    const nextCityId = value ? Number(value) : null;

    setCityId(nextCityId);
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm text-white/70">
          {translate("profile.stepsUi.basic.fullName", "Ad Soyad")}
        </label>

        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Örn: Atilla Demirkıran"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/70">
          {translate("profile.stepsUi.basic.username", "Kullanıcı adı")}
        </label>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Örn: atilla.demirkiran"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm text-white/70">
            {translate("profile.stepsUi.basic.country", "Ülke")}
          </label>

          <select
            value={countryId ?? ""}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[#070a12] px-4 py-3 text-white outline-none transition focus:border-[#f5b942]/60"
          >
            <option value="">
              {loadingCountries
                ? loadingLabel
                : translate("profile.stepsUi.basic.selectCountry", "Ülke seç")}
            </option>

            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">
            {translate("profile.stepsUi.basic.state", "Eyalet / Bölge")}
          </label>

          <select
            value={stateId ?? ""}
            onChange={(e) => handleStateChange(e.target.value)}
            disabled={!countryId || loadingStates}
            className="w-full rounded-2xl border border-white/10 bg-[#070a12] px-4 py-3 text-white outline-none transition disabled:cursor-not-allowed disabled:opacity-50 focus:border-[#f5b942]/60"
          >
            <option value="">
              {!countryId
                ? translate(
                    "profile.stepsUi.workArea.selectCountryFirst",
                    "Önce ülke seçmelisin."
                  )
                : loadingStates
                  ? loadingLabel
                  : translate("profile.stepsUi.basic.selectState", "Bölge seç")}
            </option>

            {states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/70">
            {translate("profile.stepsUi.basic.city", "Şehir")}
          </label>

          <select
            value={cityId ?? ""}
            onChange={(e) => handleCityChange(e.target.value)}
            disabled={!stateId || loadingCities}
            className="w-full rounded-2xl border border-white/10 bg-[#070a12] px-4 py-3 text-white outline-none transition disabled:cursor-not-allowed disabled:opacity-50 focus:border-[#f5b942]/60"
          >
            <option value="">
              {!stateId
                ? "Önce bölge seç"
                : loadingCities
                  ? loadingLabel
                  : translate("profile.stepsUi.basic.selectCity", "Şehir seç")}
            </option>

            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-white/70">Dil</label>

        <input
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="Örn: Türkçe, İngilizce, Almanca"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#f5b942]/60"
        />
      </div>
    </div>
  );
}