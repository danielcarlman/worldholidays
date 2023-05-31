export const getAPIKey = () => {
  try {
    const API_KEY = localStorage.getItem("API_KEY");
    if (API_KEY) {
      return API_KEY;
    }
  } catch (error) {
    throw new Error("Failed to Retrieve API key");
  }
};
