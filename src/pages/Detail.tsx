import { useParams } from "react-router-dom";
import { dataJS } from "../data/dataJS";

function Detail() {
  const { id } = useParams<{ id: string }>();

  const job = dataJS.filter((job) => job.id === Number(id));
  console.log(job);

  return <div>DETAIL {id}</div>;
}

export default Detail;
