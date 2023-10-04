import { styled } from "styled-components";
import { MaxWrapper, CompaniesList } from "./../../components";
import { COLORS, TYPOGRAPHY } from "../../constants";

const TrustedCompanies = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        <Title>Trusted by the worlds most security conscious enterprises</Title>
        <Button>Discover why</Button>
        <CompaniesList />
      </MaxWrapper>
    </Wrapper>
  );
};

export default TrustedCompanies;

const Wrapper = styled.div`
  background-color: ${COLORS.seconday};
  padding: 4rem;
  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;

    & > div:last-child {
      grid-column: 1 / -1;
    }
  }
`;

const Title = styled.h2`
  grid-column: 1 / 3;
  max-width: 25ch;
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
`;
