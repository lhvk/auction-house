import { getSearchParams } from "../router/searchParams.mjs";
import { getListing } from "../api/listings/index.mjs";
import { renderListingTemplate } from "../templates/index.mjs";

export async function listingPage() {
  const { id } = getSearchParams();
  const listing = await getListing(id);
  const listingContainer = document.querySelector("#listingContainer");
  renderListingTemplate(listing, listingContainer);
}
