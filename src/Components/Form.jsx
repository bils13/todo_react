import React, { useState } from 'react'
import InputText from './InputText'

export default (props) => {
    const [task, setTask] = useState('')
    const save = (e) => {
        e.preventDefault()
        props.registeredTask({
            name: task,
        })
    }
    
    return (
        <React.Fragment>
            <form className='form' onSubmit={save}>
                <h1 className='form__title'>Daily To Do List</h1>
                <InputText changeInput={element => setTask(element)}/>
            </form>
        </React.Fragment>
    )
}