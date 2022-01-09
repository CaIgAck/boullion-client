import axios from "axios";
import store from "../../store";

const { BASE_URL, PROD_URL } = process.env;

export async function axiosInterceptor() {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (
        error.error === 403 &&
        error.message === "Токен обязателен для аунтефикации"
      ) {
        return store.dispatch("logout");
      }
    }
  );
}

export async function initAxios() {
  axios.defaults.baseURL =
    process.env.NODE_ENV === "production" ? PROD_URL : BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  await axiosInterceptor();
}
