import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
import { load } from "../../handlers/storage.mjs";

const action = "/profiles";
const method = "put";
const modal = bootstrap.Modal.getOrCreateInstance("#updateAvatarModal");

export async function updateAvatar(avatar) {
  const { name } = load("profile");
  const media = "media";
  const updateAvatarURL = `${API_HOST_URL}${action}/${name}/${media}`;

  const response = await authFetch(updateAvatarURL, {
    method,
    body: JSON.stringify(avatar),
  });

  if (response.ok) {
    alert(`Avatar successfully updated`);
    modal.hide();
    await response.json();
    location.reload();
  } else {
    result.errors.forEach((x) => alert(`Failed to update avatar: ${x.message}`));
  }
}
