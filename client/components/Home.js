import React from "react";
import axios from "axios";
import Welcome from "./Welcome";
import EachArticle from './EachArticle'
import Saved from './Saved'

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
		this.handleAddArticle = this.handleAddArticle.bind(this)
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

	handleAddArticle(event) {
		console.log('event', event.target)
	}

	render() {
		return (
			<div className="home">
				<Welcome />
				<div className='saved-article-container'>
				<Saved/>
				<div className="heading">
				<h5>{'Top Trending Articles:'}</h5>
				</div>
				<div className='article'>
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
							urlToImage={item.urlToImage}
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
							onClick={this.handleOpenGoogle}
						>
							Google
						</button>
					</div>
					<br />
					{this.state.google.map((item, key) => {
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
							onClick={this.handleOpenNatgeo}
						>
							National Geographic
						</button>
					</div>
					<br />
					{this.state.natgeo.map((item, key) => {
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
							onClick={this.handleOpenNewsci}
						>
							New Scientist
						</button>
					</div>
					<br />
					{this.state.newsci.map((item, key) => {
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
				</div>
				</div>
			</div>
		);
	}
}

export default Home;
