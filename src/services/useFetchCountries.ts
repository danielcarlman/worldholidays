import { useQuery } from "react-query";
import { getAPIKey } from "./getAPIKey";

type Country = {
  country_name: String;
  "iso-3166": string;
  supported_languages: number;
  total_holidays: number;
  uuid: string;
};

type CountriesResponse = {
  meta: { error_detail: string };
  response: {
    countries: Country[];
  };
};

const useFetchCountries = (options?: object) => {
  const API_KEY = getAPIKey();
  const { data, isLoading, error } = useQuery(
    ["countries"],
    async (): Promise<CountriesResponse> => {
      const response = await fetch(
        `https://calendarific.com/api/v2/countries?&api_key=${API_KEY}`
      );
      const data = await response.json();
      if (data.meta?.error_detail) {
        throw new Error(data.meta.error_detail);
      }
      return data;
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
      select: (data) => data.response.countries,
      ...options,
    }
  );
  return { data, isLoading, error };
};

export default useFetchCountries;
