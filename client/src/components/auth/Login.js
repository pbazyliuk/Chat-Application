import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions/index'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormSubmit ({email, password}) {
    console.log(email, password)
    // Need to do something to log user in
    this.props.loginUser({email, password})
  }

  render () {
    // console.log(this.props)
    const {handleSubmit, fields: {email, password}} = this.props
    return (
      <div className='form__wrapper'>

        <form className='form-sign-in' onSubmit={handleSubmit(this.handleFormSubmit)}>

          <h4 className='form-sign-in__header'>Sign In</h4>

          <div className='form-sign-in__container'>
            <label className='form-sign-in__label' htmlFor='emailId' id='emailLabel'>Email</label>
            <input className='form-sign-in__input-field' id='emailId' type='text' name='email' placeholder='Email Address (required)'
              {...email} />
            <div className='text-has-error' id='emailError' />
          </div>

          <div className='form-sign-in__container'>
            <label className='form-sign-in__label' htmlFor='passwordId' id='passwordLabel'
            >Password</label>
            <input className='form-sign-in__input-field' id='passwordId' type='password' name='password' placeholder='Password (required)'
              {...password} />
            <div className='text-has-error' id='passwordError' />
          </div>
          <button className='form-sign-in__btn-login' type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, null, actions)(Login)
