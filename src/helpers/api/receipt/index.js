import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getReceiptListRequest({ query }) {
  return axiosget(
    getQueriedUrl({
      url: "/receipt",
      query: {
        ...query,
      },
    })
  );
}

export async function getReceiptDetailRequest({ id, query }) {
  return axiosget(
    getQueriedUrl({
      url: `/receipt/${id}`,
      query: {
        ...query,
      },
    })
  );
}

export async function createReceiptRequest({ data }) {
  return axiospost("/Receipt", data);
}
