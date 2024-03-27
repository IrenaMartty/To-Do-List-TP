import Task from "./Task";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function ContainTask({ newTask, onDelete, filter,toggleComplete }) {
  return (
    <div>
      <Box  sx={{backgroundColor:'rgba(255, 255, 255, 0.6)', p: 2, height: '100%', padding: '20px',
      marginBottom: '80px'}}>
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