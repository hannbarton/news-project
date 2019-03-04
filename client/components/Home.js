import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            buzzfeed: [],
            reddit: [],
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

        axios.get('/api/articles/reddit')
        .then(res => this.setState({ reddit: res.data }))
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
                <p>
                    {this.state.buzzfeed.map((item, key) => {
                        return (
                            <a href={item.url} key={key}>{item.title}<br/></a>
                        )
                    })}
                </p>

            </div>
        )
    }
}

export default Home
