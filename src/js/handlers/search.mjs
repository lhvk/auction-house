import { search } from "../helpers/index.mjs";

export function setSearchListener() {
  const searchInput = document.querySelector("#searchInput");
  searchInput.addEventListener("keyup", () => {
    search();
  });
}
