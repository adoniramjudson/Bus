import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import bus from "./bus";

export default combineReducers({ alert, auth, bus });
