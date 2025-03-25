import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.info("Logged out successfully!");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
