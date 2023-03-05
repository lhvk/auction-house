export function profileTemplate(profileData) {
  return ` 
  <div class="row g-5 py-5">
  <div class="col-lg-6">
    <img
      src="${profileData.avatar}"
      onerror="this.onerror=null; 
          this.src='/src/assets/rubiks.png'"
      class="img-fluid"
      alt="Profile image for ${profileData.name}"
      loading="lazy" />
    <button class="d-flex p-0 border-0 bg-off-white mt-1" data-bs-toggle="modal" data-bs-target="#updateAvatarModal">
      <img src="/src/assets/icons/pencil-square.svg" class="me-2" />
      <p class="mb-0">Edit avatar</p>
    </button>
  </div>
  <div class="col-lg-4 text-secondary d-flex flex-column flex-grow-1 justify-content-start">
    <h2 class="fs-3 m-0 lh-1 text-secondary text-uppercase">${profileData.name}</h2>
    <p class="text-muted fs-5 fw-light">${profileData.email}</p>
    <hr />

    <div class="list-group">
      <button
        class="btn-profile d-flex justify-content-between py-4 px-3 active"
        id="nav-active-listings-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-active-listings"
        type="button"
        role="tab"
        aria-controls="nav-active-listings"
        aria-selected="true">
        Total listings
        <span class="number">${profileData.listings.length}</span>
      </button>

      <button
        class="btn-profile d-flex justify-content-between py-4 px-3"
        id="nav-wins-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-wins"
        type="button"
        role="tab"
        aria-controls="nav-wins"
        aria-selected="false">
        Wins
        <span class="number">${profileData.wins.length}</span>
      </button>

      <p class="d-flex justify-content-between text-body fw-bold p-3">
        Credits
        <span class="text-secondary fw-bold">${profileData.credits}</span>
      </p>
    </div>

    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-active-listings" role="tabpanel" aria-labelledby="nav-active-listings-tab" tabindex="0">
        <h4 class="text-capitalize">Active listings</h4>

        <ul id="activeListings"></ul>

        <h4 class="text-capitalize">Expired listings</h4>
        <ul id="inActiveListings"></ul>
      </div>

      <div class="tab-pane fade" id="nav-wins" role="tabpanel" aria-labelledby="nav-wins-tab" tabindex="0">
        <h4>Wins</h4>

        <ul id="wins"></ul>
      </div>
    </div>
  </div>
</div>
`;
}

// USER PROFILE
export function renderProfileTemplate(profile, parent) {
  parent.insertAdjacentHTML("beforeend", profileTemplate(profile));
}
