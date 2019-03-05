import React from 'react'
import axios from 'axios'
// import EachArticle from './EachArticle'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            buzzfeed: [],
            wired: [],
            google: [],
            natgeo: [],
            newsci: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        axios.get('/api/articles/buzzfeed')
        .then(res => this.setState({ buzzfeed: res.data }))
        .catch(err => console.log(err))

        axios.get('/api/articles/wired')
        .then(res => this.setState({ wired: res.data }))
        .catch(err => console.log(err))

        axios.get('/api/articles/google')
        .then(res => this.setState({ google: res.data }))
        .catch(err => console.log(err))

        axios.get('/api/articles/natgeo')
        .then(res => this.setState({ natgeo: res.data }))
        .catch(err => console.log(err))

        axios.get('/api/articles/newsci')
        .then(res => this.setState({ newsci: res.data }))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                    {'Buzzfeed: '}
                    <br/>
                    {this.state.buzzfeed.map((item, key) => {
                        return (
                            <a href={item.url} key={key}>{item.title}<br/></a>
                        )
                    })}
                    <br/>
                    {'Wired:'}
                    <br/>
                    {this.state.wired.map((item, key) => {
                        return (
                            <a href={item.url} key={key}>{item.title}<br/></a>
                        )
                    })}
                                        <br/>
                    {'Google'}
                    <br/>
                    {this.state.google.map((item, key) => {
                        return (
                            <a href={item.url} key={key}>{item.title}<br/></a>
                        )
                    })}
                                        <br/>
                    {'National Geographic'}
                    <br/>
                    {this.state.natgeo.map((item, key) => {
                        return (
                            <a href={item.url} key={key}>{item.title}<br/></a>
                        )
                    })}
                                        <br/>
                    {'New Scientist'}
                    <br/>
                    {this.state.newsci.map((item, key) => {
                        return (
                            <a href={item.url} key={key}>{item.title}<br/></a>
                        )
                    })}
            </div>
        )
    }
}

export default Home
