import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { TextField, Button, Box } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      toast.error("Please enter valid credentials!");
      return;
    }

    const dummyUser = { name: username };
    const dummyToken = "mock_token_123";

    dispatch(login({ user: dummyUser, token: dummyToken }));
    toast.success("Login successful!");
  };

  return (
    <Box>
      <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;
