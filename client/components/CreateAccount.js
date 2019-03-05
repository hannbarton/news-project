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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		})
    }

    handleSubmit() {
        event.preventDefault();
        axios.post('/users', {user})
        .then(res => {
            console.log(res.data);
          })
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
            <input type="submit" value="Create Account" onSubmit={this.handleSubmit}/>
          </form>
        )
    }
}

export default CreateAccount;
