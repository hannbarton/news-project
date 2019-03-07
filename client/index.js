import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

ReactDOM.render(
  <Provider>
    <BrowserRouter >
      <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);
