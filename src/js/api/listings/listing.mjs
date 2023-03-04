import { API_HOST_URL } from "../constants.mjs";

const action = "/listings/";
const bids = "?_bids=true";
const seller = "&_seller=true";

// SINGLE LISTING
export async function getListing(id) {
  const getListingURL = `${API_HOST_URL}${action}${id}${bids}${seller}`;

  if (!id) {
    throw new Error("Get request requires an id");
  }
  const response = await fetch(getListingURL);

  return await response.json();
}
