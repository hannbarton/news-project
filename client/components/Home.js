import React from "react";
import axios from "axios";
import Welcome from "./Welcome";
import EachArticle from './EachArticle'

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			buzzfeed: [],
			wired: [],
			google: [],
			natgeo: [],
			newsci: [],
			buzzfeedOpen: false,
			wiredOpen: false,
			googleOpen: false,
			natgeoOpen: false,
			newsciOpen: false,
		};
		this.handleOpenBuzzfeed = this.handleOpenBuzzfeed.bind(this);
		this.handleOpenWired = this.handleOpenWired.bind(this);
		this.handleOpenGoogle = this.handleOpenGoogle.bind(this);
		this.handleOpenNatgeo = this.handleOpenNatgeo.bind(this);
		this.handleOpenNewsci = this.handleOpenNewsci.bind(this);
		this.handAddArticle = this.handleAddArticle.bind(this)
	}

	handleAddArticle(event) {
		event.preventDefault()

		console.log('event',event)
		// const article = {
		// 	title: '',
		// 	source: '',
		// 	link: '',
		// 	userId: ''
		// }

		// this.setState({
		// 	article: {
		// 		title: '',
		// 		source: '',
		// 		link: '',
		// 		userId: ''
		// 	}
		// })

		// console.log('added', article)
		// axios.post('/api/articles/saved', article)
		// .then(res => this.setState({ article: res.data }))
		// .catch(err => console.log(err));

	}

	handleOpenBuzzfeed() {
		if (!this.state.buzzfeedOpen) {
			this.setState({
				buzzfeedOpen: true
			});
			axios
				.get("/api/articles/buzzfeed")
				.then(res => this.setState({ buzzfeed: res.data }))
				.catch(err => console.log(err));
		} else {
			this.setState({
				buzzfeedOpen: false,
				buzzfeed: []
			});
		}
	}

	handleOpenWired() {
		if (!this.state.wiredOpen) {
			this.setState({
				wiredOpen: true
			});
			axios
				.get("/api/articles/wired")
				.then(res => this.setState({ wired: res.data }))
				.catch(err => console.log(err));
		} else {
			this.setState({
				wiredOpen: false,
				wired: []
			});
		}
	}

	handleOpenGoogle() {
		if (!this.state.googleOpen) {
			this.setState({
				googleOpen: true
			});
			axios
				.get("/api/articles/google")
				.then(res => this.setState({ google: res.data }))
				.catch(err => console.log(err));
		} else {
			this.setState({
				googleOpen: false,
				google: []
			});
		}
	}

	handleOpenNatgeo() {
		if (!this.state.natgeoOpen) {
			this.setState({
				natgeoOpen: true
			});
			axios
				.get("/api/articles/natgeo")
				.then(res => this.setState({ natgeo: res.data }))
				.catch(err => console.log(err));
		} else {
			this.setState({
				natgeoOpen: false,
				natgeo: []
			});
		}
	}

	handleOpenNewsci() {
		if (!this.state.newsciOpen) {
			this.setState({
				newsciOpen: true
			});
			axios
				.get("/api/articles/natgeo")
				.then(res => this.setState({ newsci: res.data }))
				.catch(err => console.log(err));
		} else {
			this.setState({
				newsciOpen: false,
				newsci: []
			});
		}
	}

	render() {
		return (
			<div className="home">
				<Welcome />
				<br />
				<br />
				<br />
				<div className="article-container">
					<div className="center-button">
						<button
							type="submit"
							className="open-button"
							onClick={this.handleOpenBuzzfeed}
						>
							Buzzfeed
						</button>
					</div>
					<br />
					{this.state.buzzfeed.map((item, key) => {
						return (
							<EachArticle
							key={key}
							title={item.title}
							url={item.url}
							>{item.source}
							</EachArticle>
						);
					})}
				</div>
				<br />
				<div className="article-container">
					<div className="center-button">
						<button
							type="submit"
							className="open-button"
							onClick={this.handleOpenWired}
						>
							Wired
						</button>
					</div>
					<br />
					{this.state.wired.map((item, key) => {
						return (
							<div>
								<button type='submit' onClick={((e) => { e.persist(); this.setState({
									addArticletitle: ''

										}); console.log(this.props, this.state);
										})} className='add-button'>+</button>
								<a href={item.url} key={key}>
								{` ${item.title}`}
									<br />
								</a>
							</div>
						);
					})}
				</div>
				<br />
				<div className="article-container">
					<div className="center-button">
						<button
							type="submit"
							className="open-button"
							onClick={this.handleOpenGoogle}
						>
							Google
						</button>
					</div>
					<br />
					{this.state.google.map((item, key) => {
						return (
							<div>
							<button type='submit' onClick={this.handleAddArticle} className='add-button'>+</button>
								<a href={item.url} key={key}>
								{` ${item.title}`}
									<br />
								</a>
							</div>
						);
					})}
				</div>
				<br />
				<div className="article-container">
					<div className="center-button">
						<button
							type="submit"
							className="open-button"
							onClick={this.handleOpenNatgeo}
						>
							National Geographic
						</button>
					</div>
					<br />
					{this.state.natgeo.map((item, key) => {
						return (
							<div>
							<button type='submit' onClick={this.handleAddArticle} className='add-button'>+</button>
								<a href={item.url} key={key}>
								{` ${item.title}`}
									<br />
								</a>
							</div>
						);
					})}
				</div>
				<br />
				<div className="article-container">
					<div className="center-button">
						<button
							type="submit"
							className="open-button"
							onClick={this.handleOpenNewsci}
						>
							New Scientist
						</button>
					</div>
					<br />
					{this.state.newsci.map((item, key) => {
						return (
							<div>
							<button type='submit' onClick={this.handleAddArticle} className='add-button'>+</button>
								<a href={item.url} key={key}>
									{` ${item.title}`}
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

export default Home;
