import { dateCountDown, formatDate } from "../helpers/index.mjs";

export function profileActiveListingTemplate(activeListing) {
  return `  
  <li>
  <a
    href="/listing.html?id=${activeListing.id}"
    class="seller-card card bg-transparent d-flex border-0"
  >
    <div class="d-flex align-items-center">
      <div>
      <img
      src="${activeListing.avatar}" onerror="this.onerror=null; this.src='/src/assets/rubiks.png'" />
      </div>
      <div class="card-body">
        <h4 class="m-0">${activeListing.title}</h4>
        <hr class="my-2" />

        <p class="text-body m-0">
          Created
          <span class="fw-bold">${formatDate(activeListing.created)} </span>
        </p>
        <p class="text-body m-0">
          Ends
          <span class="fw-bold">${dateCountDown(activeListing.endsAt)}</span>
        </p>
      </div>
    </div>
  </a>
</li>`;
}

export function renderProfileActiveListingTemplate(activeListing, parent) {
  parent.insertAdjacentHTML("beforeend", profileActiveListingTemplate(activeListing));
}
