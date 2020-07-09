import React from 'react'

function OverlayButton(props) {


    return (
        <div className='close-comp'>
            <button onClick={props.close} className='close'>X</button>
        </div>
    )
}

export default OverlayButton;