export function loaderTemplate() {
  const loader = document.createElement("div");
  loader.setAttribute("id", "loader");
  loader.classList.add("d-flex", "justify-content-center", "align-items-center", "p-5", "mt-5");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner-grow");
  spinner.setAttribute("role", "status");
  const spinner2 = spinner.cloneNode();
  const spinner3 = spinner.cloneNode();
  const spinner4 = spinner.cloneNode();
  loader.append(spinner, spinner2, spinner3, spinner4);
  return loader;
}

export function renderLoaderTemplate(parent, loaderTemplate) {
  parent.append(loaderTemplate);
}
