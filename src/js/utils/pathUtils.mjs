const path = location.pathname;
export function normalizePath() {
  const normalizedPath = path.endsWith("/") ? path.slice(0, -1) : path;
  return normalizedPath || "/";
}
