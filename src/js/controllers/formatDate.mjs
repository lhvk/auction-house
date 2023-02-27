export function formatDate(date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "today";
  if (daysPassed === 1) return "yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
}

export function formatDates(date) {
  return `${formatDate(new Date(date))} at ${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`;
}

// Add the amount of bids and return the total
export function totalAmount(bids) {
  let total = 0;
  for (let i = 0; i < bids.length; i++) {
    total += bids[i].amount;
  }
  return total;
}
