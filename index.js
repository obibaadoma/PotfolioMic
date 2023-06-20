const hamburger = document.querySelector("#menu");
const navMenu = document.querySelector(".mobile-link");

hamburger.addEventListener("click", () => {
  hamburger.classlist.toggle("active");
  navMenu.classList.toggle("active");
  })

document.querySelectorAll(".mobile.link").forEach(n=> n.
addEventListener("click", () => {
hamburger.classList.remove("active");
navMenu.classList.remove("active");

}))