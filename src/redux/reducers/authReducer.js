const initialState = JSON.parse(localStorage.getItem("auth")) || { isAuthenticated: false };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("auth", JSON.stringify({ isAuthenticated: true }));
      return { isAuthenticated: true };
    case "LOGOUT":
      localStorage.setItem("auth", JSON.stringify({ isAuthenticated: false }));
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
