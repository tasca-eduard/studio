import React from 'react';

class FormInput extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.type === 'text' || this.props.type === 'password' ?
                        <React.Fragment>
                            <label htmlFor={this.props.id} className="form-label">{this.props.labelText}</label>
                            <input 
                                type={this.props.type} 
                                className={this.props.className}
                                id={this.props.id}
                                placeholder={this.props.placeholder} 
                                name={this.props.name}
                                required={this.props.isRequired}
                                onChange={this.props.handleChange} 
                            />
                            {
                                this.props.type === 'password' && 
                                <React.Fragment>
                                    <div id="password-help" className="form-text">We'll never share your password with anyone else.</div>
                                    {this.props.isError &&
                                        <small className="text-danger">
                                            {this.props.errorMessage}
                                        </small>
                                    }
                                </React.Fragment>
                            }
                        </React.Fragment>
                    : 
                        ''  
                }
                {
                    this.props.type === "submit" &&
                        <button 
                            type={this.props.type} 
                            id={this.props.id} 
                            name={this.props.name}
                            className={this.props.className}
                        >
                            {this.props.text}
                        </button>
                }
            </React.Fragment>
        )
    }
}

export default FormInput;