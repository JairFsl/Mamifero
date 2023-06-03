import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://192.168.0.100:19000",
});
