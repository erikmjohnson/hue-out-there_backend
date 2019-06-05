import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LightInterface from './LightInterface/LightInterface';
import NewUser from './NewUser/NewUser';
import Login from './Login/Login';

export default class App extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <h1>Hue Out There?</h1>
          <Route exact path="/user" component={LightInterface}/>
          <Route exact path="/newuser" component={NewUser}/>
          <Route exact path="/" component={Login}/>
        </BrowserRouter>
      </main>
    );
  }
}

