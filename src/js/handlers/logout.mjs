import { logout } from "../api/auth/logout.mjs";
import { renderLogin } from "../ui/render.mjs";

export function setLogoutListener() {
  document.querySelector("#logoutBtn").addEventListener("click", (event) => {
    event.preventDefault();
    logout();
    alert("You're now logged out");
    if (location.pathname === "/profile.html") {
      window.location.replace("/index.html");
    }
    renderLogin();
  });
}
