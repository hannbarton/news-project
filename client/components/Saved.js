import React from 'react'

class Saved extends React.Component {
    constructor() {
        super()

        this.state = {
            userId: null,
            articles: []
        }
    }

    async componentDidMount() {

        await axios.get('/api/users/me')
		.then(res => this.setState({
			userId: +res.data.id,
		}))
		.catch(err => console.log(err));

        axios.get(`/api/users/all/${this.state.userId}`)

    }


    render() {
        return (
            <div className='saved-container'>
                {'hell0 world'}
            </div>
        )
    }
}

export default Saved;
