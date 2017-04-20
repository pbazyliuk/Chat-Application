import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../../actions'

class Logout extends React.Component {
  componentWillMount () {
    this.props.logoutUser()
  }
  render () {
    return (
      <div>Sorry to see you go...</div>
    )
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

export default connect(null, actions)(Logout)
