import { styled } from "styled-components";
import { FooterList, MaxWrapper } from "./../../components";
import { FOOTER } from "../../data/footer";
import { IMAGES } from "../../assets";

const Footer = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        {FOOTER.map((item) => (
          <FooterList key={item.id} {...item} />
        ))}
        <FooterImage>
          <img src={IMAGES.footerImage} />
        </FooterImage>
      </MaxWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
    justify-content: center;
    gap: 1.5rem;
  }
`;

const FooterImage = styled.div`
  margin-top: 3rem;
  grid-column: 1 / -1;
`;
