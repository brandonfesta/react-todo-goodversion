export default function Task({task}){
    return (
        <li>
            <input type="checkbox" />
            {task.name}
            <button className="btn">Modifica</button>
            <button className="btn">Elimina</button>
        </li>
    )
}