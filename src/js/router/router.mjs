import * as handler from "../handlers/index.mjs";
import { renderLogin } from "../ui/render.mjs";
import { renderProfileButtonTemplate } from "../templates/profileButton.mjs";
import * as page from "../views/index.mjs";
import * as util from "../utils/pathUtils.mjs";

export default function router() {
  const normalizedPath = util.normalizePath();

  switch (normalizedPath) {
    case "/register":
      handler.setRegisterFormListener();
      return;
    case "/":
      renderLogin();
      handler.setLoginFormListener();
      handler.setLogoutListener();
      renderProfileButtonTemplate();
      page.homePage();
      handler.setSearchListener();
      return;
    case "/listings":
      renderLogin();
      handler.setLoginFormListener();
      handler.setLogoutListener();
      renderProfileButtonTemplate();
      page.listingsPage();
      handler.setCreateListingFormListener();
      handler.setSearchListener();
      return;
    case "/listing":
      renderLogin();
      handler.goBack();
      handler.setLoginFormListener();
      handler.setLogoutListener();
      renderProfileButtonTemplate();
      page.listingPage();
      handler.setBidOnListingFormListener();
      return;
    case "/profile":
      handler.goBack();
      handler.setLogoutListener();
      page.profilePage();
      handler.setUpdateAvatarListener();
      return;
    case "/about":
      renderLogin();
      handler.goBack();
      handler.setLoginFormListener();
      handler.setLogoutListener();
      renderProfileButtonTemplate();
      return;
  }
}
