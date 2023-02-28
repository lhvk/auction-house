import { totalAmount } from "../controllers/formatDate.mjs";

// ONE LISTING

export function listingTemplate(listingData) {
  return `          
  <div class="row g-5 py-5">

  <div class="col-lg-8" id="listingMediaContainer"></div>

  <div class="col-lg-4 text-secondary d-flex flex-column flex-grow-1 justify-content-start gap-5">
    <div>
      <h2 class="fs-3 text-secondary text-uppercase">${listingData.title}</h2>
      <p class="fw-normal">${listingData.description}</p>
    </div>

    <div class="d-flex flex-column gap-5">
      <div class="d-flex flex-column gap-2">
        <p class="fw-light m-0">Leading bid<span class="fw-bold">
          ${totalAmount(listingData.bids)}
        </span></p> 
        <p class="fw-light m-0">Bids <span class="fw-bold">${
          listingData._count.bids
        }</span></p>
        <p class="fw-light m-0">Ends <span class="fw-bold">${
          listingData.endsAt
        }</span></p>
    </div>

    <div>
      <button class="btn btn-lg py-3 w-100 btn-secondary" data-visible="loggedIn" data-bs-toggle="modal" data-bs-target="#makeBidModal">
      make a bid
      </button>
      <button class="btn btn-lg py-3 w-100 btn-secondary" data-visible="loggedOut" data-bs-toggle="modal" data-bs-target="#loginModal">
      login to bid
      </button>
    </div>

    </div>
    
    <div
    class="seller-card card bg-transparent d-flex border-0"
  >
    <div>
      <h3 class="fs-4">Brought to you by</h3>
    </div>
    <div class="d-flex align-items-center">
      <div>
        <img
          class="rounded-circle"
          src="${
            listingData.seller.avatar
              ? listingData.seller.avatar
              : "https://picsum.photos/200/300"
          }"
          alt="Card image cap"
        />
      </div>
      <div class="card-body">
        <h4 class="m-0">${listingData.seller.name}</h4>
  <hr class="my-2"/>
   
          <p class="text-muted m-0">${listingData.seller.email}</p>
      
      </div>
    </div>
  </div>
  
  

  </div>
</div>
`;
}

export function renderListingTemplate(listing, parent) {
  parent.insertAdjacentHTML("beforeend", listingTemplate(listing));
}
