import { load } from "../handlers/storage.mjs";
import { getProfile } from "../api/profile/profile.mjs";
import {
  renderProfileWinsTemplate,
  renderProfileActiveListingTemplate,
  renderProfileTemplate,
  renderLoaderTemplate,
  loaderTemplate,
} from "../templates/index.mjs";
import { documentTitle, hideLoader } from "../ui/render.mjs";
import { getListings } from "../api/listings/listings.mjs";

export async function profilePage() {
  const profileContainer = document.querySelector("#profileContainer");
  renderLoaderTemplate(profileContainer, loaderTemplate());
  const profile = load("profile");
  const profileData = await getProfile(profile.name);
  const listings = await getListings();

  renderProfileTemplate(profileData, profileContainer);
  hideLoader();

  profileData.listings.map((activeListings) => {
    const activeListingsContainer = document.querySelector("#activeListings");
    return renderProfileActiveListingTemplate(activeListings, activeListingsContainer);
  });

  const wins = listings.filter((x) => x.id === profileData.wins.map((y) => y.id));

  wins.map((y) => {
    const winsContainer = document.querySelector("#wins");
    renderProfileWinsTemplate(y, winsContainer);
  });

  documentTitle(profile.name);
}
