import React from 'react'

class Login extends React.Component {
  render () {
    return (
      <div className="form__wrapper">

    <form className="form-sign-in">
        
        <h4 className="form-sign-in__header">Sign In</h4>
        
        <div className="form-sign-in__container">
            <label className="form-sign-in__label" htmlFor="emailId">Email</label>
            <input className="form-sign-in__input-field" id="emailId" type="text" name="email" placeholder="Email Address (required)" />
            {/*<div className="text-has-error">Email is required</div>*/}
        </div>

        <div className="form-sign-in__container">
            <label className="form-sign-in__label" htmlFor="passwordId" 
            >Password</label>
            <input className="form-sign-in__input-field" id="passwordId" type="password" name="password" placeholder="Password (required)" />
            {/*<div className="text-has-error">
                Password is required (min 6 characters)
            </div>*/}
        </div>
        <button className="form-sign-in__btn-login" type="submit">Login</button>
    </form>
</div>

    )
  }
}

export default Login
