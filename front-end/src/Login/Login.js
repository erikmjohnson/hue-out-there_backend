import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Login extends Component {
  render(){
    return(
    <div>
      <h1>Login</h1>
      <form onSubmit="{this.handleSubmit}">
          <p><input
            name='username'
            placeholder='username'
            type='text'
            value='{this.state.username}'
            onChange='{this.handleChange}'
          /></p>
          <p><input
            name='password'
            placeholder='password'
            type='password'
            value='{this.state.password}'
            onChange='{this.handleChange}'
          />
          </p>
          <p><button type='submit'>Login</button></p>
        </form>
        <p>New User?</p>
      <p><Link to="/newuser">create new user</Link></p>
      </div>
    );
  }
}
