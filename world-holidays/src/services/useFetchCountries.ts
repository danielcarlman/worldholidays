import { useQuery } from "react-query";

const useFetchCountries = (options?: any) => {
  const { data, isLoading, error } = useQuery(
    ["countries"],
    async () => {
      const response = await fetch(
        `https://calendarific.com/api/v2/countries?&api_key=aa552e0b1463288068461e47805777cc6a80a1a0`
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
