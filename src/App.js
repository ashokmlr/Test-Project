import React, { Component } from 'react';
import './App.css';
import Login from "./Login"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
      userName:'',
      password:''
    }
  }

  handleChange = (e) => {
    const {name, value} =e.target
    this.setState({[name] : value})
  }
  loginHandle = () => {
    console.log(this.state.isLogin)
      this.state.userName && this.state.password ? this.setState({isLogin:true}) : alert("Enter Login Details")
      console.log(this.state.isLogin)
  }
  onLogout = () => {
    this.resetState()
  }
  resetState = () => {
    this.setState({
      isLogin: false,
      userName:'',
      password:''
    })
  }


  render() {
    if(!this.state.isLogin) {
      return (
        <div>
           <div className="login">
               <h1>Demo Login</h1>
               <input type="text" placeholder="User Name" value={this.state.userName} name="userName" onChange= {this.handleChange}/>
               <br/><br/>
               <input type="password" placeholder="Password" value={this.state.password} name = "password" onChange= {this.handleChange}/>
               <br/><br/>
               <button type="submit" onClick={this.loginHandle}>Login</button>
           </div> 
        </div>
      );
    }
    return(
      <Login onLogout = {this.onLogout}/>
    )
  }
}

export default App

/*class App extends React.Component {
  constructor() {
    super()
    this.state = {type: ''}
  }

  radioHandle = (e) => {
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  render() {
    let rptdata = (
      <div className="useroptions" >
        <h2>Select Search Type </h2>
          <input type="radio" name="type" value= "server" onChange= {this.radioHandle} checked= {this.state.selectedOption === 'server'}/>
          <label>Server</label>
          &nbsp;&nbsp;&nbsp;
          <input type="radio" name="type" value="storage" onChange= {this.radioHandle} checked= {this.state.selectedOption === 'storage'}/>
          <label>Storage</label>
      </div>
    )

    if(!this.state.type) {
      return (
        <div>{rptdata}</div>
      )
    }
    else if(this.state.type === "server") {
      return (
        <div>
          <div>{rptdata}</div>
          <div>
            <h1>Option1</h1>
          </div>
        </div>
      )
    }
    else if(this.state.type === "storage") {
      return (
        <div>
        <div>{rptdata}</div>
        <div>
          <h1>Option2</h1>
        </div>
      </div>
      )
    }
  }
}

export default App
*/