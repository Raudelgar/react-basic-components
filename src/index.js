import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { LoginProvider } from "./context/LoginContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>,
  rootElement
);
