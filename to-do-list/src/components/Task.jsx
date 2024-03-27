
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export default function Task({task, deleteTask, id, completed, toggleComplete}) {


  const handleToggleComplete = () => {
    toggleComplete(id);
  };

  return (
    <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', textDecoration: completed ? 'line-through' : 'none'}}>
      <p>{task}</p>
      <div>
      <button onClick={handleToggleComplete}>
        {completed ? (
          <FaCheck fontSize={20} color='purple' />
        ) : (
          <FaCheck fontSize={20} color='#E2E1E1' />
        )}
      </button>
      <button onClick={() => deleteTask(id)}>
        <MdDelete fontSize={20} color='orange' />
      </button>
      </div>
    </div>
  )
}
