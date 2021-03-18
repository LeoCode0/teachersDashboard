class CourseTeacher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.counter = 0;
  }

  static get observedAttributes() {
    return ["logo", "level", "name"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "logo") {
      this.logo = newVal;
    }

    if (attr === "level") {
      this.level = newVal;
    }

    if (attr === "name") {
      this.name = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
    <div class="container">
        <div class="course">
          <img src=${this.logo} alt="Logo" class="course__logo"/>
          <div class="course__info">
            <p class="course__level">${this.level}</p>
            <p class="course__name">${this.name}</p>
          </div>
        </div>
        <div class="add">
          <button class="add__button">
            Agregar a mi ruta de aprendizaje 
          </button>
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
          }
          *{
            margin: 0;
            padding: 0;
          }

          .container{

            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px auto;
            width: 90%;
          }

          .course{
            display:flex;
            width: 200px;
            align-items:center;
            justify-content: space-around;
            border: 1px solid #000;
            border-radius: 15px;
            padding: 15px;
          }

          .course__logo{
            width: 76px;
            height: 76px;
            border-radius: 50%;
          }

          .course__info{
            overflow: hidden;
            max-width: max-content;
            text-align: center;
            font-size: 1.6rem;
            margin-left: 10px;
          }

          .course__info p{
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
          }

          .course__name{
            font-weight: 700;
          }

          .add__button{
            border: 0;
            background: transparent;
            width: 100px;
          }
        </style>
      `;
  }

  render() {
    const addCourse = () => {
      if (this.counter === 1) {
        return;
      }
      const myCourses = document.querySelector(".courses__list");
      const course = document.createElement("my-course");
      course.setAttribute("name", this.name);
      course.setAttribute("image", this.logo);
      course.setAttribute("classes", 10);
      myCourses.prepend(course);
      this.counter = 1;
    };

    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    this.shadowRoot.querySelector(".add").addEventListener("click", addCourse);
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("course-teacher", CourseTeacher);
