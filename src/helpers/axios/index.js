import axios from "axios";
import store from "../../store";
import { getToken } from "../jwtHelper";
// const { BASE_URL, PROD_URL } = process.env;

export async function axiosInterceptor() {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("reject", error.response);
      const data = error.response.data;
      const { status } = error.response;
      if (
        data.error === 403 &&
        data.message === "Токен обязателен для аунтефикации"
      ) {
        return store.dispatch("logout");
      }
      if (status === 500 || status === 400) {
        store.commit("setError", data);
      }
    }
  );
}

export async function initAxios() {
  axios.defaults.baseURL = "http://localhost:8080";
  //TODO: create deploy
  // process.env.NODE_ENV !== "production" ? BASE_URL : PROD_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers["x-access-token"] = getToken();
  await axiosInterceptor();
}
