import React, {Component} from 'react'

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  handleSubmit = event => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <div>
        <h1> Sign-Up Form </h1>
        Enter a username and password:
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='username'
            value={this.state.username}
            name='username'
            onChange={this.handleInputChange}/>
          <input
            type='text'
            placeholder='password'
            value={this.state.password}
            name='password'
            onChange={this.handleInputChange}/>
        </form>
      </div>
    )
  }
}
