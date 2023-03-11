import styled from "styled-components";
import useFetchHolidays from "../hooks/useFetchHolidays";

const HolidayList = () => {
  const { holidayData, isLoading } = useFetchHolidays();

  if (isLoading) return <div>Loading...</div>;

  if (holidayData) console.log(holidayData.response.holidays);

  return (
    <div>
      {holidayData?.response.holidays.map((holiday: any) => (
        <List key={holiday.id}>
          <ListItem>{holiday.name}</ListItem>
          <ListItem>{holiday.description}</ListItem>
          <ListItem>{holiday.date.iso}</ListItem>
          <ListItem>{holiday.primary_type}</ListItem>
          <br />
        </List>
      ))}
    </div>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0.5rem;
`;

const ListItem = styled.li`
  background: #fff;
  :nth-child(even) {
    background: #ccc;
  }
`;

export default HolidayList;
