import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getSurveyDetailRequest({ id, query }) {
  return axiosget(
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
