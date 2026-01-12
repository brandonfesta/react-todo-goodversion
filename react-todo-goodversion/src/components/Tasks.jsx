import Task from "./Task"

export default function Tasks({ tasks, deleteTask, updateTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task, index) => {

        if (!task || !task.id) {
          return (
            <li key={index} style={{ color: "red" }}>
              TASK ROTTO (index {index})
            </li>
          )
        }

        return (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTaskCompletion={updateTaskCompletion}
          />
        )
      })}
    </ul>
  )
}