import { useEffect, useState } from "react";
import { DataType } from "../Interfaces";
import { useFormData } from "../context/FormDataContext";

function Jobs() {
  const [data, setData] = useState<DataType[]>([]);
  const { formData, updateField, handleSubmit } = useFormData();

  useEffect(() => {
    fetch("../../public/data.json")
      .then((response) => response.json())
      .then((data: DataType[]) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  let filterdData = formData.fullTimeOnly
    ? data.filter((job) => job.contract === "Full Time")
    : data;

  filterdData = formData.job
    ? data.filter((job) => job.contract === "Full Time")
    : data;

  console.log(filterdData);

  return <div></div>;
}

export default Jobs;
