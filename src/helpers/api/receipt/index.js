import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getReceiptListRequest({ query }) {
  return axios.get(
    getQueriedUrl({
      url: "/receipt",
      query: {
        ...query,
      },
    })
  );
}

export async function getReceiptDetailRequest({ id, query }) {
  return axios.get(
    getQueriedUrl({
      url: `/receipt/${id}`,
      query: {
        ...query,
      },
    })
  );
}

export async function createReceiptRequest({ data }) {
  return axios.post("/Receipt", data);
}
