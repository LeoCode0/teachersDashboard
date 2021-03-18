class Teacher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.experience = this.getAttribute("experience") || "Professor at Platzi";
    this.twitter = this.getAttribute("twitter") || "https://twitter.com";
  }

  static get observedAttributes() {
    return ["name", "courses", "students", "img"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "img") {
      this.img = newVal;
    }

    if (attr === "name") {
      this.name = newVal;
    }

    if (attr === "courses") {
      this.courses = newVal;
    }

    if (attr === "students") {
      this.students = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="teacher" >
          <div class="teacher__details">
            <img src=${this.img} alt=${this.name} class="teacher__image"/>
            <p class="teacher__name">${this.name}</p>
            <span class="teacher__edit">..</span>
          </div>
          <div class="teacher__courses">
            <p class="teacher__totalCourses">${this.courses} Cursos</p>
            <p class="teacher__students">${this.students} Estudiantes</p>
          </div>
          <div class="edit">
            <h2 class="title">
              Editar datos del profesor
            </h2>
            <form class="edit__form">
              <label for="name" class="edit__label">Nombre del profesor</label>
              <input name="name" type="text" class="edit__label"/>
              <label for="courses" class="edit__input">Cursos</label>
              <input type="text" class="edit__label"/>
              <label for="students" class="edit__input">Estudiantes</label>
              <input type="text" class="edit__label"/>
              <button type="submit" class="edit__button">Editar</button>
            </form>
          </div>
          <div class="options">
          <div class="options__close">
            <span class="close">x</span>
          </div>
            <h2 class="options__title">
              ¿Qué deseas hacer?
            </h2>
            <button class="options__edit">Editar</button>
            <button class="options__delete">X Eliminar</button>
          </div>
        </div>
      ${this.getStyles()}
      `;
    return template;
  }

  getStyles() {
    return `
        <style>
          :host{
            --background-color: #f2f5fa;
          }
          
          .teacher{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            border-radius: 20px;
            width: 230px;
            padding: 20px;
            margin: 20px;
            position: relative;
          }

          .teacher:hover{
            background: var(--background-color);
            cursor: pointer;
          }

          .teacher__details{
            display: flex;
            align-items: center;
          }

          .teacher__image{
            height: 56px;
            width: 56px;
            border-radius: 50%;
            margin-right: 25px;
          }

          .teacher__name{
            font-weight: 700;
            font-size: 1.8rem;
          }

          .teacher__edit{
            position: absolute;
            top: 5px;
            right:25px;
            font-size: 2rem;
            font-weight: 700
          }

          .teacher__courses{
            display: flex;
            width: 300px;
            justify-content: space-around;
            font-size: 1.7rem;
            color: rgba(0, 0, 0, 0.5);
          }

          .options{
            display: none
          }

          .edit{
            display: none;
          }

          @media screen and (min-width: 768px){
            .teacher{
              width: 85%;
              justify-content: flex-start;
              margin: 0 auto;
            }

            .teacher__details{
              width: 260px;
            }
          }

        </style>
      `;
  }

  render() {
    const shareInfo = () => {
      const teacherContainer = document.querySelector(".teacherInfo");
      const singleTeacher = document.createElement("single-teacher");
      const teacherToDelete = document.querySelector("single-teacher");
      teacherToDelete.remove();
      singleTeacher.setAttribute("name", this.name);
      singleTeacher.setAttribute("img", this.img);
      singleTeacher.setAttribute("experience", this.experience);
      singleTeacher.setAttribute("twitter", this.twitter);
      teacherContainer.prepend(singleTeacher);
    };

    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    this.shadowRoot
      .querySelector(".teacher")
      .addEventListener("click", shareInfo);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".teacher")
      .removeEventListener("click", shareInfo);
  }
}

customElements.define("my-teacher", Teacher);
