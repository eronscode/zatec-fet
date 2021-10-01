import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/fontStyle.css";
import BaseStyles from "styles/globalStyles";
import { AppProvider } from "context/app.context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BaseStyles />
      <App />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("app")
);


