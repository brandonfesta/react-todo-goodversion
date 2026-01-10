export default function Task({task, deleteTask}){
    return (
        <li>
            <input type="checkbox" checked={task.isCompleted}/>
            {task.name}
            <button className="btn">Modifica</button>
            <button className="btn"  onClick={() => deleteTask(task.id)}>Elimina</button>
        </li>
    )
}