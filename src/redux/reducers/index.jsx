import { combineReducers } from "redux";
import auth from "./auth";
import acs from "./acs";

export default combineReducers({
  auth,
  acs,
});
