import { load } from "../handlers/storage.mjs";
import { getProfile } from "../api/profile/profile.mjs";
import { renderProfileTemplate } from "../templates/index.mjs";

export async function profilePage() {
  const profile = load("profile");
  const profileData = await getProfile(profile.name);
  const profileContainer = document.querySelector("#profileContainer");
  renderProfileTemplate(profileData, profileContainer);
}
