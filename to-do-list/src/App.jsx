import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContainTask from './components/ContainTask';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 50,
            width: '90%',
            maxWidth: 1200, 
            margin: 'auto', 
          }}
        >
          <TaskForm newTask={newTask} setNewTask={setNewTask}  sx={{
              justifyContent: 'center',
              width: '100%', 
              maxWidth: 800, 
              padding: '0 20px',
            }} />
          <div style={{ alignItems: 'center'}}>
            <Filter filter={filter} setFilter={setFilter} />
            <ContainTask newTask={filterTasks()} onDelete={handleDelete} toggleComplete={toggleComplete}/>
          </div>
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;