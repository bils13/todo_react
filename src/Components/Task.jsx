import React, { useEffect, useState } from 'react'

export default (props) => {
    const [styleText, setStyleText] = useState('')
    const [styleInput, setStyleInput] = useState('')
    const [count, setCount] = useState(1)

    const changeStyle = () => {
        styleText=='' ? setStyleText('selected-text') : setStyleText('') 
        styleText=='selected-text' ? setStyleText('') : setStyleText('selected-text')
        styleInput=='' ? setStyleInput('selected-input') : setStyleText('')
        styleInput=='selected-input' ? setStyleInput('') : setStyleInput('selected-input')
        styleText=='' ? setCount(0) : setCount(1)
        props.counter(count)
    }

    return (
        <React.Fragment>
            <div className='task'>
                <input onChange={changeStyle} className={styleInput} type='checkbox'/>
                <p onClick={changeStyle} className={styleText}>{props.task}</p>
            </div>
        </React.Fragment>
    ) 
}