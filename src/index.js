import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./styles/fontStyle.css";
import BaseStyles from "styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <BaseStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);


reportWebVitals();
