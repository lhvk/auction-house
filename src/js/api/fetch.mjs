import { load } from "../handlers/storage.mjs";

export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// Authorized fetch
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}

// Fetch
export async function useFetch(url) {
  return fetch(url);
}
