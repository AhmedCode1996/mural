import { styled } from "styled-components";

import {
  Advantages,
  Discover,
  HeroSection,
  InformationSection,
  ProjectGraph,
  ProjectTools,
  TrustedCompanies,
} from "./../../components";

const MainContent = () => {
  return (
    <Wrapper>
      <HeroSection />
      <InformationSection />
      <TrustedCompanies />
      <ProjectGraph />
      <Advantages />
      <ProjectTools />
      <Discover />
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.main`
  padding-top: 4rem;

`;
