import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import App from "./containers/App.jsx";
import styles from "../css/handy.css";

let store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("app"));
