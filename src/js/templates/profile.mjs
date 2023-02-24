export function profileTemplate(profileData) {
  return ` 
    <div class="row g-5 py-5">
        <div class="col-lg-6">
            <img
                src="${profileData.avatar}"
                onerror="this.onerror=null; 
                this.src='/src/assets/rubiks.png'"
                class="img-fluid"
                style="object-fit: contain"
                alt="Bootstrap Themes"
                loading="lazy" />
            <button class="d-flex p-0 border-0 bg-off-white mt-1">
                <img src="/src/assets/icons/pencil-square.svg" class="me-2" />
                <p class="mb-0">Edit avatar</p>
            </button>
        </div>
    <div
      class="col-lg-4 text-secondary d-flex flex-column flex-grow-1 justify-content-start">
      <h2 class="fs-3 m-0 lh-1 text-secondary text-uppercase">
        ${profileData.name}
      </h2>
      <p class="text-muted fs-4 fw-light">${profileData.email}</p>
      <hr />

      <div class="list-group">
        <button class="btn-profile d-flex justify-content-between p-3">
          Active bids
          <span class="number">14</span>
        </button>
        <button class="btn-profile d-flex justify-content-between p-3">
          Active listings
          <span class="number">2</span>
        </button>
        <p
          class="d-flex justify-content-between text-body rounded-0 p-3">
          Credits
          <span class="number">${profileData.credits}</span>
        </p>
      </div>
    </div>
  </div>`;
}

// USER PROFILE
export function renderProfileTemplate(profile, parent) {
  parent.insertAdjacentHTML("beforeend", profileTemplate(profile));
}
