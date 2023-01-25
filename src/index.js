import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
//----
import "./index.css";
import App from "./App";
import { store } from "./Store/index";
//---

const el = document.getElementById("root");

const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
