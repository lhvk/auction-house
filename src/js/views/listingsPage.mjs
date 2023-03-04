import { getListings } from "../api/listings/index.mjs";
import { renderLoaderTemplate, renderListingsTemplate, loaderTemplate } from "../templates/index.mjs";
import { hideLoader } from "../ui/render.mjs";

export async function listingsPage() {
  const listingsContainer = document.querySelector("#listingsContainer");
  renderLoaderTemplate(listingsContainer, loaderTemplate());
  const listings = await getListings();
  renderListingsTemplate(listings, listingsContainer);
  hideLoader();
}
