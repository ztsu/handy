import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./index";

export default function() {
  return compose(applyMiddleware(thunk))(createStore)(reducers);
}
