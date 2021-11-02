import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button 
                type="button" 
                class="btn btn-outline-light"
                onClick={this.props.handleLogout}
            >
                Logout
            </button>
        )
    }
}

export default Button;