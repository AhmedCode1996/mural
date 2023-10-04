import { styled } from "styled-components";
import { IMAGES } from "../../assets";

const Logo = () => {
  return (
    <Wrapper>
      <a href="/">
        <img src={IMAGES.logo} alt="mural icon logo" />
      </a>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  width: ${115 / 16}rem;
  cursor: pointer;
`;
