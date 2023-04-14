import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HolidayTable from "./components/HolidayTable";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import useFetchCountries from "./services/useFetchCountries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
    </QueryClientProvider>
  );
}

function Home() {
  const countriesQuery = useFetchCountries();
  console.log("countriesQuery", countriesQuery);
  const [countryCode, setcountryCode] = useState("BR");
  const handleOnChange = (searchValue: string) => {
    setcountryCode(searchValue);
  };
  return (
    <Container>
      <Title>Holidays across the world</Title>
      <SearchBar value={countryCode} onChange={handleOnChange} />
      <HolidayTable countryCode={countryCode} holidayType="national" />
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem;
  height: 100dvh;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  } 
`;

export default App;
