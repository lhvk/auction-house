import { bidOnListing } from "../api/listings/index.mjs";

export function setBidOnListingFormListener() {
  const form = document.querySelector("#makeBidForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const bid = Object.fromEntries(formData.entries());

      bidOnListing(bid);
    });
  }
}
