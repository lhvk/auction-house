import { formatDate } from "../helpers/index.mjs";

export function profileInActiveListingTemplate(inactiveListing) {
  return `  
  <li>
  <a href="/listing.html?id=${inactiveListing.id}" class="seller-card card bg-transparent d-flex border-0">
    <div class="d-flex align-items-center">
      <div>
        <img src="${inactiveListing.media[0]}" onerror="this.onerror=null; this.src='/src/assets/rubiks.png'" />
      </div>
      <div class="card-body">
        <h4 class="m-0">${inactiveListing.title}</h4>
        <hr class="my-2" />

        <p class="text-body m-0">
          Created
          <span class="fw-bold">${new Date(inactiveListing.created).toDateString()} </span>
        </p>
        <p class="text-body m-0">
          Ended
          <span class="fw-bold">${formatDate(inactiveListing.endsAt)}</span>
        </p>
      </div>
    </div>
  </a>
</li>`;
}

export function renderprofileInActiveListingTemplate(inactiveListing, parent) {
  parent.insertAdjacentHTML("beforeend", profileInActiveListingTemplate(inactiveListing));
}
