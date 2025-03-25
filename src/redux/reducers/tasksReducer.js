const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload.text, priority: action.payload.priority }];
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

export default tasksReducer;
