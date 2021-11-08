let burger = document.querySelector(".burger");
let list = document.querySelector(".list");

burger.addEventListener("click", () => {
  list.classList.toggle("activeNav");
});
