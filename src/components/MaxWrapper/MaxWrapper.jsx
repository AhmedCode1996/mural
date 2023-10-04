/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const MaxWrapper = ({children}) => {
  return <Wrapper>
    {children}
  </Wrapper>;
};

export default MaxWrapper;

const Wrapper = styled.div`
  max-width: ${1180 / 16}rem;
  margin-inline: auto;
`;
