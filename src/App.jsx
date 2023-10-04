import { styled } from "styled-components";

import { Header, MainContent, Footer } from "./components";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <MainContent />
      <Footer />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div``;
