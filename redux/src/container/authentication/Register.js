import React, { Component } from 'react';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      email:'',
      password: '',
      confirmpass:'',
    };
  }

  in = 

  render() {
    return (
        <div className="container-fluid" style={{marginTop:'20px'}}>
          <div className="col-lg-6">
              <form>
                <input className="form-control" ref="email" type="text" placeholder="email" style={{width:'350px'}} required/><br></br>
                <input className="form-control" ref="password" type="password" placeholder="password" style={{width:'350px'}} required/><br></br>  
              </form>
                <button type="submit" className="btn btn-warning" style={{width:'100px'}}>Register</button>&nbsp;&nbsp;  
            </div> 
        </div>
    );
  }
}
export default Register;