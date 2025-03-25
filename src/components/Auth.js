import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/actions/authActions";
import { Button, Box, Typography, TextField } from "@mui/material";

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
    }
  };

  return (
    <Box textAlign="center" p={2}>
      {auth.isAuthenticated ? (
        <>
          <Typography variant="h6">Welcome, {auth.username}!</Typography>
          <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </>
      )}
    </Box>
  );
};

export default Auth;
