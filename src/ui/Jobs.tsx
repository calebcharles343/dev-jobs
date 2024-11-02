// import { useEffect, useState } from "react";
import { useState } from "react";
import { DataType } from "../Interfaces";
// import { useFormData } from "../context/FormDataContext";
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
`;

function Jobs() {
  // const [data, setData] = useState<DataType[]>([]);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  // const { formData, updateField, handleSubmit } = useFormData();
  // const { formData } = useFormData();
  /*
useEffect(() => {
  fetch("/src/data/data.json")
  .then((response) => response.json())
  .then((data) => setData(data))
  .catch((error) => console.error("Error fetching data:", error));
}, []);
*/

  // let filteredData = data ? data : dataJS;
  let filteredData: DataType[] = dataJS;
  console.log(filteredData);

  // filteredData = data.filter((job) => {
  //   if (formData.fullTimeOnly && job.contract !== "Full Time") return false;
  //   if (formData.job && job.contract !== "Full Time") return false;
  //   return true;
  // });

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
