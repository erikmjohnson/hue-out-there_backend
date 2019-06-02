import React, {Component} from 'react';

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
      </div>
    );
  }
}
