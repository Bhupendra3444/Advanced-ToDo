import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/authActions";
import { Button, Box } from "@mui/material";

const AuthButtons = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box>
      {isAuthenticated ? (
        <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={() => dispatch(login())}>
          Login
        </Button>
      )}
    </Box>
  );
};

export default AuthButtons;
