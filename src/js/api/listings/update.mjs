import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
import { load } from "../../handlers/storage.mjs";

const action = "/listings";
const method = "put";
const profile = load("profile");

export async function updateListing(listingData) {
  if (!listingData.id) {
    throw new Error("Update requires an id");
  }
  const updateListingURL = `${API_HOST_URL}${action}/${listingData.id}`;

  const response = await authFetch(updateListingURL, {
    method,
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
