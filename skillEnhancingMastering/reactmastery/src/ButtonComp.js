import React from 'react'

function ButtonComp(props) {
    return (
        <div>
            <button onClick={props.handleClick} >Click Here</button>
        </div>
    )
}

export default ButtonComp
