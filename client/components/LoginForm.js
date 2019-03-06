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

		const defaultUser = {}

		if (user.email == '' || user.password == '') {
			alert('please enter both email and password to login')
		}
		else {
			axios.post('/api/users/login', user || defaultUser)
			.then(res => {
				console.log(res.data)
				window.location = '/home'
			})
		}
	}

	render() {
		return (
			<div className='login'>
					<h2>Sign in</h2>
				<form id='login-form' onSubmit={this.handleSubmit}>
					<input type="text"
					name="email"
					onChange={this.handleChange}
					value={this.state.email}
					placeholder="enter your email" />
					<br/>
					<input type="password"
					name="password"
					onChange={this.handleChange}
					value={this.state.password}
					placeholder="enter password" />
					<br/>
					<button type="submit"
					id='login-button'>Login</button>
				</form>
			</div>

		);
	}
}

export default LoginForm;
