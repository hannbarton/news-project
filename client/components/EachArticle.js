import React from "react";

class EachArticle extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: ''
		}
		this.handleAddArticle = this.handleAddArticle.bind(this)
	}

	handleAddArticle(event) {
		event.persist()
		// this.setState(() => ({event}))
		this.setState(prevState => ({ title: event.target.value}))
		console.log('event',event, this.state)
	}


	render() {
		const {url, title} = this.props;
		return (
			<div>
			<button type='submit' onClick={this.handleAddArticle} className='add-button'>+</button>
			<a href={url}>
			{` ${title}`}
				<br />
			</a>
		</div>
		);
	}
};

export default EachArticle;
