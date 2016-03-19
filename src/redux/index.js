import { combineReducers } from "redux";
import words from "./words";
import current from "./current";
import loading from "./loading";

export default combineReducers({loading, words, current});
