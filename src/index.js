import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.querySelector("#root")
);
