import { useState, useRef, useEffect } from 'react'
import Form from './components/Form'
import Filters from './components/Filters'
import TaskContainer from './components/TaskContainer'
import TextFilter from './components/TextFilter'
import { nanoid } from 'nanoid'

let savedTasks = JSON.parse(localStorage.getItem("tasks"))

export default function App() {
  const [tasks, setTasks] = useState(savedTasks || [])
  const [filter, setFilter] = useState("tutti")
  const [textFilter, setTextFilter] = useState("")

  let filteredTask = tasks.filter(task => {
    if(filter === ""){
      setFilter("tutti")
    }
    if(filter === "tutti"){
      return true
    } 
  }).filter(task => {
    if(task.name.includes(textFilter)){
      return true
    }
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function addTask(inputValue){
    let newObject = {name: inputValue, isCompleted: false, id: nanoid(),}
    setTasks([newObject, ...tasks])
  }
  function deleteTask(id){
    let remainingTasks = tasks.filter(task => task.id !== id)
    setTasks(remainingTasks)
  }
  function updateTaskCompletion(id){
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    )
  }
  return (
    <>
      <h1>I miei task</h1>
      <div className='task-app'>
        <Form addTask={addTask}></Form>
        <Filters></Filters>
        <TextFilter textFilter={textFilter} setTextFilter={setTextFilter}></TextFilter>
        <TaskContainer tasks={tasks} deleteTask={deleteTask} updateTaskCompletion={updateTaskCompletion}></TaskContainer>
      </div>
    </>
  )
}
