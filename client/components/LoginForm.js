import React from "react";
import axios from 'axios'

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSubmit(event) {
		event.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password
		}

		if (this.state.email === '' || this.state.password === '') {
			alert('please enter both email and password to login')
		}
		else {
			axios.get('/api/users')
			.then(res => {
				console.log(res)
			})
		}
	}

	render() {
		return (
			<div className='login'>
					<h2>Sign in</h2>
				<form id='login-form' onSubmit={this.handleSubmit}>
					<input type="text" ref="email" placeholder="enter your email" />
					<br/>
					<input type="password" ref="password" placeholder="enter password" />
					<br/>
					<button type="submit" 					id='login-button'>Login</button>
				</form>
			</div>

		);
	}
}

export default LoginForm;
