import React, { Component } from 'react';
import './App.css';
import Userinput from "./components/UserInput/UserInput";
import Useroutput from "./components/UserOutput/UserOutput";

class App extends Component {
  state = {
     username: 'Tamara' 
  }

  changeUserHandler = (event) => {
    this.setState({
     username: event.target.value 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <Userinput changed={this.changeUserHandler} username={this.state.username}></Userinput>
        <Useroutput username={this.state.username}></Useroutput>
      </div>
    );
  }
}

export default App;
