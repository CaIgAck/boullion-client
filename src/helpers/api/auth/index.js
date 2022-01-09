import { Axios } from "axios";

export async function loginRequest({ data }) {
  return Axios.post("/auth/login", data);
}
export async function registrationRequest({ data }) {
  return Axios.post("/auth/registration", data);
}
