import React from 'react'

class LoginForm extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <form>
            <h3>Sign in</h3>
            <input type="text" ref="username" placeholder="enter you username" />
            <input type="password" ref="password" placeholder="enter password" />
            <input type="submit" value="Login" />
          </form>
        )
    }
}

export default LoginForm;
