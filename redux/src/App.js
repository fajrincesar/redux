import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Api from './container/api';
import Home from './container/Home/Home';
import Login from './container/authentication/Login';
// import Register from './container/authentication/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Coin Marketcap</h1>
        </header>
        <p className="App-intro">
          
        </p>
        <Route path="/Login" component={Login} />
        <Route path="/api" exact component={Api} />
        {/* <Route path="/Register" component={Register} /> */}
        
      </div>
    );
  }
}

export default App;
