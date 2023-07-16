import { load } from "../handlers/storage.mjs";
import { getProfile } from "../api/profile/profile.mjs";
import {
  renderProfileWinsTemplate,
  renderProfileActiveListingTemplate,
  renderProfileTemplate,
  renderLoaderTemplate,
  loaderTemplate,
  renderprofileInActiveListingTemplate,
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

  const onlyActive = profileData.listings.filter(
    (x) => x.endsAt > new Date().toISOString()
  );
  const onlyInActive = profileData.listings.filter(
    (x) => x.endsAt < new Date().toISOString()
  );

  onlyActive.map((activeListings) => {
    const activeListingsContainer = document.querySelector("#activeListings");
    return renderProfileActiveListingTemplate(
      activeListings,
      activeListingsContainer
    );
  });

  onlyInActive.map((inactiveListings) => {
    const inActiveListingsContainer =
      document.querySelector("#inActiveListings");
    return renderprofileInActiveListingTemplate(
      inactiveListings,
      inActiveListingsContainer
    );
  });

  const wins = listings.filter(
    (x) => x.id === profileData.wins.map((y) => y.id)
  );

  wins.map((won) => {
    const winsContainer = document.querySelector("#wins");
    renderProfileWinsTemplate(won, winsContainer);
  });

  documentTitle(profile.name);
}
