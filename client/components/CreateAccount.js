import React from 'react'

class CreateAccount extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange(event) {
        event.preventDefault()
		this.setState({
			[event.target.name]: event.target.value,
		})
    }

    handleSubmit() {
        axios.post('/users')
    }

    render() {
        return(
            <form>
            <h3>Create an Account</h3>
            <input type="text" ref="firstName" placeholder="enter your first name" />
            <br/>
            <input type="text" ref="lastName" placeholder="enter your last name" />
            <br/>
            <input type="text" ref="email" placeholder="enter your email" />
            <br/>
            <input type="password" ref="password" placeholder="create password" />
            <br/>
            <input type="submit" value="Create Account" />
          </form>
        )
    }
}

export default CreateAccount;
