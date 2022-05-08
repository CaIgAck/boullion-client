import axios from "axios";

export async function createFileRequest({ data }) {
  return axios.post("/file", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
