import axios from "axios";
import store from "../../store";
import { getToken, removeToken } from "../jwtHelper";
// const { BASE_URL, PROD_URL } = process.env;

export async function axiosInterceptor() {
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      const { status, data } = error.response;
      if (status === 500 || status === 400) {
        store.commit("setError", data);
      }
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      const { status, data } = error.response;
      if (status === 401 && data === "Invalid Token") {
        removeToken();
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
  const { token } = getToken();
  axios.defaults.headers["x-access-token"] = token;
  await axiosInterceptor();
  await store.dispatch("getProfileDetails", { query: null });
}
