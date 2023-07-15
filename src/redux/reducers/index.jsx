import { combineReducers } from "redux";
import auth from "./auth";
import acs from "./acs";
import ashop from "./ashop";

export default combineReducers({
  auth,
  acs,
  ashop,  
});
