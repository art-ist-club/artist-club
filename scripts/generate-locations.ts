import fs from "fs";
import path from "path";
import zlib from "zlib";
import { pipeline } from "stream/promises";
import axios from "axios";
import csvParser from "csv-parser";
import { createObjectCsvWriter } from "csv-writer";

type CsvRow = Record<string, string>;

const RAW_DIR = path.join(process.cwd(), "database", "raw");
const OUTPUT_DIR = path.join(process.cwd(), "database", "reference");

const SOURCES = {
  countries: [
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/csv/countries.csv",
    "https://github.com/dr5hn/countries-states-cities-database/releases/latest/download/csv-countries.csv.gz",
  ],
  states: [
    "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/csv/states.csv",
    "https://github.com/dr5hn/countries-states-cities-database/releases/latest/download/csv-states.csv.gz",
  ],
  cities: [
    "https://github.com/dr5hn/countries-states-cities-database/releases/latest/download/csv-cities.csv.gz",
  ],
};

const OUTPUT_FILES = {
  countries: path.join(OUTPUT_DIR, "countries.csv"),
  states: path.join(OUTPUT_DIR, "states.csv"),
  cities: path.join(OUTPUT_DIR, "cities.csv"),
};

const RAW_FILES = {
  countries: path.join(RAW_DIR, "countries.raw.csv"),
  states: path.join(RAW_DIR, "states.raw.csv"),
  cities: path.join(RAW_DIR, "cities.raw.csv"),
};

function ensureFolders() {
  fs.mkdirSync(RAW_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadWithFallback(urls: string[], targetPath: string) {
  let lastError: unknown = null;

  for (const url of urls) {
    try {
      await downloadFile(url, targetPath);
      return;
    } catch (error) {
      lastError = error;
      console.log(`   failed: ${url}`);
    }
  }

  throw lastError;
}

async function downloadFile(url: string, targetPath: string) {
  const response = await axios.get(url, {
    responseType: "stream",
    timeout: 180000,
    maxRedirects: 10,
    headers: {
      "User-Agent": "ART-IST.CLUB Location Generator",
    },
  });

  if (url.endsWith(".gz")) {
    await pipeline(response.data, zlib.createGunzip(), fs.createWriteStream(targetPath));
    return;
  }

  await pipeline(response.data, fs.createWriteStream(targetPath));
}

async function readCsv(filePath: string): Promise<CsvRow[]> {
  const rows: CsvRow[] = [];

  await pipeline(
    fs.createReadStream(filePath),
    csvParser({
      mapHeaders: ({ header }) => String(header).trim(),
      mapValues: ({ value }) => cleanValue(value),
    }).on("data", (row: CsvRow) => {
      rows.push(row);
    })
  );

  return rows;
}

function cleanValue(value: unknown) {
  if (value === null || value === undefined) return "";

  return String(value).trim();
}

function pick(row: CsvRow, keys: string[]) {
  for (const key of keys) {
    const value = row[key];

    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return String(value).trim();
    }
  }

  return "";
}

function toNumberString(value: string) {
  if (!value) return "";

  const normalized = value.replace(",", ".");
  const numberValue = Number(normalized);

  if (!Number.isFinite(numberValue)) return "";

  return String(numberValue);
}

function normalizeCountry(row: CsvRow) {
  return {
    id: pick(row, ["id"]),
    name: pick(row, ["name"]),
    iso3: pick(row, ["iso3"]),
    iso2: pick(row, ["iso2"]),
    numeric_code: pick(row, ["numeric_code"]),
    phone_code: pick(row, ["phone_code", "phonecode"]),
    capital: pick(row, ["capital"]),
    currency: pick(row, ["currency"]),
    currency_name: pick(row, ["currency_name"]),
    currency_symbol: pick(row, ["currency_symbol"]),
    tld: pick(row, ["tld"]),
    native: pick(row, ["native"]),
    region: pick(row, ["region"]),
    subregion: pick(row, ["subregion"]),
    latitude: toNumberString(pick(row, ["latitude"])),
    longitude: toNumberString(pick(row, ["longitude"])),
    emoji: pick(row, ["emoji"]),
    emoji_u: pick(row, ["emoji_u", "emojiU"]),
  };
}

function normalizeState(row: CsvRow) {
  return {
    id: pick(row, ["id"]),
    name: pick(row, ["name"]),
    country_id: pick(row, ["country_id"]),
    country_code: pick(row, ["country_code"]),
    state_code: pick(row, ["state_code", "iso2", "fips_code"]),
    type: pick(row, ["type"]),
    latitude: toNumberString(pick(row, ["latitude"])),
    longitude: toNumberString(pick(row, ["longitude"])),
  };
}

function normalizeCity(row: CsvRow) {
  return {
    id: pick(row, ["id"]),
    name: pick(row, ["name"]),
    state_id: pick(row, ["state_id"]),
    state_code: pick(row, ["state_code"]),
    country_id: pick(row, ["country_id"]),
    country_code: pick(row, ["country_code"]),
    latitude: toNumberString(pick(row, ["latitude"])),
    longitude: toNumberString(pick(row, ["longitude"])),
  };
}

function validCountry(row: ReturnType<typeof normalizeCountry>) {
  return Boolean(row.id && row.name && row.iso2);
}

function validState(row: ReturnType<typeof normalizeState>) {
  return Boolean(row.id && row.name && row.country_id);
}

function validCity(row: ReturnType<typeof normalizeCity>) {
  return Boolean(row.id && row.name && row.country_id);
}

async function writeCsv(
  filePath: string,
  headers: Array<{ id: string; title: string }>,
  records: Record<string, string>[]
) {
  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: headers,
    alwaysQuote: true,
    encoding: "utf8",
  });

  await csvWriter.writeRecords(records);
}

