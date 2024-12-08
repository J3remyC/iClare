
const navbar = document.querySelector(".navigation-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("navbar-padding");
    navbar.classList.add("navbar-padding-remove");
  } else {
    navbar.classList.remove("navbar-padding-remove");
    navbar.classList.add("navbar-padding");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navEl = document.querySelector(".navigation-bar");
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 56) {
      navEl.classList.add("is-scrolled");
    } else {
      navEl.classList.remove("is-scrolled");
    }
  });
});



