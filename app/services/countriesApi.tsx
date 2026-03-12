import type { Country } from "@/app/types/country";

const BASE_URL = "https://restcountries.com/v3.1";

export async function getAllCountries(): Promise<Country[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/all?fields=name,flags,translations`,
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
      `${BASE_URL}/name/${encodeURIComponent(name)}?fields=name,flags,capital,population,region,borders,languages,continents,translations`,
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
