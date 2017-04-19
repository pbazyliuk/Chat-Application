import React from 'react'

class Register extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      firstname: '',
      firstnameValid: false,
      lastname: '',
      lastnameValid: false,
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      passwordConfirm: '',
      passwordConfirmValid: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    e.target.classList.add('active')
    this.setState({
      [e.target.name]: e.target.value
    })
    this.showInputError(e.target.name)
  }

  showInputError (refName) {
    const validity = this.refs[refName].validity
    const label = document.getElementById(`${refName}Label`).textContent
    const error = document.getElementById(`${refName}Error`)

    const isFirstname = refName.indexOf('firstname') !== -1
    const isLastname = refName.indexOf('lastname') !== -1
    const isEmail = refName.indexOf('email') !== -1
    const isPassword = refName.indexOf('password') !== -1
    const isPasswordConfirm = refName.indexOf('passwordConfirm') !== -1

    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.setState({[`${refName}Valid`]: false})
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match')
      } else {
        this.refs.passwordConfirm.setCustomValidity('')
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`
      } else if (isFirstname && validity.patternMismatch) {
        error.textContent = `${label} minimum 3 characters`
      } else if (isLastname && validity.patternMismatch) {
        error.textContent = `${label} minimum 3 characters`
      } else if (isEmail && validity.patternMismatch) {
        error.textContent = `${label} should be a valid email address`
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 6 chars`
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match'
      }

      this.setState({
        [`${refName}Valid`]: false
      })
      return false
    }

    error.textContent = ''

    this.setState({
      [`${refName}Valid`]: true
    })
    return true
  }

  handleSubmit (e) {
    e.preventDefault()

    for (let key in this.state) {
      if (key.indexOf('Valid') !== -1 || key.indexOf('Confirm') !== -1) {
        delete this.state[key]
      }
    }
    console.log('component state', JSON.stringify(this.state))
  }

  render () {
    return (
      <div className='form__wrapper'>
        <form action='' className='form-sign-up'>
          <h3 className='form-sign-up__header'>Sign Up</h3>

          <div className='form-sign-up__container'>
            <div className='form-sign-up__container--narrow'>
              <label className='form-sign-in__label' htmlFor='firstnameId' id='firstnameLabel'>Firstname</label>
              <input id='firstnameId'className='form-sign-up__input-field' type='text' name='firstname' placeholder='First Name (required)'
                value={this.state.firstname}
                ref='firstname'
                pattern='.{3,}'
                required
                onChange={this.handleChange}
              />
              <span><span id='firstnameError' className='text-has-error positined-left' /></span>
            </div>

            <div className='form-sign-up__container--narrow'>
              <label className='form-sign-in__label' htmlFor='lastnameId' id='lastnameLabel'>Lastname</label>
              <input id='lastnameId' className='form-sign-up__input-field' name='lastname' type='text' placeholder='Last Name (required)'
                value={this.state.lastname}
                ref='lastname'
                pattern='.{3,}'
                required
                onChange={this.handleChange}
              />
              <span id='lastnameError' className='text-has-error positined-right' />
            </div>
          </div>

          <div className='form-sign-up__container'>
            <label className='form-sign-in__label' htmlFor='emailId' id='emailLabel'>Email</label>
            <input id='emailId' className='form-sign-up__input-field' type='text' name='email' placeholder='Email Address (required)'
              pattern='[^@]+@[^@]+\.[a-zA-Z]{2,}'
              value={this.state.email}
              ref='email'
              required
              onChange={this.handleChange}
            />
            <div id='emailError' className='text-has-error' />
          </div>

          <div>
            <div className='form-sign-up__container'>
              <label className='form-sign-in__label' htmlFor='passwordId' id='passwordLabel'
              >Password</label>
              <input id='passwordId' className='form-sign-up__input-field' type='password' name='password' placeholder='Password (required)'
                value={this.state.password}
                ref='password'
                pattern='.{6,}'
                required
                onChange={this.handleChange}
              />
              <div id='passwordError' className='text-has-error' />
            </div>

            <div className='form-sign-up__container'>
              <label className='form-sign-in__label' htmlFor='confirmpasswordId' id='passwordConfirmLabel'>Confirm Password</label>
              <input id='confirmpasswordId' className='form-sign-up__input-field' type='password' name='passwordConfirm' placeholder='Confirm Password (required)'
                value={this.state.passwordConfirm}
                ref='passwordConfirm'
                pattern='.{6,}'
                required
                onChange={this.handleChange}
              />
              <div id='passwordConfirmError' className='text-has-error' />
            </div>
          </div>

          <button className='form-sign-up__btn-register' type='submit'
            onClick={this.handleSubmit}
            disabled={
            !this.state.emailValid ||
            !this.state.passwordValid ||
            !this.state.firstname ||
            !this.state.lastname ||
            !this.state.passwordConfirmValid}
        >Get Started</button>
        </form>
      </div>
    )
  }
}

export default Register
