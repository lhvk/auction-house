import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

const action = "/listings";
const method = "delete";

export async function removeListing(listingData) {
  if (!listingData.id) {
    throw new Error("Delete requires an id");
  }
  const removeListingURL = `${API_HOST_URL}${action}/${id}`;

  const response = await authFetch(removeListingURL, {
    method,
  });

  return await response.json();
}
