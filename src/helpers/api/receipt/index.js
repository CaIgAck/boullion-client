import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getReceiptListRequest({ query }) {
  return axios.get(
    getQueriedUrl({
      url: "/api/receipt",
      query: {
        ...query,
      },
    })
  );
}

export async function getReceiptDetailRequest({ id, query }) {
  return axios.get(
    getQueriedUrl({
      url: `/api/receipt/${id}`,
      query: {
        ...query,
      },
    })
  );
}

export async function createReceiptRequest({ data }) {
  return axios.post("/Receipt", data);
}

export async function updateReceiptRequest({ id, data }) {
  return axios.patch(`/receipt/${id}`, data);
}
