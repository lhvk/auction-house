import { totalAmount } from "../controllers/formatDate.mjs";

// ONE LISTING

export function listingTemplate(listingData) {
  return `          
  <div class="row g-5 py-5">
  <div class="col-lg-6">
    <img
      src="${listingData.media}"
      onerror="this.onerror=null; 
        this.src='/src/assets/rubiks.png'"
      class="img-fluid"
      alt="Image of the listing for sale" />
  </div>
  <div class="col-lg-4 text-secondary d-flex flex-column flex-grow-1 justify-content-start">
    <div>
      <h2 class="fs-3 text-secondary text-uppercase">${listingData.title}</h2>
      <p class="fw-light">${listingData.description}</p>
    </div>

    <div class="d-flex flex-column gap-4">
      <div>
        <p class="fw-light m-0">Leading bid</p>
        <p class="fw-bold m-0">${totalAmount(listingData.bids)}</p>
      </div>
      <div>
        <p class="fw-light m-0">Bids <span class="fw-bold">${listingData._count.bids}</span></p>
        <p class="fw-light m-0">Ends <span class="fw-bold">${listingData.endsAt}</span></p>
      </div>

      <button class="btn btn-lg py-3 w-100 btn-secondary" data-visible="loggedIn">make a bid</button>
      <button class="btn btn-lg py-3 w-100 btn-secondary" data-visible="loggedOut" data-bs-toggle="modal" data-bs-target="#loginModal">
        login to make a bid
      </button>
    </div>
  </div>
</div>
`;
}

export function renderListingTemplate(listing, parent) {
  parent.insertAdjacentHTML("beforeend", listingTemplate(listing));
}
