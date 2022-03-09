import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getProfileRequest({ query }) {
  return axios.get(
    getQueriedUrl({
      url: "/profile",
      query: {
        ...query,
      },
    })
  );
}
