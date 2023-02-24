import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

const action = "/listings";
const method = "post";

export async function createListing(listingData) {
  const createListingURL = API_HOST_URL + action;

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
