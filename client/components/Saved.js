import React from "react";
import axios from 'axios'

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
        <h5>{'My Saved Articles:'}</h5>
				{this.state.articles.map(each => {
					return (
						<div>
                            {'[o]'}
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
