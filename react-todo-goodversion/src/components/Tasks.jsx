import Task from "./Task"


export default function Tasks({tasks, deleteTask}){
    let taskList = tasks.map((task) => 
        <Task task={task} deleteTask={deleteTask} key={task.id}></Task>
    )

    return(
        <ul>
            {taskList}
        </ul>
    )
}