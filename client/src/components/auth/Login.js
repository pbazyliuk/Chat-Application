import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions/index'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.renderAlert = this.renderAlert.bind(this)
  }
  handleFormSubmit ({email, password}) {
    console.log(email, password)
    // Need to do something to log user in
    this.props.loginUser({email, password})
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert'>
          <strong>Oops! </strong>{this.props.errorMessage}
        </div>
      )
    }
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
            {email.touched && email.error && <div id='emailError' className='text-has-error'>{email.error}</div>}
          </div>

          <div className='form-sign-in__container'>
            <label className='form-sign-in__label' htmlFor='passwordId' id='passwordLabel'
            >Password</label>
            <input className='form-sign-in__input-field' id='passwordId' type='password' name='password' placeholder='Password (required)'
              {...password} />
            {password.touched && password.error && <div id='passwordError' className='text-has-error'>{password.error}</div>}
          </div>
          {this.renderAlert()}
          <button className='form-sign-in__btn-login' type='submit' disabled={
            !email.touched || email.error ||
            !password.touched || password.error
            }>Login</button>
        </form>
      </div>
    )
  }
}

function validate (formProps) {
  const errors = {}
  const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const PASSWORD_PATTERN = /^([a-zA-Z0-9_-]){6,12}$/

  errors.email = !formProps.email
    ? 'Please enter an email'
    : (EMAIL_PATTERN.test(formProps.email) === true)
      ? ''
      : 'Please enter an valid email'

  errors.password = !formProps.password
    ? 'Please enter password'
    : (PASSWORD_PATTERN.test(formProps.password) === true)
      ? ''
      : 'Password should contain from 6 to 12 characters'

  return errors
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps (state) {
  return {errorMessage: state.auth.error}
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, actions)(Login)
