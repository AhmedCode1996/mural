import { styled } from "styled-components";

import { MaxWrapper, InformationItem } from "./../../components";

import { INFORMATION } from "../../data/information";

const InformationSection = () => {
  return (
    <Wrapper>
      <MaxWrapper>
        {INFORMATION.map((item) => (
          <InformationItem key={item.id} {...item} />
        ))}
      </MaxWrapper>
    </Wrapper>
  );
};

export default InformationSection;

const Wrapper = styled.div`

padding: 12rem 2rem 2rem 2rem;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;
