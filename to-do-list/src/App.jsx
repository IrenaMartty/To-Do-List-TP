import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContainTask from './components/ContainTask';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box'

function App() {
  const [newTask, setNewTask] = useState(JSON.parse(localStorage.getItem('newTask')) || []);
  const [filter, setFilter] = useState('All');

  const handleDelete = (id) => {
    console.log(id);
    const updatedTasks = newTask.filter((task) => task.id !== id);
    setNewTask(updatedTasks);
    localStorage.setItem('newTask', JSON.stringify(updatedTasks));
  };

  const toggleComplete = (id) => {
    const updatedTasks = newTask.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setNewTask(updatedTasks);
    localStorage.setItem('newTask', JSON.stringify(updatedTasks));
  };

  const filterTasks = () => {
    return newTask.filter((task) => {
      if (filter === 'All') {
        return true;
      } else if (filter === 'Completed') {
        return task.completed;
      } else if (filter === 'Incompleted') {
        return !task.completed;
      }
      return true;
    });
  };

  const theme = createTheme({
    typography: {
      fontSize: 18,
      h1: {
        fontSize: '2.5rem',
      },
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '1.75rem',
      },
    },
  });

  return (
    <ThemeProvider theme={theme} >
      <>
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '100',
            height: '100%',
            maxWidth: 1000,
            margin: 'auto',
            width: '90%',
            '@media (min-width:600px)': 
            {width: '70%'},
            '@media (min-width:800px)': 
            {width: '65%'},
            '@media (min-width:1000px)': 
            {width: '50%'},
          }}
        >
          <TaskForm newTask={newTask} setNewTask={setNewTask} />
          <Box
            sx={{
              width: '100%',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <Filter filter={filter} setFilter={setFilter} />
            <ContainTask
              newTask={filterTasks()}
              onDelete={handleDelete}
              toggleComplete={toggleComplete}
            />
          </Box>
        </Box>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;



