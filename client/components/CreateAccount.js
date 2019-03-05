import React from "react";
import axios from "axios";

class CreateAccount extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit() {
		event.preventDefault();
		axios.post("/users", this.state).then(res => {
			console.log(res.data);
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h3>Create an Account</h3>
				<input
					type="text"
					name="firstName"
					onChange={this.handleChange}
					value={this.state.name}
					placeholder="enter your first name"
				/>
				<br />
				<input
					type="text"
					name="lastName"
					onChange={this.handleChange}
					value={this.state.name}
					placeholder="enter your last name"
				/>
				<br />
				<input
					type="text"
					name="email"
					onChange={this.handleChange}
					value={this.state.name}
					placeholder="enter your email"
				/>
				<br />
				<input
					type="password"
					name="password"
					onChange={this.handleChange}
					value={this.state.name}
					placeholder="create password"
				/>
				<br />
				<input
					type="submit"
					value="Create Account"
				/>
			</form>
		);
	}
}

export default CreateAccount;
