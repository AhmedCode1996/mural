import { styled } from "styled-components";
import { HeaderNav, MaxWrapper } from "./../../components";
import { FONT_FAMILY } from "../../constants";

const Header = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        <HeaderNav />
      </MaxWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 1.5rem;
  font-family: ${FONT_FAMILY.inter};
`;
