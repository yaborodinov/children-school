
const header = document.querySelector(".header");

window.addEventListener("scroll", (e) => {
  (pageYOffset > 101) || !navToggler.classList.contains("collapsed") ? header.classList.add("header--dark") : header.classList.remove("header--dark");
  
})


const bntGroupLesson = document.getElementById("group-lessons-btn");
const bntIndividualLesson = document.getElementById("individual-lessons-btn");

const blockGroupLesson = document.getElementById("group-lessons-block")
const blockIndividualLesson = document.getElementById("individual-lessons-block")

bntGroupLesson.addEventListener("click",() => {
  bntGroupLesson.classList.remove("btn__submit--deactivated");
  bntIndividualLesson.classList.add("btn__submit--deactivated")
  blockGroupLesson.classList.add("price__block--active");
  blockIndividualLesson.classList.remove("price__block--active");
})


bntIndividualLesson.addEventListener("click", () => {
  bntGroupLesson.classList.add("btn__submit--deactivated");
  bntIndividualLesson.classList.remove("btn__submit--deactivated")
  blockGroupLesson.classList.remove("price__block--active");
  blockIndividualLesson.classList.add("price__block--active");
})



// header

const navToggler = document.querySelector(".navbar-toggler");

navToggler.addEventListener("click", () => {
  !navToggler.classList.contains("collapsed") ? header.classList.add("header--dark") : header.classList.remove("header--dark")
})

const navBarCollapse = document.querySelector(".navbar-collapse navigation collapse show");
const navItems = document.querySelectorAll('.nav-link');



console.log(navBarCollapse)