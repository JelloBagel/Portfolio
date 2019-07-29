import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import loadable from "./Loadable";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Router>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            exact
            component={loadable("HomePage")}
          />
          {/* <Route path="/about" component={loadable("AboutPage")} /> */}
          {/* <Route path="/features" component={loadable("FeaturePage")} /> */}
          {/* <Route component={loadable("NotFoundPage")} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
