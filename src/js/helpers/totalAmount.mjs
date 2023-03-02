// Add the amount of bids and return the total
export function totalAmount(bids) {
  let total = 0;
  for (let i = 0; i < bids.length; i++) {
    total += bids[i].amount;
  }
  return total;
}
