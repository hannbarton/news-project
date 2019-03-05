import React from 'react'
import CreateAccount from './CreateAccount'
import {Link} from 'react-router-dom'

class CreateAccount extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <form>
            <h3>Create an Account</h3>
            <input type="text" ref="name" placeholder="enter your first name" />
            <br/>
            <input type="text" ref="name" placeholder="enter your last name" />
            <br/>
            <input type="text" ref="username" placeholder="enter your email" />
            <br/>
            <input type="password" ref="password" placeholder="create password" />
            <br/>
            <input type="submit" value="Create Account" />
          </form>
            // <Link to='/'>Create an Account</Link>
        )
    }
}

export default CreateAccount;
