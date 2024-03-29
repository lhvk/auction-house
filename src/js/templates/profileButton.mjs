export function profileButtonTemplate() {
  const link = document.createElement("a");
  link.href = "../profile";
  link.classList.add("profile-button");
  const icon = new Image();
  icon.src = "../assets/icons/person-fill.svg";
  icon.alt = "Your profile";
  link.append(icon);
  return link;
}

export function renderProfileButtonTemplate() {
  document.querySelector("#profileLink").append(profileButtonTemplate());
}
