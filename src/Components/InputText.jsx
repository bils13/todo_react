import React, { useState } from 'react'

export default (props) => {
    const change = (e) => {
        props.changeInput(e.target.value)    
    }

    return (
        <div className='form__input'>
            <input type='text' placeholder='Add new list itens' onChange={change} />
            <button>Add</button>
        </div>
    )
}