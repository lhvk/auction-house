export function dateCountDown(date) {
  const date1 = new Date();
  const date2 = new Date(date);
  const diff = new Date(date2.getTime() - date1.getTime());

  const years = diff.getUTCFullYear() - 1970; // Gives difference as year
  const months = diff.getUTCMonth(); // Gives month count of difference
  const days = diff.getUTCDate() - 1; // Gives day count of difference

  if (years) return `${years} years, ${months} months and ${days} days remaining`;
  if (months) return `${months} months and ${days} days remaining`;
  if (days) return `${days} days remaining`;
}
