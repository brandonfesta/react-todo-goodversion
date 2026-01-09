import { useState, useRef } from 'react'
import Form from './components/Form'
import Filters from './components/Filters'
import TaskContainer from './components/TaskContainer'

export default function App() {
  const [tasks, setTasks] = useState([])
  function addTask(inputValue){
    setTasks([{name: inputValue, isChecked: false, id: Math.random(),}, ...tasks])
    console.log(tasks)
  }
  return (
    <>
      <h1>I miei task</h1>
      <div className='task-app'>
        <Form addTask={addTask}></Form>
        <Filters></Filters>
        <TaskContainer tasks={tasks}></TaskContainer>
      </div>
    </>
  )
}
