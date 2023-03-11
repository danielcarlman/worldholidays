import useFetchHolidays from "../api/useFetchHolidays";

const HolidayList = () => {
  const { holidayData, isLoading } = useFetchHolidays();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {holidayData?.response.holidays.map((holiday: any) => (
        <div key={holiday.id}>{holiday.name}</div>
      ))}
    </div>
  );
};

export default HolidayList;
