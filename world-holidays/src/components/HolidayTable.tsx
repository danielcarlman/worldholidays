import styled from "styled-components";
import useFetchHolidays from "../services/useFetchHolidays";

const HolidayTable = () => {
  const { data: holidays, isLoading } = useFetchHolidays();

  if (isLoading) return <div>Loading...</div>;

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
