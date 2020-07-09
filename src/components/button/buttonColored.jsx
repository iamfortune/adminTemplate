import React from 'react'
import './button.css'


function ButtonColored(props) {
    return (
        <div>
            <button className='colored' type={props.type} form={props.form}>
                {props.label}
            </button>
        </div>
    )
}

export default ButtonColored
