import "./components/teacher.js";
import "./components/singleTeacher.js";
import "./components/course.js";
import "./components/courseTeacher.js";

const courseButton = document.querySelector(".courses__button");
const addButton = document.querySelector(".modal__button");
const formCourse = document.querySelector(".modal__form");
const modal = document.querySelector("#modal");
const buttonCloseModal = document.querySelector(".modal__close");
const navbar = document.querySelector(".nav");
const buttonNav = document.querySelector(".nav__close");
const buttonShowNav = document.querySelector(".header__nav");

formCourse.onsubmit = (e) => {
  e.preventDefault();
};

const showModal = () => {
  modal.style.display = "flex";
};

const closeModal = () => {
  modal.style.display = "none";
};

const showNavbar = () => {
  navbar.style.transform = "translateX(1vw)";
};

const hideNavbar = () => {
  navbar.style.transform = "translateX(-100vw)";
};

const addCourse = () => {
  const name = document.querySelector("#course").value;
  const classes = document.querySelector("#classes").value;
  const img = document.querySelector("#image").value;

  const listOfCourses = document.querySelector(".courses__list");
  const myCourse = document.createElement("my-course");
  if (name.length === 0) {
    return;
  }
  if (classes.length === 0) {
    return;
  }
  if (img.length === 0) {
    return;
  }
  myCourse.setAttribute("name", name);
  myCourse.setAttribute("classes", classes);
  myCourse.setAttribute("image", img);
  console.log(myCourse);
  listOfCourses.appendChild(myCourse);
  closeModal();
};

buttonNav.addEventListener("click", hideNavbar);
buttonShowNav.addEventListener("click", showNavbar);
addButton.addEventListener("click", addCourse);
courseButton.addEventListener("click", showModal);
buttonCloseModal.addEventListener("click", closeModal);
