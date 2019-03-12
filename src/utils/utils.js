export const getValueFromUrl = (query, prop) => {
  const queryParams = new URLSearchParams(query);
  return queryParams.get(prop);
};