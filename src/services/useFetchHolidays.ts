import { useQuery } from "react-query";
import { getAPIKey } from "./getAPIKey";

const useFetchHolidays = (
  holidayType: string,
  countryCode: string,
  options?: object
) => {
  const API_KEY = getAPIKey();
  const queryUrl = holidayType ? `&type=${holidayType}` : "";
  const { data, isLoading, error } = useQuery(
    ["holidays", countryCode, holidayType],
    async () => {
      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}${queryUrl}&country=${countryCode}&year=${new Date().getFullYear()}`
      );
      const data = await response.json();
      console.log("data", data);
      if (data.meta?.error_detail) {
        if (queryUrl) {
          throw new Error(data.meta.error_detail);
        } else {
          throw new Error("Welcome to World Holidays!");
        }
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
