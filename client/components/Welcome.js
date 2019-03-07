import React from "react";
import axios from "axios";

class Welcome extends React.Component {
	constructor() {
		super();

		this.state = {
			firstName: "",
			lastName: "",
			email: ""
		};
	}

	componentDidMount() {
		axios.get("/api/users/me").then(res => {
			this.setState({
				firstName: res.data.firstName,
				lastName: res.data.lastName,
				email: res.data.email
			});
		});
	}

	render() {
        return <div>
        <p>{`Welcome, ${this.state.firstName} ${this.state.lastName}! You are currently logged into ${this.state.email}`}</p>
        </div>;
	}
}
export default Welcome;
