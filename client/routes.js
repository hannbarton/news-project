import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import CreateAccount from "./components/CreateAccount";

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={LoginForm} />
					<Route path="/signup" component={CreateAccount} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
