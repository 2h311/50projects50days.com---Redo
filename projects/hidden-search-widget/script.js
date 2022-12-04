const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".search__input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
