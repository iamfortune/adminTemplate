import React from 'react';
import './overlayInput.css'

function OverlayInput(props) {
    return (
        <div>
            <input 
                type={props.type}
                placeholder={props.placeholder} />
        </div>
    )
}

export default OverlayInput;
