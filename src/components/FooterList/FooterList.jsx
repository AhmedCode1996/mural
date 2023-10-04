/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { TYPOGRAPHY } from "../../constants";

const FooterList = ({ title, items }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <List>
        {items.map((item, index) => (
          <li key={index}>
            <a>{item}</a>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default FooterList;

const Wrapper = styled.div``;
const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: ${TYPOGRAPHY.lg};
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & li {
    text-transform: capitalize;
    font-size: ${TYPOGRAPHY.base};
    cursor: pointer;
  }
`;
