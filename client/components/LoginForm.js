import React from "react";

class LoginForm extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className='login'>
					<h2>Sign in</h2>
				<form id='login-form'>
					<input type="text" ref="email" placeholder="enter your email" />
					<br/>
					<input type="password" ref="password" placeholder="enter password" />
					<br/>
					<input type="submit" value="Login" />
				</form>
			</div>

		);
	}
}

export default LoginForm;
