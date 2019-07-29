import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import loadable from "./Loadable";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
