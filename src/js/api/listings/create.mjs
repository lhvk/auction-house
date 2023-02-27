import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

const action = "/listings";
const method = "post";

export async function createListing(listingData) {
  const url = API_HOST_URL + action;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(listingData),
  });

  const result = await response.json();
  console.log(result);
  if (response.ok) {
    alert(`Listing successfully created!`);
    return result;
  } else {
    result.errors.forEach((x) => alert(`Failed to create new listing: ${x.message}`));
  }
}
