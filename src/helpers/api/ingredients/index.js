import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getIngredientListRequest({ query }) {
  return axios.get(
    getQueriedUrl({
      url: "/ingredient",
      query: {
        ...query,
      },
    })
  );
}
