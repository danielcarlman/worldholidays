async function useFetchCountries(options, selectCb) {
  const response = await fetch(
    `https://calendarific.com/api/v2/countries?&api_key=aa552e0b1463288068461e47805777cc6a80a1a0`
  );
  const data = await response.json();
  if (data.meta?.error_detail) {
    throw new Error(data.meta.error_detail);
  }
  if (selectCb) {
    return selectCb(data);
  }
  return data;
}

export { useFetchCountries };
