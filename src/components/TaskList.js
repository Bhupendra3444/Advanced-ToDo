import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/slices/taskSlice"; // ✅ Correct Redux actions
import { getTasksByPriority } from "../redux/selectors/taskSelectors";

import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Chip,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const priorityColors = {
  High: "error",
  Medium: "warning",
  Low: "success",
};

const TaskList = () => {
  const dispatch = useDispatch();
  
  // ✅ Ensure tasksByPriority is always an object with arrays
  const tasksByPriority = useSelector(getTasksByPriority) || { High: [], Medium: [], Low: [] };
  
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (task) => {
    setEditTaskId(task.id);
    setEditedText(task.text);
  };

  const handleSave = (id) => {
    if (editedText.trim() === "") return; // ✅ Prevent empty edits
    dispatch(editTask({ id, updatedTask: { text: editedText } }));
    setEditTaskId(null);
  };

  return (
    <Card sx={{ width: "100%", p: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Task List
        </Typography>
        {Object.entries(tasksByPriority).map(([priority, tasks]) => (
          <div key={priority}>
            <Typography variant="subtitle1">{priority} Priority</Typography>
            <List>
              {Array.isArray(tasks) && tasks.length > 0 ? ( // ✅ Ensure tasks are always an array
                tasks.map((task) => (
                  <ListItem
                    key={task.id || `${priority}-${task.text}`} // ✅ Unique key for each task
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {editTaskId === task.id ? (
                      <TextField
                        fullWidth
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                      />
                    ) : (
                      <ListItemText primary={task.text} />
                    )}
                    <Chip
                      label={task.priority}
                      color={priorityColors[task.priority]}
                      sx={{ mr: 2 }}
                    />
                    {editTaskId === task.id ? (
                      <IconButton color="primary" onClick={() => handleSave(task.id)}>
                        <SaveIcon />
                      </IconButton>
                    ) : (
                      <IconButton color="default" onClick={() => handleEdit(task)}>
                        <EditIcon />
                      </IconButton>
                    )}
                    <IconButton color="secondary" onClick={() => dispatch(deleteTask(task.id))}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))
              ) : (
                <Typography color="textSecondary">
                  No {priority.toLowerCase()} priority tasks
                </Typography>
              )}
            </List>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TaskList;
