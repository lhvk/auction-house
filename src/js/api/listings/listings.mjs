import { API_HOST_URL } from "../constants.mjs";
import { useFetch } from "../fetch.mjs";

const action = "/listings/";
const bids = "?_bids=true";
const desc = "?sort=created&sortOrder=desc";
const active = "?_active=true";

// SINGLE LISTING
export async function getListing(id) {
  const getListingURL = `${API_HOST_URL}${action}${id}${bids}`;

  if (!id) {
    throw new Error("Get request requires an id");
  }
  const response = await useFetch(getListingURL);
  return await response.json();
}

// ALL LISTINGS
export async function getListings() {
  const getListingsURL = `${API_HOST_URL}${action}${active}`;

  const response = await useFetch(getListingsURL);
  return await response.json();
}
