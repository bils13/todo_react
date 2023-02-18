import React from 'react'

export default (props) => {

    return (
        <div className='footer'>
            <div className='footer__line'></div>
            <div className="footer__options">
                <h4>{props.counter} item selected</h4>
                <h4 onClick={props.clear}>Clear All</h4>
            </div>
        </div>
    )
}