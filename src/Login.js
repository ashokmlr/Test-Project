import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import Home from"./Home"
import AddUser from "./AddUser"
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

class Login extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <Router >
              <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Simple React App</h1>
              </header>
              <nav>
                <ul>
                  <li><Link to = "/" className="link">Home</Link></li>
                  <li><Link to = "/customerlist" className="link">User List</Link></li>
                  <li><Link to = "/addUser" className="link">Add new User</Link></li>
                  <button type="button" onClick={this.props.onLogout} id="lgt">Logout</button>
                </ul>
                
              </nav>
              <div>
                <Route exact path = "/" component = {Home}/>
                <Route exact path='/customerlist' component={Customers} />
                <Route exact path='/addUser' component={AddUser} />
                <Route exact path = "/Login" component = {Login}/>
      
              </div>
            </div>
            <footer>
            <small>&copy; Copyright 2018, Example Corporation</small>
            </footer>
          </Router>
          );
    }
}

export default Login;