import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../../public/normalize.css'
import '../../public/style.css'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.renderLinks = this.renderLinks.bind(this)
  }
  renderLinks () {
    console.log(this.props.authenticated)
    if (this.props.authenticated) {
      return (
        <li className='navbar__menu-item'><Link className='navbar__menu-link' to='/logout'>Logout</Link></li>
      )
    } else {
      return [
        <li key={1} className='navbar__menu-item'><Link className='navbar__menu-link' to='/login'>Login</Link></li>,
        <li key={2} className='navbar__menu-item'><Link className='navbar__menu-link' to='/register'>Register</Link></li>
      ]
    }
  }
  render () {
    return (
      <nav className='navbar'>
        <div className='navbar__logo-container'>
          <Link to='/' className='navbar__logo-link'>
            <img className='navbar__logo-item' src='http://placehold.it/120x60' alt='logo' />
          </Link>
        </div>
        <ul className='navbar__menu'>
          <li className='navbar__menu-item'><Link className='navbar__menu-link' to='/'>Home</Link></li>
          <li className='navbar__menu-item'><Link className='navbar__menu-link' to='/chats'>Chat</Link></li>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToprops (state) {
  return {
    authenticated: state.auth.authenticated
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool
}

export default connect(mapStateToprops)(Navbar)
