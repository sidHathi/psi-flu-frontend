import axios from "axios";
import { setupInterceptorsTo } from "./interceptors";
import { API_URL } from "../constants";

const api = setupInterceptorsTo(
  axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  })
);

export default api;