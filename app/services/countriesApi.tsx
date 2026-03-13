import type { Country } from "@/app/types/country";
import type { BorderCountry } from "../types/borderCountry";

const BASE_URL = "https://restcountries.com/v3.1";

export async function getAllCountries(): Promise<Country[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/all?fields=name,flags,translations,cca3`,
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar países: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro: ", error);
    throw error;
  }
}

// getAllCountries().then(console.log);

export async function getCountryByName(name: string): Promise<Country> {
  try {
    const response = await fetch(
      `${BASE_URL}/name/${name}?fields=name,flags,capital,population,region,borders,languages,continents,translations,cca3`,
    );

    if (!response.ok) {
      throw new Error(`Erro ao buscar país: ${response.status}`);
    }

    const data = (await response.json())[0];
    return data;
  } catch (error) {
    console.error("Erro: ", error);
    throw error;
  }
}

// getCountryByName('ARG').then(console.log)

export async function getCountryBordersByName(name: string): Promise<BorderCountry[]> {
  try {
    const countryResponse = await fetch(
      `${BASE_URL}/name/${encodeURIComponent(name)}?fields=borders,cca3`,
    );

    if (!countryResponse.ok) {
      throw new Error(`Erro ao buscar país: ${countryResponse.status}`);
    }

    const [country]: Pick<Country, "borders">[] = await countryResponse.json();

    if (!country.borders?.length) {
      return [];
    }

    const bordersResponse = await fetch(
      `${BASE_URL}/alpha?codes=${country.borders.join(",")}&fields=name,translations,flags,cca3`,
    );

    if (!bordersResponse.ok) {
      throw new Error(`Erro ao buscar fronteiras: ${bordersResponse.status}`);
    }

    const borderCountries: Pick<Country, "name" | "translations" | "flags">[] =
      await bordersResponse.json();

    return borderCountries.map((borderCountry) => {
      const ptName = borderCountry.translations?.por?.common ?? borderCountry.name.common;

      return {
        name: borderCountry.name.common,
        ptName,
        flag: borderCountry.flags.svg,
        flagAlt: borderCountry.flags.alt,
      };
    });
  } catch (error) {
    console.error("Erro: ", error);
    throw error;
  }
}

// getCountryBordersByName('ARG').then(console.log)