import { useQuery } from "react-query";

const useFetchHolidays = (
  holidayType: string,
  countryCode: string,
  options?: object
) => {
  const { data, isLoading, error } = useQuery(
    ["holidays", countryCode],
    async () => {
      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=aa552e0b1463288068461e47805777cc6a80a1a0&type=${holidayType}&country=${countryCode}&year=${new Date().getFullYear()}`
      );
      const data = await response.json();
      console.log("data", data);
      if (data.meta?.error_detail) {
        throw new Error(data.meta.error_detail);
      }
      return data;
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
      select: (data) => data.response.holidays,
      ...options,
    }
  );
  return { data, isLoading, error };
};

export default useFetchHolidays;
