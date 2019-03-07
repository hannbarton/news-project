import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchArticles } from "../reducer";
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
		await this.meHandler()
		await this.props.fetchArticles(this.state.userId)
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

	// async updateHandler() {
	// 	await axios
	// 		.get(`/api/users/all/${this.state.userId}`)
	// 		.then(res => {
	// 			console.log("res", res.data);

	// 			const articles = res.data.articles;
	// 			this.setState({
	// 				articles: articles
	// 			});
	// 		})
	// 		.catch(err => console.log(err));
	// }

	render() {
		return (
			<div className="saved-container">
				<div className="saved">
					<h5>{"My Saved Articles:"}</h5>
					{this.props.articles.map((each, key) => {
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
});

export default withRouter(
	connect(
		mapState,
		mapDispatch
	)(Saved));
