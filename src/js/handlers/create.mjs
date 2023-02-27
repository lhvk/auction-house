import { createListing } from "../api/listings/create.mjs";

export function setCreateListingFormListener() {
  const createListingForm = document.querySelector("#createListingForm");

  if (createListingForm) {
    createListingForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      //   const title = data.get("title");
      //   const description = data.get("description");
      //   const endsAt = data.get("endsAt");
      //   const tags = [data.get("tags").split(", ")];
      //   const media = [data.get("media").split(", ")];

      //   const newListing = {
      //     title,
      //     description,
      //     endsAt,
      //     tags,
      //     media,
      //   };
      const listingData = Object.fromEntries(formData.entries());

      createListing(listingData);
    });
  }
}

//   form.addEventListener("input", () => {
//     const listing = {
//         title: form.title.value,
//         description: form.description.value,
//         endsAt: form.endsAt.value,
//         tags: [form.tags.value.split(", ")],
//         media: [form.media.value.split(",")]
//     }
//   })

//   createListingForm.getAttributeNode("name")

//   const listing = {
//     title: document.querySelector("name").value,
//     description: document.querySelector(["description"]).value,
//     endsAt: document.querySelector(["endsAt"]).value,
//     tags: [document.querySelector(["tags"]).value.split(", ")],
//     media: [document.querySelector(["media"]).value.split(",")],
//   };

// const title = formData.get("title")
// const description = formData.get("description")
// const endsAt = formData.get("endsAt")
// const tags = formData.get("tags").split(", ")
// const media = formData.get("media").split(", ")
