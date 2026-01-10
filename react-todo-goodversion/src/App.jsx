import { useState, useRef } from 'react'
import Form from './components/Form'
import Filters from './components/Filters'
import TaskContainer from './components/TaskContainer'
import { nanoid } from 'nanoid'

export default function App() {
  const [tasks, setTasks] = useState([])
  function addTask(inputValue){
    let newObject = {name: inputValue, isChecked: false, id: nanoid(),}
    setTasks([newObject, ...tasks])
  }
  function deleteTask(id){
    let remainingTasks = tasks.filter(task => task.id !== id)
    setTasks(remainingTasks)
  }
  return (
    <>
      <h1>I miei task</h1>
      <div className='task-app'>
        <Form addTask={addTask}></Form>
        <Filters></Filters>
        <TaskContainer tasks={tasks} deleteTask={deleteTask}></TaskContainer>
      </div>
    </>
  )
}
