import Task from "./Task"
import { tasks } from "../data/tasks.js"

let taskList = tasks.map((task) => (
    <Task task={task}></Task>
))

export default function Tasks(){
    return(
        <ul>
            {taskList}
        </ul>
    )
}