import { styled } from "styled-components";
import { MaxWrapper } from "./../../components";
import { COLORS, TYPOGRAPHY } from "../../constants";

const Advantages = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        <Title>Just what the enterprise ordered</Title>
        <ItemsContainer>
          <Item>
            <Header>
              <h3>Microsoft + Mural = magic</h3>
            </Header>
            <Description>
              <DescriptionTitle>
                <em>Mural</em> takes the Microsoft ecosystem to another level
              </DescriptionTitle>
              <DescriptionLink>Explore Microsoft partnership</DescriptionLink>
            </Description>
          </Item>
          <Item>
            <Header>
              <h3>How SAP achieved a 400+%ROL</h3>
            </Header>
            <Description>
              <DescriptionTitle>
                getting started with <em>Mural</em>, flexibility and
                transparency increased.
              </DescriptionTitle>
              <DescriptionLink>Get the study</DescriptionLink>
            </Description>
          </Item>
          <Item>
            <Header>
              <h3>HPE saves 1,400+ hours per year</h3>
            </Header>
            <Description>
              <DescriptionTitle>
                Accelerating customer innovation culture with <em>Mural</em> +
                LUMA System
              </DescriptionTitle>
              <DescriptionLink>Read case study</DescriptionLink>
            </Description>
          </Item>
        </ItemsContainer>
      </MaxWrapper>
    </Wrapper>
  );
};

export default Advantages;

const Wrapper = styled.div`
  --border-width: 1rem;
  padding: 4rem 1rem;
  background-color: #ededdb;
`;
const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  & div:nth-of-type(1) div:first-child {
    background-color: ${COLORS.tertiary};
  }
  & div:nth-of-type(2) div:first-child {
    background-color: ${COLORS.secondary};
  }
  & div:nth-of-type(3) div:first-child {
    background-color: ${COLORS.primary};
  }
`;
const Item = styled.div`
  flex: 1;
  flex-grow: 1;
`;
const Title = styled.h2`
  font-size: ${TYPOGRAPHY.xl3};
  font-weight: 600;
  margin-bottom: 2rem;
`;
const Header = styled.div`
  padding: 2rem;
  border-radius: var(--border-width) var(--border-width) 0 0;

  & h3 {
    font-size: ${TYPOGRAPHY.xl2};
    font-weight: 500;
    max-width: 15ch;
  }
`;
const Description = styled.div`
  background-color: ${COLORS.neutral.black};
  color: ${COLORS.neutral.white};
  padding: 2rem;
  border-radius: 0 0 var(--border-width) var(--border-width);
`;
const DescriptionTitle = styled.p`
  font-size: ${TYPOGRAPHY.lg};
  margin-bottom: 1.5rem;
`;
const DescriptionLink = styled.a`
  display: block;
  position: relative;
  width: fit-content;
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  position: relative;
  font-weight: 300;

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 3px;
    width: 0%;
    background-color: #ededdb;
    transition: width 0.3s;
  }
`;
