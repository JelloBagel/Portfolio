import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import HomePage from "../containers/HomePage";
import AboutPage from "../containers/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <React.Fragment>
            <Header />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={3000}
                appear
              >
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route
                    path={process.env.PUBLIC_URL + "/about"}
                    component={AboutPage}
                  />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <Footer />
          </React.Fragment>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
