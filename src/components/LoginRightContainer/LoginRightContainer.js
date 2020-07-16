import React from 'react'
import './login-right-container.css'

const LoginRightContainer = (props) => {
    return (
        <div className='login-right-container'>
            {props.icon}
            <div className='login-right-text-bottom'>
                {props.text}
            </div>
        </div>
    )
}

export default LoginRightContainer;