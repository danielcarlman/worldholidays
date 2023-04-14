import styled from "styled-components";
import useFetchHolidays from "../services/useFetchHolidays";

type HolidayTableProps = {
  holidayType: string;
  countryCode: string;
};

const HolidayTable = ({ holidayType, countryCode }: HolidayTableProps) => {
  const {
    data: holidays,
    isLoading,
    error,
  }: any = useFetchHolidays("national", countryCode);

  if (isLoading) return <div>Loading...</div>;
  console.log("Error", error);
  if (error) return <div>{error.message}</div>;

  if (holidays) console.log(holidays);

  return (
    <TableContainer>
      {holidays?.map((holiday: any) => (
        <Table key={holiday.urlid}>
          <tbody>
            <tr>
              <TableItem>{holiday.name}</TableItem>
              <TableItem>{holiday.description}</TableItem>
              <TableItem>{holiday.date.iso}</TableItem>
              <TableItem>{holiday.primary_type}</TableItem>
            </tr>
          </tbody>
        </Table>
      ))}
    </TableContainer>
  );
};

const TableContainer = styled.div`
  width: auto;
`;

const Table = styled.table`
  list-style: none;
  padding: 0.5rem;
`;

const TableItem = styled.td`
  background: #fff;
  :nth-child(even) {
    background: #ccc;
  }
`;

export default HolidayTable;
