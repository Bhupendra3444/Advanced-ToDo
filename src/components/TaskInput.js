import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    dispatch(addTask({ text: taskText, priority }));
    setTaskText(""); // Clear input
    setPriority("Medium"); // Reset priority
  };

  return (
    <div>
      <TextField
        fullWidth
        label="New Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        sx={{ mb: 4 }}
      />

      {/* ✅ Priority Dropdown with Proper Spacing */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: 2 }}>
        <InputLabel sx={{ fontSize: "16px", fontWeight: 500 }}>Priority</InputLabel>
        <FormControl sx={{ minWidth: 150 }}>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            sx={{ width: "100%", height: "48px", borderRadius: "8px" }}
          >
            <MenuItem value="High">High</MenuItem>  
            <MenuItem value="Medium">Medium</MenuItem>  
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;
