export type Country = {
  name: {
    common: string;
  };

  translations: {
    por: {
      common: string;
    }};
    
  flags: {
      svg: string;
      alt: string;
    };
  
  population: number;
  
  capital: string[];

  region: string;

  continents: string[];

  borders: string[];

  languages?: Record<string, string>
};