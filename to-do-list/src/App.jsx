import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ContainTasks from './components/ContainTasks'
import TaskForm from './components/TaskForm'


function App() {
  
  return (
    <>
   <Header />
   <TaskForm />
   <ContainTasks />
   <Footer />

    </>
  )
}

export default App
