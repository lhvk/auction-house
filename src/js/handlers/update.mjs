import { updateAvatar } from "../api/profile/update.mjs";

export function setUpdateAvatarListener() {
  const updateAvatarForm = document.querySelector("#updateAvatar");

  updateAvatarForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const avatar = Object.fromEntries(formData.entries());

    updateAvatar(avatar);
  });
}
