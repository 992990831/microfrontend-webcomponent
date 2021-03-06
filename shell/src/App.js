
import * as React from 'react';
import ReactDOM from 'react-dom';
import { useScript } from "./useScript";

const config = {
  app01: {tag: 'hello-component', url: 'http://localhost:5001/bundle' },
  app02: {tag: 'sub-app-02', url: 'http://localhost:5002/bundle' },
  app03: {tag: 'x-component', url: 'http://localhost:5003/bundle' }
}

// function SubApp01() {
//   const externalScript = "http://localhost:5001/bundle";
//   const loadingState = useScript(externalScript);
//   return(
//     <div>
//       {loadingState === "loading" && <p>Loading...</p>}
//       {loadingState === "ready" && <hello-component my-name="Andy" />}
//     </div>
//   );
// }

// function SubApp02() {
//   const externalScript = "http://localhost:5002/bundle";
//   const loadingState = useScript(externalScript);
//   return(
//     <div>
//       {loadingState === "loading" && <p>Loading...</p>}
//       {loadingState === "ready" && <sub-app-02 />}
//     </div>
//   );
// }

function SubApp(props) {
  const externalScript = config[props.appId].url;
  const Tag = config[props.appId].tag;
  const loadingState = useScript(externalScript);
    return(
    <div>
      {loadingState === "loading" && <p>Loading...</p>}
      {loadingState === "ready" && <Tag />}
    </div>
  );
}

const app01 = 'app01';
const app02 = 'app02';
const app03 = 'app03';

// function SubApp() {
//   return (
//     <div>
//       Sub-App
//     </div>
//   )
// }

// class HelloElement extends HTMLElement {
//   connectedCallback() {
//     const myName = this.getAttribute('my-name');

//     const shadowEle = this.attachShadow({ mode: 'open' });
//     ReactDOM.render(
//       <div id='sub-app'>
//           <SubApp></SubApp>
//       </div>,
//       shadowEle
//     );
//   }
// }

// const tagName = "sub-app";

// if (!window.customElements.get(tagName)) {
//   window.customElements.define(tagName, HelloElement);
// }

function App() {
  const [app, setApp] = React.useState(app01);

  return (
    <div className="App">
      
      
      <input type='button' value='Sub-App 01' onClick={()=> setApp(app01)} />
      <input type='button' value='Sub-App 02' onClick={()=> setApp(app02)} />
      <input type='button' value='Sub-App 03' onClick={()=> setApp(app03)} />
      <hr />
      {
        <SubApp appId={app}></SubApp>
      } 
    </div>
  );
}

export default App;
