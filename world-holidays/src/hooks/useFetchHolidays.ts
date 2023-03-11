import { useQuery } from "react-query";

const useFetchHolidays = () => {
  const {
    data: holidayData,
    isLoading,
    error,
  } = useQuery("holidays", async () => {
    const response = await fetch(
      "https://calendarific.com/api/v2/holidays?&api_key=aa552e0b1463288068461e47805777cc6a80a1a0&country=BR&year=2023"
    );
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    return data;
  });
  return { holidayData, isLoading, error };
};

export default useFetchHolidays;
