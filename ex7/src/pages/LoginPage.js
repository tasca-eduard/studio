import React from 'react';
import FormInput from '../components/FormInput';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                username: '',
                password: ''
            },
            dbPassword: 'HouseOfMouse',
            isPasswordError: false,
        }
    }

    setFormInput = (e) => {
        if(e.target.name === 'password') {
            this.setState({
                isPasswordError: false
            })
        }

        this.setState({
            loginForm: {
                ...this.state.loginForm,
                [e.target.name]: e.target.value
            }
        })
    }

    handleLogin = (e) => {
        e.preventDefault();

        const formPassword = this.state.loginForm.password;
        const dbPassword = this.state.dbPassword;

        if(formPassword === dbPassword) {
            this.props.setLocalUsername(this.state.loginForm.username)
            this.setState({
                isPasswordError: false,
            })
        } else {
            this.setState({
                isPasswordError: true
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="h2"><strong>Login</strong></h1>
                <hr className="mb-4" />
                <form onSubmit={this.handleLogin}>
                    <div className="form-group mb-4">
                        <FormInput 
                            labelText="Username"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                            isRequired={true}
                            handleChange={this.setFormInput}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <FormInput 
                            labelText="Password"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            isRequired={true}
                            handleChange={this.setFormInput}
                            isError={this.state.isPasswordError}
                            className="form-control"
                            errorMessage="Your Password is incorrect"
                        />
                    </div>
                    <FormInput 
                        text="Login"
                        type="submit"
                        id="login-submit"
                        name="loginSubmit"
                        className="btn btn-primary"
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default LoginPage;