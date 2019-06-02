import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LightInterface from './LightInterface/LightInterface';
import NewUser from './NewUser/NewUser';
import Login from './Login/Login';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route exact path="/user" component={LightInterface}/>
          <Route exact path="/newuser" component={NewUser}/>
          <Route exact path="/login" component={Login}/>
        </BrowserRouter>
      </main>
    );
  }
}

