import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import DevTools from "../containers/DevTools.jsx";
import reducers from "./index";

export default function() {
  return compose(applyMiddleware(thunk), DevTools.instrument())(createStore)(reducers);
}
