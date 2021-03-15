class Teacher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "courses", "students"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
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
            <img src="https://picsum.photos/300" alt="Teacher" class="teacher__image"/>
            <p class="teacher__name">${this.name}</p>
          </div>
          <div class="teacher__courses">
            <p className="teacher__totalCourses">${this.courses}</p>
            <p className="teacher__students">${this.students}</p>
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
        </style>
      `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-teacher", Teacher);
