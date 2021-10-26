import * as React from 'react';
import { useScript } from "./useScript";

function SubApp01() {
  const externalScript = "http://localhost:5001/bundle";
  const loadingState = useScript(externalScript);
  return(
    <div>
      {loadingState === "loading" && <p>Loading...</p>}
      {loadingState === "ready" && <hello-component my-name="Andy" />}
    </div>
  );
}

function SubApp02() {
  const externalScript = "http://localhost:5002/bundle";
  const loadingState = useScript(externalScript);
  return(
    <div>
      {loadingState === "loading" && <p>Loading...</p>}
      {loadingState === "ready" && <sub-app-02 />}
    </div>
  );
}

const app01 = 'app01';
const app02 = 'app02';

function App() {
  const [app, setApp] = React.useState(app01);

  return (
    <div className="App">
      Shell App
      <br />
      <input type='button' value='Sub-App 01' onClick={()=> setApp(app01)} />
      <input type='button' value='Sub-App 02' onClick={()=> setApp(app02)} />
      <hr />
      {
        app === app01? <SubApp01></SubApp01> : <SubApp02></SubApp02>
      }
    </div>
  );
}

export default App;
