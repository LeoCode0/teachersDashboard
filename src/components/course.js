class Course extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["image", "name", "classes"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "image") {
      this.image = newVal;
    }

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
      <div class="course">
        <img src=${this.image} alt="Course logo" class="course__image"/>
        <div class="course__details">
          <p class="course__name">${this.name}</p>
          <p class="course__classes">${this.classes} Clases</p>
        </div>
        <button class="delete">X</button>
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

          .course{
            display:flex;
            align-items: center;
            width: 100%;
            justify-content: flex-start;
            margin: 20px 0;
            position: relative;
          }

          .course__image{
            height: 56px;
            width: 56px;
            border-radius: 50%;
          }

          .course__details{
            margin-left: 20px;
            vertical-align: middle;
          }

          .course__name{
            font-size: 1.8rem;
            font-weight: 700;
            margin: 5px 0;
          }

          .course__classes{
            font-size: 1.6rem;
            font-weight: 600;
            opacity: 0.4;
          }

          .delete{
            position: absolute;
            font-size: 2rem;
            top: 5px;
            right: 10px;
            border: 0;
            background: transparent;
          }

        </style>
      `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
    this.shadowRoot
      .querySelector(".delete")
      .addEventListener("click", () => this.shadowRoot.host.remove());
  }
}

customElements.define("my-course", Course);
