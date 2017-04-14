import React from 'react'

class Register extends React.Component {
  render () {
    return (
      <div className="form__wrapper">

        <form action="" className="form-sign-up">

          <h3 className="form-sign-up__header">Sign Up</h3>

          <div className="form-sign-up__container">
            <div className="form-sign-up__container--narrow">
                <label className="form-sign-in__label" htmlFor="firstnameId">Firstname</label>
                <input id="firstnameId"className="form-sign-up__input-field" type="text" placeholder="First Name (required)"
                />                              
                {/*<span>
                  <span >Firstname is required</span>
                    <span >Minimum 3 characters</span>
                    
                    <span>
                        The first name must be longer than 3 characters.
                    </span>
                  </span>*/}
              </div>

              <div className="form-sign-up__container--narrow">
                <label className="form-sign-in__label" htmlFor="lastnameId">Lastname</label>
                <input id="lastnameId" className="form-sign-up__input-field" type="text" placeholder="Last Name (required)"
                />
                {/*<span>
                  <span >Lastname is required</span>
                  <span >Minimum 3 characters</span>
                </span>*/}
              </div>
            </div>

            <div className="form-sign-up__container">
              <label className="form-sign-in__label" htmlFor="emailId">Email</label>
              <input id="emailId" className="form-sign-up__input-field" type="text" placeholder="Email Address (required)"
              />
              {/*<span>
                Email is required and should be valid
              </span>*/}
            </div>

            <div>
              <div className="form-sign-up__container">
              <label className="form-sign-in__label" htmlFor="passwordId"
              >Password</label>
              <input id="passwordId" className="form-sign-up__input-field" type="password" placeholder="Password (required)"
              />
              {/*<span>   
                <span>Password is required</span>
                <span>Password should contain from 6 to 14 characters</span>
              </span>*/}
            </div>

          <div className="form-sign-up__container">
            <label className="form-sign-in__label" htmlFor="confirmpasswordId">Confirm Password</label>
            <input id="confirmpasswordId" className="form-sign-up__input-field" type="password" placeholder="Confirm Password (required)"
            />

            {/*<span>   
              <span >Confirm password is required</span>
            </span>*/}
          </div>
        </div>
        
        <button className="form-sign-up__btn-register" type="submit">Get Started</button>
      </form>
    </div>
    )
  }
}

export default Register
