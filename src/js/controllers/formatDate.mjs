// Calculates the amount of days passed
export function formatDate(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "today";
  if (daysPassed === 1) return `in ${daysPassed} day`;
  if (daysPassed <= 2) return `in ${daysPassed} days`;

  return new Intl.DateTimeFormat(locale).format(date);
}

export function formatDates(date) {
  //   console.log(date);
  //   console.log(new Date().toISOString());
  //   console.log(Math.round(Math.abs(new Date().toISOString() - date)));

  return `${formatDate(new Date(date))} at ${new Date(
    date
  ).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`;
}

// Add the amount of bids and return the total
export function totalAmount(bids) {
  let total = 0;
  for (let i = 0; i < bids.length; i++) {
    total += bids[i].amount;
  }
  return total;
}
