import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <nav>
        <div>
          <Link to="/">Home</Link>
          <button>
            Logout
          </button>
        </div>
    </nav>
    <hr />
  </div>
)

export default Navbar;
