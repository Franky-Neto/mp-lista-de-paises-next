import * as CountriesApi from "@/app/services/countriesApi";
import Link from "next/link";
import Image from "next/image";
import CountryCard from "@/components/country-card";

export default async function CountryPage(props: {
  params: Promise<{ cca3: string }>;
}) {
  const params = await props.params;
  const selectedCountry = await CountriesApi.getCountryByName(params.cca3);
  const borders = await CountriesApi.getCountryBordersByName(params.cca3);

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 mt-12 mb-12">
        {selectedCountry.translations.por.common}
      </h1>
      <Link className="flex items-center py-2" href="/">
        <Image
          src="/arrowBack.svg"
          alt="Seta de voltar"
          width={24}
          height={24}
        />
        Voltar
      </Link>
      <article className="flex  justify-between min-w-full p-10 bg-white rounded-xl">
        <section>
          {selectedCountry.capital.length > 0 && (
            <h2 className="text-xl text-gray-800">
              <b>🏛️ Capital: </b> {selectedCountry.capital}
            </h2>
          )}
          <h2 className="text-xl text-gray-800">
            <b>🗺️ Continente: </b> {selectedCountry.continents}
          </h2>
          <h2 className="text-xl text-gray-800">
            <b>🧑‍🧑‍🧒‍🧒 População: </b> {formatter.format(selectedCountry.population)}
          </h2>
          {Object.keys(selectedCountry.languages ?? {}).length > 0 && (
            <h2 className="text-xl text-gray-800">
              <b>🗣️ Línguas Faladas: </b> <br />
              {Object.values(selectedCountry.languages ?? {}).map(
                (language) => (
                  <span
                    key={language}
                    className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-full">
                    {language}
                  </span>
                ),
              )}
            </h2>
          )}
        </section>
        <div className="relative h-auto w-96 shadow-md">
          <Image
            src={selectedCountry.flags.svg}
            alt={selectedCountry.flags.alt}
            fill
            className="object-cover"
          />
        </div>
      </article>
      <section>
        <h3 className="mt-12  text-2xl font-semibold text-gray-800">
          Países que fazem fronteira
        </h3>
        <div className="grid grid-cols-4 gap-3 w-full mt-3 mb-6">
          {borders.map((border) => (
            <CountryCard key={border.name} {...border} />
          ))}
        </div>
      </section>
    </section>
  );
}
