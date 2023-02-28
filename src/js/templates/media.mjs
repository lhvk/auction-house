import { setImageEventlistener } from "../handlers/media.mjs";

export function listingMediaTemplate(listingData) {
  const div = document.createElement("div");
  const image = new Image();
  image.src = listingData.media;
  image.classList.add("listing-card-image");
  setImageEventlistener(image);
  div.append(image);
  return div;
}

export function renderListingMediaTemplate(media, parent) {
  parent.append(listingMediaTemplate(media));
}
