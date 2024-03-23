
export default function Task({task, deleteTask, id}) {
  return (
    <>
<p>{task}</p>
<button onClick={()=> deleteTask(id)}>X</button>

    </>
  )
}
