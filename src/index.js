import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Root from "./containers/Root";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <Route component={Root} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
