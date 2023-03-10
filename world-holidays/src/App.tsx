import styled from "styled-components";

function App() {
  return (
    <Container>
      <Title>World Holidays</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

export default App;
