import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { dataJS } from "../data/dataJS";
import Button from "./Button";
// import media from "../styles/MediaQuery";
interface CompanyBox {
  logoBg: string;
}

const media = {
  tablet: "@media (max-width: 769px)",
  mobile: "@media (max-width: 560px)",
};

const StyledDetailbar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 70%);
  z-index: 9999;
  color: var(--font-color);
  width: 73rem;
  height: 14rem;
  background-color: var(--bg-color-2);
  border: 1px solid red;

  ${media.tablet} {
    width: 68.9rem;
    transform: translate(-50%, 65%);
  }

  ${media.mobile} {
    flex-direction: column;

    width: 32.7rem;
    height: auto;
    transform: translate(-50%, 90%);
  }
`;

const CompanyBox = styled.div<CompanyBox>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 14rem;
  height: 14rem;
  padding: 3rem;
  border: 1px solid red;

  color: var(--white);

  ${({ logoBg }) => css`
    background-color: ${logoBg};
  `}

  ${media.mobile} {
    position: absolute;
    bottom: 50;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5rem;
    height: 5rem;
    border-radius: 15px;
    padding: 1rem;
    z-index: 9999;
  }

  img {
    width: 100%;
  }
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4rem;
  border: 1px solid red;
  background-color: yellow;

  ${media.mobile} {
    flex-direction: column;
    justify-content: center;
    width: 20rem;
    gap: 3rem;
  }
`;

const CompanyText = styled.div`
  border: 1px solid red;

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

  ${media.mobile} {
    /* flex-direction: row; */
    align-items: center;
    justify-content: center;
  }
`;

function DetailBar() {
  const { id } = useParams<{ id: string }>();

  const job = dataJS.filter((job) => job.id === Number(id));
  console.log(job[0].logo);

  return (
    <StyledDetailbar>
      <CompanyBox logoBg={job[0].logoBackground}>
        {/* <h1>{job[0].company.toLocaleLowerCase()}</h1> */}
        <img src={`.${job[0].logo}`} alt={`logo of ${job[0].company}`} />
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
