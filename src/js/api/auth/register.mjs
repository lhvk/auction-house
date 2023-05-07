import { API_HOST_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function registerUser(profile) {
  const registerURL = API_HOST_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  if (response.ok) {
    alert(`User successfully created. You can now log in`);
    window.location.replace("/home");
  } else {
    result.errors.forEach((x) => alert(`Failed to register user: ${x.message}`));
  }
  return result;
}
