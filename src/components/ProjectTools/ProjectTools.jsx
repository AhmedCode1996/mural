import { styled } from "styled-components";
import { GraphGrid } from "./../../components";
import { COLORS, TYPOGRAPHY } from "../../constants";
import { IMAGES } from "../../assets";

const ProjectTools = () => {
  return (
    <Wrapper>
      <GraphGrid>
        <GraphInformation>
          <Title>Tools for every team</Title>
          <Description>
            <em>Mural</em> helps teams do more across the org.
          </Description>
        </GraphInformation>
        <GraphList>
          <ListItems>
            <Item>
              <a>engineering</a>
            </Item>
            <Item>
              <a>design</a>
            </Item>
            <Item>
              <a>product</a>
            </Item>
            <Item>
              <a>innovation</a>
            </Item>
            <Item>
              <a>consulting</a>
            </Item>
            <Item>
              <a>sales & partnerships</a>
            </Item>
          </ListItems>
        </GraphList>
        <ToolsDescription>
          <Icon>
            <img src={IMAGES.gitlabIcon} alt="gitlab icon" />
          </Icon>
          <Quote>
            <p>
              {`"`}Your take a UX department from being order-takers to being
              idea-makers — people who are bringing folks together to solve
              problems collaboratively — and <em>Mural</em> gave us a space
              where we could do that{`"`}
            </p>
            <cite>Christine Lennevile, Vice President of User Experience</cite>
          </Quote>
          <Actions>
            <Button>Read case study</Button>
            <Link>
              <h3>Use the async brainstorming template</h3>
            </Link>
          </Actions>
        </ToolsDescription>
      </GraphGrid>
    </Wrapper>
  );
};

export default ProjectTools;

const Wrapper = styled.div`
  background-color: ${COLORS.neutral.yellow};
  color: ${COLORS.neutral.black};
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
    background-color: ${COLORS.neutral.black};
    border-radius: 4px;
    color: ${COLORS.neutral.white};
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
      background-color: ${COLORS.neutral.black};
      transition: width 0.3s;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
`;
const ToolsDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 0.3rem;
  background-color: ${COLORS.neutral.white};
  padding: 3rem;
`;
const Icon = styled.div`
  width: 150px;
`;
const Quote = styled.blockquote`
  p {
    font-size: ${TYPOGRAPHY.lg};
    line-height: 1.4;
  }
  cite {
    color: #9d9d9d;
    font-size: ${TYPOGRAPHY.sm};
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Link = styled.a`
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
const Button = styled.button`
  grid-column: 3 / -1;
  align-self: center;
  justify-self: end;
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
