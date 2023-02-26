import { API_HOST_URL } from "../constants.mjs";
import { authFetch, headers } from "../fetch.mjs";

const action = "/profiles/";
const method = "get";

export async function getProfile(name) {
  const loginURL = `${API_HOST_URL}${action}${name}`;

  const response = await authFetch(loginURL, {
    method,
    headers: headers(),
  });
  return await response.json();
}
