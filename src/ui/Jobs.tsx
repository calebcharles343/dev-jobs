import { useEffect, useState } from "react";
import { DataType } from "../Interfaces";
import { useFormData } from "../context/FormDataContext";
import styled from "styled-components";
import Job from "./Job";
import Button from "./Button";

const StyledJobs = styled.div`
  display: grid;
  grid-template-columns: minmax(35rem, 31.53%) minmax(35rem, 31.53%) minmax(
      35rem,
      31.53%
    );
  width: 111rem;
  height: 100%;
  gap: 2.916666rem;
  margin-bottom: 5.6rem;
`;

function Jobs() {
  const [data, setData] = useState<DataType[]>([]);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  // const { formData, updateField, handleSubmit } = useFormData();
  const { formData } = useFormData();

  useEffect(() => {
    fetch("../../public/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = data.filter((job) => {
    if (formData.fullTimeOnly && job.contract !== "Full Time") return false;
    if (formData.job && job.contract !== "Full Time") return false;
    return true;
  });

  const displayedData = seeMore ? filteredData.slice(0, 12) : filteredData;

  function handleSeeMoreBtn() {
    setSeeMore(!seeMore);
  }

  return (
    <>
      <StyledJobs>
        {displayedData.map((job) => (
          <Job job={job} />
        ))}
      </StyledJobs>
      <Button ButtonType="btn1" onClick={handleSeeMoreBtn}>
        {!seeMore ? "See less" : "Load more"}
      </Button>
    </>
  );
}

export default Jobs;
