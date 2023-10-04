import { styled } from "styled-components";
import { HeaderNav, MaxWrapper } from "./../../components";
import { COLORS, FONT_FAMILY } from "../../constants";

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
  position: fixed;
  background-color: ${COLORS.neutral.white};
  width: 100%;
  padding: 1.5rem;
  font-family: ${FONT_FAMILY.inter};
  z-index: 100;
`;
