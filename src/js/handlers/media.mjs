export function setImageEventlistener(image) {
  image.addEventListener("error", function (event) {
    event.target.src = "../assets/rubiks.png";
    event.onerror = null;
  });
}
