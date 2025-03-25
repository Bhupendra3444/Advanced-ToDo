import tasksReducer from "./tasksReducer";  // Match the correct file name

import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  tasks: tasksReducer,  // Fix here
});
