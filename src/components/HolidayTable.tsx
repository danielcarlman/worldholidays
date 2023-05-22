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
  }: any = useFetchHolidays(holidayType, countryCode);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <TableContainer>
      {holidays?.map((holiday: any, id: number) => (
        <Table key={holiday.urlid + id}>
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
