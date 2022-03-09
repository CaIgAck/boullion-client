import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getUsersListRequest({ query }) {
  return axiosget(
    getQueriedUrl({
      url: "/users",
      query: {
        ...query,
      },
    })
  );
}

export async function getUsersDetailRequest({ id, query }) {
  return axiosget(
    getQueriedUrl({
      url: `/users/${id}`,
      query: {
        ...query,
      },
    })
  );
}
