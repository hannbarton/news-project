import React from "react";

class LoginForm extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<form>
					<h3>Sign in</h3>
					<input type="text" ref="email" placeholder="enter your email" />
					<input type="password" ref="password" placeholder="enter password" />
					<input type="submit" value="Login" />
				</form>
			</div>

		);
	}
}

export default LoginForm;
