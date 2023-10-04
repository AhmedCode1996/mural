import { styled } from "styled-components";
import { NavItems, Logo, AccountInfo } from "./../../components";

const HeaderNav = () => {
  return (
    <Wrapper>
      <Logo />
      <NavItems />
      <AccountInfo />
    </Wrapper>
  );
};

export default HeaderNav;

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
