import { setLoginFormListener } from "../handlers/login.mjs";
import { setRegisterFormListener } from "../handlers/register.mjs";
import { getSearchParams } from "../router/searchParams.mjs";
import * as listing from "../api/listings/index.mjs";
import * as template from "../templates/index.mjs";
import { goBack } from "../handlers/redirect.mjs";
import { load } from "../handlers/storage.mjs";
import { setLogoutListener } from "../handlers/logout.mjs";
import { getProfile } from "../api/profile/profile.mjs";
import { setUpdateAvatarListener } from "../handlers/update.mjs";

async function allListingsPage() {
  const listings = await listing.getListings();
  const listingsContainer = document.querySelector("#listingsContainer");
  template.renderListingsTemplate(listings, listingsContainer);
}

async function singleListingPage() {
  const { id } = getSearchParams();
  const singleListing = await listing.getListing(id);
  const listingContainer = document.querySelector("#listingContainer");
  template.renderListingTemplate(singleListing, listingContainer);
}

async function profilePage() {
  const profile = load("profile");
  const profileData = await getProfile(profile.name);
  const profileContainer = document.querySelector("#profileContainer");
  template.renderProfileTemplate(profileData, profileContainer);
}

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/register.html":
      setRegisterFormListener();
      return;
    case "/index.html":
      setLoginFormListener();
      setLogoutListener();
      return;
    case "/listings.html":
      setLoginFormListener();
      setLogoutListener();
      allListingsPage();
      return;
    case "/listing.html":
      goBack();
      setLoginFormListener();
      setLogoutListener();
      singleListingPage();
      return;
    case "/profile.html":
      setLogoutListener();
      profilePage();
      setUpdateAvatarListener();
      return;
  }
}

// template.logutUser();

// listing.createListing()
// listing.updateListing()
// listing.removeListing()
// listing.getListing()
// listing.getListings()

// updateListing({
//   title: "Test listing",
//   description: "This is a test listing",
//   endsAt: "2023-03-04T22:10:54.134Z",
//   tags: ["nice"],
//   media: [""],
// });

// createListing({
//   title: "Test listing",
//   description: "This is a test listing",
//   endsAt: "2023-03-04T22:10:54.134Z",
//   tags: ["nice"],
//   media: [
//     "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
//   ],
// });

// AdmiralVonS / Archibald_Roth
// admiralvonschneider@stud.noroff.no / archie@stud.noroff.no
// abcd1234
