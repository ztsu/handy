import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export default function configure() {
  return compose(applyMiddleware(thunk))(createStore)(reducer);
}
