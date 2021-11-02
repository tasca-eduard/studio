import React from 'react';
import Button from '../components/Button';

class ProfilePage extends React.Component {
    handleLogout = () => {
        this.props.setLocalUsername('');
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-end mb-4">
                   <Button handleLogout={this.handleLogout} />
                </div>
                <h1 className="h2">
                    <strong>Welcome</strong> &nbsp;
                    <span className="text-primary">
                        {this.props.localUsername}
                    </span>
                </h1>
            </React.Fragment>
        )
    }
}

export default ProfilePage;