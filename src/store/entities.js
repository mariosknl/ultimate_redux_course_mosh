import { combineReducers } from "redux";
import bugReducer from "./bugs";
import projectReducer from "./projects";
import usersReducer from "./users";

export default combineReducers({
  bugs: bugReducer,
  projects: projectReducer,
  users: usersReducer,
});
