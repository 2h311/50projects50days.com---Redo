const navList = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);
navList.addEventListener("click", onClick);

function onClick(event) {
  const current = document.querySelector(".current");
  // remove the current class from any link currently holding it
  current.classList.remove("current");
  // add the current class to the clicked nav element
  event.target.classList.add("current");
}

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
