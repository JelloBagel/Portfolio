import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import history from "./utils/history";

// Import root app
import App from "./app/App";
import "./styles/index.scss";

import { IntlProvider } from "react-intl";

import configureStore from "./configureStore";
import * as serviceWorker from "./serviceWorker";

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </IntlProvider>
    </Provider>,
    MOUNT_NODE
  );
};

render();

serviceWorker.unregister();
