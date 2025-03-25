export const login = (username) => {
  localStorage.setItem("auth", JSON.stringify({ isAuthenticated: true, username }));
  return { type: "LOGIN", payload: username };
};

export const logout = () => {
  localStorage.removeItem("auth");
  return { type: "LOGOUT" };
};

export const checkAuth = () => {
  const auth = JSON.parse(localStorage.getItem("auth")) || { isAuthenticated: false };
  return { type: "CHECK_AUTH", payload: auth };
};
