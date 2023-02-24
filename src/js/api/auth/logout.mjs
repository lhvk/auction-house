import { remove } from "../../handlers/storage.mjs";

export function logout() {
  remove("token");
  remove("profile");
}
