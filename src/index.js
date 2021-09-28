import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./styles/fontStyle.css";
import BaseStyles from "styles/globalStyles";
import { AppProvider } from "context/app.context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BaseStyles />
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("app")
);

reportWebVitals();
