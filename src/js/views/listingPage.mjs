import { getSearchParams } from "../router/searchParams.mjs";
import { getListing } from "../api/listings/index.mjs";
import {
  loaderTemplate,
  renderbidHistoryTemplate,
  renderCarouselTemplate,
  renderListingMediaTemplate,
  renderListingTemplate,
  renderLoaderTemplate,
} from "../templates/index.mjs";
import { documentTitle, hideLoader } from "../ui/render.mjs";

export async function listingPage() {
  const { id } = getSearchParams();
  const listingContainer = document.querySelector("#listingContainer");
  renderLoaderTemplate(listingContainer, loaderTemplate());
  const listing = await getListing(id);
  renderListingTemplate(listing, listingContainer);
  const listingMediaContainer = document.querySelector("#listingMediaContainer");
  listing.bids.sort((a, b) => b.amount - a.amount);
  listing.bids.map((bid) => {
    const bidHistoryContainer = document.querySelector("#bidHistory");
    return renderbidHistoryTemplate(bid, bidHistoryContainer);
  });

  if (listing.media.length > 1) {
    renderCarouselTemplate(listing, listingMediaContainer);
  } else {
    renderListingMediaTemplate(listing, listingMediaContainer);
  }

  if (listing.endsAt < new Date().toISOString()) document.querySelector("h1").textContent = listing.title;
  documentTitle(listing.title);

  hideLoader();
}
