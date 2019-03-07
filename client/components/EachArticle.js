import React from "react";
import { postArticle, setMainUser } from "../reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class EachArticle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			flag: false
		};

		this.handleAddArticle = this.handleAddArticle.bind(this);
	}

	handleAddArticle() {
		const article = {
			title: this.props.title,
			url: this.props.url,
			source: this.props.source,
			urlToImage: this.props.urlToImage,
			userId: this.props.userId
		};
		this.props.postArticle(article);

		this.setState({ flag: true });
	}

	render() {
		const { url, title } = this.props;
		return (
			<div>
				<button
					type="submit"
					disabled={this.state.flag}
					onClick={this.handleAddArticle}
					className="add-button"
				>
					+
				</button>
				<a href={url}>
					{` ${title}`}
					<br />
				</a>
			</div>
		);
	}
}

const mapState = state => ({
	articles: state.articles,
	userId: state.userId
});

const mapDispatch = dispatch => ({
	postArticle: article => dispatch(postArticle(article)),
	setMainUser: () => dispatch(setMainUser())
});

export default withRouter(
	connect(
		mapState,
		mapDispatch
	)(EachArticle)
);
