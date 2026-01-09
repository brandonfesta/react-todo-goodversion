import { useState } from 'react'
import Form from './components/Form'
import Filters from './components/Filters'
import TaskContainer from './components/TaskContainer'

export default function App() {
  return (
    <>
      <h1>I miei task</h1>
      <div className='task-app'>
        <Form></Form>
        <Filters></Filters>
        <TaskContainer></TaskContainer>
      </div>
    </>
  )
}
