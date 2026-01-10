import TaskCounter from "./TaskCounter"
import Tasks from "./Tasks"

export default function TaskContainer({tasks, deleteTask}){
    let taskAmount = tasks.length
    return (
        <section>
            <TaskCounter amount={taskAmount}></TaskCounter>
            <Tasks tasks={tasks} deleteTask={deleteTask}></Tasks>
        </section>
    )
}