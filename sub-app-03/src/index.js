class HelloElement extends HTMLElement {
  constructor () {
      super();
  }

  connectedCallback() {
    const shadowEle = this.attachShadow({ mode: 'open' });
    shadowEle.innerHTML = `
      <p>Hello from Web Component!</p>
    `;     
  }
}

const tagName = "x-component";

if (!window.customElements.get(tagName)) {
  window.customElements.define(tagName, HelloElement);
}
