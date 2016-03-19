import { combineReducers } from "redux";
import words from "./words";
import current from "./current";

export default combineReducers({words, current});
