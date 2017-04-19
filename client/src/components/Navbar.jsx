import React from 'react'
import Home from './Home'
import Chats from './Chats'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import '../../public/normalize.css'
import '../../public/style.css'

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <div className="navbar__logo-container">
          <Link to="/" className="navbar__logo-link">
              <img className="navbar__logo-item" src="http://placehold.it/120x60" alt="logo" />
          </Link>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__menu-item"><Link className="navbar__menu-link" to="/">Home</Link></li>
          <li className="navbar__menu-item"><Link className="navbar__menu-link" to="/chats">Chat</Link></li>
          <li className="navbar__menu-item"><Link className="navbar__menu-link" to="/login">Login</Link></li>
          <li className="navbar__menu-item"><Link className="navbar__menu-link" to="/register">Register</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
