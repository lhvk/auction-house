import { load } from "../handlers/storage.mjs";

export function renderLogin() {
  const token = load("token");
  document.body.classList[token ? "add" : "remove"]("logged-in");
}

export function documentTitle(pageTitle) {
  document.title = `Auction House | ${pageTitle}`;
}
