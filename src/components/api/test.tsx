import axios from "axios";

export const Test = async () => {
  const endpointUrl = "http://localhost:8000";
  const res = await axios.get("/hello");

  alert(res.data);
};
