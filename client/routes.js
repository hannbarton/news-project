import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import CreateAccount from "./components/CreateAccount";
import LoginSignup from './components/LoginSignup'
import Home from './components/Home'

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginSignup}/>
                    <Route path="/home" component={Home} />
					<Route path="/login" component={LoginForm} />
					<Route path="/signup" component={CreateAccount} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;
