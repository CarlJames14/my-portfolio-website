const menu = document.querySelector("#menu");
const header = document.querySelector(".header");
const headerLinks = document.querySelector(".header__links");

menu.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    headerLinks.classList.add("close");
  } else {
    header.classList.add("open");
    headerLinks.classList.remove("close");
  }
});
