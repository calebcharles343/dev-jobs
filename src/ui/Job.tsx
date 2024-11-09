import styled, { css } from "styled-components";
import { DataType } from "../Interfaces";
import Heading from "./Heading";
import media from "../styles/MediaQuery";

interface Job {
  job: DataType;
}
interface Icon {
  logoBg: string;
}

const StyledJob = styled.div`
  position: relative;
  width: 35rem;
  height: 22.8rem;
  background-color: var(--job-bg-color);
  margin-top: 2.5rem;
  padding: 0.1rem 3.2rem 3.2rem 3.2rem;

  ${media.tablet} {
    width: 32.9rem;
  }
`;

const Icon = styled.div<Icon>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;
  border-radius: 15px;

  left: 16%;
  transform: translate(-50%, -50%);
  z-index: 999;

  ${({ logoBg }) => css`
    background-color: ${logoBg};
  `}
`;

const JobTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4.9rem;
  min-height: 14.7rem;
  color: white;
  font-weight: 400;
  font-size: 1.6rem;
  gap: 0.5rem;

  p {
    color: var(--dark-grey);
  }

  /* h4 {
    color: var(--font-color);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.48rem;
  } */

  span {
    align-self: bottom;
    font-size: 1.4rem;
    line-height: 1.736rem;
    font-weight: 700;
    color: var(--violet);
  }

  div {
    margin-top: 1.8rem;
  }
`;

function Job({ job }: Job) {
  // console.log(job);

  return (
    <StyledJob>
      <Icon logoBg={job.logoBackground}>
        <img src={job.logo} alt={`logo of ${job.company}`} />
      </Icon>
      <JobTextContainer>
        <p>
          {job.postedAt} . {job.contract}
        </p>

        <Heading headingType="h3" color="--header-color">
          {job.position}
        </Heading>

        <p>{job.company}</p>

        <div>
          <span>{job.location}</span>
        </div>
      </JobTextContainer>
    </StyledJob>
  );
}

export default Job;
