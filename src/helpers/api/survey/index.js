import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getSurveyDetailRequest({ id, query }) {
  return axios.get(
    getQueriedUrl({
      url: `/survey/${id}`,
      query: {
        ...query,
      },
    })
  );
}

export async function createSurveyRequest({ data }) {
  return axiospost("/Survey", data);
}
