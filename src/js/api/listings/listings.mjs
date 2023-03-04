import { hideLoader } from "../../ui/render.mjs";
import { API_HOST_URL } from "../constants.mjs";

const action = "/listings/";
const limit = "?limit=12";
const active = "&_active=true";

// ALL LISTINGS
export async function getListings() {
  const url = `${API_HOST_URL}${action}`;

  const response = await fetch(url);

  return response.json();
}

// FEATURED LISTINGS FOR LANDING PAGE
export async function getFeaturedListings() {
  const url = `${API_HOST_URL}${action}${limit}${active}`;

  const response = await fetch(url);
  return await response.json();
}
