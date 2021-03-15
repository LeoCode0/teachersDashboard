class SingleTeacher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "experience"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "name") {
      this.name = newVal;
    }

    if (attr === "experience") {
      this.experience = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="singleTeacher">
          <p class="name">${this.name}</p>
          <p class="experience">${this.experience}</p>
        </div>
        ${this.getStyles()}
      `;
    return template;
  }

  getStyles() {
    return `
      <style>
        :host{
            color: blue;
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

customElements.define("single-teacher", SingleTeacher);
