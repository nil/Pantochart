var header   = document.querySelector(".header-secondary"),
    button   = document.querySelector(".header-filters")
    visible  = "is-visible";

button.onclick = function () {
  header.classList.toggle(visible);
}
