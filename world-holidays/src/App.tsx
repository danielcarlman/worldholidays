import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Holidays across the world</Title>
        <SearchBar />
      </Container>
    </>
  );
}

const Container = styled.body`
  padding: 1rem;
  background-color: #f0f0f0;
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
  } 
`;

export default App;
