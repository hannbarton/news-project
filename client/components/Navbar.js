import React from 'react'
import axios from 'axios';

class Navbar extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/users/logout')
    .then(res => {
      window.location = '/'
    })

  }

  render() {
    return (
      <div>
      <nav>
          <div>
            {/* <Link to="/home">Home</Link> */}
            <button onSubmit={this.handleSubmit}>
              Logout
            </button>
          </div>
      </nav>
      <hr />
    </div>
    )
  }
}
export default Navbar;
