const BASE_URL = "https://restcountries.com/v3.1";

export async function getAllCountries() {
    try {
    const response = await fetch(`${BASE_URL}/all?fields=name,flags`);

    if (!response.ok) {
    throw new Error(`Erro ao buscar países: ${response.status}`)
    }

    const data = await response.json();
    return data;
    } catch (error) {
        console.error('Erro: ', error)
        throw error
    }
    
}

// getAllCountries().then(console.log);

export async function getCountryByName (name: string) {
    try {
        const response = await fetch (
            `${BASE_URL}/name/${encodeURIComponent(name)}?fields=name,flags,capital,population,region,borders,languages,continents`)
        
        if (!response.ok) {
            throw new Error (`Erro ao buscar país: ${response.status}`)
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Erro: ', error)
        throw error
    }
}

// getCountryByName('ARG').then(console.log)
