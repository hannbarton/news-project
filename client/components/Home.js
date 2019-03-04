import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        axios.get('/api/articles/buzzfeed')
        .then(res => this.setState({ posts: res.data.map(each => each.title) }))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <p>
                    {this.state.posts}
                </p>

            </div>
        )
    }
}

export default Home
