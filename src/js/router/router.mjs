import * as handler from "../handlers/index.mjs";
import { renderLogin } from "../ui/render.mjs";
import { renderProfileButtonTemplate } from "../templates/profileButton.mjs";
import * as page from "../views/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/register.html":
      handler.setRegisterFormListener();
      return;
    case "/index.html":
      renderLogin();
      handler.setLoginFormListener();
      handler.setLogoutListener();
      renderProfileButtonTemplate();
      page.homePage();
      handler.setSearchListener();
      return;
    case "/listings.html":
      renderLogin();
      handler.setLoginFormListener();
      handler.setLogoutListener();
      renderProfileButtonTemplate();
      page.listingsPage();
      handler.setCreateListingFormListener();
      handler.setSearchListener();
      return;
    case "/listing.html":
      renderLogin();
      handler.goBack();
      handler.setLoginFormListener();
      handler.setLogoutListener();
      renderProfileButtonTemplate();
      page.listingPage();
      handler.setBidOnListingFormListener();
      return;
    case "/profile.html":
      handler.goBack();
      handler.setLogoutListener();
      page.profilePage();
      handler.setUpdateAvatarListener();
      return;
    case "/about.html":
      renderLogin();
      handler.goBack();
      handler.setLoginFormListener();
      handler.setLogoutListener();
      renderProfileButtonTemplate();
      return;
  }
}
