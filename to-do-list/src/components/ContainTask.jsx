import Task from "./Task";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function ContainTask({ newTask, onDelete, filter, setFilter,toggleComplete }) {
  return (
    <div>
      <Box  sx={{backgroundColor:'white', p: 2}}>
      <Stack>
        {newTask.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            task={task.addTask}
            deleteTask={onDelete}
            filterTask={filter}
            completed={task.completed}
            toggleComplete={toggleComplete}
          />
        ))}
        </Stack>
      </Box>
    </div>
  );
}