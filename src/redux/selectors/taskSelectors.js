import { createSelector } from "reselect";

// ✅ Ensure we always return the same reference for same input
export const getTasksByPriority = createSelector(
  [(state) => state.tasks.tasks], // Get tasks from state
  (tasks) => {
    return {
      High: tasks.filter((task) => task.priority === "High"),
      Medium: tasks.filter((task) => task.priority === "Medium"),
      Low: tasks.filter((task) => task.priority === "Low"),
    };
  }
);
