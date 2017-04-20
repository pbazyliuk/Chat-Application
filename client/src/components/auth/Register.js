import React from 'react'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import * as actions from '../../actions'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.renderAlert = this.renderAlert.bind(this)
  }
  handleFormSubmit (formProps) {
    console.log(formProps)
    // Call action creator to register the user
    this.props.registerUser(formProps)
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
    const {handleSubmit, fields: {firstname, lastname, email, password, passwordConfirm}} = this.props
    return (
      <div className='form__wrapper'>
        <form action='' className='form-sign-up' onSubmit={handleSubmit(this.handleFormSubmit)}>
          <h3 className='form-sign-up__header'>Sign Up</h3>

          <div className='form-sign-up__container'>
            <div className='form-sign-up__container--narrow'>
              <label className='form-sign-in__label' htmlFor='firstnameId' id='firstnameLabel'>Firstname</label>
              <input id='firstnameId'className='form-sign-up__input-field' type='text' name='firstname' placeholder='First Name (required)'
                {...firstname} />
              <span>{firstname.touched && firstname.error && <span id='firstnameError' className='text-has-error positined-left'>{firstname.error}</span>}</span>
            </div>

            <div className='form-sign-up__container--narrow'>
              <label className='form-sign-in__label' htmlFor='lastnameId' id='lastnameLabel'>Lastname</label>
              <input id='lastnameId' className='form-sign-up__input-field' name='lastname' type='text' placeholder='Last Name (required)'
                {...lastname} />
              <span>{lastname.touched && lastname.error && <span id='firstnameError' className='text-has-error positined-right'>{lastname.error}</span>}</span>
            </div>
          </div>

          <div className='form-sign-up__container'>
            <label className='form-sign-in__label' htmlFor='emailId' id='emailLabel'>Email</label>
            <input id='emailId' className='form-sign-up__input-field' type='text' name='email' placeholder='Email Address (required)'
              {...email} />
            {email.touched && email.error && <div id='emailError' className='text-has-error'>{email.error}</div>}
          </div>

          <div>
            <div className='form-sign-up__container'>
              <label className='form-sign-in__label' htmlFor='passwordId' id='passwordLabel'
              >Password</label>
              <input id='passwordId' className='form-sign-up__input-field' type='password' name='password' placeholder='Password (required)'
                {...password} />
              {password.touched && password.error && <div id='passwordError' className='text-has-error'>{password.error}</div>}
            </div>

            <div className='form-sign-up__container'>
              <label className='form-sign-in__label' htmlFor='confirmpasswordId' id='passwordConfirmLabel'>Confirm Password</label>
              <input id='confirmpasswordId' className='form-sign-up__input-field' type='password' name='passwordConfirm' placeholder='Confirm Password (required)'
                {...passwordConfirm} />
              {passwordConfirm.touched && passwordConfirm.error && <div id='passwordConfirmError' className='text-has-error'>{passwordConfirm.error}</div>}
            </div>
          </div>
          {this.renderAlert()}
          <button type='submit' disabled={
            !firstname.touched || firstname.error ||
            !lastname.touched || lastname.error ||
            !email.touched || email.error ||
            !password.touched || password.error ||
            !passwordConfirm.touched || passwordConfirm.error
            } className='form-sign-up__btn-register'>Get Started</button>
        </form>
      </div>
    )
  }
}

function validate (formProps) {
  const errors = {}
  const NAME_PATTERN = /^([a-zA-Z_-]){3,12}$/
  const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const PASSWORD_PATTERN = /^([a-zA-Z0-9_-]){6,12}$/

  errors.firstname = !formProps.firstname
  ? 'Please enter firstname'
  : (NAME_PATTERN.test(formProps.firstname) === true)
    ? ''
    : 'Between 3 to 12 latin letters'

  errors.lastname = !formProps.lastname
  ? 'Please enter lastname'
  : (NAME_PATTERN.test(formProps.lastname) === true)
    ? ''
    : 'Between 3 to 12 latin letters'

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

  errors.passwordConfirm = !formProps.passwordConfirm
    ? 'Please enter confirm password'
    : (PASSWORD_PATTERN.test(formProps.passwordConfirm) === true)
      ? ''
      : 'Confirm Password should contain from 6 to 12 characters'

  if (formProps.password !== formProps.passwordConfirm && formProps.password && formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }

  return errors
}

Register.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps (state) {
  return {errorMessage: state.auth.error}
}

export default reduxForm({
  form: 'register',
  fields: ['firstname', 'lastname', 'email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Register)
