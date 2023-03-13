import { useQuery } from "react-query";

const useFetchHolidays = (options?: any) => {
  const { data, isLoading, error } = useQuery(
    "holidays",
    async () => {
      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=aa552e0b1463288068461e47805777cc6a80a1a0&country=BR&year=${new Date().getFullYear()}`
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      return data;
    },
    {
      staleTime: 1000 * 60 * 60 * 24,
      select: (data) => data.response.holidays,
      ...options,
    }
  );
  return { data, isLoading, error };
};

export default useFetchHolidays;
