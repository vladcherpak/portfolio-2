const menuBtn = document.querySelector(".menu__btn");
const navList = document.querySelector(".nav__list");
console.log(menuBtn);
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navList.classList.toggle("nav__active");
});
