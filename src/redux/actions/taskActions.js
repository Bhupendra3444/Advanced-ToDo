export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});



export const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return { type: "LOAD_TASKS", payload: tasks };
};
