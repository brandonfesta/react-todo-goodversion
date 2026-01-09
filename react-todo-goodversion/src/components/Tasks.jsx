import Task from "./Task"


export default function Tasks({tasks}){
    let taskList = tasks.map((task) => 
        <Task task={task} key={task.id}></Task>
    )

    return(
        <ul>
            {taskList}
        </ul>
    )
}