import './App.css';
import React from 'react';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
      localUsername: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    }
  }

  setLocalUsername = (localUsername) => {
    localStorage.setItem('username', localUsername);
    this.setState({
      localUsername: localUsername
    })
  }

  render() {
    return (
      <div className="App position-fixed top-50 start-50 translate-middle text-light bg-dark rounded p-4 shadow-lg">
        {
          this.state.localUsername ?
            <ProfilePage 
              localUsername={this.state.localUsername} 
              setLocalUsername={this.setLocalUsername}
            />
          :
          <LoginPage 
            handleLogin={this.handleLogin} 
            setLoggedIn={this.setLoggedIn} 
            setLocalUsername={this.setLocalUsername} />
        }
      </div>
    )
  }
}

export default App;
