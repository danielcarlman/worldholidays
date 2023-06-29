import styled from "styled-components";
import useFetchHolidays from "../services/useFetchHolidays";

type HolidayTableProps = {
  holidayType: string;
  countryCode: string;
  queryError: boolean;
};

const getShortDate = (date: Date) => {
  return new Date(date).toLocaleDateString("us-EN", {
    month: "short",
    day: "numeric",
  });
};

const HolidayTable = ({
  holidayType,
  countryCode,
  queryError,
}: HolidayTableProps) => {
  const {
    data: holidays,
    isLoading,
    error,
  }: any = useFetchHolidays(holidayType, countryCode);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!holidays.length) return <div>Welcome to World Holidays!</div>;
  if (queryError) return <div>No country was found. Try again!</div>;

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {holidays?.map((holiday: any, id: number) => (
            <tr key={holiday.urlid + id}>
              <td>{holiday.name}</td>
              <td>{getShortDate(holiday.date.iso)}</td>
              <td>{holiday.description}</td>
              <td>{holiday.primary_type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  width: auto;
  border-radius: 10px;
  border: 1px solid #dedfdf;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead > tr {
    border-bottom: 1px solid #dedfdf;
  }
  th {
    padding: 10px;
    background-color: #ddd;
    text-align: left;
    text-transform: uppercase;
    font-weight: 400;
  }
  th:nth-child(2) {
    width: 50px;
  }
  tr:nth-child(even) {
    background: #ddd;
  }
`;

export default HolidayTable;
