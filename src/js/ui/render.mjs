import { load } from "../handlers/storage.mjs";

export function renderLogin() {
  const token = load("token");
  document
    .querySelector(".navbar")
    .classList[token ? "add" : "remove"]("logged-in");
}
