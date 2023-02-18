import React, { useState } from 'react'
import Form from './Components/Form'
import Task from './Components/Task'
import Rodape from './Components/Rodape'

export default () => {
  const [tasks, setTasks] = useState([])
  const [data, setData] = useState(0)
  const childToParent = (resultadoDoFilho) => {
    resultadoDoFilho==1 ? setData(resultadoDoFilho + data) : setData(data-1)
  }
  
  const clear = () => {
    setTasks([])
    setData(0)
  }

  return (
    <div className='bg'>
      <div className='formAndTask'>
          <Form registeredTask={task => setTasks([...tasks, task])}></Form>
          {tasks.map(task => <Task task={task.name} key={task.name} counter={childToParent}/>)}
          <Rodape counter={data} clear={clear}/>
      </div>
    </div>
  )
}