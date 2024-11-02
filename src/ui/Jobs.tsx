// import { useEffect, useState } from "react";
import { useState } from "react";
import { DataType } from "../Interfaces";
import { useFormData } from "../context/FormDataContext";
import styled from "styled-components";
import Job from "./Job";
import Button from "./Button";
import { dataJS } from "../data/dataJS";

const StyledJobs = styled.div`
  display: grid;
  grid-template-columns: minmax(35rem, 31.53%) minmax(35rem, 31.53%) minmax(
      35rem,
      31.53%
    );
  width: 111rem;
  min-height: 113.2rem;
  gap: 2.916666rem;
  margin-bottom: 5.6rem;
  justify-content: start;
`;

function Jobs() {
  // const [data, setData] = useState<DataType[]>([]);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  // const { formData, updateField, handleSubmit } = useFormData();
  const { formData } = useFormData();
  /*
useEffect(() => {
  fetch("/src/data/data.json")
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((error) => console.error("Error fetching data:", error));
}, []);
*/

  // let filteredData = data ? data : dataJS;
  let data: DataType[] = dataJS;

  console.log(formData);

  const filteredData = data.filter((job) => {
    const isPosition = formData.job
      ? job.position.toLowerCase().includes(formData.job.toLowerCase())
      : true;

    const isJobLocation = formData.country
      ? job.location
          .toLowerCase()
          .includes(formData.country.toLowerCase().trim())
      : true;

    const isFullTime = formData.fullTimeOnly
      ? job.contract === "Full Time"
      : true;

    return isPosition && isJobLocation && isFullTime;
  });

  const displayedData = seeMore ? filteredData.slice(0, 12) : filteredData;

  console.log(displayedData);

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
