import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
  } from "react-router-dom";

function Home() {
    return (
      <div>
        App Home
      </div>
    );
  }

function About() {
  return (
    <div>
      About Page
    </div>
  );
}

function Account() {
  const myRef = React.useRef(null);

  React.useEffect(()=> {
    myRef.current.addEventListener('show', e =>
      console.log('from account')
    );
  }, []);

    return (
      <div ref={myRef}>
        My Account
      </div>
    );
  }

type AppProp = {
  name: string;
}

function App(prop: AppProp) {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/account">Account - {prop.name}</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
        </div>
      </Router>
      
    )
}

class HelloElement extends HTMLElement {
    connectedCallback() {
      const myName = this.getAttribute('my-name');
      const clickFn = eval(this.getAttribute('click'));

      // this.addEventListener('myClick', e =>{
      //   console.log('from account');
      //   clickFn(e);
      // });

      function myClick() {
        // const event = new CustomEvent('myClick', {bubbles: true, detail: {message:'inner of web component'}});
        // this.dispatchEvent(event);
        // const event = new CustomEvent('fooEvent', {bubbles: true, detail: {message:'inner of web component'}});
        // document.dispatchEvent(event);
      }

      ReactDOM.render(
        <div>
            <App name={myName}></App>
            {/* <button onClick={myClick.bind(this)}>
                Click Me!
            </button> */}
        </div>,
        this
      );
    }
  }
  
  const tagName = "hello-component";
  
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, HelloElement);
  }
