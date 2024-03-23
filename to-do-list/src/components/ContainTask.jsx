import Task from "./Task";

export default function ContainTask({ newTask, onDelete }) {
  return (
    <div>
      {newTask.map((task) => (
        <Task key={task.id} id={task.id} task={task.addTask} deleteTask={onDelete} />
      ))}
    </div>
  );
}