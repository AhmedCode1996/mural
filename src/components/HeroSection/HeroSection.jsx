import { styled } from "styled-components";

import { HeroTitle, HeroImage, MaxWrapper } from "./../../components";
import { COLORS } from "../../constants";
const HeroSection = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        <HeroTitle />
        <HeroImage />
      </MaxWrapper>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  background-color: ${COLORS.primary};
  padding: 4rem 2rem;
`
