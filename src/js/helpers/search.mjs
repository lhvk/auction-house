export function search() {
  const filter = searchInput.value.toUpperCase();
  const cards = document.querySelectorAll(".listings-card");
  for (let i = 0; i < cards.length; i++) {
    const txtValue = cards[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "initial";
    } else {
      cards[i].style.display = "none";
    }
  }
}
