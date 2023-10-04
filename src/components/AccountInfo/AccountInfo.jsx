import { styled } from "styled-components";
import { IMAGES } from "../../assets";
import { COLORS, TYPOGRAPHY } from "../../constants";

const AccountInfo = () => {
  return (
    <Wrapper>
      <UserIcon>
        <img src={IMAGES.user}  alt="user icon"/>
      </UserIcon>
      <SearchIcon>
        <img src={IMAGES.search} alt="search icon" />
      </SearchIcon>
      <Button>Sign up free</Button>
    </Wrapper>
  );
};

export default AccountInfo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const BaseIcon = styled.div`
  width: 22px;
  cursor: pointer;
`;

const SearchIcon = styled(BaseIcon)``;

const UserIcon = styled(BaseIcon)``;

const Button = styled.button`
  font-size: ${TYPOGRAPHY.lg};
  background-color: rgba(0, 0, 0, 0.8);
  color: ${COLORS.neutral.white};
  padding: 8px 24px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  font-weight: 300;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0 95% 0 0;
    background-color: ${COLORS.neutral.black};
    transition: all 0.4s ease-in-out;
  }

  &:hover::before {
    inset: 0 0 0 0;
    transition: all 0.4s ease-in-out;
  }
`;
