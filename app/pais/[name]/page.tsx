import * as CountriesApi from "@/app/services/countriesApi";


export default async function CountryPage (props: { params: Promise<{ name: string }> }) {
    const params = await props.params;
    const selectedCountry = await CountriesApi.getCountryByName(params.name);
    return <h1>{selectedCountry.translations.por.common}</h1>;
}
