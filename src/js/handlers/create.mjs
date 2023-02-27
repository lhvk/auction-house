import { createListing } from "../api/listings/create.mjs";

export function setCreateListingFormListener() {
  const createListingForm = document.querySelector("#createListingForm");

  if (createListingForm) {
    createListingForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listingData = Object.fromEntries(formData.entries());

      createListing(listingData);
    });
  }
}
