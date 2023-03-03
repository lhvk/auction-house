import { API_HOST_URL } from "../constants.mjs";
import { useFetch } from "../fetch.mjs";

const action = "/listings/";

// ALL LISTINGS
export async function getListings() {
  const getListingsURL = `${API_HOST_URL}${action}`;

  const response = await useFetch(getListingsURL);
  return await response.json();
}
