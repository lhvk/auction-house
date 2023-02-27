import { getSearchParams } from "../../router/searchParams.mjs";
import { API_HOST_URL } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

const action = "/listings/";
const bids = "/bids";
const method = "post";

export async function bidOnListing(bid) {
  const { id } = getSearchParams();
  const url = `${API_HOST_URL}${action}${id}${bids}`;

  bid.amount = Number(bid.amount);

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(bid),
  });

  const result = await response.json();

  if (response.ok) {
    alert(`Your bid was registered. Thank you for bidding`);
    location.reload();
  } else {
    result.errors.forEach((x) => alert(`Failed to register bid: ${x.message}`));
  }
  return result;
}
