import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/authSlice"; // Ensure correct import
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // ✅ Check auth state

  const handleAuth = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
        <Button color="inherit" onClick={handleAuth}>
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
