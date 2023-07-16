export function normalizePath() {
  const path = location.pathname;
  const normalizedPath = path.endsWith("/") ? path.slice(0, -1) : path;
  return normalizedPath || "/";
}
