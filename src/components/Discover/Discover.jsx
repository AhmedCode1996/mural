import { styled } from "styled-components";
import { MaxWrapper } from "..";
import { COLORS, TYPOGRAPHY } from "../../constants";

const Discover = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        <Title>What if work actually worked?</Title>
        <Button>It can — discover how</Button>
      </MaxWrapper>
    </Wrapper>
  );
};

export default Discover;

const Wrapper = styled.div`
  min-height: 100dvh;
  padding: 5rem;
`;
const Title = styled.h2`
  max-width: 15ch;
  font-weight: 400;
  font-size: ${TYPOGRAPHY.xl4};
  line-height: 1;
  margin-bottom: 5rem;

  @media (max-width: ${420 / 16}rem) {
    font-size: ${TYPOGRAPHY.xl2};
  }
`;
const Button = styled.button`
  grid-column: 3 / -1;
  align-self: center;
  justify-self: end;
  font-size: ${TYPOGRAPHY.lg};
  background-color: ${COLORS.neutral.lightYellow};
  color: ${COLORS.neutral.black};
  padding: 8px 24px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  font-weight: 450;
  white-space: nowrap;
  padding-left: 4rem;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0 80% 0 0;
    border-radius: 0 6px 6px 0;
    background-color: ${COLORS.neutral.yellow};
    transition: all 0.4s ease-in-out;
  }
  
  &:hover::before {
    inset: 0 0 0 0;
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: ${420 / 16}rem) {
    font-size: ${TYPOGRAPHY.sm};
  }
`;
