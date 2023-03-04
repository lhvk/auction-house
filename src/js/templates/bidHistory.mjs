export function bidHistoryTemplate(bids) {
  const li = document.createElement("li");
  li.textContent = `${bids.amount} at ${new Date(bids.created).toLocaleString()} by ${bids.bidderName}`;
  return li;
}

export function renderbidHistoryTemplate(bids, parent) {
  parent.append(bidHistoryTemplate(bids));
}
