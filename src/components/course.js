class Course extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "classes"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "name") {
      this.name = newVal;
    }

    if (attr === "classes") {
      this.classes = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div className="course">
       <p className="course__name">${this.name}</p>
       <p className="course__classes">${this.classes}</p>
       </div>
    `;

    return template;
  }

  getStyles() {
    return `
        <styles>
          :host{
              color: yellow;
          }
        </styles/
      `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-course", Course);
