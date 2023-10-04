import { styled } from "styled-components";
import { GraphGrid } from "./../../components";
import { IMAGES } from "../../assets";
import { COLORS, TYPOGRAPHY } from "../../constants";

const ProjectGraph = () => {
  return (
    <Wrapper>
      <GraphGrid>
        <GraphInformation>
          <Title>Start strong, end smarter</Title>
          <Description>
            Find your flow with templates designed for the ways we work best.
          </Description>
        </GraphInformation>
        <GraphList>
          <ListItems>
            <Item>
              <a>
                <h3>Generate ideas</h3>
                <p>Imagine what could be and how to make it real</p>
              </a>
            </Item>
            <Item>
              <a>Organize ideas</a>
            </Item>
            <Item>
              <a>Plan projects</a>
            </Item>
            <Item>
              <a>Understand audiances</a>
            </Item>
            <Item>
              <a>Recap & reflect</a>
            </Item>
          </ListItems>
        </GraphList>
        <GraphImage>
          <Image>
            <img src={IMAGES.projectGraphImage} alt="project graph image" />
          </Image>
          <Link>
            <h3>Try the brainstorm & idea prioritization template</h3>
          </Link>
        </GraphImage>
      </GraphGrid>
    </Wrapper>
  );
};

export default ProjectGraph;

const Wrapper = styled.div`
  background-color: ${COLORS.neutral.black};
  color: ${COLORS.neutral.white};
  font-size: ${TYPOGRAPHY.xl};
`;
const GraphInformation = styled.div``;
const Title = styled.h3`
  font-size: ${TYPOGRAPHY.xl3};
  margin-bottom: 0.5rem;
`;
const Description = styled.p`
  font-size: ${TYPOGRAPHY.lg};
  font-weight: 300;
`;
const GraphList = styled.nav``;
const ListItems = styled.ul`
  font-weight: 300;
  & > li:first-child {
    background-color: #ededdb;
    border-radius: 4px;
    color: ${COLORS.neutral.black};

    & h3 {
      font-weight: 400;
    }
    & p {
      max-width: 25ch;
      font-size: ${TYPOGRAPHY.lg};
    }
  }
`;
const Item = styled.li`
  padding: 1rem;
  cursor: pointer;

  &:not(:first-child) a {
    width: fit-content;
    display: block;
    position: relative;
    padding-block: 0.2rem;

    &:hover::after {
      width: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0%;
      background-color: #ededdb;
      transition: width 0.3s;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(237, 237, 219, 0.5);
  }
`;
const GraphImage = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  overflow: hidden;
  width: fit-content;
`;
const Image = styled.div``;
const Link = styled.a`
  background-color: ${COLORS.neutral.lightBlack};
  padding: 1rem;
  font-size: ${TYPOGRAPHY.base};
  
  & h3 {
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
  }
`;
