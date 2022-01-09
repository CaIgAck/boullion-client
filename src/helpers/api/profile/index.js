import { Axios } from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getProfileRequest({ query }) {
  return Axios.get(
    getQueriedUrl({
      url: "/profile",
      query: {
        ...query,
      },
    })
  );
}
