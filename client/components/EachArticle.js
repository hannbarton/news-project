import React from "react";
import axios from "axios";

class EachArticle extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			url: '',
			source: '',
			urlToImage: '',
			userId: null
		}
		this.handleAddArticle = this.handleAddArticle.bind(this)
	}

	async handleAddArticle(event) {

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

		}, ()=> console.log(this.state, this.props))

		const article = {
			title: this.state.title,
			url: this.state.url,
			source: this.state.source,
			urlToImage: this.state.urlToImage,
			userId: this.state.userId
		}

		await axios.post('/api/articles/saved', article)
		.then(res => {
			console.log(res.data)
			alert('added article to saved files')
		}).catch(function(error) {
			alert('error in saving article')
		})

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

export default EachArticle;
