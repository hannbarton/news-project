import React from 'react'
import LoginForm from './LoginForm'
import CreateAccount from './CreateAccount'


class LoginSignup extends React.Component {
    render() {
        return (
            <div className='login-signup-container'>
                <LoginForm/>
                <CreateAccount/>
            </div>
        )
    }
}

export default LoginSignup;
