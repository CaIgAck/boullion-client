import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getSurveyDetailRequest({ id, query }) {
  return axios.get(

    getQueriedUrl({
      url: `/api/survey/${id}`,
      query: {
        ...query,
      },
    })
  );
}

export async function createSurveyRequest({ data }) {
  return axios.post("/api/Survey", data);
}
