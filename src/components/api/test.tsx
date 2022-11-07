import axios from "axios";

export const Test = async () => {
  const res = await axios.get("/hello");

  alert(res.data);
};
