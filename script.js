const toggleButton = document.getElementsByClassName("toggle-button")[0];
const links = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", navToggle);

function navToggle() {
  links.classList.toggle("active");
  toggleButton.classList.toggle("active");
}
