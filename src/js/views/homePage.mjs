import { getFeaturedListings } from "../api/listings/index.mjs";
import { renderListingsTemplate } from "../templates/listings.mjs";
import { loaderTemplate, renderLoaderTemplate } from "../templates/loader.mjs";
import { hideLoader } from "../ui/render.mjs";

export async function homePage() {
  const featuredListingsContainer = document.querySelector("#featuredListingsContainer");
  renderLoaderTemplate(featuredListingsContainer, loaderTemplate());
  const listings = await getFeaturedListings();
  renderListingsTemplate(listings, featuredListingsContainer);
  hideLoader();
}
