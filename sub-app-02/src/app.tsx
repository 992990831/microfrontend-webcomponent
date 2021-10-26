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
     
      ReactDOM.render(
        <div>
            <App></App>
        </div>,
        this
      );
    }
  }
  
  const tagName = "sub-app-02";
  
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, HelloElement);
  }
