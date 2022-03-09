import axios from "axios";

export async function loginRequest({ data }) {
  return axios.post("/auth/login", data);
}
export async function registrationRequest({ data }) {
  return axios.post("/auth/registration", data);
}
