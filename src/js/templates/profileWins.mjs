export function profileWinsTemplate(wins) {
  return `
  <li>
  <a
    href="../listing/?id=${wins.id}"
    class="seller-card card bg-transparent d-flex border-0"
  >
    <div class="d-flex align-items-center">
      <div>
        <img src="${wins.media[0]}" alt="Image of ${wins.title}" />
      </div>
      <div class="card-body">
        <h4 class="m-0">${wins.title}</h4>
        <hr class="my-2" />

        <p class="text-body m-0">
          Created
          <span class="fw-bold">
            ${new Date(wins.created).toDateString()}
          </span>
        </p>
        <p class="text-body m-0">
          Ended
          <span class="fw-bold"> ${new Date(wins.endsAt).toDateString()} </span>
        </p>
      </div>
    </div>
  </a>
</li> `;
}

export function renderProfileWinsTemplate(wins, parent) {
  parent.insertAdjacentHTML("beforeend", profileWinsTemplate(wins));
}
