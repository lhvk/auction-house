import { getListings } from "../api/listings/index.mjs";
import { renderListingsTemplate } from "../templates/index.mjs";

export async function listingsPage() {
  const listings = await getListings();
  const listingsContainer = document.querySelector("#listingsContainer");
  renderListingsTemplate(listings, listingsContainer);
  const input = document.querySelector("#searchInput");

  function myFunction() {
    const filter = input.value.toUpperCase();
    const ul = document.querySelectorAll(".listings-card");

    for (let i = 0; i < ul.length; i++) {
      console.log(ul[i].innerText);

      const txtValue = ul[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        ul[i].style.display = "flex";
      } else {
        ul[i].style.display = "none";
      }
    }
  }

  input.addEventListener("keyup", () => {
    myFunction();
  });
}
