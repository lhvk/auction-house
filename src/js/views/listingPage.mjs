import { getSearchParams } from "../router/searchParams.mjs";
import { getListing } from "../api/listings/index.mjs";
import {
  renderCarouselTemplate,
  renderListingMediaTemplate,
  renderListingTemplate,
} from "../templates/index.mjs";

export async function listingPage() {
  const { id } = getSearchParams();
  const listing = await getListing(id);
  const listingContainer = document.querySelector("#listingContainer");
  renderListingTemplate(listing, listingContainer);
  const listingMediaContainer = document.querySelector(
    "#listingMediaContainer"
  );

  if (listing.media.length > 1) {
    renderCarouselTemplate(listing, listingMediaContainer);
  } else {
    renderListingMediaTemplate(listing, listingMediaContainer);
  }

  document.querySelector("h1").textContent = listing.title;
}
