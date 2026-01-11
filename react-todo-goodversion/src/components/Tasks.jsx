import Task from "./Task"

export default function Tasks({ tasks, deleteTask, updateTaskCompletion }) {

  console.log("TASKS ARRAY:", tasks)

  if (!Array.isArray(tasks)) {
    return <p>tasks NON è un array</p>
  }

  return (
    <ul>
      {tasks.map((task, index) => {
        console.log("TASK:", task, "INDEX:", index)

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