import { formatDate } from "../helpers/index.mjs";

// MULTIPLE LISTINGS

export function listingsTemplate(listingData) {
  return ` 
  <a href="/listing.html?id=${listingData.id}" class="card p-5 mb-5 border-0 listings-card">
  <div id="listingsMediaContainer" class="overflow-hidden">
    <img
      src="${listingData.media}"
      onerror="this.onerror=null; 
      this.src='/src/assets/rubiks.png'"
      class="listings-card-image"
      alt="Image of the listing for sale" />
  </div>

  <div class="card-body p-0 mt-3 d-flex flex-column justify-content-between">
 
      <div>
        <h3 class="card-title text-capitalize">${listingData.title}</h3>
        <p class="mb-2 text-secondary fw-bold">${listingData.tags}</p>
      </div>

   
      <div class="d-grid gap-2">
      <div class="mb-2">
      <p class="card-text m-0">Created</p>
      <p class="card-text fw-bold">${formatDate(new Date(listingData.created))}</p>
    </div>
      <button href="/listing.html?id=${listingData.id}" class="btn btn-outline-light">view</button>
    </div>
  
  </div>
</a>
`;
}

export function renderListingsTemplate(listings, parent) {
  parent.insertAdjacentHTML("beforeend", listings.map(listingsTemplate).join(""));
}
