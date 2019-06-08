import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LightInterface from './components/LightInterface/LightInterface';
import NewUser from './components/NewUser/NewUser';
import Login from './components/Login/Login';

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

