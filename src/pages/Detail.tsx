import { useParams } from "react-router-dom";
import { dataJS } from "../data/dataJS";
import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const StyledDetail = styled.div`
  min-width: 73rem;
  background-color: var(--bg-color);

  padding: 1.8rem 4.8rem;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  width: 100%;
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
  gap: 1rem;

  p {
    color: var(--dark-grey);
  }

  h4 {
    font-size: 2.8rem;
    line-height: 3.473rem;
    font-weight: 700;
    color: var(--font-color);
  }
  span {
    font-size: 1.4rem;
    line-height: 1.736rem;
    font-weight: 700;
    color: var(--violet);
  }
`;

const DetailTextContainer = styled.div`
  width: 63.9rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--dark-grey);

  p {
    margin-bottom: 4rem;
  }
  h3 {
    margin-bottom: 4.8rem;
  }
`;

function Detail() {
  const { id } = useParams<{ id: string }>();

  const job = dataJS.filter((job) => job.id === Number(id));
  console.log(job);

  return (
    <StyledDetail>
      <DetailHeader>
        <DetailTextHeader>
          <p>
            {job[0].postedAt} . {job[0].contract}
          </p>

          <h4>{job[0].position}</h4>

          <span>{job[0].location}</span>
        </DetailTextHeader>
        <Button ButtonType="btn1">Apply Now</Button>
      </DetailHeader>
      <DetailTextContainer>
        <p>{job[0].description}</p>

        <Heading headingType="h3" color="--font-color">
          Requirement
        </Heading>

        <p>{job[0].requirements.content}</p>

        <ul>
          {job[0].requirements.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Heading headingType="h3" color="--font-color">
          What You Will Do
        </Heading>

        <p>{job[0].role.content}</p>

        <ol>
          {job[0].requirements.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </DetailTextContainer>
    </StyledDetail>
  );
}

export default Detail;
