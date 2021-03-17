import "./components/teacher.js";
import "./components/singleTeacher.js";
import "./components/course.js";
import "./components/courseTeacher.js";

const courseButton = document.querySelector(".courses__button");
const addButton = document.querySelector(".modal__button");
const formCourse = document.querySelector(".modal__form");
const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".modal__close");

formCourse.onsubmit = (e) => {
  e.preventDefault();
};

const showModal = () => {
  modal.style.display = "flex";
};

const closeModal = () => {
  modal.style.display = "none";
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

addButton.addEventListener("click", addCourse);
courseButton.addEventListener("click", showModal);
buttonCloseModal.addEventListener("click", closeModal);
