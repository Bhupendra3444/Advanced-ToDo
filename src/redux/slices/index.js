import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // Ensure correct import

// ✅ Combine all slices here
const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
