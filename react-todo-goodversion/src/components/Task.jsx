export default function Task({task, deleteTask, updateTaskCompletion}){
    return (
        <li className={task.isCompleted ? "completed" : ""}>
            <input type="checkbox" checked={task.isCompleted} onChange={() => updateTaskCompletion(task.id)}/>
            {task.name}
            {/* <button className="btn">Modifica</button> */}
            <button className="btn"  onClick={() => deleteTask(task.id)}>Elimina</button>
        </li>
    )
}