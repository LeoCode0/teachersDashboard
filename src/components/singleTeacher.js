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
          <img src="https://picsum.photos/340" alt="${
            this.name
          }" class="image"/>
          <p class="name">${this.name}</p>
          <p class="experience">${this.experience}</p>
          <a href="https://twitter.com/LeoCode0" class="singleTeacher__twitter" target="__blank" rel="noopener noreferrer" >Twitter</a>
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
