import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            buzzfeed: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        axios.get('/api/articles/buzzfeed')
        .then(res => this.setState({ posts: res.data }))
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
