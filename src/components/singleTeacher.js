class SingleTeacher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["img", "name", "experience", "twitter"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "name") {
      this.name = newVal;
    }

    if (attr === "experience") {
      this.experience = newVal;
    }

    if (attr === "img") {
      this.img = newVal;
    }

    if (attr === "twitter") {
      this.twitter = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <div class="singleTeacher">
          <img src=${this.img} alt="${this.name}" class="image"/>
          <p class="name">${this.name}</p>
          <p class="experience">${this.experience}</p>
          <a href=${
            this.twitter
          } class="singleTeacher__twitter" target="__blank" rel="noopener noreferrer" >Twitter</a>
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

        .singleTeacher{
          display: flex;
          flex-direction: column;
          align-items:center;
          justify-content: center;
          width: 85%;
          max-width: 280px;
          margin: 0 auto;
          height: 320px;
          background-color: var(--background-color);
          border-radius: 15px;
          padding: 20px 0;
        }
        
        .image{
          height: 96px;
          width: 96px;
          border-radius: 50%;
        }

        .name{
          font-weight: 700;
          font-size: 2rem;
          margin: 20px;
        }

        .experience{
          font-size: 1.8rem;
          font-weight:  500;
          text-align: center;
          margin: 0 0 20px 0;
          max-width: 180px;
        }

        @media screen and (min-width: 768px){
          .singleTeacher{
            margin: 0;
            width: 330px;
          }
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
