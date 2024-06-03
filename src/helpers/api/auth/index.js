import axios from "axios";

export async function loginRequest({ data }) {
  return axios.post("/api/auth/login", data);
}
export async function registrationRequest({ data }) {
  return axios.post("/api/auth/registration", data);
}
