import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import { load } from "./redux/words";
import App from "./containers/App.jsx";
import styles from "../css/handy.css";

let store = configureStore();
let { words } = store.getState();

if (words.length === 0) {
  store.dispatch(load());
}

ReactDOM.render(<App store={store}/>, document.getElementById("app"));
