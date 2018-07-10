import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{
    state = {
        username:'',
        password:''
    }

    inputlogin() {
        console.log(this.state.username)
        this.setState({
            username: this.refs.username.value,
            password: this.refs.password.value,            
        });
    }
    
  render() {
    return (
      <div className="container">
        <center>
            <div className="box" style={{marginTop:'150px'}}>  
                <form>
                    <p>Please sign in first</p>
                    <input className="form-control" ref="username" type="text" placeholder="username" style={{width:'250px'}} onInput={()=>{this.inputlogin();}} required/><br></br>
                    <input className="form-control" ref="password" type="password" placeholder="password" style={{width:'250px'}} onInput={()=>{this.inputlogin();}} required/><br></br>
                </form>
                <button type="submit" className="btn btn-warning" style={{width:'100px'}} onClick={()=>{this.checklogin();}}>Sign In</button>&nbsp;&nbsp;     
                <br/><br/> <Link  to="/Register">or sign up here</Link>
            </div>
        </center>
      </div>
    );
  }
}

export default Login;