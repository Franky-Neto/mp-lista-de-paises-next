import * as CountriesApi from "@/app/services/countriesApi";
import CountryCard from "@/components/country-card";


export default async function Home() {
  
  const countries = await CountriesApi.getAllCountries();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16">
      {countries.map((country) => (
      <CountryCard 
        key={country.name.common}
        name={country.name.common} 
        ptName={country.translations.por.common}
        flag={country.flags.svg}
        flagAlt={country.flags.alt}
        cca3={country.cca3}
      />
      ))}
    </section>
  );
}
