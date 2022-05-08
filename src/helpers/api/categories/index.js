import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getCategoriesListRequest({ query }) {
  return axios.get(
    getQueriedUrl({
      url: "/categories",
      query: {
        ...query,
      },
    })
  );
}
export async function getCategoriesByIdRequest({ query, id }) {
  return axios.get(
    getQueriedUrl({
      url: `/categories/${id}`,
      query: {
        ...query,
      },
    })
  );
}
export async function createCategoriesRequest({ data }) {
  return axios.post("/categories", data);
}
