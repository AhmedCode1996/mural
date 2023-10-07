/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { MaxWrapper } from "./../../components";

const GraphGrid = ({ children }) => {
  return (
    <Wrapper>
      <MaxWrapper>{children}</MaxWrapper>
    </Wrapper>
  );
};

export default GraphGrid;

const Wrapper = styled.div`
  padding: 4rem 1rem;

  & > div {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3rem;

    & > *:first-child {
      grid-column: 1 / -1;
    }

    @media (max-width: ${730 / 16}rem) {
      display: block;

      & > * + * {
        margin-top: 2rem;
      }
    }
  }
`;
