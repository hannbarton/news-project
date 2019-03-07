import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchArticles, setMainUser } from "../reducer";
import { withRouter } from "react-router-dom";

class Saved extends React.Component {
	constructor() {
		super()

		this.state = {
			userId: null
		}

		this.meHandler = this.meHandler.bind(this)
	}
	async componentDidMount() {
		this.meHandler()
		await this.props.setMainUser()
		await this.props.fetchArticles(this.props.userId)
	}

	async meHandler() {
		await axios
			.get("/api/users/me")
			.then(
				res =>
					this.setState({
						userId: +res.data.id
					}),
				() => console.log(this.state)
			)
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="saved-container">
				<div className="saved">
					<h5>{"My Saved Articles:"}</h5>
					{this.props.articles && this.props.articles.map((each, key) => {
						return (
							<div className="saved-mini-container" key={key}>
								{"[o]"}
								<a href={each.url}>
									{` ${each.title}`}
									<br />
								</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

const mapState = state => ({
	articles: state.articles,
	userId: state.userId
});

const mapDispatch = dispatch => ({
	fetchArticles: (userId) => dispatch(fetchArticles(userId)),
	setMainUser: () => dispatch(setMainUser())
});

export default withRouter(
	connect(
		mapState,
		mapDispatch
	)(Saved));
