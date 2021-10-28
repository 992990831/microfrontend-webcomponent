import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
      <div>
        Sub-App 02
      </div>
    )
}

class HelloElement extends HTMLElement {
    connectedCallback() {
      const myName = this.getAttribute('my-name');

      const shadowEle = this.attachShadow({ mode: 'open' });
      ReactDOM.render(
        <div id='sub-app-02'>
            <App></App>
        </div>,
        shadowEle
      );
    }
  }
  
  const tagName = "sub-app-02";
  
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, HelloElement);
  }
