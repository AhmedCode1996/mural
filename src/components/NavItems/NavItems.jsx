/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../constants";

const listItems = [
  "product",
  "resources",
  "enterprise",
  "pricing",
  "contact sales",
];
const NavItems = () => {
  return (
    <Wrapper>
      {listItems.map((item, id) => (
        <li key={id}>
          <a to="/">{item}</a>
        </li>
      ))}
    </Wrapper>
  );
};

export default NavItems;

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: auto;

  li {
    font-size: ${TYPOGRAPHY.base};
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
    position: relative;
    white-space: nowrap;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${COLORS.neutral.black};
      border-radius: 2px;
      transition: width 0.3s;
    }

    &:hover::before {
      width: 100%;
    }
  }

  a {
  }
`;
