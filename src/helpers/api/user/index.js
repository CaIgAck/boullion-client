import { Axios } from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getUsersListRequest({ query }) {
  return Axios.get(
    getQueriedUrl({
      url: "/users",
      query: {
        ...query,
      },
    })
  );
}

export async function getUsersDetailRequest({ id, query }) {
  return Axios.get(
    getQueriedUrl({
      url: `/users/${id}`,
      query: {
        ...query,
      },
    })
  );
}
