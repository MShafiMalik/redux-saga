import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { apiCallReducer } from "./apiCallReducer";

export default combineReducers({ counterReducer, apiCallReducer });
