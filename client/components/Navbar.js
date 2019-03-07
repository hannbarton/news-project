import React from 'react'
import axios from 'axios';

class Navbar extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    axios.post('/api/users/logout')
    .then(res => {
      console.log('res', res.data)
      alert('successfully logged out')
      window.location = '/'
    })
  }

  render() {
    return (
      <div>
      <nav>
          <div>
            <button type='submit' className='logout' onClick={this.handleSubmit}>
              Logout
            </button>
          </div>
      </nav>
    </div>
    )
  }
}
export default Navbar;
