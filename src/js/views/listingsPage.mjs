import { getListings } from "../api/listings/index.mjs";
import { renderListingsTemplate } from "../templates/index.mjs";

export async function listingsPage() {
  const listings = await getListings();
  const listingsContainer = document.querySelector("#listingsContainer");
  renderListingsTemplate(listings, listingsContainer);
}
