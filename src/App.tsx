import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HolidayTable from "./components/HolidayTable";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import useFetchCountries from "./services/useFetchCountries";
import PopOver from "./components/PopOver";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    localStorage.setItem("API_KEY", import.meta.env.VITE_API_KEY);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
    </QueryClientProvider>
  );
}

function Home() {
  const countriesQuery = useFetchCountries();
  const [countryCode, setcountryCode] = useState("");
  const [queryError, setQueryError] = useState(false);

  const handleOnChange = (searchValue: string) => {
    const standardizedSearchValue = searchValue
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const ISOCode = countriesQuery.data?.find(
      (country) => country.country_name === standardizedSearchValue
    );
    if (ISOCode) {
      if (queryError) setQueryError(false);
      console.log("Code", ISOCode);
      setcountryCode(ISOCode["iso-3166"]);
    } else {
      setQueryError(true);
    }
  };
  return (
    <Container>
      <Title>Holidays across the world</Title>
      <Bla>
        <SearchBar onChange={handleOnChange} />
        <PopOver />
      </Bla>
      <HolidayTable
        countryCode={countryCode}
        holidayType="national"
        queryError={queryError}
      />
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

const Bla = styled.div`
  display: flex;
  justify-direction: center;
  align-items: center;
  gap: 1rem;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Arial, sans-serif;    
  } 
`;

export default App;
