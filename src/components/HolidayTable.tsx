import styled from "styled-components";
import useFetchHolidays from "../services/useFetchHolidays";

type HolidayTableProps = {
  holidayType: string;
  countryCode: string;
  queryError: boolean;
};

type ColorType = {
  [key: string]: string;
  ["National holiday"]: string;
  ["Observance"]: string;
  ["Local holiday"]: string;
  ["Common local holiday"]: string;
  ["Religious"]: string;
};

type PillProps = {
  backgroundColor: string;
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
  if (!holidays?.length) return <div>Welcome to World Holidays!</div>;
  if (queryError) return <div>No country was found. Try again!</div>;

  const colorType: ColorType = {
    ["National holiday"]: "#bfdbfc",
    ["Observance"]: "#ffd9d9",
    ["Local holiday"]: "#d9d9d9",
    ["Common local holiday"]: "#d9d9d9",
    ["Religious"]: "#ffcc99",
  };

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
          {holidays?.map((holiday: any, id: number) => {
            console.log(holiday);
            return (
              <tr key={holiday.urlid + id}>
                <td>{holiday.name}</td>
                <td>{getShortDate(holiday.date.iso)}</td>
                <td>{holiday.description}</td>
                <td>
                  <Pill backgroundColor={colorType[holiday.type[0]]}>
                    {holiday.primary_type}
                  </Pill>
                </td>
              </tr>
            );
          })}
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
    background-color: #f9fbfc;
    text-align: left;
    text-transform: uppercase;
    font-weight: 400;
  }
  // DATE COLUMN
  th:nth-child(2) {
    width: 80px;
  }
  // TYPE COLUMN
  th:nth-child(4) {
    width: 200px;
  }
  tr:nth-child(even) {
    background: #f9fbfc;
  }
  td {
    padding: 6px;
  }
`;

const Pill = styled.div<PillProps>`
  background-color: ${(props) => {
    return props.backgroundColor || "#d9d9d9";
  }};
  width: fit-content;
  padding: 2px 6px;
  border-radius: 5px;
`;

export default HolidayTable;
