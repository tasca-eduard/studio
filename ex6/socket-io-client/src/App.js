import React from "react";
import socketIOClient from "socket.io-client";
import './App.css';
// const ENDPOINT = "http://192.168.1.127:3001";
const ENDPOINT = "http://localhost:3001";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      message: '',
      isCleared: false
    }
    this.socket = socketIOClient(ENDPOINT)
    this.messageListRef = React.createRef();
  }

  submitHandler = (e) => {
    e.preventDefault();

    if(this.state.message) {
      this.socket.emit('chat message', this.state.message);
      this.setState({
        message: ''
      })
    }
  }

  setMessage = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.socket.on('chat message', msg => {
      let newArray = this.state.messageList.slice();
      newArray.push(msg);
      
      this.setState({
        messageList: newArray,
        isCleared: false
      }, () => {
        this.messageListRef.current.scrollTop = this.messageListRef.current.scrollHeight
      })
    });
  }

  clearChat = () => {
    if(this.state.messageList.length) {
      this.setState({
        messageList: [],
        isCleared: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <ul id="ChatList" ref={this.messageListRef}>
          {
            this.state.isCleared && <li>Your local chat has been cleared.</li>
          }

          {this.state.messageList.map((msg, index) => {
            return (
              <li key={index}>{msg}</li>
              )
            })}
        </ul>
        <form onSubmit={this.submitHandler}>
          <div className="form-control">
            <div className="input-group">
              <label htmlFor="MessageBox" className="visually-hidden">Send Message</label>
              <input 
                type="text" 
                id="MessageBox" 
                name="message" 
                className="form-control" 
                placeholder="Start typing..." 
                value={this.state.message}
                onChange={this.setMessage}
              />
              <button type="submit" className="btn btn-primary">SEND</button>
              <button type="button" onClick={this.clearChat} className="btn btn-secondary">CLEAR</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default App;