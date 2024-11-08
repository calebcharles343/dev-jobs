import { useParams } from "react-router-dom";
import { dataJS } from "../data/dataJS";
import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const StyledDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 12.8rem;
  margin-bottom: 5rem;
`;

const DetailContainter = styled.div`
  padding: 1.8rem 4.8rem;
  background-color: var(--bg-color-2);

  @media (max-width: 769px) {
    width: 68.9rem;
  }
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailTextHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  min-height: 14.7rem;
  color: white;
  font-weight: 400;
  font-size: 1.6rem;
  gap: 0.5rem;

  p {
    color: var(--dark-grey);
    margin-bottom: -0.5rem;
  }

  /* h4 {
    font-size: 2.8rem;
    line-height: 3.473rem;
    font-weight: 700;
    color: var(--font-color);
  } */
  span {
    font-size: 1.4rem;
    line-height: 1.736rem;
    font-weight: 700;
    color: var(--violet);
  }
`;

const DetailTextContainer = styled.div`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--dark-grey);

  h3 {
    margin-bottom: 4.8rem;
  }

  /* @media (max-width: 769px) {
    width: 68.9rem;
  } */
`;

const JobDescription = styled.div`
  margin-bottom: 4rem;
`;

const JobRequirement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    list-style: none; /* Removes default bullet points */
  }

  li {
    display: flex;
    /* align-items: center; */
  }

  li::before {
    content: "•";
    font-weight: 700;
    margin-right: 1.5rem;
  }
`;

const JobRole = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;

  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    list-style: none;
    counter-reset: list-counter;
  }

  li {
    display: flex;
    counter-increment: list-counter;
  }

  li::before {
    content: counter(list-counter) ".";
    font-weight: bold;
    color: var(--violet);
    margin-right: 0.5rem;
    min-width: 2rem;
  }
`;

const Detailfooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 9.6rem;
  background-color: var(--bg-color-2);
`;

const DetailfooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 73rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    color: var(--dark-grey);
    font-size: 1.6rem;
    line-height: 1.984rem;
  }

  @media (max-width: 769px) {
    width: 68.9rem;
  }
`;

function Detail() {
  const { id } = useParams<{ id: string }>();

  const job = dataJS.filter((job) => job.id === Number(id));
  console.log(job);

  return (
    <>
      <StyledDetail>
        <DetailContainter>
          <DetailHeader>
            <DetailTextHeader>
              <p>
                {job[0].postedAt} . {job[0].contract}
              </p>

              <Heading headingType="h1" color="--header-color">
                {job[0].position}
              </Heading>

              <span>{job[0].location}</span>
            </DetailTextHeader>
            <Button ButtonType="btn1">Apply Now</Button>
          </DetailHeader>
          <DetailTextContainer>
            <JobDescription>
              <p>{job[0].description}</p>
            </JobDescription>

            <JobRequirement>
              <Heading headingType="h3" color="--header-color">
                Requirement
              </Heading>

              <p>{job[0].requirements.content}</p>

              <ul>
                {job[0].requirements.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </JobRequirement>

            <JobRole>
              <Heading headingType="h3" color="--header-color">
                What You Will Do
              </Heading>

              <p>{job[0].role.content}</p>

              <ol>
                {job[0].requirements.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </JobRole>
          </DetailTextContainer>
        </DetailContainter>
      </StyledDetail>

      <Detailfooter>
        <DetailfooterContainer>
          <div>
            <Heading headingType="h3" color="--header-color">
              {job[0].position}
            </Heading>
            <p>So Digital inc</p>
          </div>
          <Button ButtonType="btn1">Apply Now</Button>
        </DetailfooterContainer>
      </Detailfooter>
    </>
  );
}

export default Detail;