import { Axios } from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getReceiptListRequest({ query }) {
  return Axios.get(
    getQueriedUrl({
      url: "/receipt",
      query: {
        ...query,
      },
    })
  );
}

export async function getReceiptDetailRequest({ id, query }) {
  return Axios.get(
    getQueriedUrl({
      url: `/receipt/${id}`,
      query: {
        ...query,
      },
    })
  );
}

export async function createReceiptRequest({ data }) {
  return Axios.post("/receipt", data);
}
