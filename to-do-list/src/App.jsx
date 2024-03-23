import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ContainTask from './components/ContainTask'
import TaskForm from './components/TaskForm'


function App() {
  const [newTask, setNewTask] = useState(JSON.parse(localStorage.getItem("newTask")) || []);


  const handleDelete = (id) => {
    console.log(id);
    const updatedTasks = newTask.filter(task => task.id !== id);
    setNewTask(updatedTasks);
    localStorage.setItem("newTask", JSON.stringify(updatedTasks))
    }
  const handleStyle = (id) => {
    
  }
    
  return (
    <>
   <Header />
   <TaskForm newTask={newTask} setNewTask={setNewTask}/>
   <ContainTask onDelete={handleDelete} newTask={newTask}/>
   <Footer />

    </>
  )
}

export default App
