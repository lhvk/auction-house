import { getListings } from "../api/listings/index.mjs";
import { renderCarouselListings } from "../templates/listings.mjs";

export async function listingsCarousel() {
  const listings = await getListings();
  listings.forEach(function (element, i) {
    const slide = document.querySelector("#slide-" + (i + 1));
    renderCarouselListings(element, slide);
  });
}
