import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

ReactDOM.render(
    <BrowserRouter >
      <App />
    </BrowserRouter>,
    document.getElementById("app")
);
