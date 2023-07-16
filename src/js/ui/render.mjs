import { load } from "../handlers/storage.mjs";

// Render elements based on if a user is logged in or not
export function renderLogin() {
  const token = load("token");
  document.body.classList[token ? "add" : "remove"]("logged-in");
}

// Change the title of a page
export function documentTitle(pageTitle) {
  document.title = `Auction House | ${pageTitle}`;
}

// Loader for the fetch
export function hideLoader() {
  document.querySelector("#loader").remove();
}