async function generateCountries() {
  const rows = await readCsv(RAW_FILES.countries);
  const normalized = rows.map(normalizeCountry);
  const ready = normalized.filter(validCountry);

  await writeCsv(
    OUTPUT_FILES.countries,
    [
      { id: "id", title: "id" },
      { id: "name", title: "name" },
      { id: "iso3", title: "iso3" },
      { id: "iso2", title: "iso2" },
      { id: "numeric_code", title: "numeric_code" },
      { id: "phone_code", title: "phone_code" },
      { id: "capital", title: "capital" },
      { id: "currency", title: "currency" },
      { id: "currency_name", title: "currency_name" },
      { id: "currency_symbol", title: "currency_symbol" },
      { id: "tld", title: "tld" },
      { id: "native", title: "native" },
      { id: "region", title: "region" },
      { id: "subregion", title: "subregion" },
      { id: "latitude", title: "latitude" },
      { id: "longitude", title: "longitude" },
      { id: "emoji", title: "emoji" },
      { id: "emoji_u", title: "emoji_u" },
    ],
    ready
  );

  return {
    source: rows.length,
    ready: ready.length,
    skipped: rows.length - ready.length,
  };
}

async function generateStates() {
  const rows = await readCsv(RAW_FILES.states);
  const normalized = rows.map(normalizeState);
  const ready = normalized.filter(validState);

  await writeCsv(
    OUTPUT_FILES.states,
    [
      { id: "id", title: "id" },
      { id: "name", title: "name" },
      { id: "country_id", title: "country_id" },
      { id: "country_code", title: "country_code" },
      { id: "state_code", title: "state_code" },
      { id: "type", title: "type" },
      { id: "latitude", title: "latitude" },
      { id: "longitude", title: "longitude" },
    ],
    ready
  );

  return {
    source: rows.length,
    ready: ready.length,
    skipped: rows.length - ready.length,
  };
}

async function generateCities() {
  const rows = await readCsv(RAW_FILES.cities);
  const normalized = rows.map(normalizeCity);
  const ready = normalized.filter(validCity);

  await writeCsv(
    OUTPUT_FILES.cities,
    [
      { id: "id", title: "id" },
      { id: "name", title: "name" },
      { id: "state_id", title: "state_id" },
      { id: "state_code", title: "state_code" },
      { id: "country_id", title: "country_id" },
      { id: "country_code", title: "country_code" },
      { id: "latitude", title: "latitude" },
      { id: "longitude", title: "longitude" },
    ],
    ready
  );

  return {
    source: rows.length,
    ready: ready.length,
    skipped: rows.length - ready.length,
  };
}

async function main() {
  console.log("ART-IST Global Location Generator");
  console.log("----------------------------------");

  ensureFolders();

  console.log("1/6 Downloading countries...");
  await downloadWithFallback(SOURCES.countries, RAW_FILES.countries);

  console.log("2/6 Downloading states...");
  await downloadWithFallback(SOURCES.states, RAW_FILES.states);

  console.log("3/6 Downloading cities...");
  await downloadWithFallback(SOURCES.cities, RAW_FILES.cities);

  console.log("4/6 Generating countries.csv...");
  const countriesResult = await generateCountries();

  console.log("5/6 Generating states.csv...");
  const statesResult = await generateStates();

  console.log("6/6 Generating cities.csv...");
  const citiesResult = await generateCities();

  console.log("");
  console.log("DONE");
  console.log("----------------------------------");
  console.log(`countries: ${countriesResult.ready}/${countriesResult.source} ready`);
  console.log(`states:    ${statesResult.ready}/${statesResult.source} ready`);
  console.log(`cities:    ${citiesResult.ready}/${citiesResult.source} ready`);
  console.log("");
  console.log("Files created:");
  console.log(`- ${OUTPUT_FILES.countries}`);
  console.log(`- ${OUTPUT_FILES.states}`);
  console.log(`- ${OUTPUT_FILES.cities}`);
}

main().catch((error) => {
  console.error("");
  console.error("FAILED");
  console.error("----------------------------------");

  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }

  process.exit(1);
});
