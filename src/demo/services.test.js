async function useFetchCountries(options, selectCb) {
  const response = await fetch(
    `https://calendarific.com/api/v2/countries?&api_key=aa552e0b1463288068461e47805777cc6a80a1a0`
  );
  const data = await response.json();
  console.log(data);
  if (data.meta?.error_detail) {
    throw new Error(data.meta.error_detail);
  }
  if (selectCb) {
    return selectCb(data);
  }
  console.log("Data 2: ", data);
  return data;
}

test("should return data", async () => {
  // arrange
  const mockResponse = ["pt", "uk"];
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => mockResponse,
    })
  );

  // act
  const result = await useFetchCountries();

  // assert
  expect(result).toEqual(["pt", "uk"]);
});

test("given meta.error_detail, should throw an error", async () => {
  // arrange
  const mockResponse = { meta: { error_detail: "Something went wrong" } };
  global.fetch = jest.fn(() => Promise.resolve({ json: () => mockResponse }));

  try {
    // act

    await useFetchCountries();
  } catch (e) {
    // assert

    expect(e).toEqual(Error("Something went wrong"));
  }
});
