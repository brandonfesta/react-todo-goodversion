import Task from "./Task"


export default function Tasks({tasks, deleteTask,  updateTaskCompletion}){
    let taskList = tasks.map((task) => 
        <Task task={task} deleteTask={deleteTask} key={task.id} updateTaskCompletion={updateTaskCompletion}></Task>
    )

    return(
        <ul>
            {taskList}
        </ul>
    )
}