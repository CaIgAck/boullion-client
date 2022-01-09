import queryString from "query-string";

export function getQueriedUrl({ url, query }) {
  return queryString.stringifyUrl(
    { url: url, query: query },
    {
      arrayFormat: "comma",
      skipEmptyString: true,
      skipNull: true,
    }
  );
}
