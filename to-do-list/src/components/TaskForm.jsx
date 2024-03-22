import { useState } from 'react';
 
export default function TaskForm() {
  const [newTask, setNewTask] = useState(JSON.parse(localStorage.getItem("newTask")) || []);
  const [addTask, setAddTask] = useState("");
  const [taskError, setTaskError] = useState("");


  function handleNewTask(e) {
    const taskValue = e.target.value;
    setAddTask(taskValue);


    if (taskValue.trim() === "") {
      setTaskError("Please enter a task.");
    } else if (taskValue.length > 15) {
      setTaskError("Maximum 15 characters allowed for the task.");
    } else {
      setTaskError("");
    }
  }

  function addNewTask() {
    if (!addTask.trim() || taskError) {
      alert("Please correct the errors before adding the task.");
      return;
    }


    const newTaskDetails = [
      ...newTask,
      { id: crypto.randomUUID(), addTask }
    ];
    console.log(newTaskDetails);
    setNewTask(newTaskDetails);
    localStorage.setItem("newTask", JSON.stringify(newTaskDetails));
    setAddTask("");
    
  }

  return (
    <div>
      {newTask.map((task) => <h3 key={task.id}>{task.addTask}</h3>)}
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="task">TASK </label>
        <input id="task" type="text" placeholder="Write a new task" onChange={handleNewTask} value={addTask} />
        {taskError && <p style={{ color: 'red' }}>{taskError}</p>}
        <button type="button" onClick={addNewTask}>ADD TO MY LIST</button>
      </form>
    </div>
  );
}