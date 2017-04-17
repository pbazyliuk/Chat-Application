import React from 'react'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailValid: false,
            password: '',
            passwordValid: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleChange(e) {
       
        e.target.classList.add('active');

        this.setState({
            [e.target.name]: e.target.value
        });

        this.showInputError(e.target.name);
  }


    showInputError(refName) {
        const validity = this.refs[refName].validity; 
       
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);

        const isPassword = refName.indexOf('password') !== -1;
        const isEmail = refName.indexOf('email') !== -1;

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`; 
            } else if (isEmail && validity.patternMismatch) {
                error.textContent = `${label} should be a valid email address`; 
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer than 6 chars`; 
            }

            this.setState({
                [`${refName}Valid`]: false
            }); 

            return false;
        }
    
        error.textContent = '';

        this.setState({
            [`${refName}Valid`]: true
        });       

        return true;
    }

  handleSubmit(e) {    
    e.preventDefault();

    for(let key in this.state) {
        if(key.indexOf("Valid") != -1) {
            delete this.state[key]
        }
    }
    console.log('component state', JSON.stringify(this.state));
  }

  

  render () {
    return (
      <div className="form__wrapper">

        <form className="form-sign-in">
            
            <h4 className="form-sign-in__header">Sign In</h4>
            
            <div className="form-sign-in__container">
                <label className="form-sign-in__label" htmlFor="emailId" id="emailLabel">Email</label>
                <input className="form-sign-in__input-field" id="emailId" type="text" name="email" placeholder="Email Address (required)" 
                pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
                value={ this.state.email }
                ref="email"
                required
                onChange={this.handleChange}
                />
                <div className="text-has-error" id="emailError"></div>
            </div>

            <div className="form-sign-in__container">
                <label className="form-sign-in__label" htmlFor="passwordId" id="passwordLabel"
                >Password</label>
                <input className="form-sign-in__input-field" id="passwordId" type="password" name="password" placeholder="Password (required)"
                value={ this.state.password }
                ref="password"
                pattern=".{6,}"
                required
                onChange={this.handleChange}
                />
                <div className="text-has-error" id="passwordError"></div>
            </div>

            <button className="form-sign-in__btn-login" type="submit"
            onClick={this.handleSubmit} disabled={!this.state.emailValid || !this.state.passwordValid}
            
            >Login</button>
        </form>
    </div>

    )
  }
}

export default Login
