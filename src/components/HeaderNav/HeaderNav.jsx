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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 2rem;

  @media (max-width: ${920 / 16}rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${720 / 16}rem) {
    grid-template-columns: 1fr;
  }

  & > *:nth-child(2) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
