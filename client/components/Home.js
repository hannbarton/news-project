import React from "react";
import axios from "axios";
import Welcome from "./Welcome";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			buzzfeed: [],
			wired: [],
			google: [],
			natgeo: [],
			newsci: [],
			buzzfeedOpen: false
		};
		this.handleOpen = this.handleOpen.bind(this)
	}

	componentDidMount() {
		this.getData();
	}

	async getData() {
		// axios
		// 	.get("/api/articles/buzzfeed")
		// 	.then(res => this.setState({ buzzfeed: res.data }))
		// 	.catch(err => console.log(err));

		axios
			.get("/api/articles/wired")
			.then(res => this.setState({ wired: res.data }))
			.catch(err => console.log(err));

		axios
			.get("/api/articles/google")
			.then(res => this.setState({ google: res.data }))
			.catch(err => console.log(err));

		axios
			.get("/api/articles/natgeo")
			.then(res => this.setState({ natgeo: res.data }))
			.catch(err => console.log(err));

		axios
			.get("/api/articles/newsci")
			.then(res => this.setState({ newsci: res.data }))
			.catch(err => console.log(err));
	}

	handleOpen() {
		if (!this.state.buzzfeedOpen) {
			this.setState({
				buzzfeedOpen: true
			})
			axios
			.get("/api/articles/buzzfeed")
			.then(res => this.setState({ buzzfeed: res.data }))
			.catch(err => console.log(err));
		}
		else {
			this.setState({
				buzzfeedOpen: false
			})
			this.setState({buzzfeed: []})
		}
	}

	render() {
		return (
			<div className='home'>
				<Welcome/>
                <br/>
                <br/>
                <br/>
				<div className='article-container'>
				<button type='submit' onClick={this.handleOpen}>Buzzfeed</button>
				<br />
				{this.state.buzzfeed.map((item, key) => {
					return (
						<a href={item.url} key={key}>
							{item.title}
							<br />
						</a>
					);
				})}
				</div>
				<br />
				{"Wired:"}
				<br />
				{this.state.wired.map((item, key) => {
					return (
						<a href={item.url} key={key}>
							{item.title}
							<br />
						</a>
					);
				})}
				<br />
				{"Google"}
				<br />
				{this.state.google.map((item, key) => {
					return (
						<a href={item.url} key={key}>
							{item.title}
							<br />
						</a>
					);
				})}
				<br />
				{"National Geographic"}
				<br />
				{this.state.natgeo.map((item, key) => {
					return (
						<a href={item.url} key={key}>
							{item.title}
							<br />
						</a>
					);
				})}
				<br />
				{"New Scientist"}
				<br />
				{this.state.newsci.map((item, key) => {
					return (
						<a href={item.url} key={key}>
							{item.title}
							<br />
						</a>
					);
				})}
			</div>
		);
	}
}

export default Home;
