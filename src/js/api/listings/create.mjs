import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

const action = "/listings";
const method = "post";

export async function createListing(listingData) {
  const url = API_HOST_URL + action;
  const modal = bootstrap.Modal.getOrCreateInstance("#createListingModal");

  listingData.tags = listingData.tags.split(",").map((tag) => tag.trim());
  if (listingData.media !== "") listingData.media = listingData.media.split(",").map((media) => media.trim());

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(listingData),
  });

  const result = await response.json();

  if (response.ok) {
    alert(`Listing successfully created!`);
    modal.hide();
  } else {
    result.errors.forEach((x) => alert(`Failed to create new listing: ${x.message}`));
  }
  return result;
}
