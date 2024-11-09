import { useParams } from "react-router-dom";
import styled from "styled-components";
import { dataJS } from "../data/dataJS";
import Button from "./Button";

const StyledDetailbar = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 70%);
  z-index: 9999;
  color: var(--font-color);
  min-width: 73rem;
  height: 14rem;
  background-color: var(--bg-color-2);

  @media (max-width: 769px) {
    width: 68.9rem;
    transform: translate(-50%, 65%);
  }
`;

const CompanyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  /* min-width: 14rem; */
  height: 14rem;
  padding: 3rem;
  background-color: #e99210;
  color: var(--white);
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4rem;
`;

const CompanyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 2.4rem;
    font-weight: 700;
  }

  a {
    font-size: 1.6rem;
    font-weight: 400;
    color: #6e8098;
  }
  margin-right: 2rem;
`;

function DetailBar() {
  const { id } = useParams<{ id: string }>();

  const job = dataJS.filter((job) => job.id === Number(id));
  console.log(job);

  return (
    <StyledDetailbar>
      <CompanyBox>
        <h1>{job[0].company.toLocaleLowerCase()}</h1>
      </CompanyBox>
      <Company>
        <CompanyText>
          <p>{job[0].company}</p>
          <a href={`${job[0].website}`}>{job[0].company}.com</a>
        </CompanyText>

        <Button ButtonType="btn2">Company Site</Button>
      </Company>
    </StyledDetailbar>
  );
}

export default DetailBar;
