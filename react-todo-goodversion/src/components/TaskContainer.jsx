import TaskCounter from "./TaskCounter"
import Tasks from "./Tasks"

export default function TaskContainer(){
    return (
        <section>
            <TaskCounter></TaskCounter>
            <Tasks></Tasks>
        </section>
    )
}