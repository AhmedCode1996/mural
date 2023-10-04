import { styled } from "styled-components";
import { COMPANIES } from "../../assets";

const CompaniesList = () => {
  return (
    <Wrapper>
      {COMPANIES.map((company) => (
        <Company key={company.id}>
          <img src={company.image} alt={company.title} />
        </Company>
      ))}
    </Wrapper>
  );
};

export default CompaniesList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 300px));

  > *:nth-child(-n + 4) {
    border-bottom-width: 0;
  }

  > *:not(:nth-child(4)):not(:last-child) {
    border-right-width: 0;
  }
`;

const Company = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
