import { Axios } from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getSurveyDetailRequest({ id, query }) {
  return Axios.get(
    getQueriedUrl({
      url: `/survey/${id}`,
      query: {
        ...query,
      },
    })
  );
}

export async function createSurveyRequest({ data }) {
  return Axios.post("/survey", data);
}
