import { logout } from "../api/auth/logout.mjs";
import { renderLogin } from "../api/ui/render.mjs";

export function setLogoutListener() {
  document.querySelector("#logoutBtn").addEventListener("click", (event) => {
    event.preventDefault();
    logout();
    alert("Your now logged out");
    renderLogin();
  });
}
