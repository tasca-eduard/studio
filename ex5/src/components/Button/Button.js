import React from 'react';

class FormControl extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor={this.props.id}>{this.props.labelText}</label>
                <input 
                    type={this.props.type} 
                    name={this.props.name} 
                    id={this.props.id}  
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}
                />
            </React.Fragment>
        )
    }
}

export default FormControl;