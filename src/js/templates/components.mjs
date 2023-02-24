export function loginButtonTemplate() {
  return `<button 
            id="loginBtn" 
            class="btn btn-lg btn-dark"
            data-bs-toggle="modal" data-bs-target="#loginModal">
            login
        </button>`;
}

export function buttonTemplate(buttonText, type, value, ...classNames) {
  const button = document.createElement("button");
  button.classList.add(...classNames);
  button.setAttribute(type, value);
  button.innerText = buttonText;
  return button;
}
