class CourseTeacher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["num", "month", "day"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "num") {
      this.num = newVal;
    }

    if (attr === "month") {
      this.month = newVal;
    }

    if (attr === "day") {
      this.day === newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class=""></div>
      `;
    return template;
  }

  getStyles() {
    return `
        <style>
          :host{
              color: red;
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

customElements.define("course-teacher", CourseTeacher);
