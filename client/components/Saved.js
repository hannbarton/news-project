import React from "react";

class Saved extends React.Component {
	constructor() {
		super();

		this.state = {
			userId: null,
			articles: []
		};
	}

	async componentDidMount() {
		await axios
			.get("/api/users/me")
			.then(res =>
				this.setState({
					userId: +res.data.id
				})
			)
			.catch(err => console.log(err));

		axios
			.get(`/api/users/all/${this.state.userId}`)
			.then(res =>
				this.setState({
					articles: res.data.articles
				})
			)
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="saved-container">
				{this.state.articles.map(each => {
					return (
						<div>
							<a href={each.url}>
								{` ${each.title}`}
								<br />
							</a>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Saved;
