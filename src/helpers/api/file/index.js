import axios from "axios";

export async function createFileRequest({ data }) {
  return axios.post("/api/file", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
