import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function TaskForm({ newTask, setNewTask }) {
  const [addTask, setAddTask] = useState("");
  const [taskError, setTaskError] = useState("");
  const [showAlert, setShowAlert] = useState(false); 

  function handleNewTask(e) {
    const taskValue = e.target.value;
    setAddTask(taskValue);

    if (taskValue.trim() === "") {
      setTaskError("Please enter a task.");
      setShowAlert(true);
    } else if (taskValue.length > 15) {
      setTaskError("Maximum 15 characters allowed for the task.");
      setShowAlert(true);
    } else {
      setTaskError("");
    }
  }

  function addNewTask() {
    if (!addTask.trim() || taskError) {
      setTaskError("The task field can't be empty or longer than 15 characters.");
      setShowAlert(true); 
      return;
    }

    const newTaskDetails = {
      id: crypto.randomUUID(), 
      addTask: addTask
    };

    setNewTask(prevTasks => [...prevTasks, newTaskDetails]);
    localStorage.setItem("newTask", JSON.stringify([...newTask, newTaskDetails]));
    setAddTask("");
    setShowAlert(false); 
  }

  return (
    <Box component="form" sx={{ '& > :not(style)': { m: 1} }}>
      <TextField
        id="task"
        label="Write a new task"
        variant="outlined"
        onChange={handleNewTask}
        value={addTask}
        error={taskError !== ""}
        helperText={taskError}
      />
      <Button variant="contained" onClick={addNewTask} sx={{backgroundColor: 'purple', padding: 2, }}>
        Add
</Button>
    </Box>
  );
}