import { styled } from "styled-components";
import { COLORS, FONT_FAMILY, TYPOGRAPHY } from "../../constants";

const HeroTitle = () => {
  return (
    <Wrapper>
      <Title>Make work make sense</Title>
      <Description>
        Teamwork feels like less work with <em>Mural</em>, the secure, flexible,
        visual work platform purpose-built for collaboration{" "}
      </Description>
      <Button>Start a white board</Button>
    </Wrapper>
  );
};

export default HeroTitle;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: ${FONT_FAMILY.inter};
  text-align: center;
  margin-bottom: 7rem;
`;
const Title = styled.h2`
  font-size: ${TYPOGRAPHY.xl4};
  max-width: 10ch;
  line-height: 1;
`;
const Description = styled.p`
  max-width: 60ch;
`;
const Button = styled.button`
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
