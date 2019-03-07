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
		const user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		};

		if (
			user.firstName === "" ||
			user.lastName === "" ||
			user.email === "" ||
			user.password === ""
		) {
			alert("please fill out every line on the form before submitting");
		} else {
			axios
				.post("/api/users/signup", user)
				.then(res => {
					console.log(res);
					window.location = "/home";
				})
				.catch(function(error) {
					alert("email already taken; try again");
					window.location = "/";
				});
		}
	}

	render() {
		return (
			<div className="sign-up">
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<h1>Hello, Reader!</h1>
					<h6>
						<span>Enter your personal details</span>
						<span>and create an account to</span>
						<span>start readings news articles</span>
					</h6>

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
					<button id="sign-up-button" type="submit">
						Sign up
					</button>
				</form>
			</div>
		);
	}
}

export default CreateAccount;
