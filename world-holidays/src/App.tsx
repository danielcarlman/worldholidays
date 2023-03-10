import styled from "styled-components";

function App() {
  return (
    <div>
      <Container>World Holidays</Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export default App;
