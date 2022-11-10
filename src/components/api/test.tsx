import axios from "axios";

export const Test = async () => {
  const res = await axios.get("/oAuth/oAuth-Token");

  alert(res.data);
};
