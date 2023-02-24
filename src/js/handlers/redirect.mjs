export function goBack() {
  document.querySelector("#goBack").addEventListener("click", () => {
    history.back();
  });
}
