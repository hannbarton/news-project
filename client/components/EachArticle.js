import React from "react";
import axios from "axios";
import {postArticle, setMainUser} from '../reducer'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class EachArticle extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			url: '',
			source: '',
			urlToImage: '',
			userId: this.props.userId
		}
		this.handleAddArticle = this.handleAddArticle.bind(this);
	}

	componentDidMount() {
		this.props.setMainUser()
	}

	async handleAddArticle() {

		await axios.get('/api/users/me')
		.then(res => this.setState({
			userId: +res.data.id,
		}))
		.catch(err => console.log(err));

		this.setState({
			title: this.props.title,
			url: this.props.url,
			source: this.props.children.name,
			urlToImage: this.props.urlToImage,

		}, () => console.log('added'))

		const article = {
			title: this.state.title,
			url: this.state.url,
			source: this.state.source,
			urlToImage: this.state.urlToImage,
			userId: this.state.userId
		}

		// await axios.post('/api/articles/saved', article)
		// .then(res => {
		// 	console.log(res.data)
		// 	// alert('added article to saved files')
		// }).catch(function(error) {
		// 	alert('error in saving article')
		// })

		await this.props.postArticle(article)
	}

	render() {
		const {url, title} = this.props;
		return (
			<div>
			<button type='submit' value={title} name="title" onClick={this.handleAddArticle} className='add-button'>+</button>
			<a href={url}>
			{` ${title}`}
				<br />
			</a>
		</div>
		);
	}
};

const mapState = state => ({
	articles: state.articles,
	userId: state.userId
});

const mapDispatch = dispatch => ({
	postArticle: (article) => dispatch(postArticle(article)),
	setMainUser: () => dispatch(setMainUser())
});

export default withRouter(
	connect(
		mapState,
		mapDispatch
	)(EachArticle));
