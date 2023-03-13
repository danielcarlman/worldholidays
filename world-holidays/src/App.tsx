import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HolidayTable from "./components/HolidayTable";
import SearchBar from "./components/SearchBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Container>
        <Title>Holidays across the world</Title>
        <SearchBar />
        <HolidayTable />
      </Container>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  padding: 2rem;
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
