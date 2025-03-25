import React from "react";
import { ListItem, ListItemText, IconButton, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Priority colors mapping
const priorityColors = {
  High: "error",
  Medium: "warning",
  Low: "success",
};

const TaskItem = React.memo(({ task, onDelete }) => {
  return (
    <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
      <ListItemText primary={task.text} />
      <Chip label={task.priority} color={priorityColors[task.priority]} sx={{ mr: 2 }} />
      <IconButton color="secondary" onClick={() => onDelete(task.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
});

export default TaskItem;
