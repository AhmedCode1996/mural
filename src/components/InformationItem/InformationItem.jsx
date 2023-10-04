/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const InformationItem = ({ image, title, description }) => {
  return (
    <Wrapper>
      <Image>
        <img src={image} alt="title" />
      </Image>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default InformationItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;
const Image = styled.div`
  width: 48px;
`;
const Title = styled.h2``;
const Description = styled.p``;
