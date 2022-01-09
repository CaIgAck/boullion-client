import axios from "axios";

const { BASE_URL, PROD_URL } = process.env;

export function initAxios() {
  axios.defaults.baseURL =
    process.env.NODE_ENV === "production" ? PROD_URL : BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
}
