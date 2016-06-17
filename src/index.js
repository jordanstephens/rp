import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app";
import store from "./store";

const provider = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(provider, document.getElementById("app-container"));
