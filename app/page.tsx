import * as CountriesApi from "@/app/services/countriesApi"


export default async function Home() {
  const countries = await CountriesApi.getAllCountries();
  console.log(countries)

  return (
    <section className="flex w-full container">
      {countries.map((country) => (<h1 key={country.name.common}>{country.name.common}</h1>))}
    </section>
  );
}
