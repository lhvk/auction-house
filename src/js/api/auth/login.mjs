import { API_HOST_URL } from "../constants.mjs";
import * as storage from "../../handlers/storage.mjs";
import { renderLogin } from "../ui/render.mjs";

const action = "/auth/login";
const method = "post";

export async function loginUser(profile) {
  const loginURL = API_HOST_URL + action;
  const body = JSON.stringify(profile);
  const loginModal = bootstrap.Modal.getOrCreateInstance("#loginModal");

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();
  storage.save("token", accessToken);
  storage.save("profile", user);

  if (accessToken) {
    alert("You are now logged in");
    loginModal.hide();
    renderLogin();
  } else alert("Wrong password or username");
}
