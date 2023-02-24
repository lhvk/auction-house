import { totalAmount, formatDates } from "../controllers/formatDate.mjs";

export function listingsTemplate(listingData) {
  console.log(listingData);
  return ` 
<a href="/listing.html?id=${listingData.id}" class="card p-5 mb-5 border-0">
    <div class="overflow-hidden">
        <img
          src="${listingData.media}"
          onerror="this.onerror=null; 
          this.src='/src/assets/rubiks.png'"
          class="card-image"
          alt="Image of the listing for sale" />
    </div>

    <div class="card-body p-0 mt-3">
        <h3 class="card-title mb-5 text-capitalize">${listingData.title}</h3>
        <p class="card-text m-0">Bid is now</p>
        <p class="card-text fw-bold">${listingData.bids}</p>
        <div class="d-grid gap-2">
            <button href="/listing.html?id=${listingData.id}" class="btn btn-outline-light">view</button>
        </div>
    </div>
</a>`;
}

export function listingTemplate(listingData) {
  return `          
  <div class="row g-5 py-5">
    <div class="col-lg-6">
      <img
        src="${listingData.media}"
        onerror="this.onerror=null; 
        this.src='/src/assets/rubiks.png'"
        class="img-fluid"
        alt="Image of the listing for sale"/>
    </div>
    <div
      class="col-lg-4 text-secondary d-flex flex-column flex-grow-1 justify-content-start">
      <div>
        <h2 class="fs-3 text-secondary text-uppercase">
          ${listingData.title}
        </h2>
        <p class="fw-light">
          ${listingData.description}
        </p>
      </div>

      <div class="d-flex flex-column gap-4">
        <div>
          <p class="fw-light m-0">Leading bid</p>
          <p class="fw-bold m-0">${totalAmount(listingData.bids)}</p>
        </div>
        <div>
          <p class="fw-light m-0">
            Bids <span class="fw-bold">${listingData._count.bids}</span>
          </p>
          <p class="fw-light m-0">
            Ends <span class="fw-bold">${formatDates(listingData.endsAt)}</span>
              </p>
      </div>

        <button class="btn btn-lg py-3 w-100 btn-secondary">
          make a bid
        </button>
      </div>
    </div>
</div>`;
}

// ONE LISTING
export function renderListingTemplate(listing, parent) {
  parent.insertAdjacentHTML("beforeend", listingTemplate(listing));
}

// MULTIPLE LISTINGS
export function renderListingsTemplate(listings, parent) {
  parent.insertAdjacentHTML(
    "beforeend",
    listings.map(listingsTemplate).join("")
  );
}
